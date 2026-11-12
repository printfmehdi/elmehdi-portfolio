import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { SectionHeading } from "@/components/common/section-heading";
import Timeline from "@/components/experience/timeline";
import { education, workExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: `${pagesConfig.experience.metadata.description} Explore my professional journey in backend software development.`,
  keywords: [
    "experience timeline",
    "professional experience",
    ".NET developer experience",
    "backend engineer",
    "work experience",
  ],
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <PageContainer
      eyebrow="Career"
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <Timeline experiences={workExperiences} />

      <div className="pt-20">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <Timeline experiences={education} />
      </div>
    </PageContainer>
  );
}
