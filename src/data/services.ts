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
      "RSI has decades of experience providing building owners with reliable, leak-free roofs. Whether you need new construction roofing, a complete roof replacement, or expert repairs, our team delivers quality results. We work closely with architects and consultants to tailor solutions that meet your specific needs, and we take every caution to minimize disruption to your operations.",
    features: [
      "New construction roofing",
      "Complete re-roofing and tear-off",
      "Leak detection and repairs",
      "Commercial roof systems",
      "Preventive maintenance programs",
      "Storm damage assessment and repair",
      "Value-engineered solutions",
      "Quality materials from leading manufacturers",
    ],
    testimonial: {
      quote:
        "We are always pleased to have RSI as the winning contractor on our projects. They properly staff the project and keep it staffed until completion. RSI is also an integral part of the team when unforeseen conditions arise. Instead of standing to the side awaiting instructions, they come to the table with cost-effective quality solutions.",
    },
    image: "https://placehold.co/800x600/5c1909/ffffff?text=Roofing",
  },
  {
    id: "waterproofing",
    slug: "waterproofing",
    title: "Waterproofing & Dampproofing",
    shortDescription:
      "Protect your building from water and moisture damage.",
    fullDescription:
      "Protect your buildings from water and moisture damage using proven methods tailored to your specific needs. RSI works with clients to determine the correct waterproofing approach for each building, ensuring long-lasting protection against the elements.",
    features: [
      "Below-grade waterproofing",
      "Above-grade solutions",
      "Dampproofing applications",
      "Moisture barrier installation",
      "Long-term protection systems",
    ],
    testimonial: {
      quote:
        "RSI has sealed and waterproofed several of our commercial buildings. The results of their efforts have eliminated all of the past water leakage and penetration problems, some of which were severe. We were extremely impressed with their knowledge of waterproofing technology and products and the thoroughness of their work. To date, their work has held up over time and the building exteriors still look like new.",
    },
    image: "https://placehold.co/800x600/5c1909/ffffff?text=Waterproofing",
  },
  {
    id: "restoration-services",
    slug: "restoration-services",
    title: "Restoration Services",
    shortDescription:
      "Comprehensive restoration including caulking, masonry, and historical work.",
    fullDescription:
      "RSI provides comprehensive restoration services to preserve and enhance your building's appearance and structural integrity. From crack sealing to historical restoration, our skilled team delivers quality results with attention to detail.",
    features: [
      "Crack sealers and caulking",
      "Masonry, plaster, and concrete repair",
      "Water and abrasive blasting",
      "Historical restoration",
      "Facade restoration",
    ],
    testimonial: {
      quote:
        "I would like you to know how pleased we are with the exterior restoration of our property performed by RSI. While always a handsome building, the exterior now shows to even better advantage. More importantly, however, we now have a weather-tight facade.",
    },
    image: "https://placehold.co/800x600/5c1909/ffffff?text=Restoration",
  },
  {
    id: "sheet-metal",
    slug: "sheet-metal",
    title: "Sheet Metal",
    shortDescription:
      "Custom architectural sheet metal fabrication and installation.",
    fullDescription:
      "RSI provides expert sheet metal services for commercial buildings, from custom fabrication to professional installation. Our skilled craftsmen create precise, durable sheet metal components that protect your building and enhance its appearance. We work with a variety of metals and finishes to meet your project specifications.",
    features: [
      "Custom coping and flashing",
      "Gutter and downspout systems",
      "Metal trim and fascia",
      "Expansion joint covers",
      "Architectural metal panels",
      "Standing seam metal roofing components",
    ],
    testimonial: {
      quote:
        "RSI's sheet metal work on our building was exceptional. The custom fabrication fit perfectly, and their installation team was professional and efficient. The finished product exceeded our expectations.",
    },
    image: "https://placehold.co/800x600/5c1909/ffffff?text=Sheet+Metal",
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

export const restorationSubServices: SubService[] = [
  {
    id: "crack-sealers-caulking",
    title: "Crack Sealers & Caulking",
    description:
      "Moisture in cracks can exacerbate damage to your building. Our professional sealers and fillers help mitigate damage and can sometimes reverse the deterioration process.",
  },
  {
    id: "masonry-repair",
    title: "Masonry, Plaster & Concrete Repair",
    description:
      "Value-engineered solutions to fix building damage, reduce cosmetic blemishes, and restore your building's curb appeal.",
  },
  {
    id: "water-abrasive-blasting",
    title: "Water & Abrasive Blasting",
    description:
      "Our skilled specialists remove layers of dirt, mold, and mildew, stripping away years of grime while avoiding damage to structural or decorative building elements.",
  },
  {
    id: "historical-restoration",
    title: "Historical Restoration",
    description:
      "We take extreme care in the restoration of historically significant structures, using non-destructive processes to help buildings regain their previous glory and beauty.",
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
