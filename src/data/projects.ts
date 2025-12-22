export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  services: string[];
  image: string;
  location?: string;
  year?: number;
  featured?: boolean;
}

export type ProjectCategory =
  | "healthcare"
  | "education"
  | "commercial"
  | "industrial"
  | "government"
  | "religious"
  | "hospitality"
  | "historic";

export const projectCategories: {
  id: ProjectCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    description: "Hospitals, medical centers, and healthcare facilities",
  },
  {
    id: "education",
    label: "Education",
    description: "Universities, schools, and educational institutions",
  },
  {
    id: "commercial",
    label: "Commercial",
    description: "Office buildings, retail, and commercial properties",
  },
  {
    id: "industrial",
    label: "Industrial",
    description: "Warehouses, manufacturing, and industrial facilities",
  },
  {
    id: "government",
    label: "Government",
    description: "Government buildings and public facilities",
  },
  {
    id: "religious",
    label: "Religious",
    description: "Churches, temples, and religious institutions",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    description: "Hotels, resorts, and hospitality venues",
  },
  {
    id: "historic",
    label: "Historic",
    description: "Historical buildings and restoration projects",
  },
];

// Sample projects - these can be expanded with real project data
export const projects: Project[] = [
  {
    id: "rice-university",
    title: "Rice University",
    category: "education",
    description:
      "Comprehensive roofing and waterproofing services for multiple campus buildings, including green roofing initiatives.",
    services: ["Roofing", "Waterproofing", "Green Roofing"],
    image: "https://placehold.co/600x400/5c1909/ffffff?text=Rice+University",
    location: "Houston, TX",
    featured: true,
  },
  {
    id: "moody-gardens",
    title: "Moody Gardens",
    category: "hospitality",
    description:
      "Green roofing installation and waterproofing for this iconic Galveston destination.",
    services: ["Green Roofing", "Waterproofing"],
    image: "https://placehold.co/600x400/5c1909/ffffff?text=Moody+Gardens",
    location: "Galveston, TX",
    featured: true,
  },
  {
    id: "prairie-view-nursing",
    title: "Prairie View A&M School of Nursing",
    category: "education",
    description:
      "Full roofing system installation with sustainable materials for this state-of-the-art nursing facility.",
    services: ["Roofing", "Green Roofing"],
    image: "https://placehold.co/600x400/5c1909/ffffff?text=Prairie+View+A%26M",
    location: "Prairie View, TX",
    featured: true,
  },
  {
    id: "houston-medical-center",
    title: "Houston Medical Center Complex",
    category: "healthcare",
    description:
      "Large-scale re-roofing project for multiple medical buildings in the Texas Medical Center.",
    services: ["Re-Roofing", "Waterproofing"],
    image: "https://placehold.co/600x400/5c1909/ffffff?text=Medical+Center",
    location: "Houston, TX",
    featured: false,
  },
  {
    id: "historic-downtown",
    title: "Downtown Houston Historic Building",
    category: "historic",
    description:
      "Careful restoration of a century-old commercial building, preserving architectural details while modernizing protection.",
    services: ["Historical Restoration", "Waterproofing", "Masonry Repair"],
    image: "https://placehold.co/600x400/5c1909/ffffff?text=Historic+Building",
    location: "Houston, TX",
    featured: false,
  },
  {
    id: "industrial-warehouse",
    title: "Port of Houston Warehouse Facility",
    category: "industrial",
    description:
      "Complete roof replacement for a large industrial warehouse facility near the Port of Houston.",
    services: ["Re-Roofing", "Roof Repairs"],
    image: "https://placehold.co/600x400/5c1909/ffffff?text=Industrial+Facility",
    location: "Houston, TX",
    featured: false,
  },
  {
    id: "church-restoration",
    title: "First Baptist Church",
    category: "religious",
    description:
      "Restoration and waterproofing of a historic church, including steeple and facade work.",
    services: ["Restoration", "Waterproofing", "Caulking"],
    image: "https://placehold.co/600x400/5c1909/ffffff?text=Church+Restoration",
    location: "Houston, TX",
    featured: false,
  },
  {
    id: "government-building",
    title: "Harris County Administration Building",
    category: "government",
    description:
      "Re-roofing and exterior restoration for a major county government facility.",
    services: ["Re-Roofing", "Restoration"],
    image: "https://placehold.co/600x400/5c1909/ffffff?text=Government+Building",
    location: "Houston, TX",
    featured: false,
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
