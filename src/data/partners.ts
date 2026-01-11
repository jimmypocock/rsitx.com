export interface Partner {
  id: string;
  name: string;
  category: "roofing" | "waterproofing";
  website?: string;
  logo?: string;
}

export const partners: Partner[] = [
  // Roofing Partners
  {
    id: "gaf",
    name: "GAF Materials Corporation",
    category: "roofing",
    website: "https://www.gaf.com/",
    logo: "/images/logos/gaf.svg",
  },
  {
    id: "certainteed",
    name: "CertainTeed",
    category: "roofing",
    website: "https://www.certainteed.com/",
    logo: "/images/logos/certainteed.svg",
  },
  {
    id: "elevate",
    name: "Elevate (formerly Firestone)",
    category: "roofing",
    website: "https://www.holcimelevate.com/",
    logo: "/images/logos/elevate.png",
  },
  {
    id: "carlisle",
    name: "Carlisle SynTec",
    category: "roofing",
    website: "https://www.carlislesyntec.com/",
    logo: "/images/logos/carlisle.svg",
  },
  {
    id: "johns-manville",
    name: "Johns Manville",
    category: "roofing",
    website: "https://www.jm.com/",
    logo: "/images/logos/johns-manville-dark.svg",
  },
  {
    id: "tamko",
    name: "Tamko Roofing Products",
    category: "roofing",
    website: "https://www.tamko.com/",
    logo: "/images/logos/tamko.svg",
  },
  {
    id: "us-ply",
    name: "U.S. Ply, Inc",
    category: "roofing",
    website: "https://usply.com/",
    logo: "/images/logos/usply.avif",
  },
  // Waterproofing Partners
  {
    id: "sika",
    name: "Sika",
    category: "waterproofing",
    website: "https://www.sika.com/",
    logo: "/images/logos/sika.webp",
  },
  {
    id: "basf",
    name: "BASF",
    category: "waterproofing",
    website: "https://www.basf.com/",
    logo: "/images/logos/basf-dark.svg",
  },
  {
    id: "hydrotech",
    name: "Hydrotech",
    category: "waterproofing",
    website: "https://www.hydrotechusa.com/",
    logo: "/images/logos/hydrotech.svg",
  },
  {
    id: "gcp",
    name: "GCP Applied Technologies",
    category: "waterproofing",
    website: "https://gcpat.com/",
    logo: "/images/logos/gcp-dark.svg",
  },
  {
    id: "garland",
    name: "Garland Company",
    category: "waterproofing",
    website: "https://www.garlandco.com/",
    logo: "/images/logos/garland.svg",
  },
  {
    id: "evonik",
    name: "Evonik",
    category: "waterproofing",
    website: "https://www.evonik.com/",
    logo: "/images/logos/evonik.svg",
  },
  {
    id: "dow",
    name: "Dow",
    category: "waterproofing",
    website: "https://www.dow.com/",
    logo: "/images/logos/dow.svg",
  },
  {
    id: "henry",
    name: "Henry Company",
    category: "waterproofing",
    website: "https://www.henry.com/",
    logo: "/images/logos/henry-dark.svg",
  },
  {
    id: "neogard",
    name: "Neogard",
    category: "waterproofing",
    website: "https://www.neogard.com/",
    logo: "/images/logos/neogard.webp",
  },
  {
    id: "tremco",
    name: "Tremco",
    category: "waterproofing",
    website: "https://www.tremcosealants.com/",
    logo: "/images/logos/tremco.webp",
  },
  {
    id: "soprema",
    name: "Soprema",
    category: "waterproofing",
    website: "https://www.soprema.us/",
    logo: "/images/logos/soprema.svg",
  },
  {
    id: "momentive",
    name: "Momentive",
    category: "waterproofing",
    website: "https://www.momentive.com/",
    logo: "/images/logos/momentive-dark.png",
  },
  {
    id: "prosoco",
    name: "Prosoco",
    category: "waterproofing",
    website: "https://www.prosoco.com/",
    logo: "/images/logos/prosoco.svg",
  },
];

export function getPartnersByCategory(
  category: "roofing" | "waterproofing"
): Partner[] {
  return partners.filter((partner) => partner.category === category);
}
