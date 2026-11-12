import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import SkillGroups from "@/components/skills/skill-groups";
import { pagesConfig } from "@/config/pages";
import { skillGroups } from "@/config/profile";
import { skills } from "@/config/skills";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

const levelLabel = (rating: number) =>
  rating >= 5 ? "Expert" : rating >= 4 ? "Advanced" : "Proficient";

export default function SkillsPage() {
  return (
    <PageContainer
      eyebrow="Toolbox"
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <SkillGroups groups={skillGroups} />

      <div className="pt-20">
        <SectionHeading
          eyebrow="In depth"
          title="Core competencies"
          description="What these skills look like in practice — and how deep I go with each."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const level = levelLabel(skill.rating);
            return (
              <div key={skill.name} className="flex flex-col gap-3 rounded-xl border bg-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <skill.icon size={20} />
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      level === "Expert"
                        ? "bg-primary text-primary-foreground"
                        : level === "Advanced"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                    )}
                  >
                    {level}
                  </span>
                </div>
                <h3 className="font-semibold leading-snug">{skill.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}
