"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import MermaidDiagram from "@/components/projects/mermaid-diagram";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { PagesInfoInterface } from "@/config/projects";

type ProjectPageInfoTabsProps = {
  pages: PagesInfoInterface[];
};

export default function ProjectPageInfoTabs({ pages }: ProjectPageInfoTabsProps) {
  const values = useMemo(() => pages.map((_, index) => `section-${index}`), [pages]);
  const [activeValue, setActiveValue] = useState(values[0] ?? "section-0");

  const activeIndex = Math.max(0, values.findIndex((v) => v === activeValue));
  const activePage = pages[activeIndex];

  if (!activePage) {
    return null;
  }

  return (
    <div className="mt-2 w-full space-y-4">
      <Tabs value={activeValue} onValueChange={setActiveValue}>
        <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-lg bg-transparent p-0">
          {pages.map((page, index) => (
            <TabsTrigger
              key={page.title}
              value={values[index]}
              className="rounded-full border bg-background px-4 py-2 text-xs data-[state=active]:border-primary"
            >
              {page.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {activePage.description ? (
        <p className="text-base text-muted-foreground">{activePage.description}</p>
      ) : null}

      {activePage.mermaid ? <MermaidDiagram chart={activePage.mermaid} /> : null}

      {activePage.imgArr.length > 0 ? (
        <div className="space-y-4">
          {activePage.imgArr.map((img) => (
            <Image
              src={img}
              key={img}
              alt={activePage.title}
              width={720}
              height={405}
              className="rounded-md border bg-muted transition-colors"
              priority
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

