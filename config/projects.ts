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
    category: ["Backend", "Enterprise", "Web Dev"],
    shortDescription:
      "Backend development for a multi-tenant enterprise platform for mobile device and telecom contract management, focusing on reliability, security, and scalable workflows.",
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
      "Temporal",
      "Quartz",
      "Serilog",
      "Datadog",
      "Elastic Stack",
      "Grafana",
    ],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2027-01-01"),
    companyLogoImg: "/experience/tkd-logo.png",
    pagesInfoArr: [
      {
        title: "Backend APIs & Integrations",
        description:
          "Designed backend APIs and integrations with external services, emphasizing tenant isolation, robust error handling, and stable contracts.",
        imgArr: ["/projects/tkd360/api.webp"],
      },
      {
        title: "Workflows & Background Processing",
        description:
          "Implemented reliable background processing using jobs, webhooks, and workflow orchestration with retries, timeouts, and idempotency.",
        imgArr: ["/projects/tkd360/workflows.webp"],
      },
      {
        title: "Observability & Operations",
        description:
          "Improved diagnosability with structured logging and monitoring/tracing for production-grade reliability.",
        imgArr: ["/projects/tkd360/observability.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "In my role at TKD, I work on a multi-tenant enterprise backend that powers workflows around device and telecom contract management.",
        "My focus is building reliable and secure services: stable APIs, safe tenant boundaries, and operationally sound background processing.",
        "I also contribute to production readiness by improving observability using structured logging, monitoring, and tracing to shorten incident resolution time.",
      ],
      bullets: [
        "Built and maintained tenant-aware backend APIs with consistent contracts and strong validation/error handling.",
        "Implemented background processing and workflow orchestration with retries/timeouts and idempotency in mind.",
        "Worked on secure configuration and access control patterns to prevent cross-tenant visibility.",
        "Improved production diagnosability using structured logging (Serilog) and monitoring/tracing (Datadog, Grafana, Elastic Stack).",
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
      "Tailwind CSS",
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
    category: ["Backend", "Software Engineering"],
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
