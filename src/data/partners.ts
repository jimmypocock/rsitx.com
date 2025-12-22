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
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=GAF",
  },
  {
    id: "us-ply",
    name: "U.S. Ply, Inc",
    category: "roofing",
    website: "https://usply.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=US+Ply",
  },
  {
    id: "carlisle",
    name: "Carlisle",
    category: "roofing",
    website: "https://www.carlislesyntec.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Carlisle",
  },
  {
    id: "tamko",
    name: "Tamko Roofing Products",
    category: "roofing",
    website: "https://www.tamko.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=TAMKO",
  },
  {
    id: "certainteed",
    name: "CertainTeed",
    category: "roofing",
    website: "https://www.certainteed.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=CertainTeed",
  },
  {
    id: "soprema",
    name: "Soprema",
    category: "roofing",
    website: "https://www.soprema.us/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Soprema",
  },
  {
    id: "garland",
    name: "Garland",
    category: "roofing",
    website: "https://www.garlandco.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Garland",
  },
  {
    id: "johns-manville",
    name: "Johns Manville",
    category: "roofing",
    website: "https://www.jm.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Johns+Manville",
  },
  {
    id: "firestone",
    name: "Firestone Building Products",
    category: "roofing",
    website: "https://www.firestonebpco.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Firestone",
  },
  // Waterproofing Partners
  {
    id: "sika",
    name: "Sika",
    category: "waterproofing",
    website: "https://www.sika.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Sika",
  },
  {
    id: "neogard",
    name: "Neogard",
    category: "waterproofing",
    website: "https://www.neogard.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Neogard",
  },
  {
    id: "basf",
    name: "BASF/Sonneborn",
    category: "waterproofing",
    website: "https://www.basf.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=BASF",
  },
  {
    id: "hydrotech",
    name: "Hydrotech",
    category: "waterproofing",
    website: "https://www.hydrotechusa.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Hydrotech",
  },
  {
    id: "momentive",
    name: "Momentive/GE",
    category: "waterproofing",
    website: "https://www.momentive.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Momentive",
  },
  {
    id: "tremco",
    name: "Tremco Global Sealants Division",
    category: "waterproofing",
    website: "https://www.tremcosealants.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Tremco",
  },
  {
    id: "dow-corning",
    name: "Dow Corning",
    category: "waterproofing",
    website: "https://www.dow.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Dow",
  },
  {
    id: "henry",
    name: "Henry",
    category: "waterproofing",
    website: "https://henry.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Henry",
  },
  {
    id: "prosoco",
    name: "Prosoco",
    category: "waterproofing",
    website: "https://prosoco.com/",
    logo: "https://placehold.co/200x80/e6e6d7/5c1909?text=Prosoco",
  },
];

export function getPartnersByCategory(
  category: "roofing" | "waterproofing"
): Partner[] {
  return partners.filter((partner) => partner.category === category);
}
