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
    description: "Technologies and competencies I apply in real-world projects.",
    metadata: {
      title: "Skills – El Mehdi Rahali",
      description:
        "C#/.NET, ASP.NET Core, Entity Framework Core, SQL, Docker, Kubernetes, Azure, React.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Selected projects from professional work, university, and personal development.",
    metadata: {
      title: "Projects – El Mehdi Rahali",
      description:
        "Döner ordering system, bachelor thesis, monitoring dashboards, and more.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional background and relevant roles.",
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
    description: "Get in touch — I’m happy to connect and exchange ideas.",
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
