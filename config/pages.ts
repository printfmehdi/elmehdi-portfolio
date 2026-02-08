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
    description: "Willkommen auf meinem Portfolio.",
    metadata: {
      title: "El Mehdi Rahali – Portfolio",
      description:
        "Softwareentwickler mit Schwerpunkt auf C#/.NET, Backend, REST-APIs und Clean Architecture.",
    },
  },
  skills: {
    title: "Skills",
    description: "Technologien und Kompetenzen, die ich in Projekten einsetze.",
    metadata: {
      title: "Skills – El Mehdi Rahali",
      description: "C#/.NET, ASP.NET Core, EF Core, SQL, Docker, Azure, React.",
    },
  },
  projects: {
    title: "Projekte",
    description: "Ausgewählte Projekte – Praxis, Uni und Eigenentwicklungen.",
    metadata: {
      title: "Projekte – El Mehdi Rahali",
      description: "Döner-App, Bachelorarbeit, Monitoring-Dashboard und mehr.",
    },
  },
  experience: {
    title: "Erfahrung",
    description: "Beruflicher Werdegang und relevante Stationen.",
    metadata: {
      title: "Erfahrung – El Mehdi Rahali",
      description: "TKD GmbH (Vollzeit), Buhl Data Service (Werkstudent).",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-Source Beiträge und Community-Aktivitäten.",
    metadata: {
      title: "Contributions – El Mehdi Rahali",
      description: "Open-Source Beiträge und Community-Aktivitäten.",
    },
  },
  contact: {
    title: "Kontakt",
    description: "Schreib mir – ich freue mich über Austausch und Chancen.",
    metadata: {
      title: "Kontakt – El Mehdi Rahali",
      description: "Kontaktmöglichkeiten: E-Mail, LinkedIn, GitHub.",
    },
  },
  resume: {
    title: "Lebenslauf",
    description: "Mein Lebenslauf als PDF.",
    metadata: {
      title: "Lebenslauf – El Mehdi Rahali",
      description: "Download CV / Resume als PDF.",
    },
  },
};
