import { getServiceNavItems } from "./services";
import { getLocationNavItems } from "./locations";
import { getProjectCategoryNavItems } from "./projectCategories";

export const company = {
  name: "Restoration Services, Inc.",
  shortName: "RSI",
  tagline: "Building confidence",
  description:
    "Restoration Services, Inc. draws on nearly a century of field experience in commercial roofing, waterproofing, and building restoration services serving Texas.",
  legacyFounded: 1932, // Hou-Tex Roofing founded
  rsiFounded: 1982, // RSI officially formed
  yearsOfLegacy: new Date().getFullYear() - 1932,

  contact: {
    phone: "(281) 890-1880",
    phoneRaw: "2818901880",
    email: "info@rsitx.com",
    address: {
      street: "9810 Fairbanks N. Houston Rd.",
      city: "Houston",
      state: "TX",
      zip: "77064",
      full: "9810 Fairbanks N. Houston Rd., Houston, TX 77064",
    },
    googleMapsUrl:
      "https://www.google.com/maps/place/9810+Fairbanks+N+Houston+Rd,+Houston,+TX+77064",
  },

  serviceArea: "Southeast Texas",

  memberships: ["NRCA", "RCAT", "WSRCA", "RCI", "AGC", "ASA", "ICRI"],

  social: {
    linkedin: "#",
    facebook: "#",
  },
} as const;

interface NavChild {
  name: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  children?: NavChild[];
}

interface Navigation {
  main: NavItem[];
  footer: {
    services: { name: string; href: string }[];
    company: { name: string; href: string }[];
  };
}

// Navigation is generated from data files to ensure single source of truth
export const navigation: Navigation = {
  main: [
    {
      name: "Services",
      href: "/services",
      children: getServiceNavItems(),
    },
    {
      name: "Projects",
      href: "/projects",
      children: getProjectCategoryNavItems(),
    },
    {
      name: "Locations",
      href: "/locations",
      children: getLocationNavItems(),
    },
    {
      name: "Recognition",
      href: "/recognition",
      children: [
        { name: "Good Brick Award 2025", href: "/recognition/good-brick-award-2025" },
      ],
    },
    { name: "Products", href: "/products" },
    { name: "Green Initiative", href: "/green-initiative" },
    {
      name: "Careers",
      href: "/careers",
      children: [
        { name: "Employment", href: "/careers" },
        { name: "Job Opportunities", href: "#", external: true }, // TBD - external link
      ],
    },
    { name: "About", href: "/about" },
  ],
  footer: {
    services: getServiceNavItems().filter((item) => item.href !== "/services"),
    company: [
      { name: "About Us", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Recognition", href: "/recognition" },
      { name: "Products", href: "/products" },
      { name: "Green Initiative", href: "/green-initiative" },
      { name: "Contact", href: "/contact" },
    ],
  },
};
