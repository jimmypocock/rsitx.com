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

export const services: Service[] = [
  {
    id: "roofing",
    slug: "roofing",
    title: "Roofing",
    shortDescription: "New roof installation with decades of proven expertise.",
    fullDescription:
      "RSI has decades of experience providing building owners with reliable, leak-free roofs. We work closely with architects or consultants to tailor solutions that meet your specific needs. When budget is a concern, we provide value-engineered options without compromising quality.",
    features: [
      "New construction roofing",
      "Commercial roof systems",
      "Architect collaboration",
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
    id: "re-roofing",
    slug: "re-roofing",
    title: "Re-Roofing",
    shortDescription: "Complete roof replacement to eliminate leaks and damage.",
    fullDescription:
      "Mitigate water damage and leaks with a complete re-roofing solution. Our team carefully removes previous materials, repairs any underlying damage, and installs a new roof system that will protect your building for years to come. We take every caution to keep mess and distractions to a minimum during installation.",
    features: [
      "Complete tear-off and replacement",
      "Damage assessment and repair",
      "Minimal disruption to operations",
      "Extended warranty options",
      "Modern roofing systems",
    ],
    testimonial: {
      quote:
        "RSI's professional, responsive staff has provided me with cost-effective, dependable, high quality roofing services for many years. I will continue to recommend RSI without a moment's hesitation.",
    },
    image: "https://placehold.co/800x600/5c1909/ffffff?text=Re-Roofing",
  },
  {
    id: "roof-repairs",
    slug: "roof-repairs",
    title: "Roof Repairs",
    shortDescription:
      "Expert leak detection and repair for challenging roofing issues.",
    fullDescription:
      "RSI is one of the region's premier roofing repair experts. We specialize in detecting and fixing challenging leaks that others can't solve. The South Texas climate presents unique challenges, and our team has the experience to address them all.",
    features: [
      "Infrared leak detection",
      "Emergency repair services",
      "Preventive maintenance",
      "Storm damage repair",
      "Climate-specific solutions",
    ],
    testimonial: {
      quote:
        "RSI has completed numerous roofing projects for our firm. Our company primarily works within the educational industry. RSI has been an extremely qualified participant in these projects. They are well aware of the needs of the educational institutions, and provide excellent communication with the staff and also security for the staff and students.",
    },
    image: "https://placehold.co/800x600/5c1909/ffffff?text=Roof+Repairs",
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
];

export const restorationSubServices = [
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
