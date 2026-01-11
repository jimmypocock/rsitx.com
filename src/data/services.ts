export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features?: string[];
  testimonial?: {
    quote: string;
    author?: string;
    company?: string;
  };
  image: string;
}

export interface SubService {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "roofing",
    slug: "roofing",
    title: "Roofing",
    shortDescription:
      "Complete commercial roofing solutions from new construction to repairs.",
    fullDescription:
      "RSI has decades of experience providing building owners with reliable, leak-free roofs. Whether you need new construction roofing, a complete roof replacement, or expert repairs, our team delivers quality results. The South Texas climate often wreaks havoc on a roof—our history of detecting and fixing the most challenging leaks has built our reputation as one of the region's premier roofing experts. We work closely with architects and consultants to tailor solutions that meet your specific needs.",
    features: [
      "New construction roofing",
      "Complete re-roofing and tear-off",
      "Infrared leak detection",
      "Expert leak repairs",
      "Commercial roof systems",
      "Preventive maintenance programs",
      "Storm damage assessment and repair",
      "Thermal imaging inspections",
      "Roof asset management",
      "Value-engineered solutions",
    ],
    image: "/images/projects/colleges-universities/roofing-pvamu-engineering-building-1.webp",
  },
  {
    id: "waterproofing",
    slug: "waterproofing",
    title: "Waterproofing",
    shortDescription:
      "The Gulf Coast's authority on waterproofing. Protect your building from moisture damage.",
    fullDescription:
      "The brutally moist climate along the Gulf Coast can cause immense damage to a building if it is not properly waterproofed. Mold, mildew, and cracks are merely the beginning—left unchecked, moisture can lead to structural deterioration. RSI is the Gulf Coast's authority on waterproofing. Our specialists pinpoint moisture entry points, detect potential leak hotspots, and devise a plan to fix current penetration and prevent future problems.",
    features: [
      "Below-grade waterproofing",
      "Above-grade solutions",
      "Dampproofing applications",
      "Caulking and sealants",
      "Elastomeric coatings",
      "Crack injection",
      "Abrasive blasting and surface prep",
      "Moisture barrier installation",
      "Long-term protection systems",
    ],
    image: "/images/projects/multi-family/waterproofing-il-palazzo-houston-tx-1.webp",
  },
  {
    id: "sheet-metal",
    slug: "sheet-metal",
    title: "Sheet Metal",
    shortDescription:
      "Custom architectural sheet metal fabrication and installation from our on-site shop.",
    fullDescription:
      "RSI provides expert sheet metal services for commercial buildings, from custom fabrication to professional installation. Our on-site sheet metal shop can cut, shape, and install custom components without relying on third parties—giving you faster turnaround, precise fit, and complete quality control. Our skilled craftsmen create durable sheet metal components that protect your building and enhance its appearance.",
    features: [
      "In-house fabrication shop",
      "Custom coping and flashing",
      "Gutter and downspout systems",
      "Metal trim and fascia",
      "Expansion joint covers",
      "Architectural metal panels",
      "Standing seam metal roofing components",
      "Skylight repair and replacement",
      "Conductor heads and scuppers",
    ],
    image: "/images/projects/schools-k12/sheet-metal-hailey-elementary-1.webp",
  },
  {
    id: "concrete-masonry",
    slug: "concrete-masonry",
    title: "Concrete & Masonry",
    shortDescription:
      "Concrete repair, masonry restoration, and building envelope services.",
    fullDescription:
      "RSI provides comprehensive concrete and masonry services for commercial buildings, from structural repairs to historic preservation. Our experienced crews handle everything from expansion joint systems to exterior wall coatings, ensuring your building's envelope is protected and maintained to the highest standards.",
    features: [
      "Expansion joint systems",
      "Historic preservation and tuckpointing",
      "Exterior wall coatings",
      "Parking deck traffic coatings",
      "Plaza deck restoration",
      "Building cleaning and sealing",
      "Epoxy injection repairs",
      "Urethane foam injection",
      "Stone repair and replacement",
    ],
    image: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-1.webp",
  },
];

export interface RoofingSystem {
  id: string;
  name: string;
  acronym?: string;
  description: string;
}

