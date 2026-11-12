import { MetadataRoute } from "next";

import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const main = [
    { path: "", priority: 1.0 },
    { path: "/experience", priority: 0.9 },
    { path: "/projects", priority: 0.9 },
    { path: "/skills", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const projects = Projects.map((p) => ({
    url: `${baseUrl}/projects/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const roles = experiences.map((e) => ({
    url: `${baseUrl}/experience/${e.id}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...main, ...projects, ...roles];
}
