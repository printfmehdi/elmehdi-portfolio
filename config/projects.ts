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
  /** Ongoing projects show "Present" instead of an end date. */
  ongoing?: boolean;
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
    ongoing: true,
    companyLogoImg: "/projects/tkd.png",
    pagesInfoArr: [
      {
        title: "Backend APIs & Multi-Tenancy",
        description:
          "Designed and evolved tenant-aware REST APIs with strict per-tenant data isolation, permission-gated access, and backward-compatible contracts across a large enterprise codebase. Every data access path flows through global EF Core query filters that enforce tenant boundaries at the database level — eliminating the risk of cross-tenant data leaks.",
        mermaid: `flowchart TB
  subgraph clients["Clients"]
    direction TB
    PORTAL["Customer portal"]:::client
    ADMIN["Admin backoffice"]:::client
  end
  subgraph api["ASP.NET Core API"]
    direction LR
    AUTH["AuthN / AuthZ<br/><small>OIDC · roles · permissions</small>"]:::core --> TENANT["Tenant resolution<br/><small>token claims → TenantContext</small>"]:::core --> APP["Application services<br/><small>contracts · devices · tariffs</small>"]:::svc
  end
  subgraph data["Data access"]
    direction LR
    GRID["Gridify<br/><small>filtering · sorting · paging</small>"]:::svc --> EF["EF Core<br/><small>global tenant query filters</small>"]:::core
  end
  DB[("PostgreSQL / SQL Server")]:::store
  clients -->|"JWT bearer token"| api
  api --> data
  data -->|"WHERE TenantId = current tenant"| DB`,
        imgArr: [],
      },
      {
        title: "Distributed Workflows & Temporal",
        description:
          "Implemented stateful, long-running workflows using Temporal to orchestrate telecom-related processes — including mobile contract provisioning, device assignments, and tariff changes — with deterministic execution, configurable retry strategies, and structured failure handling. Temporal's durable execution model ensures workflows survive process restarts and infrastructure failures without losing state.",
        mermaid: `flowchart TB
  EVT(["Contract change<br/><small>requested by customer</small>"]):::client
  subgraph wf["Temporal workflow · durable"]
    direction TB
    V["Validate<br/><small>activity</small>"]:::svc
    P["Submit to provider<br/><small>activity</small>"]:::ext
    W{{"Await provider<br/><small>callback / signal</small>"}}:::queue
    S["Persist state<br/><small>activity</small>"]:::svc
  end
  DONE(["Contract updated"]):::ok
  COMP["Compensate<br/><small>roll back · notify</small>"]:::fail
  EVT --> V --> P --> W --> S --> DONE
  P -. "retry with backoff" .-> P
  W -. "timeout" .-> COMP`,
        imgArr: [],
      },
      {
        title: "B2B Integrations",
        description:
          "Integrated external enterprise APIs including Telekom and Vodafone B2B interfaces, Microsoft Graph, and ServiceNow. Built abstraction layers to isolate third-party API contracts from internal domain logic, making integrations replaceable and testable. Handled authentication flows, rate limiting, and error recovery for each provider.",
        mermaid: `flowchart TB
  subgraph core["TKD360 core"]
    direction LR
    DOM["Domain services"]:::core --> PORT["Integration ports<br/><small>provider-agnostic interfaces</small>"]:::core --> ADP["Provider adapters<br/><small>typed HttpClients · retries · auth</small>"]:::svc
  end
  subgraph ext["External systems"]
    direction TB
    TEL["Telekom · Vodafone<br/><small>B2B APIs</small>"]:::ext
    MS["Intune · Entra ID<br/><small>Microsoft Graph</small>"]:::ext
    SN["ServiceNow"]:::ext
    WZ["WeClapp · Zendesk"]:::ext
  end
  OBS["Serilog → Grafana / Elastic<br/><small>correlation ID per call</small>"]:::ops
  core <-->|"REST · webhooks"| ext
  core -.->|"structured logs"| OBS`,
        imgArr: [],
      },
      {
        title: "Webhooks & Background Processing",
        description:
          "Built resilient webhook handlers and Quartz-based background jobs for processing external system callbacks and scheduled synchronization tasks. Handlers are fully idempotent — duplicate events are detected and safely ignored. All processing is transactional, with dead-letter handling and structured logging for operational visibility.",
        mermaid: `flowchart TB
  EXT["Provider<br/><small>status webhook</small>"]:::ext
  subgraph ingest["① Ingest & acknowledge"]
    direction LR
    EP["Webhook endpoint"]:::core --> SIG["Verify signature<br/><small>& payload schema</small>"]:::svc --> IDEM["Idempotency check<br/><small>event ID seen before?</small>"]:::core
  end
  SKIP(["Duplicate → ignore<br/><small>200 OK, no side effects</small>"]):::ok
  Q[("Durable job queue")]:::store
  subgraph proc["② Background · Quartz"]
    direction LR
    JOB["Worker"]:::queue --> RULES["Business rules<br/><small>transactional update</small>"]:::svc --> DB[("Domain state")]:::store
  end
  DLQ["Dead letter<br/><small>+ alert</small>"]:::fail
  EXT --> ingest
  ingest -->|"duplicate"| SKIP
  ingest -->|"new event"| Q
  Q --> proc
  proc -.->|"retries exhausted"| DLQ`,
        imgArr: [],
      },
      {
        title: "API Gateway & Routing with YARP",
        description:
          "Implemented a reverse-proxy layer using YARP (Yet Another Reverse Proxy) to securely expose and route backend services. Configured dynamic route resolution, authentication forwarding, and request transformation to decouple frontend consumers from internal service topology.",
        mermaid: `flowchart TB
  C["Web & mobile clients"]:::client
  subgraph gw["YARP reverse proxy"]
    direction TB
    AUTH["Auth forwarding<br/><small>token validation</small>"]:::core
    ROUTE["Route matching<br/><small>/api/{module}/**</small>"]:::core
    TX["Request transforms<br/><small>headers · path rewrite</small>"]:::svc
  end
  subgraph backends["Backend services"]
    direction TB
    S1["Platform API"]:::svc
    S2["Shop API"]:::svc
    S3["Internal services"]:::svc
  end
  C -->|"single public entry point"| AUTH
  AUTH --> ROUTE --> TX
  TX --> S1 & S2 & S3`,
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
    id: "doner-ordering-system",
    companyName: "Restaurant SaaS — Real-Time Ordering Platform",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "End-to-end real-time restaurant ordering system used in a real-world environment, featuring domain-driven design, live synchronization via SignalR, and production-ready admin tooling.",
    githubLink: "https://github.com/printfmehdi/HerrBiggie",
    techStack: [
      "C#",
      "ASP.NET Core",
      ".NET",
      "Entity Framework Core",
      "PostgreSQL",
      "SignalR",
      "Clean Architecture",
      "Docker",
      "React",
      "Swagger",
      "CI/CD",
      "Git",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2027-01-01"),
    ongoing: true,
    companyLogoImg: "/projects/DönerApp.png",

    pagesInfoArr: [
       {
        title: "System Architecture Overview",
        description:
          "Designed a scalable Clean Architecture backend with strict separation of concerns. Both customer and admin applications interact with a shared API and receive real-time updates via SignalR.",
        mermaid: `flowchart TB
  subgraph clients["React clients"]
    direction TB
    CUST["Customer web app<br/><small>menu · cart · checkout</small>"]:::client
    KDS["Kitchen dashboard<br/><small>live order board</small>"]:::client
  end
  subgraph api["Clean Architecture API"]
    direction LR
    WEB["Web / API layer"]:::svc --> APP["Application<br/><small>CQRS · MediatR</small>"]:::core --> DOM["Domain<br/><small>Order aggregate · pricing rules</small>"]:::core
  end
  HUB{{"SignalR hub"}}:::queue
  DB[("PostgreSQL")]:::store
  clients -->|"REST"| api
  api -->|"EF Core"| DB
  api -->|"OrderStatusChanged"| HUB
  HUB -.->|"push, no polling"| clients`,
        imgArr: []
      },
      {
        title: "Customer Ordering Experience",
        description:
          "Built a mobile-first ordering experience allowing customers to browse, customize, and place orders seamlessly. The checkout flow supports both online and cash payments, while real-time order updates are pushed via SignalR without polling.",
        imgArr: [
          "/projects/herrbiggie/Warenkorb.png",
          "/projects/herrbiggie/bestellungen.png"
        ]
      },
      {
        title: "Advanced Product Customization",
        description:
          "Implemented a flexible customization system supporting ingredient-level modifications and portion sizes. Each modification dynamically impacts pricing through domain-driven rules, ensuring consistency across all clients.",
        imgArr: [
          "/projects/herrbiggie/zutaten.png",
          "/projects/herrbiggie/menu.png"
        ]
      },
      {
        title: "Admin Dashboard & Live Order Management",
        description:
          "Designed and implemented a real-time kitchen dashboard enabling staff to manage incoming orders with zero latency. Orders are streamed via SignalR and organized into state-driven columns (Pending, Preparing, Ready, Picked Up). State transitions trigger instant synchronization across all connected clients.",
        mermaid: `stateDiagram-v2
  direction LR
  [*] --> Pending: order placed
  Pending --> Preparing: kitchen accepts
  Preparing --> Ready: food done
  Ready --> PickedUp: handed over
  Pending --> Cancelled: rejected
  PickedUp --> [*]
  Cancelled --> [*]`,
        imgArr: [
          "/projects/herrbiggie/admin-dashbaord.png"
        ]
      },
      {
        title: "Operational Insights & Metrics",
        description:
          "Developed a real-time analytics dashboard providing insights into order volume, preparation time, and product performance. Enables data-driven optimization of kitchen operations.",
        imgArr: [
          "/projects/herrbiggie/insights.png"
        ]
      },
      {
        title: "System Configuration & Promotions",
        description:
          "Implemented an admin configuration panel supporting system behavior control, including auto-refresh intervals, notification settings, and coupon management with expiration logic.",
        imgArr: [
          "/projects/herrbiggie/settings.png"
        ]
      },
      {
        title: "Dynamic Menu Availability",
        description:
          "Enabled real-time product availability management, allowing staff to toggle menu items instantly. Changes are propagated live to all connected clients, preventing invalid orders.",
        imgArr: [
          "/projects/herrbiggie/verfuegbarkeit.png"
        ]
      }
    ],

    descriptionDetails: {
      paragraphs: [
        "This restaurant SaaS is a full-stack system modeling a real-world restaurant workflow end-to-end — from customer ordering to kitchen operations.",
        "The backend follows Clean Architecture principles, ensuring strict separation of concerns and testability. Business logic is encapsulated within a domain-driven design, where orders act as aggregates with explicit state transitions.",
        "Real-time communication via SignalR ensures both customer and admin applications stay fully synchronized without polling, providing a seamless and responsive user experience.",
      ],
      bullets: [
        "Architected a scalable backend using Clean Architecture (Domain, Application, Infrastructure, Web).",
        "Implemented real-time synchronization using SignalR for instant order state updates.",
        "Designed domain-driven order aggregates with explicit lifecycle and pricing logic.",
        "Built advanced product customization with ingredient-level modifications and dynamic pricing.",
        "Developed admin dashboard for real-time kitchen operations and order management.",
        "Integrated PostgreSQL with Entity Framework Core for reliable data persistence.",
        "Containerized backend using Docker and implemented CI/CD pipelines.",
        "Exposed RESTful APIs with Swagger documentation consumed by React frontend.",
      ],
    },
  },
  {
    id: "9rayti-study-platform",
    companyName: "9rayti — EdTech Study Platform",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Course-centric study platform where Moroccan university students share, find and discuss study material — built as a Clean Architecture modular monolith with a secure upload pipeline, full-text search, document-anchored discussions and a reputation system.",
    techStack: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "MSSQL",
      "Clean Architecture",
      "CQRS",
      "FluentValidation",
      ".NET Aspire",
      "MinIO",
      "ClamAV",
      "Docker",
      "xUnit",
      "GitHub Actions",
      "React",
      "Typescript",
      "TanStack Query",
      "Tailwind CSS",
      "Git",
    ],
    startDate: new Date("2026-04-01"),
    endDate: new Date("2027-01-01"),
    ongoing: true,
    companyLogoImg: "/projects/9rayti.svg",
    pagesInfoArr: [
      {
        title: "Modular Monolith & Request Flow",
        description:
          "The backend is a Clean Architecture modular monolith (Api, Application, Domain, Infrastructure, SharedKernel). Controllers only talk to a custom command/query dispatcher; requests pass FluentValidation before reaching their handler. Side effects such as reputation points, notifications and search re-indexing never run inline — they are raised as domain events, written to a transactional outbox and processed asynchronously.",
        mermaid: `flowchart TB
  SPA["React SPA"]:::client
  subgraph host["Request pipeline"]
    direction LR
    API["Controllers"]:::svc --> DISP["Dispatcher<br/><small>commands · queries</small>"]:::core --> VAL["FluentValidation"]:::svc --> H["Handlers"]:::core
  end
  subgraph tx["One database transaction"]
    direction TB
    DB[("SQL Server<br/><small>entity state</small>")]:::store
    OUT[("Outbox table<br/><small>domain events</small>")]:::store
  end
  PROC["Outbox processor<br/><small>background worker</small>"]:::queue
  subgraph fx["Async side effects"]
    direction TB
    REP["Reputation"]:::svc
    NOT["Notifications"]:::svc
    IDX["Search indexing"]:::svc
  end
  SPA --> host
  host --> tx
  tx -->|"poll outbox"| PROC
  PROC --> fx`,
        imgArr: [],
      },
      {
        title: "Secure Upload & Ingestion Pipeline",
        description:
          "Untrusted user files never reach public storage unchecked. Uploads land in a quarantine bucket, are scanned by ClamAV, inspected with PdfPig, matched against a SHA-256 blocklist and only then promoted to the originals bucket. A background worker derives thumbnails, rejected files are purged, and downloads are served through short-lived signed S3 URLs.",
        mermaid: `flowchart TB
  UP["Student upload<br/><small>multipart</small>"]:::client
  Q[("Quarantine bucket<br/><small>private</small>")]:::store
  subgraph checks["Security checks"]
    direction LR
    AV["ClamAV<br/><small>virus scan</small>"]:::core --> PDF["PdfPig<br/><small>structure check</small>"]:::core --> HASH["SHA-256<br/><small>blocklist</small>"]:::core
  end
  X["Reject & purge"]:::fail
  ORIG[("Originals bucket")]:::store
  subgraph serve["Serving"]
    direction LR
    TH["Thumbnail worker"]:::queue --> DER[("Derived bucket")]:::store
    DL(["Signed, short-lived<br/>download URL"]):::ok
  end
  UP --> Q --> checks
  checks -->|"clean"| ORIG
  checks -.->|"any check fails"| X
  ORIG --> serve`,
        imgArr: [],
      },
      {
        title: "Search & Discovery",
        description:
          "A dedicated search projection is kept current by a background indexing worker. Queries use SQL Server Full-Text Search with an automatic LIKE fallback when Full-Text is not installed, and support facets, ranking, highlighting and autocomplete. On top of that, students get a personalised \"for you\" feed, trends and a leaderboard.",
        mermaid: `flowchart TB
  subgraph write["Write side"]
    direction TB
    EV["Document events"]:::svc
    JOB[("Index jobs")]:::store
    W["Search index worker"]:::queue
  end
  PROJ[("Search projection")]:::store
  subgraph read["Read side"]
    direction TB
    QRY["Search request"]:::client
    PROV{"Full-Text<br/>installed?"}:::core
    FTS["SQL Server Full-Text"]:::svc
    LIKE["LIKE fallback"]:::svc
  end
  RES(["Facets · ranking<br/>highlights · autocomplete"]):::ok
  EV --> JOB --> W --> PROJ
  QRY --> PROV
  PROV -->|"yes"| FTS
  PROV -->|"no"| LIKE
  FTS & LIKE -->|"query"| PROJ
  PROJ --> RES`,
        imgArr: [],
      },
      {
        title: "Discussions, Reputation & Moderation",
        description:
          "Documents are the social object of the platform. Students can open discussions anchored to a highlighted passage of a PDF or at course level, reply, upvote, @mention others, subscribe and mark accepted answers. Contributions earn reputation points via outbox handlers, in-app notifications keep users engaged, and admins can lock or hide threads and work through a report queue.",
        mermaid: `flowchart TB
  DOC["PDF viewer"]:::client
  SEL["Highlight a passage"]:::client
  subgraph thread["Anchored discussion"]
    direction TB
    Q["Question"]:::core
    R["Replies · upvotes<br/><small>@mentions</small>"]:::svc
    A(["Accepted answer"]):::ok
  end
  EVT[("Outbox events")]:::store
  PTS["Reputation points"]:::queue
  NOT["Notifications"]:::queue
  RPT["Report"]:::fail
  MOD["Admin moderation<br/><small>lock · hide</small>"]:::svc
  DOC --> SEL --> Q --> R --> A
  R & A --> EVT
  EVT --> PTS & NOT
  R -.-> RPT --> MOD`,
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "9rayti is a study platform for Moroccan university students, inspired by StudyDrive and adapted to Moroccan universities. Students share, discover, organise and discuss course-specific material such as lecture notes, exercises, exams and summaries.",
        "The backend is an ASP.NET Core (.NET 10) modular monolith following Clean Architecture, with EF Core on SQL Server, S3-compatible object storage (MinIO) and a local development environment orchestrated by .NET Aspire. Asynchronous side effects run through a transactional outbox and in-process background workers.",
        "The React 19 frontend is mobile-first and localised (French first, Arabic in progress), built with Vite, React Router, TanStack Query, React Hook Form, Zod and Tailwind CSS. Every pull request is built, linted and tested in GitHub Actions.",
      ],
      bullets: [
        "Designed a Clean Architecture modular monolith with a custom command/query dispatcher and FluentValidation pipeline.",
        "Implemented a transactional outbox with domain events so reputation, notifications and search indexing never run inline in requests.",
        "Built a secure upload pipeline: quarantine → ClamAV scan → PDF inspection → SHA-256 blocklist → promotion → thumbnails.",
        "Implemented search with a projection table, background indexer, SQL Server Full-Text and a LIKE fallback, plus facets and autocomplete.",
        "Developed document-anchored and course-level discussions with replies, upvotes, mentions, accepted answers and moderation.",
        "Added JWT authentication with HttpOnly refresh-token cookies, session management, rate limiting and role-based admin access.",
        "Set up CI with GitHub Actions for backend build and integration tests and frontend lint, test and build.",
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
        mermaid: `flowchart TB
  SRC["Customer apps<br/><small>upload tax documents</small>"]:::client
  API["Archive API<br/><small>ASP.NET Core · access control</small>"]:::core
  K{{"Apache Kafka<br/><small>DocumentUploaded</small>"}}:::queue
  subgraph pipe["Pipeline · CQRS / MediatR"]
    direction LR
    AV["Virus scan"]:::svc --> OCR["OCR"]:::svc --> META["Metadata extraction"]:::core --> VER["Versioning"]:::svc
  end
  subgraph stores["Storage & search"]
    direction TB
    ALF[("Alfresco<br/><small>audit-compliant storage</small>")]:::store
    ES[("Elasticsearch<br/><small>full-text index</small>")]:::store
  end
  SRC --> API --> K --> pipe --> stores`,
        imgArr: [],
      },
      {
        title: "Keyword Management & Daily Processing",
        description:
          "Built scheduled processing services that run daily to update document keyword and tag assignments, keeping the search index consistent with the latest classification rules. The pipeline extracts metadata from new and changed documents, applies business-defined keyword logic, validates output, and persists results — ensuring long-term searchability and data integrity.",
        mermaid: `flowchart TB
  subgraph prep["Nightly batch · prepare"]
    direction LR
    CRON(["Nightly schedule"]):::queue --> LOAD["Load new & changed<br/>documents"]:::svc --> EXT["Extract metadata"]:::svc
  end
  subgraph apply["Classify"]
    direction LR
    RULES["Apply keyword<br/>& tag rules"]:::core --> VAL["Validate<br/><small>business rules</small>"]:::core
  end
  subgraph out["Results"]
    direction LR
    SAVE[("Persist tags<br/><small>MSSQL</small>")]:::store --> IDX[("Refresh search index")]:::store
  end
  ERR["Log & alert"]:::fail
  prep --> apply
  apply -->|"valid"| out
  apply -.->|"invalid"| ERR`,
        imgArr: [],
      },
      {
        title: "REST API Design & Internal Integration",
        description:
          "Designed and maintained REST APIs consumed by internal systems across departments. APIs follow consistent conventions with Swagger documentation, versioning awareness, and clear error contracts — making them reliable integration points for finance, tax, and records management teams.",
        mermaid: `flowchart TB
  subgraph consumers["Connected channels"]
    direction TB
    APP["Customer apps"]:::client
    FA["Tax authorities<br/><small>Finanzamt</small>"]:::ext
    BI["Internal BI"]:::ext
  end
  subgraph api["Buhl Archive API"]
    direction LR
    SW["OpenAPI contract<br/><small>Swagger</small>"]:::svc -.-> VAL["Request validation<br/><small>clear error contracts</small>"]:::core --> SVC["Service layer"]:::svc
  end
  DB[("MSSQL")]:::store
  consumers <-->|"REST · JSON"| api
  api -->|"EF Core"| DB`,
        imgArr: [],
      },
      {
        title: "CI/CD, Testing & Observability",
        description:
          "Set up and maintained automated CI/CD pipelines using Azure DevOps, reducing manual deployment steps and catching regressions early. Introduced NUnit tests to establish a baseline of code reliability. Monitored runtime behavior using Grafana dashboards and Elastic Stack log analysis to proactively detect and investigate production issues.",
        mermaid: `flowchart TB
  subgraph dev["Develop"]
    direction LR
    DEV["Feature branch"]:::client --> PR["Pull request<br/><small>code review</small>"]:::core
  end
  subgraph ci["Azure DevOps pipeline"]
    direction LR
    B["Build"]:::svc --> T["NUnit tests"]:::svc --> DEP["Deploy<br/><small>Docker · Kubernetes</small>"]:::svc
  end
  subgraph ops["Observability"]
    direction TB
    G["Grafana dashboards"]:::ops
    E["Elastic Stack logs"]:::ops
  end
  FIX["Root-cause fix"]:::fail
  dev --> ci --> ops
  ops -.->|"incident"| FIX
  FIX -.->|"next iteration"| dev`,
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
    id: "ai-video-automation",
    companyName: "AI Video Automation System",
    type: "Personal",
    category: ["AI", "Backend"],
    shortDescription:
      "Pipeline that turns an idea into a finished, AI-generated video — LLM-based agents write the script, text-to-speech voices it and an automated media pipeline renders the result.",
    techStack: ["Python", "LLM APIs", "AI Agents", "TTS", "FFmpeg", "Git"],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2027-01-01"),
    ongoing: true,
    companyLogoImg: "/projects/ai-video.svg",
    pagesInfoArr: [
      {
        title: "Agent Pipeline",
        description:
          "The system is composed of specialised LLM-based agents. A planning agent turns a topic into a structured outline, a writing agent produces the script, and downstream steps generate voice-over, visuals and the final render. Each step has a clear input/output contract so steps can be retried or swapped independently.",
        mermaid: `flowchart TB
  IDEA(["Topic"]):::client
  subgraph agents["LLM agents"]
    direction TB
    PLAN["Planner<br/><small>outline · scenes</small>"]:::core
    WRITE["Script writer"]:::core
  end
  subgraph media["Media generation"]
    direction TB
    TTS["Text-to-speech"]:::ext
    VIS["Visual generation"]:::ext
  end
  RENDER["FFmpeg render<br/><small>audio + visuals + captions</small>"]:::svc
  OUT(["Finished video"]):::ok
  IDEA --> PLAN --> WRITE
  WRITE --> TTS & VIS
  TTS & VIS --> RENDER --> OUT`,
        imgArr: [],
      },
      {
        title: "Reliability & Error Handling",
        description:
          "External AI and media APIs fail in many creative ways — timeouts, rate limits, malformed output. The pipeline stabilises these integrations with retries and backoff, output validation between steps, and resumable jobs so a failure late in the pipeline does not throw away earlier, expensive work.",
        mermaid: `flowchart TB
  STEP["Pipeline step"]:::svc
  CALL["External API call<br/><small>LLM · TTS</small>"]:::ext
  CHK{"Output<br/>valid?"}:::core
  RETRY["Retry<br/><small>exponential backoff</small>"]:::queue
  CKPT[("Checkpoint")]:::store
  NEXT(["Next step"]):::ok
  FAIL["Mark failed<br/><small>resume later from checkpoint</small>"]:::fail
  STEP --> CALL --> CHK
  CHK -->|"yes"| CKPT --> NEXT
  CHK -->|"no / error"| RETRY --> CALL
  RETRY -.->|"retries exhausted"| FAIL`,
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "An ongoing side project exploring how far AI agents can take content production end-to-end: from a short topic to a finished video, without manual editing.",
        "The interesting engineering problems are the same ones I solve in backend systems at work — orchestrating multi-step workflows over unreliable external services, keeping steps idempotent and resumable, and making failures visible.",
      ],
      bullets: [
        "Designed LLM-based agents for content planning, script writing and media generation.",
        "Integrated text-to-speech and media processing (FFmpeg) into an automated rendering pipeline.",
        "Improved reliability by stabilising API integrations and handling asynchronous failure cases.",
        "Structured the pipeline into resumable steps with validated inputs and outputs.",
      ],
    },
  },
  {
    id: "bachelor-thesis",
    companyName: "Bachelor Thesis — Feature Model Learning & Dimensionality Reduction",
    type: "Academic",
    category: ["Machine Learning", "Data/ML"],
    shortDescription:
      "Research-oriented bachelor thesis on Feature Model Learning in Software Product Lines — investigating encoding strategies and dimensionality reduction techniques (Linear PCA, Logistic PCA) to improve the scalability and accuracy of configuration space learning.",
    websiteLink: "/projects/university/bachelor-thesis.pdf",
    githubLink: undefined,
    techStack: ["Python", "R", "AutoML", "Shell", "Singularity", "Git"],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/projects/bchelorthesis.png",
    pagesInfoArr: [
      {
        title: "Problem Context & Motivation",
        description:
          "Feature Models describe the valid configuration space of a Software Product Line — a structured way of representing which combinations of features are permitted. Learning these models automatically from existing configurations is attractive, but the boolean nature of the configuration space causes a curse of dimensionality: as the number of features grows, the space becomes exponentially large and sparse, making standard machine learning techniques unreliable.",
        mermaid: `flowchart TB
  SPL["Software Product Line<br/><small>n optional features</small>"]:::client
  CONF[("Known valid<br/>configurations")]:::store
  SPACE["Boolean space<br/><small>up to 2ⁿ configurations</small>"]:::fail
  ML["ML classifier<br/><small>valid vs. invalid</small>"]:::core
  FM(["Learned feature model"]):::ok
  SPL --> CONF --> ML
  SPL --> SPACE -.->|"curse of dimensionality"| ML
  ML --> FM`,
        imgArr: [],
      },
      {
        title: "Encoding Strategies",
        description:
          "The thesis compares classical boolean vector encoding — where each feature is a binary dimension — against manually designed encoding strategies that exploit known feature relationships to reduce the dimensionality of the input space while preserving configuration semantics. The goal is to give the learning algorithm a more compact and meaningful representation to work with.",
        mermaid: `flowchart TB
  CONF[("Configurations")]:::store
  subgraph enc["Encoding strategies"]
    direction TB
    BOOL["Boolean vector<br/><small>one dimension per feature</small>"]:::svc
    MAN["Relationship-aware encoding<br/><small>groups · dependencies</small>"]:::core
  end
  HI["High-dimensional,<br/>sparse dataset"]:::fail
  LO(["Compact, semantically<br/>rich dataset"]):::ok
  CONF --> BOOL --> HI
  CONF --> MAN --> LO`,
        imgArr: [],
      },
      {
        title: "Dimensionality Reduction Techniques",
        description:
          "In addition to manual encoding, the thesis applies two automated dimensionality reduction techniques: Linear PCA, which finds principal components in continuous space, and Logistic PCA, which is specifically designed for binary data. Both transform the high-dimensional boolean dataset into a lower-dimensional representation that retains the most discriminative structure for Feature Model Learning.",
        mermaid: `flowchart TB
  DATA[("Encoded dataset")]:::store
  subgraph dr["Dimensionality reduction"]
    direction TB
    PCA["Linear PCA<br/><small>continuous components</small>"]:::svc
    LPCA["Logistic PCA<br/><small>designed for binary data</small>"]:::core
  end
  RED["Reduced feature space"]:::svc
  AUTO["AutoML training<br/><small>AutoGluon</small>"]:::queue
  FML(["Feature model learning"]):::ok
  DATA --> PCA & LPCA
  PCA & LPCA --> RED --> AUTO --> FML`,
        imgArr: [],
      },
      {
        title: "Evaluation & Results",
        description:
          "All methods were evaluated empirically across multiple Software Product Line datasets using precision, recall, and runtime as metrics. The results reveal a consistent trade-off: manual encoding and Logistic PCA improve learning accuracy but increase preprocessing cost, while Linear PCA offers faster computation at the expense of some precision. The thesis provides a structured comparison to guide practitioners in choosing the right approach based on their scalability requirements.",
        mermaid: `flowchart TB
  subgraph methods["Methods compared"]
    direction TB
    M1["Boolean baseline"]:::svc
    M2["Manual encoding"]:::svc
    M3["Linear PCA"]:::svc
    M4["Logistic PCA"]:::svc
  end
  PIPE["Automated experiment pipeline<br/><small>Shell · Singularity</small>"]:::queue
  subgraph metrics["Metrics"]
    direction TB
    P["Precision"]:::core
    R["Recall"]:::core
    T["Runtime"]:::core
  end
  RES(["Accuracy vs. efficiency<br/>trade-off"]):::ok
  M1 & M2 & M3 & M4 --> PIPE
  PIPE --> P & R & T
  P & R & T --> RES`,
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

const featuredIds = [
  "tkd360-enterprise-platform",
  "buhl-archive-document-management",
  "9rayti-study-platform",
  "doner-ordering-system",
];

export const featuredProjects: ProjectInterface[] = featuredIds
  .map((id) => Projects.find((p) => p.id === id)!)
  .filter(Boolean);