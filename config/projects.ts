import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  // ✅ Professional: TKD360 (safe, portfolio-friendly wording)
  {
    id: "tkd360-enterprise-platform",
    companyName: "TKD360 – Multi-Tenant Enterprise Platform",
    type: "Professional",
    category: ["Backend", "Web Dev"],
    shortDescription:
  "Enterprise backend development for a multi-tenant telecom and device management platform, focusing on distributed workflows, tenant isolation, and production-grade reliability.",
    websiteLink: "https://www.tkdeutschland.de/",
    techStack: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "LINQ",
      "SQL",
      "PostgreSQL",
      "MSSQL",
      "Docker",
      "Git",
      "CI/CD",
      "Swagger",
      "Elastic Stack",
      "Grafana",
    ],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2027-01-01"),
    companyLogoImg: "/experience/tkd-logo.png",
   pagesInfoArr: [
  {
    title: "Backend APIs & Multi-Tenancy",
    description:
      "Designed and evolved tenant-aware REST APIs with strict data isolation, validation, and backward-compatible contracts in a large enterprise environment.",
    imgArr: [
      "/projects/tkd360/api-architecture.webp",
      "/projects/tkd360/tenant-isolation.webp",
    ],
  },
  {
    title: "Distributed Workflows & Temporal",
    description:
      "Implemented long-running, stateful workflows using Temporal to orchestrate telecom-related processes with retries, timeouts, and deterministic execution.",
    imgArr: [
      "/projects/tkd360/temporal-workflow.webp",
      "/projects/tkd360/event-flow.webp",
    ],
  },
  {
    title: "Webhooks & Background Processing",
    description:
      "Built resilient webhook handlers and background jobs with idempotency and failure recovery to safely process external system callbacks.",
    imgArr: [
      "/projects/tkd360/webhook-flow.webp",
    ],
  },
  {
    title: "Observability & Production Readiness",
    description:
      "Improved operational safety through structured logging, metrics, and tracing to diagnose issues in distributed, production-critical systems.",
    imgArr: [
      "/projects/tkd360/observability-stack.webp",
    ],
  },
],
   descriptionDetails: {
  paragraphs: [
    "At TKD360, I work on a large-scale, multi-tenant backend platform that manages complex workflows around mobile devices and telecommunications contracts.",
    "My role focuses on building reliable distributed systems: stable APIs, strict tenant boundaries, and long-running workflows that must remain correct under failure conditions.",
    "A significant part of my work involves production readiness — ensuring systems are observable, debuggable, and resilient in real-world enterprise environments.",
  ],
  bullets: [
    "Designed and maintained tenant-isolated backend APIs with strong validation and consistent contracts.",
    "Implemented long-running workflows using Temporal with retries, timeouts, and deterministic execution.",
    "Built idempotent webhook handlers and background jobs for external system integrations.",
    "Worked under a strict pull request and code review process, focusing on correctness, edge cases, and maintainability.",
    "Improved production diagnosability using structured logging and monitoring (Grafana, Elastic Stack).",
  ],
},

  },

  // ✅ Personal: Döner ordering system (your side project)
  {
    id: "doner-ordering-system",
    companyName: "Restaurant Ordering System – Customer/Admin Web App",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Customer-facing ordering web app with a .NET backend and a modern React frontend, focusing on clean architecture and scalable order flows.",
    websiteLink: undefined, // set later if deployed
    githubLink: undefined, // set if public (or omit)
    techStack: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL",
      "PostgreSQL",
      "Docker",
      "Git",
      "CI/CD",
      "React",
      "Typescript",
      "Swagger",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2027-01-01"),
    companyLogoImg: "/projects/doner/logo.png",
    pagesInfoArr: [
      {
        title: "Ordering Flow",
        description:
          "Menu browsing, cart, and order placement with clean domain modeling and reliable state transitions.",
        imgArr: ["/projects/doner/order-flow.webp"],
      },
      {
        title: "Customization & Order Editing",
        description:
          "Product customization (e.g., ingredients) and editing open orders to reflect real shop workflows.",
        imgArr: ["/projects/doner/customization.webp"],
      },
      {
        title: "Architecture & API",
        description:
          "Clean Architecture structure with clear domain boundaries, stable API contracts, and testable business logic.",
        imgArr: ["/projects/doner/architecture.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I’m building a full-stack ordering system for a local food business with a clean, maintainable architecture.",
        "The backend focuses on stable domain logic, reliable order state handling, and clear API contracts, while the frontend provides a modern, responsive customer experience.",
      ],
      bullets: [
        "Designed order domain models with safe state transitions and validation.",
        "Implemented product customization and order editing flows aligned with real operational needs.",
        "Built a clean, testable backend structure using Clean Architecture principles.",
      ],
    },
  },

  // ✅ Academic: Bachelor thesis / university project (keep it short, credible)
  {
    id: "bachelor-thesis",
    companyName: "Bachelor Thesis / Academic Project",
    type: "Academic",
    category: ["Backend"],
    shortDescription:
      "Academic work focused on software engineering fundamentals and practical implementation within a structured project setup.",
    websiteLink: undefined,
    githubLink: undefined,
    techStack: ["C#", ".NET", "SQL", "Git"],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/projects/university/logo.png",
    pagesInfoArr: [
      {
        title: "Academic Work",
        description:
          "Structured research and implementation with a focus on software engineering fundamentals.",
        imgArr: ["/projects/university/thesis.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my Bachelor’s program, I worked on an academic project that strengthened my foundations in software engineering and practical implementation.",
      ],
      bullets: [
        "Applied software engineering fundamentals in a structured academic setting.",
        "Delivered an implementation with clear documentation and maintainable structure.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
