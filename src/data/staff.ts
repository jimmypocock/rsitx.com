export type StaffDepartment =
  | "leadership"
  | "outside-sales"
  | "office"
  | "roofing"
  | "waterproofing"
  | "sheet-metal";

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: StaffDepartment;
  image: string;
}

export interface Department {
  id: StaffDepartment;
  name: string;
  description?: string;
}

export const departments: Department[] = [
  {
    id: "leadership",
    name: "Leadership & Operations",
    description: "Setting direction and overseeing projects company-wide.",
  },
  {
    id: "outside-sales",
    name: "Outside Sales",
    description:
      "Working directly with property owners and building managers across our service area.",
  },
  {
    id: "office",
    name: "Office & Finance",
    description: "Keeping the business running day-to-day.",
  },
  {
    id: "roofing",
    name: "Roofing",
    description:
      "From new construction to repairs across Southeast Texas.",
  },
  {
    id: "waterproofing",
    name: "Waterproofing",
    description: "Gulf Coast specialists in keeping moisture out of buildings.",
  },
  {
    id: "sheet-metal",
    name: "Sheet Metal",
    description:
      "Custom fabrication and installation from our in-house shop.",
  },
];

export const staff: StaffMember[] = [
  // Leadership & Operations
  {
    id: "bryan-lindsey",
    name: "Bryan Lindsey",
    role: "President",
    department: "leadership",
    image: "/images/staff/bryan-lindsey.webp",
  },
  {
    id: "michael-pocock",
    name: "Michael Pocock",
    role: "Vice President",
    department: "leadership",
    image: "/images/staff/michael-pocock.webp",
  },
  {
    id: "kyle-barron",
    name: "Kyle Barron",
    role: "Controller & General Manager",
    department: "leadership",
    image: "/images/staff/kyle-barron.webp",
  },

  // Outside Sales
  {
    id: "sonja-garcia",
    name: "Sonja Garcia",
    role: "Senior Accounts Manager",
    department: "outside-sales",
    image: "/images/staff/sonja-garcia.webp",
  },

  // Office & Finance
  {
    id: "kristina-soliz",
    name: "Kristina Soliz",
    role: "Office Manager & Project Coordinator",
    department: "office",
    image: "/images/staff/kristina-soliz.webp",
  },
  {
    id: "erin-harrington",
    name: "Erin Harrington",
    role: "AP & HR Payroll",
    department: "office",
    image: "/images/staff/erin-harrington.webp",
  },

  // Roofing
  {
    id: "gary-hayes",
    name: "Gary Hayes",
    role: "Roofing Superintendent",
    department: "roofing",
    image: "/images/staff/gary-hayes.webp",
  },
  {
    id: "frank-mouton",
    name: "Frank Mouton",
    role: "Roofing Repairs Superintendent",
    department: "roofing",
    image: "/images/staff/frank-mouton.webp",
  },
  {
    id: "sean-raindl",
    name: "Sean Raindl",
    role: "Roofing Project Manager",
    department: "roofing",
    image: "/images/staff/sean-raindl.webp",
  },
  {
    id: "donnie-wisnoski",
    name: "Donnie Wisnoski",
    role: "Roofing Estimator",
    department: "roofing",
    image: "/images/staff/donnie-wisnoski.webp",
  },
  {
    id: "luis-flores",
    name: "Luis Flores",
    role: "Roofing Estimator",
    department: "roofing",
    image: "/images/staff/luis-flores.webp",
  },

  // Waterproofing
  {
    id: "orlando-vera",
    name: "Orlando Vera",
    role: "Waterproofing Superintendent",
    department: "waterproofing",
    image: "/images/staff/orlando-vera.webp",
  },
  {
    id: "brantley-stewart",
    name: "Brantley Stewart",
    role: "Project Superintendent",
    department: "waterproofing",
    image: "/images/staff/brantley-stewart.webp",
  },
  {
    id: "carlos-cabrera",
    name: "Carlos Cabrera",
    role: "Waterproofing Estimator & Project Manager",
    department: "waterproofing",
    image: "/images/staff/carlos-cabrera.webp",
  },
  {
    id: "john-garcia",
    name: "John Garcia",
    role: "Waterproofing Estimator & Project Manager",
    department: "waterproofing",
    image: "/images/staff/john-garcia.webp",
  },
  {
    id: "matt-garrett",
    name: "Matt Garrett",
    role: "Waterproofing Estimator & Project Manager",
    department: "waterproofing",
    image: "/images/staff/matt-garrett.webp",
  },
  {
    id: "travis-pennington",
    name: "Travis Pennington",
    role: "Waterproofing Estimator & Project Manager",
    department: "waterproofing",
    image: "/images/staff/travis-pennington.webp",
  },
  {
    id: "travis-wilson",
    name: "Travis Wilson",
    role: "Waterproofing Estimator & Project Manager",
    department: "waterproofing",
    image: "/images/staff/travis-wilson.webp",
  },

  // Sheet Metal
  {
    id: "jesus-gonzalez",
    name: "Jesus Gonzalez",
    role: "Sheet Metal Superintendent",
    department: "sheet-metal",
    image: "/images/staff/jesus-gonzalez.webp",
  },
  {
    id: "david-johnson",
    name: "David Johnson",
    role: "Sheet Metal Estimator & Project Manager",
    department: "sheet-metal",
    image: "/images/staff/david-johnson.webp",
  },
];

export function getStaffByDepartment(dept: StaffDepartment): StaffMember[] {
  return staff.filter((person) => person.department === dept);
}

// Maps a service slug from src/data/services.ts to the matching staff department
const SERVICE_TO_DEPARTMENT: Record<string, StaffDepartment> = {
  roofing: "roofing",
  waterproofing: "waterproofing",
  "sheet-metal": "sheet-metal",
};

export function getStaffForService(serviceSlug: string): StaffMember[] {
  const dept = SERVICE_TO_DEPARTMENT[serviceSlug];
  return dept ? getStaffByDepartment(dept) : [];
}
