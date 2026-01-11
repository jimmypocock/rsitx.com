import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name}, drawing on nearly a century of field experience in commercial roofing, waterproofing, and building restoration services serving Texas.`,
};

interface EraProject {
  name: string;
  image: string;
  alt: string;
}

const era1Projects: EraProject[] = [
  {
    name: "Historic Preservation",
    image: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-1.webp",
    alt: "Historic building restoration - Buffalo Soldiers Museum",
  },
  {
    name: "Masonry Restoration",
    image: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-3.webp",
    alt: "Masonry restoration work on historic buildings",
  },
  {
    name: "Waterproofing Systems",
    image: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-5.webp",
    alt: "Professional waterproofing systems installation",
  },
  {
    name: "Building Envelope",
    image: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-7.webp",
    alt: "Building envelope protection and restoration",
  },
];

const era2Projects: EraProject[] = [
  {
    name: "UT Health Houston",
    image: "/images/projects/hospitals-medical/roofing-ut-health-houston-1.webp",
    alt: "UT Health Houston medical campus roofing",
  },
  {
    name: "Medical Facilities",
    image: "/images/projects/hospitals-medical/roofing-ut-health-houston-3.webp",
    alt: "Healthcare facility roofing and restoration",
  },
  {
    name: "Campus Projects",
    image: "/images/projects/hospitals-medical/roofing-ut-health-houston-5.webp",
    alt: "University medical campus roofing installation",
  },
  {
    name: "Commercial Roofing",
    image: "/images/projects/hospitals-medical/roofing-ut-health-houston-7.webp",
    alt: "Commercial roofing for medical buildings",
  },
];

const era3Projects: EraProject[] = [
  {
    name: "Prairie View A&M",
    image: "/images/projects/colleges-universities/roofing-pvamu-engineering-building-1.webp",
    alt: "Prairie View A&M University Engineering Building roofing",
  },
  {
    name: "UH Science & Tech",
    image: "/images/projects/colleges-universities/roofing-university-of-houston-science-and-tech-building-1.webp",
    alt: "University of Houston Science and Technology Building",
  },
  {
    name: "Industrial Projects",
    image: "/images/projects/industrial/roofing-sanderson-farms-plant-bryan-tx-1.webp",
    alt: "Sanderson Farms industrial roofing project",
  },
  {
    name: "Texas A&M Galveston",
    image: "/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp",
    alt: "Texas A&M Galveston waterproofing project",
  },
];

const growthStats = [
  { metric: "Field Employees", year1985: "10", year2015: "100+" },
  { metric: "Office Staff", year1985: "3", year2015: "12" },
  { metric: "Annual Volume", year1985: "$1M", year2015: "$14M" },
];

function EraBadge({ years }: { years: string }) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-primary-600 text-white">
      {years}
    </span>
  );
}

function ProjectGrid({ projects, title }: { projects: EraProject[]; title: string }) {
  return (
    <div className="h-full">
      <h3 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <div key={project.name} className="group relative overflow-hidden rounded-lg shadow-md">
            <div className="aspect-[4/3] relative">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-semibold leading-tight">
                  {project.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="The RSI Story"
        description="A Legacy of Texas Trades"
        backgroundImage="/images/projects/historical/waterproofing-buffalo-soldiers-museum-2.webp"
      />

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line - visible on larger screens */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-400 to-primary-600" />

        {/* Era 1: 1932-1981 */}
        <Section className="relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="lg:pr-12">
              <EraBadge years="1932 – 1981" />
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Foundations in Roofing & Waterproofing
              </h2>
              <div className="mt-4 space-y-3 text-foreground-muted">
                <p>
                  The history of RSI is rooted in two long-standing local companies. It began in <strong className="text-foreground">1932</strong> when John Kauf started <strong className="text-foreground">Hou-Tex Roofing</strong>, handling both new construction and re-roofing for commercial and residential markets.
                </p>
                <p>
                  In <strong className="text-foreground">1947</strong>, Tooker Abrahams started <strong className="text-foreground">Gulf Waterproofing</strong>, focusing on specialized waterproofing systems.
                </p>
                <p>
                  In <strong className="text-foreground">1968</strong>, Gulf purchased Hou-Tex. The companies operated side-by-side under leaders like Don Simpson and Joe Smith, maintaining veteran crews where many stayed 20+ years until retirement.
                </p>
              </div>
            </div>
            <div className="lg:pl-12">
              <ProjectGrid projects={era1Projects} title="Landmark Projects" />
            </div>
          </div>
        </Section>

        {/* Era 2: 1982-1999 */}
        <Section background="alt" className="relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="lg:order-2 lg:pl-12">
              <EraBadge years="1982 – 1999" />
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Navigating the Recession & The Birth of RSI
              </h2>
              <div className="mt-4 space-y-3 text-foreground-muted">
                <p>
                  The early 1980s brought a major downturn to the oil industry. As new construction dried up, the industry shifted toward rehabilitation of existing buildings.
                </p>
                <p>
                  In April 1982, A&E Tech Reps formed as a holding company. From that move, <strong className="text-foreground">Restoration Services Inc. (RSI) was officially formed in September 1982</strong>.
                </p>
                <p>
                  <strong className="text-foreground">Jimmy Smith</strong> was named President. He&apos;d been with Gulf Waterproofing since 1972, starting as an apprentice and working up to mechanic foreman before training as an estimator. RSI began work in March 1983.
                </p>
              </div>
            </div>
            <div className="lg:order-1 lg:pr-12">
              <ProjectGrid projects={era2Projects} title="Notable Projects" />
            </div>
          </div>
        </Section>

        {/* Era 3: 2000-Present */}
        <Section className="relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="lg:pr-12">
              <EraBadge years="2000 – Present" />
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Expanding Our Capabilities
              </h2>
              <div className="mt-4 space-y-3 text-foreground-muted">
                <p>
                  As the market evolved, RSI added specialized trades. In <strong className="text-foreground">2002</strong>, we acquired <strong className="text-foreground">Branson Roofing</strong>, establishing our own Sheet Metal Department.
                </p>
                <p>
                  We&apos;ve grown from three office staff and ten field employees to a robust operation—while remaining a company that values teamwork on the job site.
                </p>
              </div>
              {/* Growth Table */}
              <div className="mt-4 bg-secondary-100 rounded-lg overflow-hidden">
                <div className="bg-secondary-200 px-4 py-2">
                  <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Growth Over Time
                  </h3>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-foreground-muted">
                      <th className="px-4 py-2 text-left font-medium">Metric</th>
                      <th className="px-3 py-2 text-center font-medium">1985</th>
                      <th className="px-3 py-2 text-center font-medium">2015</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary-200">
                    {growthStats.map((stat) => (
                      <tr key={stat.metric} className="bg-white">
                        <td className="px-4 py-2 font-medium text-foreground">
                          {stat.metric}
                        </td>
                        <td className="px-3 py-2 text-center text-foreground-muted">
                          {stat.year1985}
                        </td>
                        <td className="px-3 py-2 text-center font-bold text-primary-600">
                          {stat.year2015}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lg:pl-12">
              <ProjectGrid projects={era3Projects} title="Recent Projects" />
            </div>
          </div>
        </Section>
      </div>

      {/* Mission */}
      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            To deliver reliable commercial roofing, waterproofing, and sheet metal services across Texas by drawing on nearly a century of field experience and a commitment to honest trade practices.
          </p>
        </div>
      </Section>

      {/* What Defines Us */}
      <Section>
        <SectionHeader
          title="What Defines Us"
          description="The principles that have guided us since 1932"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group bg-secondary-50 hover:bg-primary-600 rounded-xl p-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary-100 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
              <svg className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
              Field-Proven Leadership
            </h3>
            <p className="mt-2 text-sm text-foreground-muted group-hover:text-primary-100 transition-colors">
              Led by people who grew up in the trades. Our President started as an apprentice in 1972.
            </p>
          </div>
          <div className="group bg-secondary-50 hover:bg-primary-600 rounded-xl p-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary-100 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
              <svg className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
              Strategic Growth
            </h3>
            <p className="mt-2 text-sm text-foreground-muted group-hover:text-primary-100 transition-colors">
              We expand to better serve the project, like adding sheet metal in 2002.
            </p>
          </div>
          <div className="group bg-secondary-50 hover:bg-primary-600 rounded-xl p-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary-100 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
              <svg className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
              Workforce Longevity
            </h3>
            <p className="mt-2 text-sm text-foreground-muted group-hover:text-primary-100 transition-colors">
              Old school employment—hiring good people and keeping them. Many 10, 15, and 20-year veterans.
            </p>
          </div>
          <div className="group bg-secondary-50 hover:bg-primary-600 rounded-xl p-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-lg bg-primary-100 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
              <svg className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
              Commercial Expertise
            </h3>
            <p className="mt-2 text-sm text-foreground-muted group-hover:text-primary-100 transition-colors">
              From M.D. Anderson to high-rises—we handle demanding commercial environments.
            </p>
          </div>
        </div>
      </Section>

      {/* Professional Memberships */}
      <Section background="alt">
        <SectionHeader
          title="Professional Memberships"
          description="Active members of leading industry associations"
        />
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {company.memberships.map((membership) => (
            <div
              key={membership.id}
              className="flex items-center justify-center p-4 rounded-lg bg-white shadow-sm border border-secondary-200 h-20"
              title={membership.fullName}
            >
              <Image
                src={membership.logo}
                alt={membership.fullName}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Ready to Work With Us?
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            Contact us today to discuss your roofing, waterproofing, or restoration project.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
