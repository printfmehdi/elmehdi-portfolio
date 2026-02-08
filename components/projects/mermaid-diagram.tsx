"use client";

import { useEffect, useId, useRef, useState } from "react";

type MermaidDiagramProps = {
  chart: string;
  className?: string;
};

let mermaidInitialized = false;

export default function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      if (!containerRef.current) return;

      try {
        const mermaid = (await import("mermaid")).default;

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: "neutral",
            securityLevel: "strict",
            fontFamily: "inherit",
            flowchart: {
              curve: "basis",
            },
          });
          mermaidInitialized = true;
        }

        const renderId = `mermaid-${instanceId}-${Math.random().toString(36).slice(2, 10)}`;
        const { svg } = await mermaid.render(renderId, chart);

        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
        setError(null);
      } catch (err) {
        if (cancelled) return;
        console.error("Failed to render Mermaid diagram", err);
        setError("Unable to render architecture diagram.");
      }
    }

    renderDiagram();

    return () => {
      cancelled = true;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [chart, instanceId]);

  if (error) {
    return (
      <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
        {error}
      </div>
    );
  }

  return (
    <div
      className={
        className ??
        "rounded-xl border bg-background p-3 sm:p-4 [&_svg]:h-auto [&_svg]:w-full [&_svg]:max-w-full"
      }
    >
      <div ref={containerRef} />
    </div>
  );
}

