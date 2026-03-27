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
  {
    id: "tkd360-enterprise-platform",
    companyName: "TKD360 – Multi-Tenant Enterprise Platform",
    type: "Professional",
    category: ["Backend", "Web Dev"],
    shortDescription:
      "Enterprise backend for a multi-tenant telecom and device management platform — distributed workflows, strict tenant isolation, B2B integrations with Telekom and Vodafone, and production-grade reliability.",
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
    companyLogoImg: "/projects/tkd.png",
    pagesInfoArr: [
      {
        title: "Backend APIs & Multi-Tenancy",
        description:
          "Designed and evolved tenant-aware REST APIs with strict per-tenant data isolation, permission-gated access, and backward-compatible contracts across a large enterprise codebase. Every data access path flows through global EF Core query filters that enforce tenant boundaries at the database level — eliminating the risk of cross-tenant data leaks.",
        mermaid: `flowchart TD
          C[Client App] --> API[ASP.NET Core API]
          API --> TC[Tenant Context Resolution]
          API --> AUTH[Permission and Role Checks]
          TC --> APP[Application and Domain Services]
          AUTH --> APP
          APP --> REPO[Repository Layer]
          REPO --> EF[Entity Framework Core]
          EF --> GF[Global Query Filters per Tenant]
          GF --> DB[(PostgreSQL / MSSQL)]
          APP --> AUDIT[Audit and Access Policies]
          AUDIT --> DB
          NOTE[Every query is automatically scoped to the resolved tenant] -.-> GF`,
        imgArr: [],
      },
      {
        title: "Distributed Workflows & Temporal",
        description:
          "Implemented stateful, long-running workflows using Temporal to orchestrate telecom-related processes — including mobile contract provisioning, device assignments, and tariff changes — with deterministic execution, configurable retry strategies, and structured failure handling. Temporal's durable execution model ensures workflows survive process restarts and infrastructure failures without losing state.",
        mermaid: `flowchart TD
          TRG[Business Trigger] --> WF[Temporal Workflow]
          WF --> PLAN[Deterministic Workflow Logic]
          PLAN --> A1[Activity: Validate Input]
          PLAN --> A2[Activity: Execute Step]
          PLAN --> A3[Activity: Persist Outcome]
          A1 --> RETRY[Retry Policy]
          A2 --> RETRY
          A3 --> RETRY
          RETRY --> TMO[Timeout and Backoff Rules]
          TMO --> WF
          WF --> OK[Completed State]
          WF --> FAIL[Failure Handling and Compensation]
          FAIL --> ALERT[Operational Alerting]`,
        imgArr: [],
      },
      {
        title: "B2B Integrations",
        description:
          "Integrated external enterprise APIs including Telekom and Vodafone B2B interfaces, Microsoft Graph, and ServiceNow. Built abstraction layers to isolate third-party API contracts from internal domain logic, making integrations replaceable and testable. Handled authentication flows, rate limiting, and error recovery for each provider.",
        mermaid: `flowchart TD
          APP[Application Layer] --> GW[Integration Gateway]
          GW --> TEL[Telekom B2B API]
          GW --> VOD[Vodafone B2B API]
          GW --> MSG[Microsoft Graph]
          GW --> SN[ServiceNow]
          GW --> RETRY[Retry and Error Recovery]
          RETRY --> LOG[Structured Logging]
          LOG --> OBS[Grafana / Elastic Stack]
          GW --> ADAPTER[Provider Adapters]
          ADAPTER --> DOMAIN[Domain Events]`,
        imgArr: [],
      },
      {
        title: "Webhooks & Background Processing",
        description:
          "Built resilient webhook handlers and Quartz-based background jobs for processing external system callbacks and scheduled synchronization tasks. Handlers are fully idempotent — duplicate events are detected and safely ignored. All processing is transactional, with dead-letter handling and structured logging for operational visibility.",
        mermaid: `flowchart TD
          EXT[External System] --> WH[Webhook Endpoint]
          WH --> VAL[Signature and Payload Validation]
          VAL --> IDEMP[Idempotency Check]
          IDEMP --> QUEUE[Durable Job Queue]
          QUEUE --> JOB[Background Worker]
          JOB --> RULES[Business Rules Processing]
          RULES --> STATE[State Update]
          STATE --> STORE[(Transactional Store)]
          JOB --> RETRY[Retry and Dead-Letter Strategy]
          RETRY --> OBS[Operational Monitoring]
          IDEMP --> SKIP[Duplicate Event Ignored]`,
        imgArr: [],
      },
      {
        title: "API Gateway & Routing with YARP",
        description:
          "Implemented a reverse-proxy layer using YARP (Yet Another Reverse Proxy) to securely expose and route backend services. Configured dynamic route resolution, authentication forwarding, and request transformation to decouple frontend consumers from internal service topology.",
        mermaid: `flowchart LR
          CLIENT[Client] --> YARP[YARP Reverse Proxy]
          YARP --> AUTH[Auth Middleware]
          AUTH --> ROUTE[Dynamic Route Resolution]
          ROUTE --> SVC1[Service A]
          ROUTE --> SVC2[Service B]
          ROUTE --> SVC3[Service C]
          YARP --> TRANSFORM[Request Transformation]
          TRANSFORM --> ROUTE`,
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "TKD360 is a large-scale, multi-tenant backend platform managing complex workflows around mobile device fleets and telecommunications contracts for corporate customers.",
        "My work focuses on building reliable distributed systems: stable tenant-isolated APIs, long-running workflows that survive infrastructure failures, and idempotent integration pipelines connected to external B2B providers like Telekom and Vodafone.",
        "A significant part of my day-to-day is production readiness — ensuring systems are observable, diagnosable, and resilient under real enterprise load, with a strict focus on correctness and clean architecture.",
      ],
      bullets: [
        "Designed and maintained tenant-isolated backend APIs with strict per-tenant data isolation enforced at the database query level.",
        "Implemented long-running workflows using Temporal with deterministic execution, retries, timeouts, and compensation logic.",
        "Built idempotent webhook handlers and background jobs for reliable, race-condition-free external state processing.",
        "Integrated B2B APIs from Telekom, Vodafone, Microsoft Graph, and ServiceNow with abstracted, testable adapter layers.",
        "Implemented API gateway and routing with YARP, decoupling clients from internal service topology.",
        "Worked under a strict pull request and code review process with a strong focus on correctness, edge cases, and clean architecture.",
        "Improved production diagnosability using structured logging and monitoring across Grafana and the Elastic Stack.",
      ],
    },
  },
  {
    id: "buhl-archive-document-management",
    companyName: "Buhl Archive – Document Management System",
    type: "Professional",
    category: ["Backend", "Web Dev"],
    shortDescription:
      "Backend development for an enterprise document management platform used for audit-compliant archiving of sensitive business and tax-related documents — including metadata handling, access control, and automated processing pipelines.",
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
        title: "Archiving, Metadata & Access Control",
        description:
          "Implemented backend features for document ingestion, metadata tagging, and lifecycle management within an audit-compliant enterprise archiving system. Documents flow through validation, classification, and storage — with access control policies ensuring only authorized users can retrieve or modify records. All operations adhere to audit trail requirements.",
        mermaid: `flowchart TD
          U[Internal Users and Systems] --> API[Backend Services and APIs]
          API --> META[Metadata Extraction and Tagging]
          API --> STORE[Archive Storage Layer]
          API --> ACL[Access Control Policies]
          META --> SEARCH[Search Index]
          STORE --> SEARCH
          ACL --> STORE
          STORE --> AUDIT[Audit Trail]
          AUDIT --> DB[(MSSQL Database)]`,
        imgArr: [],
      },
      {
        title: "Keyword Management & Daily Processing",
        description:
          "Built scheduled processing services that run daily to update document keyword and tag assignments, keeping the search index consistent with the latest classification rules. The pipeline extracts metadata from new and changed documents, applies business-defined keyword logic, validates output, and persists results — ensuring long-term searchability and data integrity.",
        mermaid: `flowchart TD
          SCHED[Scheduled Daily Job] --> LOAD[Load New and Changed Documents]
          LOAD --> EXTR[Extract Metadata]
          EXTR --> KEY[Keyword and Tag Assignment]
          KEY --> VALID[Validation and Business Rules]
          VALID --> SAVE[Persist Updates]
          SAVE --> IDX[Update Search Index]
          IDX --> OBS[Monitoring and Alerting]`,
        imgArr: [],
      },
      {
        title: "REST API Design & Internal Integration",
        description:
          "Designed and maintained REST APIs consumed by internal systems across departments. APIs follow consistent conventions with Swagger documentation, versioning awareness, and clear error contracts — making them reliable integration points for finance, tax, and records management teams.",
        mermaid: `flowchart LR
          FIN[Finance Systems] --> API[Buhl Archive API]
          TAX[Tax Department] --> API
          REC[Records Management] --> API
          API --> VALID[Request Validation]
          VALID --> SVC[Service Layer]
          SVC --> EF[Entity Framework Core]
          EF --> DB[(MSSQL)]
          API --> SWAGGER[Swagger Docs]`,
        imgArr: [],
      },
      {
        title: "CI/CD, Testing & Observability",
        description:
          "Set up and maintained automated CI/CD pipelines using Azure DevOps, reducing manual deployment steps and catching regressions early. Introduced NUnit tests to establish a baseline of code reliability. Monitored runtime behavior using Grafana dashboards and Elastic Stack log analysis to proactively detect and investigate production issues.",
        mermaid: `flowchart TD
          DEV[Development] --> PR[Pull Request Review]
          PR --> CI[Build and Test Pipeline]
          CI --> NUNIT[NUnit Test Suite]
          NUNIT --> DEP[Deployment via Azure DevOps]
          DEP --> MON[Grafana Dashboards]
          DEP --> LOG[Elastic Stack Logs]
          MON --> FIX[Bug Investigation and Fix]
          LOG --> FIX
          FIX --> DEV`,
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "At Buhl Data Service, I contributed to Buhl Archive — an enterprise document management platform used by finance and tax departments for audit-compliant storage and retrieval of sensitive business records.",
        "My work spanned the full backend stack: API design, data access layers, scheduled processing pipelines, access control, and search index consistency. I also worked on a WPF desktop client component alongside the backend services.",
        "Over nearly three years as a working student alongside my Computer Science degree, I gained hands-on experience with production-oriented engineering practices — CI/CD automation, structured testing, and operational monitoring.",
      ],
      bullets: [
        "Implemented document ingestion, metadata tagging, versioning, and lifecycle management features.",
        "Built daily scheduled processing pipelines for keyword and tag assignment, keeping the search index consistent.",
        "Designed and maintained REST APIs consumed by internal finance, tax, and records management systems.",
        "Built stable data access layers using Entity Framework Core with MSSQL.",
        "Set up and maintained CI/CD pipelines with Azure DevOps, automating build, test, and deployment.",
        "Introduced NUnit unit tests to establish code reliability and catch regressions early.",
        "Monitored runtime behavior and investigated production issues using Grafana and Elastic Stack.",
      ],
    },
  },
  {
    id: "doner-ordering-system",
    companyName: "Döner App — Real-Time Restaurant Ordering Platform",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Real-time restaurant ordering platform with a customer-facing web app and an admin dashboard, built on Clean Architecture with domain-driven order logic, complex product customization, and live updates via SignalR.",
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
        title: "System Architecture Overview",
        description:
          "High-level architecture showing how the customer app and admin dashboard interact with a Clean Architecture backend, a PostgreSQL database, and a SignalR hub for real-time event broadcasting. The backend enforces domain rules centrally — both clients consume the same API surface and receive the same live updates.",
        mermaid: `flowchart LR
          CustomerApp[Customer Web App]
          AdminApp[Admin Dashboard]
          API[ASP.NET Core API]
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
          "The customer journey from browsing the menu and customizing products to placing an order and tracking its status in real time. Product customization supports portion sizes and ingredient-level modifications, each with their own pricing rules. Once an order is placed, the customer receives live status updates pushed from the admin side without polling.",
        mermaid: `flowchart LR
          Menu[Browse Menu]
          Customize[Customize Product]
          Cart[Shopping Cart]
          Place[Place Order]
          API[Backend API]
          Status[Realtime Status Updates via SignalR]

          Menu --> Customize --> Cart --> Place --> API
          API --> Status
          Status --> Cart`,
        imgArr: [],
      },
      {
        title: "Clean Architecture Backend",
        description:
          "The backend is structured into four clearly separated layers following Clean Architecture principles. The Domain layer owns all business rules and order logic — it has no dependencies on infrastructure or delivery. The Application layer orchestrates use cases. The Infrastructure layer handles persistence and external concerns. The Web layer is the thin HTTP entry point. This structure makes the system independently testable at every layer.",
        mermaid: `flowchart TB
          UI[Web and API Layer]
          App[Application Layer]
          Domain[Domain Layer — Business Rules and Aggregates]
          Infra[Infrastructure Layer — EF Core and PostgreSQL]
          DB[(Database)]

          UI --> App
          App --> Domain
          App --> Infra
          Infra --> DB`,
        imgArr: [],
      },
      {
        title: "Admin Dashboard & Live Order Management",
        description:
          "The admin interface gives restaurant staff a live view of incoming orders. When a customer places an order, it appears instantly in the admin queue via SignalR. Staff can update order states (accepted, preparing, ready, completed) — each state change is immediately broadcast back to the customer app, closing the real-time feedback loop.",
        mermaid: `flowchart LR
          Incoming[New Customer Order]
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
        title: "Domain Model & Order Logic",
        description:
          "Orders are modeled as a domain aggregate with explicit lifecycle states and encapsulated pricing logic. An OrderItem can carry multiple Modifications — ingredient additions or removals — each contributing to the final price. Pricing is computed inside the domain model, not in the application or infrastructure layer, ensuring business rules are never scattered.",
        mermaid: `classDiagram
          class Order {
            Id
            Status
            TotalPrice
            PlacedAt
          }

          class OrderItem {
            ProductId
            Quantity
            PortionSize
            ComputedPrice
          }

          class Modification {
            IngredientId
            Type
            ExtraPrice
          }

          class Product {
            Id
            Name
            BasePrice
            IsAvailable
          }

          Order "1" --> "many" OrderItem
          OrderItem "1" --> "many" Modification
          OrderItem "many" --> "1" Product`,
        imgArr: [],
      },
      {
        title: "Key Engineering Challenges",
        description:
          "The three main technical challenges — order state consistency, real-time synchronization between client apps, and complex pricing logic for customizable products — each guided an architectural decision. Domain events drive state transitions, SignalR broadcasts propagate changes, and pricing logic is fully encapsulated in the domain model.",
        mermaid: `flowchart TB
          C1[Order State Consistency]
          C2[Realtime Synchronization Across Clients]
          C3[Customization and Pricing Complexity]

          C1 --> S1[Domain Aggregate with Explicit State Machine]
          C2 --> S2[SignalR Hub Broadcasts on State Change]
          C3 --> S3[Pricing Encapsulated in Domain Model]

          S1 --> APP[Application Layer Orchestrates]
          S2 --> HUB[SignalR Hub]
          S3 --> DOM[Domain Model — No Pricing Logic Leaks]`,
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Döner App is a personal project that models a real restaurant's ordering workflow end-to-end — from a customer-facing ordering experience to a live admin dashboard for restaurant staff.",
        "The backend is built on Clean Architecture, keeping business rules in a pure domain layer that is fully independent of infrastructure and delivery concerns. Orders are domain aggregates with explicit state transitions, and pricing for customizable products is computed entirely within the domain model.",
        "Real-time communication is handled via SignalR, so both the customer app and the admin dashboard reflect order and availability changes instantly — without polling. The project was also an opportunity to apply production-level practices like CI/CD, Dockerization, and a proper API contract with Swagger documentation.",
      ],
      bullets: [
        "Clean Architecture with strict layer separation: Domain, Application, Infrastructure, and Web.",
        "Domain-driven order aggregate with explicit lifecycle states and encapsulated pricing rules.",
        "Real-time order and availability updates pushed to all connected clients via SignalR.",
        "Complex product customization support — portion sizes and ingredient-level modifications with per-modification pricing.",
        "Dockerized backend for consistent local development and deployment.",
        "Full API documentation via Swagger with React frontend consuming REST endpoints.",
        "Scalable foundation supporting multi-restaurant or multi-location extension.",
      ],
    },
  },
  {
    id: "bachelor-thesis",
    companyName: "Bachelor Thesis — Feature Model Learning & Dimensionality Reduction",
    type: "Academic",
    category: ["Machine Learning", "Backend"],
    shortDescription:
      "Research-oriented bachelor thesis on Feature Model Learning in Software Product Lines — investigating encoding strategies and dimensionality reduction techniques (Linear PCA, Logistic PCA) to improve the scalability and accuracy of configuration space learning.",
    websiteLink: "/projects/university/bachelor-thesis.pdf",
    githubLink: undefined,
    techStack: [],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/projects/bchelorthesis.png",
    pagesInfoArr: [
      {
        title: "Problem Context & Motivation",
        description:
          "Feature Models describe the valid configuration space of a Software Product Line — a structured way of representing which combinations of features are permitted. Learning these models automatically from existing configurations is attractive, but the boolean nature of the configuration space causes a curse of dimensionality: as the number of features grows, the space becomes exponentially large and sparse, making standard machine learning techniques unreliable.",
        mermaid: `flowchart LR
          FM[Feature Model]
          CONF[Existing Configurations]
          SPACE[Boolean Configuration Space]
          DIM[Curse of Dimensionality]
          ML[Feature Model Learning via ML]

          FM --> CONF
          CONF --> SPACE
          SPACE --> DIM
          DIM --> ML`,
        imgArr: [],
      },
      {
        title: "Encoding Strategies",
        description:
          "The thesis compares classical boolean vector encoding — where each feature is a binary dimension — against manually designed encoding strategies that exploit known feature relationships to reduce the dimensionality of the input space while preserving configuration semantics. The goal is to give the learning algorithm a more compact and meaningful representation to work with.",
        mermaid: `flowchart TD
          BOOL[Classical Boolean Vector Encoding]
          MAN[Manual Relationship-Aware Encoding]
          DIM1[High-Dimensional Dataset]
          DIM2[Reduced and Semantically Rich Dataset]
          TRADE[Trade-off: Information Preservation vs Compression]

          BOOL --> DIM1
          MAN --> DIM2
          DIM1 --> TRADE
          DIM2 --> TRADE`,
        imgArr: [],
      },
      {
        title: "Dimensionality Reduction Techniques",
        description:
          "In addition to manual encoding, the thesis applies two automated dimensionality reduction techniques: Linear PCA, which finds principal components in continuous space, and Logistic PCA, which is specifically designed for binary data. Both transform the high-dimensional boolean dataset into a lower-dimensional representation that retains the most discriminative structure for Feature Model Learning.",
        mermaid: `flowchart TD
          DATA[Encoded Boolean Dataset]
          PCA[Linear PCA]
          LPCA[Logistic PCA — Binary-Aware]
          RED[Lower-Dimensional Representation]
          FML[Feature Model Learning]

          DATA --> PCA --> RED
          DATA --> LPCA --> RED
          RED --> FML`,
        imgArr: [],
      },
      {
        title: "Evaluation & Results",
        description:
          "All methods were evaluated empirically across multiple Software Product Line datasets using precision, recall, and runtime as metrics. The results reveal a consistent trade-off: manual encoding and Logistic PCA improve learning accuracy but increase preprocessing cost, while Linear PCA offers faster computation at the expense of some precision. The thesis provides a structured comparison to guide practitioners in choosing the right approach based on their scalability requirements.",
        mermaid: `flowchart LR
          METHODS[Encoding and Reduction Methods]
          PREC[Precision]
          REC[Recall]
          TIME[Runtime]
          TRADE[Accuracy vs Efficiency Trade-off]

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
        "This bachelor thesis investigates the challenge of automatically learning feature models for Software Product Lines from existing configurations using machine learning techniques.",
        "The core problem is the curse of dimensionality: boolean configuration spaces grow exponentially with the number of features, making standard ML approaches inaccurate and computationally expensive at scale.",
        "Two complementary solutions are explored: manually designed encoding strategies that exploit known feature relationships to produce more compact representations, and automated dimensionality reduction via Linear PCA and Logistic PCA.",
        "The approaches are evaluated empirically across multiple real-world Software Product Line datasets using precision, recall, and runtime — revealing a clear and quantified trade-off between model effectiveness and computational efficiency.",
      ],
      bullets: [
        "Analyzed the scalability challenges of Feature Model Learning in large Software Product Lines.",
        "Designed manual encoding strategies that exploit feature relationships to reduce input dimensionality.",
        "Applied Linear PCA and Logistic PCA for automated dimensionality reduction of boolean configuration spaces.",
        "Evaluated learning quality using precision and recall across multiple real-world SPL datasets.",
        "Quantified runtime behavior and identified scalability trade-offs between methods.",
        "Combined software engineering domain knowledge with applied machine learning techniques.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);