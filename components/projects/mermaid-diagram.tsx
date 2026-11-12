"use client";

import { useTheme } from "next-themes";
import { useEffect, useId, useMemo, useRef, useState } from "react";

import { Icons } from "@/components/common/icons";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type MermaidDiagramProps = {
  chart: string;
  title?: string;
  className?: string;
};

/* ───────── colour helpers: read design tokens and turn them into hex ───────── */

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (x: number) =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

function token(name: string): string {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const [h, s, l] = raw.replace(/%/g, "").split(/\s+/).map(Number);
  return hslToHex(h, s, l);
}

function mix(a: string, b: string, t: number): string {
  const p = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const [ar, ag, ab] = p(a);
  const [br, bg, bb] = p(b);
  const c = (x: number, y: number) =>
    Math.round(x * t + y * (1 - t))
      .toString(16)
      .padStart(2, "0");
  return `#${c(ar, br)}${c(ag, bg)}${c(ab, bb)}`;
}

/* ───────── semantic node classes used in config/projects.ts ───────── */

export const NODE_CLASSES = {
  core: "Core logic (my focus)",
  svc: "Component / service",
  client: "Client / trigger",
  ext: "External system",
  store: "Data store",
  queue: "Async / background",
  ops: "Observability",
  ok: "Outcome",
  fail: "Failure path",
} as const;

type NodeClass = keyof typeof NODE_CLASSES;

function buildTheme(dark: boolean) {
  const bg = token("--background");
  const fg = token("--foreground");
  const card = token("--card");
  const muted = token("--muted");
  const mutedFg = token("--muted-foreground");
  const border = token("--border");
  const primary = token("--primary");

  const teal = dark ? "#2dd4bf" : "#0d9488";
  const amber = dark ? "#fbbf24" : "#d97706";
  const violet = dark ? "#a78bfa" : "#7c3aed";
  const green = token("--success");
  const red = dark ? "#f87171" : "#dc2626";

  const tint = (c: string, t: number) => mix(c, card, t);

  const classes: Record<NodeClass, string> = {
    core: `fill:${tint(primary, dark ? 0.22 : 0.1)},stroke:${primary},stroke-width:1.75px,color:${fg}`,
    svc: `fill:${card},stroke:${mix(fg, card, 0.28)},stroke-width:1.25px,color:${fg}`,
    client: `fill:${muted},stroke:${mix(fg, muted, 0.22)},stroke-width:1.25px,color:${fg}`,
    ext: `fill:${bg},stroke:${mutedFg},stroke-width:1.25px,stroke-dasharray:5 4,color:${fg}`,
    store: `fill:${tint(teal, dark ? 0.2 : 0.1)},stroke:${teal},stroke-width:1.5px,color:${fg}`,
    queue: `fill:${tint(amber, dark ? 0.2 : 0.12)},stroke:${amber},stroke-width:1.5px,color:${fg}`,
    ops: `fill:${tint(violet, dark ? 0.2 : 0.1)},stroke:${violet},stroke-width:1.5px,color:${fg}`,
    ok: `fill:${tint(green, dark ? 0.2 : 0.12)},stroke:${green},stroke-width:1.5px,color:${fg}`,
    fail: `fill:${tint(red, dark ? 0.18 : 0.08)},stroke:${red},stroke-width:1.5px,stroke-dasharray:4 3,color:${fg}`,
  };

  const swatches: Record<NodeClass, { fill: string; stroke: string; dashed?: boolean }> = {
    core: { fill: tint(primary, dark ? 0.22 : 0.1), stroke: primary },
    svc: { fill: card, stroke: mix(fg, card, 0.28) },
    client: { fill: muted, stroke: mix(fg, muted, 0.22) },
    ext: { fill: bg, stroke: mutedFg, dashed: true },
    store: { fill: tint(teal, dark ? 0.2 : 0.1), stroke: teal },
    queue: { fill: tint(amber, dark ? 0.2 : 0.12), stroke: amber },
    ops: { fill: tint(violet, dark ? 0.2 : 0.1), stroke: violet },
    ok: { fill: tint(green, dark ? 0.2 : 0.12), stroke: green },
    fail: { fill: tint(red, dark ? 0.18 : 0.08), stroke: red, dashed: true },
  };

  const themeVariables = {
    darkMode: dark,
    background: card,
    fontFamily: getComputedStyle(document.body).fontFamily,
    fontSize: "15px",
    primaryColor: card,
    primaryBorderColor: mix(fg, card, 0.28),
    primaryTextColor: fg,
    secondaryColor: muted,
    tertiaryColor: muted,
    nodeTextColor: fg,
    textColor: fg,
    lineColor: mix(fg, card, 0.45),
    clusterBkg: mix(muted, card, dark ? 0.55 : 0.6),
    clusterBorder: border,
    titleColor: mutedFg,
    edgeLabelBackground: card,
    // state diagrams
    labelColor: fg,
    stateBkg: card,
    stateBorder: mix(fg, card, 0.28),
    compositeBackground: mix(muted, card, 0.6),
    transitionColor: mix(fg, card, 0.45),
    transitionLabelColor: mutedFg,
    specialStateColor: primary,
    innerEndBackground: primary,
  };

  return { classes, swatches, themeVariables };
}

