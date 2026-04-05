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
}

export const experiences: ExperienceInterface[] = [
  {
    id: "tkd",
    position: "Software Engineer · C# / .NET",
    company: "TKD GmbH",
    location: "Germany",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    description: [
      "Backend development of a multi-tenant enterprise platform for mobile device and telecommunications management, serving corporate customers with complex contract and device lifecycles.",
      "Designed and implemented RESTful APIs with ASP.NET Core covering mobile contracts, devices, tariff configurations, booking profiles, and service options.",
      "Integrated external B2B systems and APIs including Telekom, Vodafone, Microsoft Graph, ServiceNow, and other third-party enterprise platforms.",
      "Built stateful and long-running workflows using Temporal and Quartz, including orchestration of async activities, retry strategies, and fault handling.",
      "Implemented idempotent webhook handlers and background jobs for reliable, race-condition-free processing of external status updates across distributed services.",
      "Designed tenant-isolated, permission-aware data access layers using Entity Framework Core with PostgreSQL and MSSQL, including advanced filtering via Gridify.",
      "Built API gateway and reverse-proxy routing with YARP to securely expose and route backend services.",
      "Integrated identity providers and implemented authentication and authorization flows for secure, role-based access control.",
      "Participated in strict code review and pull request processes with a strong focus on clean architecture, correctness, and security.",
      "Collaborated closely with product owners and domain experts to translate complex business requirements into scalable and maintainable technical solutions.",
    ],
    achievements: [
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
    description: [
      "Contributed to the backend development of the document management platform Buhl-Archiv, orchestrating the full lifecycle of tax documents, including upload/download, antivirus scanning, OCR processing, metadata extraction, and document versioning.",
      "Implemented backend components using CQRS with MediatR and supported event-driven processing using Apache Kafka for asynchronous workflows.",
      "Worked with Alfresco-based storage for audit-compliant document management, retrieval, and version control.",
      "Integrated Elasticsearch as a search engine for efficient indexing, querying, and enabling full-text search across large document datasets.",
      "Supported integrations with multiple consumer channels, including customer-facing applications, German tax authorities (Finanzamt), and internal BI systems.",
      "Monitored and optimized production systems using Grafana and Elastic Stack, improving observability and reducing incident response time.",
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