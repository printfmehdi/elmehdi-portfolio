import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import Chip from "@/components/ui/chip";
import { ProjectInterface } from "@/config/projects";
import { formatPeriod } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectInterface;
}

const typeLabel: Record<ProjectInterface["type"], string> = {
  Professional: "Professional",
  Personal: "Side project",
  Academic: "Academic",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const tech = project.techStack.slice(0, 5);
  const more = project.techStack.length - tech.length;

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b bg-muted">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border bg-background/90 px-2.5 py-1 text-xs font-medium backdrop-blur">
          {project.type === "Professional" ? (
            <Icons.work className="h-3.5 w-3.5 text-primary" />
          ) : project.type === "Academic" ? (
            <Icons.graduation className="h-3.5 w-3.5 text-primary" />
          ) : (
            <Icons.braces className="h-3.5 w-3.5 text-primary" />
          )}
          {typeLabel[project.type]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs text-muted-foreground">
          {formatPeriod(project.startDate, project.endDate, project.ongoing)}
        </p>
        <h3 className="text-lg font-semibold leading-snug tracking-tight group-hover:text-primary">
          {project.companyName}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {tech.map((t) => (
            <Chip key={t} content={t} />
          ))}
          {more > 0 ? <Chip content={`+${more}`} /> : null}
        </div>
        <span className="inline-flex items-center gap-1 pt-1 text-sm font-medium text-primary">
          Read case study
          <Icons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
