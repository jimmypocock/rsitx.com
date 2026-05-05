import { getServiceNavItems } from "./services";
import { getLocationNavItems } from "./locations";
import { getProjectCategoryNavItems } from "./projectCategories";

const LEGACY_FOUNDED_YEAR = 1932; // Hou-Tex Roofing — RSI traces its lineage here

export const company = {
  name: "Restoration Services, Inc.",
  shortName: "RSI",
  tagline: "Building confidence",
  description:
    "Restoration Services, Inc. draws on nearly a century of field experience in commercial roofing, waterproofing, and building restoration services serving Texas.",
  yearsOfLegacy: new Date().getFullYear() - LEGACY_FOUNDED_YEAR,

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

  memberships: [
    { id: "nrca", name: "NRCA", fullName: "National Roofing Contractors Association", logo: "/images/logos/memberships/nrca.png" },
    { id: "wsrca", name: "WSRCA", fullName: "Western States Roofing Contractors Association", logo: "/images/logos/memberships/wsrca.png" },
    { id: "iibec", name: "IIBEC", fullName: "International Institute of Building Enclosure Consultants", logo: "/images/logos/memberships/iibec.png" },
    { id: "agc", name: "AGC", fullName: "Associated General Contractors", logo: "/images/logos/memberships/agc.png" },
    { id: "asa", name: "ASA", fullName: "American Subcontractors Association", logo: "/images/logos/memberships/asa.png" },
    { id: "icri", name: "ICRI", fullName: "International Concrete Repair Institute", logo: "/images/logos/memberships/icri.png" },
  ],

  // Notable past clients from marketing materials
  notableClients: [
    { id: "tmc", name: "Texas Medical Center", logo: "/images/logos/clients/tmc-dark.png" },
    { id: "mdanderson", name: "MD Anderson Cancer Center", logo: "/images/logos/clients/mdanderson.webp" },
    { id: "hilton", name: "Hilton", logo: "/images/logos/clients/hilton.svg" },
    { id: "metronational", name: "MetroNational", logo: "/images/logos/clients/metronational.svg" },
    { id: "fourleaf", name: "Four Leaf Towers", logo: "/images/logos/clients/four-leaf.png" },
  ],

  // Key differentiators
  differentiators: {
    infraredDetection: {
      title: "Infrared Leak Detection",
      description:
        "RSI employs infrared leak detection methods to pinpoint unseen leaks and potential leakage hotspots before they become major problems. Early detection can save thousands in repairs.",
    },
    onSiteShop: {
      title: "On-Site Sheet Metal Shop",
      description:
        "Our in-house sheet metal shop can cut, shape, and install custom components without relying on third parties—faster turnaround, precise fit, and quality control.",
    },
    gulfCoastExpertise: {
      title: "Gulf Coast Expertise",
      description:
        "For more than six decades, clients have relied on RSI's unique expertise in roofing and waterproofing buildings along the Gulf Coast. We're the authority on keeping moisture out of buildings in this challenging climate.",
    },
  },

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
      children: [
        ...getServiceNavItems(),
        { name: "Maintenance Programs", href: "/maintenance" },
      ],
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
    { name: "Credentials", href: "/credentials" },
  ],
  footer: {
    services: getServiceNavItems().filter((item) => item.href !== "/services"),
    company: [
      { name: "About Us", href: "/about" },
      { name: "Credentials", href: "/credentials" },
      { name: "Projects", href: "/projects" },
      { name: "Recognition", href: "/recognition" },
      { name: "Products", href: "/products" },
      { name: "Green Initiative", href: "/green-initiative" },
      { name: "Contact", href: "/contact" },
    ],
  },
};
