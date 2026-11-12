/**
 * Central, recruiter-facing profile data.
 * Everything a recruiter / headhunter wants to see in the first 30 seconds lives here,
 * so the homepage, contact page and metadata stay consistent.
 */

export const profile = {
  name: "El Mehdi Rahali",
  role: "Backend Software Engineer",
  stack: "C# / .NET",
  location: "NRW, Germany",
  email: "mehdi1rahali@gmail.com",
  resumePath: "/resume/el-mehdi-rahali.pdf",

  /** Toggle this off when you are not looking — the hero badge and contact page adapt. */
  openToWork: true,
  availabilityText: "Open to new opportunities",

  headline:
    "I build reliable .NET backends for enterprise SaaS — APIs, distributed workflows and integrations that keep running in production.",

  summary: [
    "Backend engineer with 5 years of hands-on experience building production .NET systems — from an enterprise document platform serving 3M+ users to a multi-tenant telecom SaaS platform for corporate customers.",
    "I care about the things that make software last: clean architecture, strict tenant isolation, idempotent integrations, and systems that stay observable and diagnosable under real load. I also use AI-assisted engineering workflows (Claude Code, agents, MCP) daily to ship faster without lowering the bar on quality.",
  ],
};

export interface StatInterface {
  value: string;
  label: string;
}

export const stats: StatInterface[] = [
  { value: "5 yrs", label: "building production .NET systems" },
  { value: "3M+", label: "users on a platform I worked on" },
  { value: "6+", label: "enterprise systems integrated" },
  { value: "4", label: "languages spoken (German C1)" },
];

export interface ValuePropInterface {
  title: string;
  description: string;
  icon: "api" | "workflow" | "shield" | "sparkles";
}

export const valueProps: ValuePropInterface[] = [
  {
    title: "Scalable APIs & architecture",
    description:
      "ASP.NET Core APIs built on Clean Architecture, DDD and CQRS — modular, testable and easy to evolve in large codebases.",
    icon: "api",
  },
  {
    title: "Reliable distributed workflows",
    description:
      "Long-running processes with Temporal, Quartz and Kafka — with retries, idempotency and failure handling designed in from day one.",
    icon: "workflow",
  },
  {
    title: "Secure multi-tenant SaaS",
    description:
      "Tenant-isolated data access, role-based permissions and OAuth2/OIDC flows for enterprise customers with strict requirements.",
    icon: "shield",
  },
  {
    title: "AI-assisted engineering",
    description:
      "Agentic workflows with Claude Code, Agent Skills and MCP for implementation, refactoring and debugging in large production codebases.",
    icon: "sparkles",
  },
];

export interface GlanceItem {
  label: string;
  value: string;
}

export const atAGlance: GlanceItem[] = [
  { label: "Role", value: "Backend Software Engineer (C# / .NET)" },
  { label: "Currently", value: "Software Engineer at TKD GmbH" },
  { label: "Experience", value: "5 years (since 2021)" },
  { label: "Education", value: "B.Sc. Computer Science, University of Siegen" },
  { label: "Location", value: "NRW, Germany — hybrid or remote" },
  { label: "Languages", value: "German (C1), English, French, Arabic (native)" },
];

export interface SkillGroupInterface {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroupInterface[] = [
  {
    title: "Languages & Frameworks",
    items: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "LINQ", "Dapper"],
  },
  {
    title: "Architecture",
    items: [
      "Clean Architecture",
      "Domain-Driven Design",
      "CQRS / MediatR",
      "Event-Driven Architecture",
      "Modular Monolith",
      "Distributed Systems",
    ],
  },
  {
    title: "APIs & Integration",
    items: [
      "REST APIs",
      "Webhooks",
      "OpenAPI / Swagger",
      "OData",
      "Gridify",
      "OAuth2 / OIDC",
      "Kiota",
      "YARP",
    ],
  },
  {
    title: "Workflows & Messaging",
    items: ["Temporal", "Quartz", "Apache Kafka", "SignalR", "n8n"],
  },
  {
    title: "Data & Search",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "Elasticsearch", "MinIO (S3)"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure", "Docker", "Podman", "Kubernetes", "Azure DevOps", "GitHub Actions"],
  },
  {
    title: "Observability",
    items: ["Serilog", "Grafana", "Elastic Stack", "Datadog"],
  },
  {
    title: "AI Engineering",
    items: ["Claude Code", "AI Agents", "Agent Skills", "MCP"],
  },
  {
    title: "Also comfortable with",
    items: ["React", "TypeScript", "Python", "Java", "Git", "Jira", "Scrum"],
  },
];

export interface LanguageInterface {
  name: string;
  level: string;
}

export const languages: LanguageInterface[] = [
  { name: "German", level: "Professional (C1)" },
  { name: "English", level: "Professional" },
  { name: "French", level: "Professional" },
  { name: "Arabic", level: "Native" },
];
