import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import ProjectPageInfoTabs from "@/components/projects/project-page-info-tabs";
import { buttonVariants } from "@/components/ui/button";
import Chip from "@/components/ui/chip";
import { profile } from "@/config/profile";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatPeriod } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = Projects.find((p) => p.id === projectId);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.companyName} – Case Study`,
    description: project.shortDescription,
    alternates: { canonical: `${siteConfig.url}/projects/${projectId}` },
  };
}

export function generateStaticParams() {
  return Projects.map((p) => ({ projectId: p.id }));
}

const typeLabel = {
  Professional: "Professional project",
  Personal: "Side project",
  Academic: "Academic project",
} as const;

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = Projects.find((val) => val.id === projectId);
  if (!project) {
    redirect("/projects");
  }

  return (
    <article className="mx-auto max-w-3xl pb-10 pt-8 lg:pt-12">
      <Link
        href="/projects"
        className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-3 mb-6 gap-1")}
      >
        <Icons.chevronLeft className="h-4 w-4" />
        All projects
      </Link>

      <header>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Icons.calendar className="h-4 w-4" />
            {formatPeriod(project.startDate, project.endDate, project.ongoing)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icons.work className="h-4 w-4" />
            {typeLabel[project.type]}
          </span>
        </div>
        <h1 className="mt-3 font-heading text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {project.companyName}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2 rounded-full")}
            >
              <Icons.gitHub className="h-4 w-4" /> Source code
            </Link>
          )}
          {project.websiteLink && (
            <Link
              href={project.websiteLink}
              target="_blank"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2 rounded-full")}
            >
              <Icons.arrowUpRight className="h-4 w-4" />
              {project.websiteLink.endsWith(".pdf") ? "Read thesis (PDF)" : "Website"}
            </Link>
          )}
        </div>
      </header>

      <div className="relative my-10 aspect-[16/9] w-full overflow-hidden rounded-xl border bg-muted">
        <Image
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      {project.techStack.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 font-heading text-2xl">Tech stack</h2>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <Chip key={t} content={t} />
            ))}
          </div>
        </section>
      )}

      <section className="mb-12">
        <h2 className="mb-4 font-heading text-2xl">Overview</h2>
        <ProjectDescription
          paragraphs={project.descriptionDetails.paragraphs}
          bullets={project.descriptionDetails.bullets}
        />
      </section>

      {project.pagesInfoArr.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-2 font-heading text-2xl">Architecture & key features</h2>
          <p className="mb-5 text-sm text-muted-foreground">
            Select a topic to see the details and the diagram behind it.
          </p>
          <ProjectPageInfoTabs pages={project.pagesInfoArr} />
        </section>
      )}

      <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Interested in how I could help your team?</p>
          <p className="text-sm text-muted-foreground">
            Let&apos;s talk about your backend and integration challenges.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/contact" className={cn(buttonVariants(), "rounded-full")}>
            Contact me
          </Link>
          <Link
            href={profile.resumePath}
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
          >
            CV
          </Link>
        </div>
      </div>
    </article>
  );
}
