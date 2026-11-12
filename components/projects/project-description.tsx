import React from "react";

import { Icons } from "@/components/common/icons";

const ProjectDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4 leading-relaxed text-foreground/90">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {bullets.length > 0 && (
        <div className="rounded-xl border bg-card p-5 sm:p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What I did
          </h3>
          <ul className="space-y-3">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex gap-3 text-sm leading-relaxed">
                <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectDescription;
