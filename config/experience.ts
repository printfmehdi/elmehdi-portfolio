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
      "Backend-Entwicklung einer mandantenfähigen Enterprise-Plattform für Mobilgeräte- und Telekommunikationsmanagement.",
      "Implementierung und Pflege von REST-APIs sowie Integrationen mit externen Services (z. B. Telekom B2B / Microsoft Graph).",
      "Arbeit an synchronisierten Workflows (Webhooks, Jobs) und stabilen Datenzugriffsschichten (EF Core, SQL).",
    ],
    achievements: [
      "Entwicklung neuer Endpunkte & Business-Logiken für Telekom-Konfigurationen, Profile/Optionen und Synchronisationsprozesse.",
      "Verbesserung von Stabilität und Datenkonsistenz in produktionsnahen Abläufen (z. B. Webhook-/Job-Handling).",
      "Zusammenarbeit im agilen Team (Code Reviews, Jira) und Fokus auf saubere Architektur.",
    ],
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "LINQ",
      "SQL",
      "PostgreSQL",
      "MSSQL",
      "Docker",
      "CI/CD",
      "Git",
      "Scrum",
      "Swagger",
    ],
    companyUrl: "https://www.tkdeutschland.de/",
    logo: "/experience/buhl_data_service_gmbh_logo",
  },
  {
    id: "buhl",
    position: "Softwareentwickler (Werkstudent)",
    company: "Buhl Data Service GmbH",
    location: "Neunkirchen, Deutschland",
    startDate: new Date("2021-11-01"),
    endDate: new Date("2024-06-01"),
    description: [
      "Entwicklung und Wartung eines Dokumentenmanagement-Systems.",
      "Entwicklung mit .NET (C#, ASP.NET, EF, WPF) sowie Tests (NUnit).",
      "Deployment- und Qualitätsprozesse in Azure DevOps (CI/CD).",
    ],
    achievements: [
      "Automatisierung von Deployments und kontinuierlicher Qualitätssicherung (CI/CD).",
      "Monitoring & technische Dokumentation (Swagger, Grafana, Elastic Stack).",
      "Agile Zusammenarbeit (Scrum, Jira, Code Reviews).",
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
    logo: "/experience/buhl-logo.png",
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
  logo: "/experience/university-siegen-logo.png",
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
  logo: "/experience/ensa-fes-logo.png",
}
];
