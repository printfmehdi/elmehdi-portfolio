"use client";

import Image from "next/image";
import { useState } from "react";

import { Icons } from "@/components/common/icons";
import MermaidDiagram from "@/components/projects/mermaid-diagram";
import type { PagesInfoInterface } from "@/config/projects";
import { cn } from "@/lib/utils";

type ProjectPageInfoTabsProps = {
  pages: PagesInfoInterface[];
};

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function ProjectPageInfoTabs({ pages }: ProjectPageInfoTabsProps) {
  const [active, setActive] = useState(0);
  const page = pages[active];
  if (!page) return null;

  return (
    <div className="space-y-5">
      <div
        role="tablist"
        aria-label="Architecture topics"
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap"
      >
        {pages.map((p, i) => (
          <button
            key={p.title}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-colors",
              i === active
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            <span
              className={cn(
                "font-mono text-xs",
                i === active ? "opacity-80" : "text-primary"
              )}
            >
              {num(i)}
            </span>
            {p.title}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="space-y-5">
        <div className="flex items-start gap-4">
          <span className="hidden font-heading text-4xl leading-none text-primary/25 sm:block">
            {num(active)}
          </span>
          <div className="space-y-2">
            <h3 className="font-heading text-xl sm:text-2xl">{page.title}</h3>
            {page.description ? (
              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                {page.description}
              </p>
            ) : null}
          </div>
        </div>

        {page.mermaid ? <MermaidDiagram chart={page.mermaid} title={page.title} /> : null}

        {page.imgArr.length > 0 ? (
          <div className={cn("grid gap-4", page.imgArr.length > 1 && "md:grid-cols-2")}>
            {page.imgArr.map((img) => (
              <div key={img} className="overflow-hidden rounded-xl border bg-muted">
                <Image
                  src={img}
                  alt={page.title}
                  width={1200}
                  height={675}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        ) : null}

        {pages.length > 1 && (
          <div className="flex items-center justify-between border-t pt-4 text-sm">
            <button
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground disabled:opacity-30"
            >
              <Icons.chevronLeft className="h-4 w-4" />
              {active > 0 ? pages[active - 1].title : "Previous"}
            </button>
            <span className="text-xs text-muted-foreground">
              {active + 1} / {pages.length}
            </span>
            <button
              onClick={() => setActive((a) => Math.min(pages.length - 1, a + 1))}
              disabled={active === pages.length - 1}
              className="inline-flex items-center gap-1 text-right text-muted-foreground hover:text-foreground disabled:opacity-30"
            >
              {active < pages.length - 1 ? pages[active + 1].title : "Next"}
              <Icons.chevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
