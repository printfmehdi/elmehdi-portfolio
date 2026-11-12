import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { ProjectInterface, Projects } from "@/config/projects";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

const renderContent = (filter?: ProjectInterface["type"]) => {
  const projectArr = filter ? Projects.filter((p) => p.type === filter) : Projects;

  return (
    <div className="my-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projectArr.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default function ProjectsPage() {
  const tabItems = [
    { value: "all", label: "All", content: renderContent() },
    { value: "professional", label: "Professional", content: renderContent("Professional") },
    { value: "personal", label: "Side projects", content: renderContent("Personal") },
    { value: "academic", label: "Academic", content: renderContent("Academic") },
  ];

  return (
    <PageContainer
      eyebrow="Portfolio"
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
