export const company = {
  name: "Restoration Services, Inc.",
  shortName: "RSI",
  tagline: "Building confidence",
  description:
    "Restoration Services, Inc. has built a legacy of reliability spanning more than 60 years of expertise in roofing, waterproofing, and building restoration services serving Southeast Texas.",
  founded: 1964,
  yearsInBusiness: new Date().getFullYear() - 1964,

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

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

interface Navigation {
  main: NavItem[];
  footer: {
    services: { name: string; href: string }[];
    company: { name: string; href: string }[];
  };
}

export const navigation: Navigation = {
  main: [
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "Roofing", href: "/services/roofing" },
        { name: "Re-Roofing", href: "/services/re-roofing" },
        { name: "Roof Repairs", href: "/services/roof-repairs" },
        { name: "Waterproofing", href: "/services/waterproofing" },
        { name: "Restoration Services", href: "/services/restoration-services" },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Products", href: "/products" },
    { name: "Green Initiative", href: "/green-initiative" },
    { name: "Contact", href: "/contact" },
  ],
  footer: {
    services: [
      { name: "Roofing", href: "/services/roofing" },
      { name: "Re-Roofing", href: "/services/re-roofing" },
      { name: "Roof Repairs", href: "/services/roof-repairs" },
      { name: "Waterproofing", href: "/services/waterproofing" },
      { name: "Restoration", href: "/services/restoration-services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Products", href: "/products" },
      { name: "Green Initiative", href: "/green-initiative" },
      { name: "Contact", href: "/contact" },
    ],
  },
};
