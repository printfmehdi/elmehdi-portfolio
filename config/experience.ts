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
    position: "Softwareentwickler C# / .NET (Vollzeit)",
    company: "TKD GmbH",
    location: "Deutschland",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
description: [
  "Backend development of a multi-tenant enterprise platform for mobile device and telecommunications management used by corporate customers.",
  "Design and implementation of RESTful APIs using ASP.NET Core to support complex business processes around mobile contracts, devices, tariffs, and service configurations.",
  "Integration with external enterprise systems and APIs, including Telekom/Vodafone B2B interfaces, Microsoft Graph, ServiceNow, and other third-party platforms.",
  "Implementation of long-running and stateful workflows using Temporal, Quartz, and hosted services, including orchestration of asynchronous activities, retries, and failure handling.",
  "Development and maintenance of event-driven synchronization flows using webhooks and background jobs to ensure reliable state transitions across distributed systems.",
  "Design of robust and performant data access layers using Entity Framework Core with PostgreSQL and MSSQL, ensuring tenant isolation and data consistency, including advanced querying and filtering mechanisms (e.g., Gridify).",
  "Implementation of API gateway and reverse proxy solutions using YARP to securely expose and route backend services.",
  "Integration with identity providers and implementation of authentication and authorization flows to ensure secure access control.",
  "Active participation in a strict code review and pull request process with a strong focus on code quality, correctness, security, and clean architecture principles.",
  "Close collaboration with product owners and domain experts to translate complex business requirements into maintainable and scalable technical solutions.",
],
achievements: [
  "Developed and extended backend endpoints and business logic for Telekom-related configurations, booking profiles, options, and synchronization processes.",
  "Implemented and optimized webhook handlers and background jobs to process external status updates reliably and idempotently.",
  "Improved stability and data consistency in production-critical workflows by analyzing edge cases, race conditions, and failure scenarios.",
  "Worked on permission-aware and tenant-isolated data access to ensure secure multi-tenant behavior.",
  "Actively contributed to code reviews and refactoring efforts with a strong focus on clean architecture and maintainability.",
  "Collaborated closely with team members in an agile environment using Jira, Git, and CI/CD pipelines.",
  "Supported troubleshooting and bug fixing in production-like environments through log analysis and targeted fixes.",
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
    position: "Softwareentwickler (Werkstudent)",
    company: "Buhl Data Service GmbH",
    location: "Neunkirchen, Deutschland",
    startDate: new Date("2021-11-01"),
    endDate: new Date("2024-06-01"),
  description: [
  "Contributed to the further development of a company-wide document management system (Buhl Archive) for the audit-compliant archiving of sensitive company and customer data (e.g. tax declarations, documents, and records).",
  "Backend development using C# and .NET for processing, storing, and managing large volumes of documents.",
  "Implementation of business logic for document storage, metadata handling, access control, and document lifecycle management.",
  "Close collaboration with finance and tax departments to translate business requirements into technical solutions.",
],

achievements: [
  "Implemented and maintained backend components for document management, versioning, and access control.",
  "Developed stable data access layers using Entity Framework and MSSQL.",
  "Designed and maintained REST APIs for integration with internal systems.",
  "Automated build, test, and deployment pipelines using Azure DevOps (CI/CD).",
  "Introduced and applied unit tests with NUnit to ensure code quality and reliability.",
  "Monitored and analyzed runtime behavior using Grafana and the Elastic Stack.",
  "Contributed to technical documentation (Swagger, internal documentation) to support knowledge sharing within the team.",
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
    "Bachelor’s degree in Computer Science with a specialization in Software Engineering.",
    "Strong foundations in algorithms, data structures, databases, and software architecture.",
    "Academic focus on practical software development alongside theoretical fundamentals.",
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
      "Two-year preparatory cycle focused on mathematics, physics, and engineering fundamentals.",
      "Strong analytical and problem-solving training as preparation for engineering studies.",
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
  }
];
