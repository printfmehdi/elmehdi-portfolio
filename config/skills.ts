import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "C# / .NET",
    description:
      "Building backend services in the .NET ecosystem with a focus on clean code, maintainability, performance, and long-term stability.",
    rating: 5,
    icon: Icons.dotnet,
  },
  {
    name: "ASP.NET Core (REST APIs)",
    description:
      "Designing and implementing scalable, versioned APIs with robust validation, error handling, and clear contracts.",
    rating: 5,
    icon: Icons.dotnet,
  },
  {
    name: "Enterprise Architecture (Clean Architecture / DDD)",
    description:
      "Structuring large codebases with clear boundaries, patterns, and domain-driven thinking to keep complexity under control.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Security (AuthN/AuthZ, RBAC, OIDC/OAuth2)",
    description:
      "Securing enterprise applications with authorization rules, tenant isolation, and least-privilege access patterns.",
    rating: 4,
    icon: Icons.security,
  },
  {
    name: "Multi-Tenancy & Tenant Isolation",
    description:
      "Building tenant-aware systems: safe data access boundaries, configuration scoping, and preventing cross-tenant visibility.",
    rating: 4,
    icon: Icons.gitOrgBuilding,
  },
  {
    name: "Entity Framework Core, LINQ and Dapper",
    description:
      "Data access with EF Core, LINQ and Dapper: modeling, migrations, query shaping, and performance-aware persistence.",
    rating: 5,
    icon: Icons.dotnet,
  },
  {
    name: "SQL (SQL Server / PostgreSQL)",
    description:
      "Relational data modeling and practical querying: joins, indexing basics, and optimizing heavy-data workflows.",
    rating: 4,
    icon: Icons.database,
  },
  {
    name: "Background Jobs (Hosted Services, Quartz)",
    description:
      "Design and implementation of scheduled and recurring background jobs with idempotency, retries, concurrency control, and operational safety.",
    rating: 4,
    icon: Icons.job,
  },
  {
    name: "Temporal (Workflows & Activities)",
    description:
      "Orchestrating reliable workflows with deterministic logic, activity boundaries, retries/timeouts, and failure handling.",
    rating: 4,
    icon: Icons.temporal,
  },
  {
    name: "Observability (Serilog, Structured Logging)",
    description:
      "Structured logging with correlation context to make production issues diagnosable and reduce time-to-fix.",
    rating: 4,
    icon: Icons.elasticstack,
  },
  {
    name: "Monitoring, Tracing & Observability",
    description:
      "Monitoring and tracing using Datadog, Grafana, and the Elastic Stack to gain visibility into system behavior and operate services reliably.",
    rating: 4,
    icon: Icons.datadog,
  },
  {
    name: ".NET SDK / Integrations",
    description:
      "Designing and implementing robust .NET integrations with external systems using typed HTTP clients, secure authentication, retries, error handling, and strong observability.",
    rating: 4,
    icon: Icons.dotnet,
  },
  {
    name: "API Design & Contracts (OpenAPI, OData, Gridify)",
    description:
      "Designing API surfaces that scale: filtering/paging, consistent response shapes, and avoiding leaking persistence concerns.",
    rating: 4,
    icon: Icons.openapi,
  },
  {
    name: "Performance & Concurrency",
    description:
      "Reasoning about performance in backend systems: async patterns, concurrency control, and safe processing at scale.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "CI/CD (Azure DevOps-style pipelines)",
    description:
      "Automated builds, tests, and releases with repeatable deployments and safe delivery workflows.",
    rating: 3,
    icon: Icons.githubactions,
  },
  {
    name: "Containers & Orchestration (Docker, Kubernetes)",
    description:
      "Containerizing backend services with Docker and operating workloads in Kubernetes environments.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "Git & Code Reviews",
    description:
      "Team workflows: pull requests, code reviews, resolving conflicts, and shipping changes safely.",
    rating: 4,
    icon: Icons.git,
  },
  {
    name: "React (side projects)",
    description:
      "Basic frontend work for personal projects—sufficient to collaborate effectively and build simple UI flows.",
    rating: 3,
    icon: Icons.react,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills: skillsInterface[] = [
  "C# / .NET",
  "ASP.NET Core (REST APIs)",
  "Enterprise Architecture (Clean Architecture / DDD)",
  "Security (AuthN/AuthZ, RBAC, OIDC/OAuth2)",
  "Multi-Tenancy & Tenant Isolation",
  "Background Jobs (Hosted Services, Quartz)",
].map((name) => skills.find((s) => s.name === name)!)
 .filter(Boolean);