export const roofingSystems: RoofingSystem[] = [
  {
    id: "tpo",
    name: "Thermoplastic Polyolefin",
    acronym: "TPO",
    description:
      "Energy-efficient single-ply membrane known for heat-reflective properties and durability.",
  },
  {
    id: "epdm",
    name: "Ethylene Propylene Diene Monomer",
    acronym: "EPDM",
    description:
      "Durable rubber roofing membrane with excellent weather resistance and longevity.",
  },
  {
    id: "pvc",
    name: "Polyvinyl Chloride",
    acronym: "PVC",
    description:
      "Chemical-resistant single-ply membrane ideal for restaurants and facilities with rooftop exhaust.",
  },
  {
    id: "modified-bitumen",
    name: "Modified Bitumen",
    description:
      "Asphalt-based rolled roofing with polymer modifiers for enhanced flexibility and performance.",
  },
  {
    id: "bur",
    name: "Built-Up Roofing",
    acronym: "BUR",
    description:
      "Traditional multi-layer asphalt and felt system with proven long-term performance.",
  },
  {
    id: "metal",
    name: "Metal Roofing Systems",
    description:
      "Standing seam, corrugated, and architectural metal roof systems for durability and aesthetics.",
  },
  {
    id: "sbs",
    name: "SBS Modified Bitumen",
    acronym: "SBS",
    description:
      "Styrene-Butadiene-Styrene modified asphalt for superior flexibility in varying temperatures.",
  },
  {
    id: "app",
    name: "APP Modified Bitumen",
    acronym: "APP",
    description:
      "Atactic Polypropylene modified asphalt offering excellent UV resistance and heat tolerance.",
  },
  {
    id: "coatings",
    name: "Elastomeric Roof Coatings",
    description:
      "Protective coatings that extend roof life and improve energy efficiency without full replacement.",
  },
];

export const roofingSubServices: SubService[] = [
  {
    id: "new-construction",
    title: "New Construction",
    description:
      "Expert installation of commercial roof systems for new buildings. We work with architects and consultants to deliver reliable, leak-free roofs using quality materials from leading manufacturers.",
  },
  {
    id: "re-roofing",
    title: "Re-Roofing",
    description:
      "Complete roof replacement to eliminate leaks and damage. Our team carefully removes previous materials, repairs underlying damage, and installs a new roof system with minimal disruption to your operations.",
  },
  {
    id: "roof-repairs",
    title: "Roof Repairs",
    description:
      "Expert leak detection and repair for challenging roofing issues. We specialize in solving problems others can't, using infrared detection and climate-specific solutions for South Texas buildings.",
  },
];

export interface WaterproofingApplication {
  id: string;
  name: string;
  description: string;
}

export const waterproofingApplications: WaterproofingApplication[] = [
  {
    id: "foundation",
    name: "Foundation Waterproofing",
    description:
      "Below-grade protection for building foundations against water infiltration and hydrostatic pressure.",
  },
  {
    id: "below-grade",
    name: "Below-Grade Waterproofing",
    description:
      "Comprehensive waterproofing for basements, tunnels, and underground structures.",
  },
  {
    id: "plaza-deck",
    name: "Plaza Deck Waterproofing",
    description:
      "Waterproofing for rooftop plazas, terraces, and occupied roof areas with pedestrian traffic.",
  },
  {
    id: "parking-structure",
    name: "Parking Structure Waterproofing",
    description:
      "Waterproofing and traffic coatings for parking garages, decks, and ramps.",
  },
  {
    id: "balcony-terrace",
    name: "Balcony & Terrace Waterproofing",
    description:
      "Protection for elevated outdoor living spaces and building projections.",
  },
  {
    id: "building-envelope",
    name: "Building Envelope Waterproofing",
    description:
      "Comprehensive exterior waterproofing to protect the entire building shell.",
  },
  {
    id: "expansion-joints",
    name: "Expansion Joint Systems",
    description:
      "Installation and repair of building expansion joints to accommodate structural movement.",
  },
  {
    id: "caulking-sealants",
    name: "Caulking & Sealants",
    description:
      "Joint sealants and caulking for building exteriors, windows, and penetrations.",
  },
  {
    id: "air-barriers",
    name: "Air Barrier Systems",
    description:
      "Air and vapor barrier installation for energy efficiency and moisture control.",
  },
  {
    id: "remedial",
    name: "Remedial Waterproofing",
    description:
      "Retrofit waterproofing repairs for existing structures with water intrusion issues.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceNavItems(): { name: string; href: string }[] {
  return [
    { name: "All Services", href: "/services" },
    ...services
      .map((service) => ({
        name: service.title,
        href: `/services/${service.slug}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  ];
}
