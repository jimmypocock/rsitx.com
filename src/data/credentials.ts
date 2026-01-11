export interface Certification {
  id: string;
  name: string;
  description?: string;
  logo?: string;
}

export interface Membership {
  id: string;
  name: string;
  acronym?: string;
  description?: string;
  logo?: string;
}

export interface Warranty {
  id: string;
  name: string;
  duration: string;
  description: string;
}

export interface ServiceCommitment {
  id: string;
  title: string;
  description: string;
}

// Manufacturer Certifications
export const manufacturerCertifications: Certification[] = [
  {
    id: "gaf-master-select",
    name: "GAF Master Select",
    description:
      "GAF's premium contractor certification with extended warranty capabilities.",
  },
  {
    id: "firestone-elevate",
    name: "Firestone/Elevate Licensed Contractor",
    description: "Firestone Building Products (now Elevate) authorized installer.",
  },
  {
    id: "carlisle-syntec",
    name: "Carlisle SynTec Authorized Applicator",
    description: "Carlisle roofing systems certified installer.",
  },
  {
    id: "johns-manville",
    name: "Johns Manville Peak Advantage",
    description: "JM preferred contractor program member.",
  },
  {
    id: "sika-sarnafil",
    name: "Sika/Sarnafil Registered Contractor",
    description: "Sika roofing systems certification.",
  },
  {
    id: "basf-masterseal",
    name: "BASF/MasterSeal Certified",
    description: "BASF waterproofing systems certification.",
  },
];

// Industry & Safety Certifications
export const industryCertifications: Certification[] = [
  {
    id: "osha-30",
    name: "OSHA 30-Hour Certified",
    description: "OSHA 30-hour safety training completion for supervisors.",
  },
  {
    id: "osha-10",
    name: "OSHA 10-Hour Certified",
    description: "OSHA 10-hour safety training for all field personnel.",
  },
  {
    id: "fall-protection",
    name: "OSHA Fall Protection Competent Person",
    description: "Specialized fall protection certification.",
  },
  {
    id: "first-aid-cpr",
    name: "First Aid/CPR Certified",
    description: "Current first aid and CPR certifications for crews.",
  },
  {
    id: "equipment-operator",
    name: "Forklift/Equipment Operator Certified",
    description: "Certified equipment operation for safe material handling.",
  },
];

// Associations & Memberships
export const memberships: Membership[] = [
  {
    id: "nrca",
    name: "National Roofing Contractors Association",
    acronym: "NRCA",
    description: "Premier national roofing industry association.",
  },
  {
    id: "rcat",
    name: "Roofing Contractors Association of Texas",
    acronym: "RCAT",
    description: "Texas state roofing association.",
  },
  {
    id: "abc",
    name: "Associated Builders and Contractors",
    acronym: "ABC",
    description: "National construction industry association.",
  },
  {
    id: "agc",
    name: "Associated General Contractors",
    acronym: "AGC",
    description: "General contractor industry association.",
  },
  {
    id: "asa",
    name: "American Subcontractors Association",
    acronym: "ASA",
    description: "National trade association for subcontractors.",
  },
  {
    id: "abaa",
    name: "Air Barrier Association of America",
    acronym: "ABAA",
    description: "Air barrier industry association.",
  },
  {
    id: "icri",
    name: "International Concrete Repair Institute",
    acronym: "ICRI",
    description: "Concrete repair and restoration industry association.",
  },
  {
    id: "iibec",
    name: "International Institute of Building Enclosure Consultants",
    acronym: "IIBEC",
    description: "Building enclosure consulting professionals association.",
  },
  {
    id: "boma",
    name: "Building Owners and Managers Association",
    acronym: "BOMA",
    description: "Commercial property management association.",
  },
];

