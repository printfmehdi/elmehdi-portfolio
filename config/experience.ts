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
      "Contributed to the development of a company-wide document management system (Buhl Archive) for audit-compliant archiving of sensitive financial and customer data including tax declarations and records.",
      "Backend development in C# / .NET for document ingestion, storage, versioning, and lifecycle management at scale.",
      "Implemented business logic for metadata handling, access control, and document state transitions.",
      "Designed and maintained REST APIs for integration with internal systems across departments.",
      "Collaborated with finance and tax departments to translate compliance requirements into reliable technical solutions.",
    ],
    achievements: [
      "Implemented and maintained backend components for document versioning, access control, and lifecycle management.",
      "Built stable, performant data access layers using Entity Framework and MSSQL.",
      "Automated build, test, and deployment pipelines with Azure DevOps, significantly reducing manual overhead.",
      "Introduced NUnit unit tests that improved code reliability and caught regressions early.",
      "Monitored and analyzed runtime behavior using Grafana and the Elastic Stack to proactively identify issues.",
      "Maintained Swagger and internal documentation to support knowledge sharing across the team.",
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