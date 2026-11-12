export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export const routesConfig: { mainNav: NavItem[] } = {
  mainNav: [
    { title: "Experience", href: "/experience" },
    { title: "Projects", href: "/projects" },
    { title: "Skills", href: "/skills" },
    { title: "Contact", href: "/contact" },
  ],
};