// Warranty Offerings
export const warranties: Warranty[] = [
  {
    id: "workmanship",
    name: "Workmanship Warranty",
    duration: "1-5 Years",
    description:
      "RSI stands behind our installation quality with comprehensive workmanship warranties.",
  },
  {
    id: "manufacturer",
    name: "Manufacturer Material Warranty",
    duration: "10-20 Years",
    description:
      "Standard manufacturer warranties on all roofing materials and systems.",
  },
  {
    id: "ndl",
    name: "No Dollar Limit (NDL) Warranties",
    duration: "10-30 Years",
    description:
      "Full system warranties with no repair caps, providing complete peace of mind.",
  },
  {
    id: "extended",
    name: "Extended Manufacturer Warranties",
    duration: "+5 Years",
    description:
      "Extended warranty programs available through our manufacturer partnerships.",
  },
];

// Service Commitments & Guarantees
export const serviceCommitments: ServiceCommitment[] = [
  {
    id: "warranty-response",
    title: "72-Hour Warranty Response",
    description: "We respond to all warranty service calls within 72 hours.",
  },
  {
    id: "single-contact",
    title: "Dedicated Project Manager",
    description:
      "Single point of contact for your entire project from start to finish.",
  },
  {
    id: "clean-jobsite",
    title: "Clean Job Site Promise",
    description:
      "Daily cleanup and property protection throughout every project.",
  },
  {
    id: "written-proposals",
    title: "Detailed Written Proposals",
    description:
      "Transparent, itemized proposals with no hidden costs or surprises.",
  },
  {
    id: "bilingual",
    title: "Bilingual Staff",
    description:
      "Spanish-speaking staff available for clear communication with all stakeholders.",
  },
  {
    id: "background-checked",
    title: "Background-Checked Employees",
    description:
      "All employees undergo thorough background checks and drug testing.",
  },
];

// Insurance & Bonding (for display, not specific amounts)
export const insuranceCoverage = {
  generalLiability: "General Liability Insurance",
  workersComp: "Workers Compensation Insurance",
  commercialAuto: "Commercial Auto Insurance",
  umbrella: "Umbrella/Excess Liability Coverage",
  suretyBonding: "Surety Bonding Capacity",
};

// Equipment & Technology
export interface EquipmentCategory {
  id: string;
  name: string;
  items: { name: string; description: string }[];
}

export const equipmentCapabilities: EquipmentCategory[] = [
  {
    id: "inspection",
    name: "Inspection Technology",
    items: [
      {
        name: "Drone Inspections",
        description: "Aerial drone roof inspections for hard-to-access areas.",
      },
      {
        name: "Thermal/Infrared Imaging",
        description: "Infrared cameras for moisture and insulation detection.",
      },
      {
        name: "Moisture Detection",
        description: "Electronic moisture scanning for accurate leak location.",
      },
      {
        name: "Core Sampling",
        description: "Roof core cut and analysis for system evaluation.",
      },
    ],
  },
  {
    id: "installation",
    name: "Installation Equipment",
    items: [
      {
        name: "Hot Asphalt Kettles",
        description: "For BUR and modified bitumen roofing systems.",
      },
      {
        name: "Hot Air Welding",
        description: "Precision welding for single-ply membrane systems.",
      },
      {
        name: "Metal Fabrication",
        description: "In-house brakes, shears, and folders for custom sheet metal.",
      },
      {
        name: "Standing Seam Equipment",
        description: "On-site metal roofing panel forming capability.",
      },
    ],
  },
  {
    id: "safety",
    name: "Safety Equipment",
    items: [
      {
        name: "Fall Protection Systems",
        description: "Complete harness, lanyard, and anchor systems.",
      },
      {
        name: "Guardrail Systems",
        description: "OSHA-compliant perimeter protection.",
      },
      {
        name: "First Aid & AED",
        description: "On-site first aid stations and defibrillators.",
      },
      {
        name: "Warning Line Systems",
        description: "Perimeter warning systems for roof work.",
      },
    ],
  },
  {
    id: "fleet",
    name: "Fleet & Heavy Equipment",
    items: [
      {
        name: "Service Vehicle Fleet",
        description: "Dedicated service and crew transport vehicles.",
      },
      {
        name: "GPS Fleet Tracking",
        description: "Real-time vehicle location for efficient dispatch.",
      },
      {
        name: "Boom & Man Lifts",
        description: "Aerial work platforms for elevated access.",
      },
      {
        name: "Material Handling",
        description: "Forklifts and cranes for safe material movement.",
      },
    ],
  },
];