function usedClasses(chart: string): NodeClass[] {
  const found = new Set<string>();
  const re = /:::(\w+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(chart))) found.add(m[1]);
  return (Object.keys(NODE_CLASSES) as NodeClass[]).filter((c) => found.has(c));
}

/* ───────── component ───────── */

export default function MermaidDiagram({ chart, title, className }: MermaidDiagramProps) {
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [swatches, setSwatches] =
    useState<ReturnType<typeof buildTheme>["swatches"] | null>(null);
  const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const canvasRef = useRef<HTMLDivElement>(null);

  const legend = useMemo(() => usedClasses(chart), [chart]);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        const dark = resolvedTheme === "dark";
        const theme = buildTheme(dark);

        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          securityLevel: "strict",
          themeVariables: theme.themeVariables,
          flowchart: {
            curve: "basis",
            padding: 18,
            nodeSpacing: 34,
            rankSpacing: 56,
            diagramPadding: 16,
            htmlLabels: true,
            useMaxWidth: false,
            wrappingWidth: 360,
          },
          state: { useMaxWidth: false },
        });

        const isFlowchart = /^\s*(flowchart|graph)\b/.test(chart);
        const source = isFlowchart
          ? `${chart}\n${(Object.keys(theme.classes) as NodeClass[])
              .map((c) => `  classDef ${c} ${theme.classes[c]}`)
              .join("\n")}`
          : chart;

        const renderId = `mermaid-${instanceId}-${Math.random().toString(36).slice(2, 8)}`;
        const result = await mermaid.render(renderId, source);
        if (cancelled) return;
        setSvg(result.svg);
        setSwatches(theme.swatches);
        setError(null);
      } catch (err) {
        if (cancelled) return;
        console.error("Failed to render Mermaid diagram", err);
        setError("Unable to render architecture diagram.");
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [chart, instanceId, resolvedTheme]);

  // Keep diagrams legible: never shrink below ~85% of their natural size.
  useEffect(() => {
    const el = canvasRef.current?.querySelector("svg");
    if (!el) return;
    const natural = Number(el.getAttribute("width")) || el.viewBox.baseVal.width;
    el.style.maxWidth = "100%";
    el.style.minWidth = `${Math.round(natural * 0.85)}px`;
    el.style.height = "auto";
  }, [svg]);

  if (error) {
    return (
      <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
        {error}
      </div>
    );
  }

  return (
    <figure className={cn("overflow-hidden rounded-xl border bg-card", className)}>
      <div className="relative">
        <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative overflow-x-auto px-3 py-6 sm:px-6 sm:py-8">
          {svg ? (
            <div
              ref={canvasRef}
              className="arch-diagram flex justify-center"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ) : (
            <div className="mx-auto h-48 max-w-lg animate-pulse rounded-lg bg-muted" />
          )}
        </div>
        {svg && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border bg-background/90 px-2.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-foreground"
          >
            <Icons.maximize className="h-3.5 w-3.5" />
            Expand
          </button>
        )}
      </div>

      {legend.length > 0 && swatches && (
        <figcaption className="flex flex-wrap gap-x-4 gap-y-2 border-t bg-muted/30 px-4 py-3 text-xs text-muted-foreground">
          {legend.map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5">
              <span
                className="h-3 w-4 rounded-[4px] border-[1.5px]"
                style={{
                  background: swatches[c].fill,
                  borderColor: swatches[c].stroke,
                  borderStyle: swatches[c].dashed ? "dashed" : "solid",
                }}
              />
              {NODE_CLASSES[c]}
            </span>
          ))}
        </figcaption>
      )}

      <Dialog open={expanded} onOpenChange={setExpanded}>
        <DialogContent className="max-h-[92vh] w-[96vw] max-w-[96vw] overflow-auto p-0 sm:max-w-[96vw]">
          <DialogTitle className="border-b px-6 py-4 text-base">
            {title ?? "Architecture diagram"}
          </DialogTitle>
          <div className="relative">
            <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
            <div
              className="arch-diagram arch-diagram--expanded relative flex justify-center overflow-auto p-6 sm:p-10"
              dangerouslySetInnerHTML={{ __html: svg ?? "" }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </figure>
  );
}
