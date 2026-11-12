import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
  /** "work" entries appear in the career timeline, "education" in the education block. */
  kind: "work" | "education";
  /** 3 short, outcome-focused bullets shown on the homepage / timeline. */
  highlights: string[];
}

export const experiences: ExperienceInterface[] = [
  {
    id: "tkd",
    position: "Software Engineer · C# / .NET",
    company: "TKD GmbH",
    location: "Germany",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    kind: "work",
    highlights: [
      "Building the backend of a multi-tenant telecom & device-management SaaS platform for corporate customers (modular monolith, ASP.NET Core).",
      "Integrated 6+ enterprise systems — Intune, Entra ID, Telekom B2B, ServiceNow, WeClapp, Zendesk — with event-driven webhooks and Temporal workflows.",
      "Designed an import/export service hub for bulk data (users, devices, contracts) — higher data quality, far less manual work.",
    ],
    description: [
      "Design and implementation of a modular monolith architecture for a multi-tenant telecommunications platform managing devices, contracts, tariffs and billing processes for corporate customers.",
      "Event-driven architecture with webhooks and workflow orchestration in Temporal for reliable processing of external events (tenant provisioning, shipment tracking, contract changes).",
      "Integration of multiple enterprise systems (Microsoft Intune, Entra ID, Microsoft Graph, Telekom B2B, ServiceNow, WeClapp, Zendesk) to automatically synchronise contract, tariff and service data across distributed systems.",
      "Architecture and implementation of an import/export service hub for processing large data volumes (users, devices, contracts, services).",
      "Contributed to the architecture and development of a multi-tenant shop system (TKD Shop) including product modelling, pricing logic and cross-selling features.",
      "Tenant-isolated, permission-aware data access with Entity Framework Core on PostgreSQL and MSSQL, including advanced filtering via Gridify; API gateway routing with YARP.",
      "Improved performance and reliability through asynchronous processing, distributed caching, structured logging with Serilog and monitoring.",
      "Daily use of agentic, AI-assisted engineering workflows (Claude Code, Agent Skills, MCP) for implementation, refactoring, debugging and code analysis in a large production codebase.",
    ],
    achievements: [
      "Designed and built an import/export service hub for bulk data, significantly reducing manual effort while improving data quality.",
      "Co-designed the multi-tenant TKD Shop: product modelling, pricing logic and cross-selling.",
      "Shortened delivery cycles with AI-assisted engineering workflows while keeping code quality high.",
      "Extended backend logic for Telekom booking profiles, options, and synchronization pipelines end-to-end.",
      "Improved production stability by identifying and resolving race conditions, edge cases, and failure scenarios in async workflows.",
      "Implemented idempotent webhook handlers and background jobs ensuring reliable and consistent external state processing.",
      "Built permission-aware, tenant-isolated data access across the full API surface, ensuring secure multi-tenant behavior.",
      "Drove code quality and architectural consistency through active participation in code reviews and refactoring efforts.",
      "Worked in an agile environment using Jira, Git, and CI/CD pipelines with fast iteration cycles.",
      "Supported production troubleshooting through structured log analysis and targeted root-cause fixes.",
    ],
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "LINQ",
      "SQL",
      "MSSQL",
      "Docker",
      "Kubernetes",
      "Azure",
      "Gridify",
      "Visual Studio",
      "Visual Studio Code",
      "JetBrains Rider",
      "YARP",
      "CI/CD",
      "Git",
      "Scrum",
      "Swagger",
      "Temporal",
      "Quartz",
      "Clean Architecture",
      "Serilog",
      "Claude Code",
      "MCP",
    ],
    companyUrl: "https://www.tkdeutschland.de/",
    logo: "/experience/tkd.png",
  },
  {
    id: "buhl",
    position: "Software Engineer (Working Student)",
    company: "Buhl Data Service GmbH",
    location: "Neunkirchen, Germany",
    startDate: new Date("2021-11-01"),
    endDate: new Date("2024-06-01"),
    kind: "work",
    highlights: [
      "Backend for an enterprise document platform with 3M+ users: upload, virus scan, OCR, metadata extraction and versioning of tax documents.",
      "Event-driven processing with Apache Kafka and CQRS/MediatR; full-text search over large document sets with Elasticsearch.",
      "Integrated customer apps, German tax authorities (Finanzamt) and BI systems; CI/CD with Azure DevOps.",
    ],
    description: [
      "Contributed to the backend development of the document management platform Buhl-Archiv, orchestrating the full lifecycle of tax documents, including upload/download, antivirus scanning, OCR processing, metadata extraction, and document versioning.",
      "Implemented backend components using CQRS with MediatR and supported event-driven processing using Apache Kafka for asynchronous workflows.",
      "Worked with Alfresco-based storage for audit-compliant document management, retrieval, and version control.",
      "Integrated Elasticsearch as a search engine for efficient indexing, querying, and enabling full-text search across large document datasets.",
      "Supported integrations with multiple consumer channels, including customer-facing applications, German tax authorities (Finanzamt), and internal BI systems.",
      "Monitored and optimized production systems using Grafana and Elastic Stack, improving observability and reducing incident response time.",
      "Developed and maintained CI/CD pipelines in Azure DevOps to automate build and release processes.",
    ],
achievements: [
  "Designed and implemented a scalable document lifecycle pipeline handling upload/download, antivirus scanning, OCR processing, metadata extraction, and versioning, improving processing reliability and automation.",
  "Built asynchronous, event-driven workflows using Apache Kafka, increasing system decoupling and enabling high-throughput document processing.",
  "Implemented CQRS architecture with MediatR to separate read/write concerns, improving maintainability and system scalability.",
  "Integrated and optimized Elasticsearch for full-text search and large-scale indexing, significantly improving query performance and search accuracy.",
  "Developed and maintained Alfresco-based document storage integration, ensuring audit-compliant versioning and secure document retrieval.",
  "Engineered robust integrations with external systems (e.g., Finanzamt and internal BI systems), ensuring reliable data exchange and consistency across platforms.",
  "Improved system observability by leveraging Elastic Stack and Grafana, enabling faster debugging and proactive issue detection in distributed workflows."
],
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "WPF",
      "NUnit",
      "MSSQL",
      "Azure DevOps",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Rancher",
      "Elastic Stack",
      "Grafana",
      "Scrum",
      "Git",
      "CQRS",
      "MediatR",
      "Apache Kafka",
      "Elasticsearch",
      "OCR",
      "Alfresco",
    ],
    companyUrl: "https://www.buhl.de",
    logo: "/experience/buhl_data_service_gmbh_logo.jpg",
  },
  {
    id: "bachelor",
    position: "Bachelor of Science in Computer Science",
    company: "University of Siegen",
    location: "Siegen, Germany",
    startDate: new Date("2020-09-01"),
    endDate: new Date("2024-03-01"),
    kind: "education",
    highlights: [
      "Specialisation in Software Engineering.",
      "Bachelor thesis on Feature Model Learning with dimensionality reduction (Linear & Logistic PCA).",
    ],
    description: [
      "B.Sc. in Computer Science with a specialisation in Software Engineering.",
      "Coursework in algorithms, data structures, databases, software architecture, and object-oriented design — with a strong emphasis on practical application.",
      "Worked part-time as a software engineer throughout the degree, applying academic concepts directly in production environments.",
    ],
    achievements: [],
    skills: [
      "Software Engineering",
      "Algorithms",
      "Data Structures",
      "Databases",
      "Object-Oriented Programming",
    ],
    companyUrl: "https://www.uni-siegen.de",
    logo: "/experience/logo.svg",
  },
  {
    id: "ensa",
    position: "Preparatory Cycle in Engineering",
    company: "ENSA Fès (National School of Applied Sciences)",
    location: "Fes, Morocco",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2020-02-01"),
    kind: "education",
    highlights: [
      "Two-year intensive programme in mathematics, physics and engineering fundamentals.",
    ],
    description: [
      "Two-year intensive preparatory cycle in mathematics, physics, and engineering fundamentals — equivalent to a first-cycle engineering preparatory programme.",
      "Built strong analytical and problem-solving foundations as preparation for engineering studies.",
    ],
    achievements: [],
    skills: [
      "Mathematics",
      "Physics",
      "Analytical Thinking",
      "Problem Solving",
    ],
    companyUrl: "https://ensaf.ac.ma/",
    logo: "/experience/ensa.jpg",
  },
];

export const workExperiences = experiences.filter((e) => e.kind === "work");
export const education = experiences.filter((e) => e.kind === "education");
