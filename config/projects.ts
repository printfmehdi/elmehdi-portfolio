import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

export interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
  mermaid?: string;
}

export interface DescriptionDetailsInterface {
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
//   {
//     id: "tkd360-enterprise-platform",
//     companyName: "TKD360 – Multi-Tenant Enterprise Platform",
//     type: "Professional",
//     category: ["Backend", "Web Dev"],
//     shortDescription:
//   "Enterprise backend development for a multi-tenant telecom and device management platform, focusing on distributed workflows, tenant isolation, and production-grade reliability.",
//     websiteLink: "https://www.tkdeutschland.de/",
//     techStack: [
//       "C#",
//       ".NET",
//       "ASP.NET Core",
//       "Entity Framework Core",
//       "LINQ",
//       "SQL",
//       "PostgreSQL",
//       "MSSQL",
//       "Docker",
//       "Git",
//       "CI/CD",
//       "Swagger",
//       "Elastic Stack",
//       "Grafana",
//     ],
//     startDate: new Date("2024-08-01"),
//     endDate: new Date("2027-01-01"),
//     companyLogoImg: "/experience/tkd-logo.png",
//   pagesInfoArr: [
//   {
//     title: "Backend APIs & Multi-Tenancy",
//     description:
//       "Designed and evolved tenant-aware REST APIs with strict data isolation, validation, and backward-compatible contracts in a large enterprise environment.",
//     mermaid: `flowchart TD
//       C[Client App] --> API[ASP.NET Core API]
//       API --> TC[Tenant Context Resolution]
//       API --> AUTH[Permission and Role Checks]
//       TC --> APP[Application and Domain Services]
//       AUTH --> APP
//       APP --> REPO[Repository Layer]
//       REPO --> EF[Entity Framework Core]
//       EF --> GF[Global Query Filters by Tenant]
//       GF --> DB[(PostgreSQL / MSSQL)]
//       APP --> AUDIT[Audit and Access Policies]
//       AUDIT --> DB
//       NOTE[Tenant-isolated and permission-aware access path] -.-> APP`,
//     imgArr: [],
//   },
//   {
//     title: "Distributed Workflows & Temporal",
//     description:
//       "Implemented long-running, stateful workflows using Temporal to orchestrate telecom-related processes with retries, timeouts, and deterministic execution.",
//     mermaid: `flowchart TD
//       TRG[Business Trigger] --> WF[Temporal Workflow]
//       WF --> PLAN[Deterministic Workflow Logic]
//       PLAN --> A1[Activity: Validate Input]
//       PLAN --> A2[Activity: Execute Step]
//       PLAN --> A3[Activity: Persist Outcome]
//       A1 --> RETRY[Retry Policy]
//       A2 --> RETRY
//       A3 --> RETRY
//       RETRY --> TMO[Timeout and Backoff Rules]
//       TMO --> WF
//       WF --> OK[Completed State]
//       WF --> FAIL[Failure Handling and Compensation]
//       FAIL --> ALERT[Operational Alerting]`,
//     imgArr: [],
//   },
//   {
//     title: "Webhooks & Background Processing",
//     description:
//       "Built resilient webhook handlers and background jobs with idempotency and failure recovery to safely process external system callbacks.",
//     mermaid: `flowchart TD
//       EXT[External System] --> WH[Webhook Endpoint]
//       WH --> VAL[Signature and Payload Validation]
//       VAL --> IDEMP[Idempotency Check]
//       IDEMP --> QUEUE[Durable Job Queue]
//       QUEUE --> JOB[Background Worker]
//       JOB --> RULES[Business Rules Processing]
//       RULES --> STATE[State Update]
//       STATE --> STORE[(Transactional Store)]
//       JOB --> RETRY[Retry and Dead-Letter Strategy]
//       RETRY --> OBS[Operational Monitoring]
//       IDEMP --> SKIP[Duplicate Event Ignored]`,
//     imgArr: [],
//   },
// ],
//    descriptionDetails: {
//   paragraphs: [
//     "At TKD360, I work on a large-scale, multi-tenant backend platform that manages complex workflows around mobile devices and telecommunications contracts.",
//     "My role focuses on building reliable distributed systems: stable APIs, strict tenant boundaries, and long-running workflows that must remain correct under failure conditions.",
//     "A significant part of my work involves production readiness — ensuring systems are observable, debuggable, and resilient in real-world enterprise environments.",
//   ],
//   bullets: [
//     "Designed and maintained tenant-isolated backend APIs with strong validation and consistent contracts.",
//     "Implemented long-running workflows using Temporal with retries, timeouts, and deterministic execution.",
//     "Built idempotent webhook handlers and background jobs for external system integrations.",
//     "Worked under a strict pull request and code review process, focusing on correctness, edge cases, and maintainability.",
//     "Improved production diagnosability using structured logging and monitoring (Grafana, Elastic Stack).",
//   ],
// },

//   },
{
  id: "buhl-archive-document-management",
  companyName: "Buhl Archive – Document Management System",
  type: "Professional",
  category: ["Backend", "Web Dev"],
  shortDescription:
    "Contributed to an enterprise document management and archiving platform for audit-compliant storage, metadata, and search features (e.g., tax-related documents and business records).",
  websiteLink: "https://www.buhl.de/",
  techStack: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL",
    "MSSQL",
    "WPF",
    "NUnit",
    "Azure DevOps",
    "CI/CD",
    "Docker",
    "Elastic Stack",
    "Grafana",
    "Git",
    "Scrum",
    "Swagger",
  ],
  startDate: new Date("2021-11-01"),
  endDate: new Date("2024-06-01"),
  companyLogoImg: "/projects/buhlArchiv.png",
  pagesInfoArr: [
    {
      title: "Archiving & Metadata",
      description:
        "Implemented backend features for document ingestion, metadata management, and lifecycle handling in an enterprise archiving context.",
      mermaid: `flowchart TD
        U[Internal Users / Systems] --> API[Backend Services / APIs]
        API --> META[Metadata + Tags]
        API --> STORE[Archive Storage]
        META --> SEARCH[Search / Index]
        STORE --> SEARCH
        API --> POL[Audit-compliant policies]
        POL --> STORE`,
      imgArr: [],
    },
    {
      title: "Daily Service & Keyword Management",
      description:
        "Worked on daily processing services and keyword/tag management to support structured retrieval and consistent classification of documents.",
      mermaid: `flowchart TD
        SCHED[Scheduled Daily Job] --> LOAD[Load new/changed documents]
        LOAD --> EXTR[Extract metadata]
        EXTR --> KEY[Keyword/Tag assignment]
        KEY --> VALID[Validation + rules]
        VALID --> SAVE[Persist updates]
        SAVE --> IDX[Update search index]`,
      imgArr: [],
    },
    {
      title: "Quality, CI/CD & Observability",
      description:
        "Improved delivery and maintainability through CI/CD automation, tests, and monitoring practices.",
      mermaid: `flowchart TD
        DEV[Development] --> PR[Pull Request Review]
        PR --> CI[Build + Test Pipeline]
        CI --> DEP[Deployment]
        DEP --> MON[Monitoring & Logs]
        MON --> FIX[Bugfix / Improvements]
        FIX --> DEV`,
      imgArr: [],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "At Buhl, I contributed to an enterprise document management and archiving platform (Buhl Archive) used for storing and organizing sensitive business and tax-related documents.",
      "My work focused on backend development and reliable processing workflows — including metadata, keyword/tag management, and daily services that keep archives and search structures consistent.",
      "I also gained hands-on experience with production-oriented practices like CI/CD, testing, and operational monitoring.",
    ],
    bullets: [
      "Implemented backend features for document archiving, metadata handling, and access-aware processing.",
      "Worked on daily processing services to update document structures and maintain searchability over time.",
      "Built and maintained keyword/tag management logic to support consistent classification and retrieval.",
      "Contributed under a PR-based development workflow with code reviews and CI pipelines.",
      "Supported quality and operability through tests and monitoring/log analysis.",
    ],
  },
},
{
  id: "doner-ordering-system",
  companyName: "Döner App — Real-Time Restaurant Ordering Platform",
  type: "Personal",
  category: ["Full Stack", "Backend", "Web Dev"],

  shortDescription:
    "Real-time restaurant ordering platform with a customer-facing web app and an admin dashboard, built on Clean Architecture with domain-driven order logic and live updates via SignalR.",

  websiteLink: undefined,
  githubLink: "https://github.com/printfmehdi/HerrBiggie",

  techStack: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework Core",
    "PostgreSQL",
    "SignalR",
    "Clean Architecture",
    "Docker",
    "Git",
    "CI/CD",
    "React",
    "Swagger",
  ],

  startDate: new Date("2025-01-01"),
  endDate: new Date("2027-01-01"),
  companyLogoImg: "/projects/DönerApp.png",

  pagesInfoArr: [
    {
      title: "Architecture Overview",
      description:
        "High-level system architecture showing customer and admin applications, a Clean Architecture backend, persistent storage, and real-time communication.",
      mermaid: `flowchart LR
        CustomerApp[Customer Web App]
        AdminApp[Admin Dashboard]
        API[Backend API]
        DB[(PostgreSQL Database)]
        RT[SignalR Hub]

        CustomerApp -->|REST| API
        AdminApp -->|REST| API
        API --> DB
        API --> RT
        RT --> CustomerApp
        RT --> AdminApp`,
      imgArr: [],
    },

    {
      title: "Customer Ordering Flow",
      description:
        "Customer journey from menu browsing and product customization to order placement with real-time order status feedback.",
      mermaid: `flowchart LR
        Menu[Browse Menu]
        Customize[Customize Product]
        Cart[Shopping Cart]
        Place[Place Order]
        API[Backend API]
        Status[Realtime Status Updates]

        Menu --> Customize --> Cart --> Place --> API
        API --> Status
        Status --> Cart`,
      imgArr: [],
    },

    {
      title: "Clean Architecture Backend",
      description:
        "Backend structured using Clean Architecture principles, isolating business rules from infrastructure and delivery mechanisms.",
      mermaid: `flowchart TB
        UI[Web / API Layer]
        App[Application Layer]
        Domain[Domain Layer]
        Infra[Infrastructure Layer]
        DB[(Database)]

        UI --> App
        App --> Domain
        App --> Infra
        Infra --> DB`,
      imgArr: [],
    },
    {
      title: "Admin Dashboard & Live Orders",
      description:
        "Admin interface for restaurant staff to manage incoming orders, update order states, and monitor operations in real time.",
      mermaid: `flowchart LR
        Incoming[Incoming Order]
        Queue[Live Order Queue]
        Update[Update Order Status]
        API[Backend API]
        RT[SignalR Broadcast]
        Customer[Customer App]

        Incoming --> Queue --> Update --> API
        API --> RT --> Queue
        RT --> Customer`,
      imgArr: [],
    },

    {
      title: "Domain Model & Ordering Logic",
      description:
        "Domain-driven model representing orders, customizable order items, ingredients, and pricing rules.",
      mermaid: `classDiagram
        class Order {
          Id
          Status
          TotalPrice
        }

        class OrderItem {
          ProductId
          Quantity
          PortionSize
        }

        class Modification {
          IngredientId
          Type
          ExtraPrice
        }

        class Product {
          Id
          Name
          Price
          IsAvailable
        }

        Order "1" --> "many" OrderItem
        OrderItem "1" --> "many" Modification
        OrderItem "many" --> "1" Product`,
      imgArr: [],
    },
{
  title: "Key Technical Challenges & Solutions",
  description:
    "Key engineering challenges encountered during development and the architectural decisions used to solve them.",
  mermaid: `flowchart TB
    C1[Order State Consistency]
    C2[Realtime Synchronization]
    C3[Customization & Pricing Logic]

    C1 --> S1[Domain State + Domain Events]
    C2 --> S2[SignalR Broadcasts]
    C3 --> S3[Encapsulated Order Item Logic]

    S1 --> APP[Application Layer]
    S2 --> HUB[SignalR Hub]
    S3 --> DOM[Domain Model]`,
  imgArr: [],
}
,
{
  title: "Advanced Engineering Decisions",
  description:
    "Architectural and engineering decisions made to ensure scalability, maintainability, and real-world usability.",
  mermaid: `flowchart TB
    ARCH[Clean Architecture]
    DOMAIN[Domain Rules & Events]
    RT[Realtime Communication]
    SCALE[Scalability]

    ARCH --> DOMAIN
    DOMAIN --> RT
    RT --> SCALE`,
  imgArr: [],
}
  ],

  descriptionDetails: {
    paragraphs: [
      "The Döner App models a real restaurant’s ordering workflow end-to-end, combining a customer-facing ordering experience with an admin dashboard for live operations.",
      "Orders are represented as a domain aggregate with explicit state transitions and pricing rules for portion sizes and ingredient customization, ensuring consistent business behavior.",
      "Realtime updates are delivered via SignalR, allowing customers and staff to see order and availability changes instantly without polling.",
    ],

    bullets: [
      "Clean Architecture with clear separation of Domain, Application, Infrastructure, and Web layers.",
      "Real-time order and availability updates using SignalR.",
      "Domain-driven order aggregate with explicit lifecycle states.",
      "Support for complex product customization with pricing rules.",
      "Scalable foundation for multi-restaurant or multi-location setups.",
    ],
  },
}
,  // ✅ Academic: Bachelor thesis / university project (keep it short, credible)
  {
  id: "bachelor-thesis",
  companyName: "Bachelor Thesis — Feature Model Learning & Dimensionality Reduction",
  type: "Academic",
  category: ["Machine Learning", "Backend"],

  shortDescription:
    "Research-oriented bachelor thesis on Feature Model Learning in Software Product Lines, focusing on encoding strategies and dimensionality reduction techniques to improve efficiency and scalability.",

  websiteLink: '/projects/university/bachelor-thesis.pdf',
  githubLink: undefined,

  techStack: [
    // "Machine Learning",
    // "Feature Model Learning (FML)",
    // "Dimensionality Reduction",
    // "Linear PCA",
    // "Logistic PCA",
    // "Software Product Lines",
    // "C#",
    // ".NET",
    // "Data Analysis",
    // "Evaluation Metrics (Precision / Recall)",
  ],

  startDate: new Date("2023-10-01"),
  endDate: new Date("2024-03-01"),
  companyLogoImg: "/projects/bchelorthesis.png",

  pagesInfoArr: [
    {
      title: "Problem Context & Motivation",
      description:
        "Feature Models are used to represent valid configuration spaces in Software Product Lines. Learning these models from existing configurations becomes challenging due to the curse of dimensionality in large feature spaces.",
      mermaid: `flowchart LR
        FM[Feature Model]
        CONF[Configurations]
        SPACE[Boolean Configuration Space]
        DIM[High Dimensionality]
        ML[Machine Learning]

        FM --> CONF
        CONF --> SPACE
        SPACE --> DIM
        DIM --> ML`,
      imgArr: [],
    },

    {
      title: "Encoding Strategies for Feature Models",
      description:
        "Comparison of classical boolean vector encoding with manually designed encoding strategies that exploit feature relationships to reduce dimensionality while preserving semantics.",
      mermaid: `flowchart TD
        BOOL[Boolean Vector Encoding]
        MAN[Manual Encoding]
        DIM1[High Dimensional Dataset]
        DIM2[Reduced Dataset]

        BOOL --> DIM1
        MAN --> DIM2`,
      imgArr: [],
    },

    {
      title: "Dimensionality Reduction Techniques",
      description:
        "Application of Linear PCA and Logistic PCA to transform high-dimensional boolean datasets into lower-dimensional representations suitable for Feature Model Learning.",
      mermaid: `flowchart TD
        DATA[Encoded Dataset]
        PCA[Linear PCA]
        LPCA[Logistic PCA]
        RED[Reduced Representation]
        FML[Feature Model Learning]

        DATA --> PCA --> RED
        DATA --> LPCA --> RED
        RED --> FML`,
      imgArr: [],
    },

    {
      title: "Evaluation & Results",
      description:
        "Empirical evaluation comparing encoding strategies and dimensionality reduction approaches using precision, recall, and runtime measurements.",
      mermaid: `flowchart LR
        METHODS[Encoding + DR Methods]
        PREC[Precision]
        REC[Recall]
        TIME[Runtime]
        TRADE[Effectiveness vs Efficiency]

        METHODS --> PREC
        METHODS --> REC
        METHODS --> TIME
        TIME --> TRADE
        PREC --> TRADE
        REC --> TRADE`,
      imgArr: [],
    },
  ],

  descriptionDetails: {
    paragraphs: [
      "This bachelor thesis investigates the challenge of learning feature models for Software Product Lines from existing configurations using machine learning techniques.",
      "A key problem addressed is the curse of dimensionality caused by large boolean configuration spaces, which negatively impacts both learning accuracy and computational efficiency.",
      "The work explores two complementary solutions: manually designed encoding strategies that capture feature relationships, and dimensionality reduction techniques such as Linear PCA and Logistic PCA.",
      "The approaches are evaluated empirically by comparing precision, recall, and runtime, revealing a clear trade-off between model effectiveness and computational efficiency.",
    ],

    bullets: [
      "Analyzed Feature Model Learning (FML) in the context of Software Product Lines.",
      "Designed manual encoding strategies to reduce dimensionality of boolean configuration spaces.",
      "Applied Linear PCA and Logistic PCA for dimensionality reduction.",
      "Evaluated learning quality using precision and recall metrics.",
      "Analyzed runtime behavior and scalability trade-offs.",
      "Combined software engineering principles with machine learning techniques.",
    ],
  },
}

];

export const featuredProjects = Projects.slice(0, 3);
