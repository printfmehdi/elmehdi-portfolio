import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio.",
    metadata: {
      title: "El Mehdi Rahali – Portfolio",
      description:
        "Backend Software Engineer with a strong focus on C#/.NET, REST APIs, and clean architecture.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "The tools and practices I use every day to ship reliable backend systems — grouped the way you would find them on my CV.",
    metadata: {
      title: "Skills – El Mehdi Rahali",
      description:
        "C#/.NET, ASP.NET Core, Entity Framework Core, SQL, Docker, Kubernetes, Azure, React.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Case studies from enterprise work, side projects and university — with architecture diagrams and the decisions behind them.",
    metadata: {
      title: "Projects – El Mehdi Rahali",
      description:
        "TKD360 enterprise platform, Buhl document archive, 9rayti study platform, restaurant SaaS, AI video automation and bachelor thesis.",
    },
  },
  experience: {
    title: "Experience",
    description:
      "5 years of building production .NET systems — from an enterprise document platform with 3M+ users to a multi-tenant telecom SaaS.",
    metadata: {
      title: "Experience – El Mehdi Rahali",
      description:
        "TKD GmbH (Full-time Software Engineer), Buhl Data Service (Working Student).",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions – El Mehdi Rahali",
      description: "Open-source contributions and community involvement.",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Recruiter, hiring manager or fellow engineer? Send me a message — I am happy to talk about roles, projects and architecture.",
    metadata: {
      title: "Contact – El Mehdi Rahali",
      description: "Ways to reach me: email, LinkedIn, GitHub.",
    },
  },
  resume: {
    title: "Resume",
    description: "My resume as a PDF.",
    metadata: {
      title: "Resume – El Mehdi Rahali",
      description: "Download my CV / resume as a PDF.",
    },
  },
};
