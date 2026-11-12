import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import Chip from "@/components/ui/chip";
import { ExperienceInterface } from "@/config/experience";
import { formatDuration, formatPeriod } from "@/lib/utils";

interface TimelineProps {
  experiences: ExperienceInterface[];
  /** Number of tech chips per entry. */
  maxSkills?: number;
}

const Timeline: React.FC<TimelineProps> = ({ experiences, maxSkills = 8 }) => {
  const sorted = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-10">
      {sorted.map((experience, index) => {
        const current = experience.endDate === "Present";
        const skills = experience.skills.slice(0, maxSkills);
        return (
          <li key={experience.id} className="relative">
            <span
              className={
                "absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-background ring-2 sm:-left-[47px] " +
                (current ? "bg-primary ring-primary/30" : "bg-muted-foreground/50 ring-border")
              }
            />
            <AnimatedSection delay={0.05 * index} direction="up">
              <article className="rounded-xl border bg-card p-5 transition-colors hover:border-primary/30 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  {experience.logo && (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain p-1.5"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-lg font-semibold leading-snug">
                          {experience.position}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {experience.companyUrl ? (
                            <a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-foreground hover:text-primary"
                            >
                              {experience.company}
                            </a>
                          ) : (
                            <span className="font-medium text-foreground">
                              {experience.company}
                            </span>
                          )}{" "}
                          · {experience.location}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-col text-sm sm:items-end">
                        <span className="inline-flex items-center gap-1.5 font-medium">
                          {current && (
                            <span className="h-1.5 w-1.5 rounded-full bg-success" />
                          )}
                          {formatPeriod(experience.startDate, experience.endDate)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatDuration(experience.startDate, experience.endDate)}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {experience.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                        >
                          <Icons.check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {skills.map((s) => (
                          <Chip key={s} content={s} />
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/experience/${experience.id}`}
                      className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      Full role details
                      <Icons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
