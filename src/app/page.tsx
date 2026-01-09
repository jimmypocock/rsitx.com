import Link from "next/link";
import Image from "next/image";
import { Hero, Section, SectionHeader, ServiceCard, Stats } from "@/components/ui";
import { Testimonials } from "@/components/ui/Testimonials";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { getFeaturedProjects } from "@/data/projectCategories";
import { getFeaturedTestimonials } from "@/data/testimonials";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredTestimonials = getFeaturedTestimonials();

  const stats = [
    { value: `${company.yearsOfLegacy}+`, label: "Years of Legacy", description: "Since 1932" },
    { value: "1000+", label: "Projects Completed", description: "Across Texas" },
    { value: "100+", label: "Field Professionals", description: "Experienced crew" },
    { value: "7", label: "Industry Memberships", description: "Professional associations" },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Building Confidence"
        subtitle="Nearly a Century of Texas Trades"
        description={company.description}
        primaryAction={{ label: "Get a Quote", href: "/contact" }}
        secondaryAction={{ label: "Our Services", href: "/services" }}
        backgroundImages={[
          "/images/hero/hero-1.webp",
          "/images/hero/hero-2.webp",
          "/images/hero/hero-3.webp",
          "/images/hero/hero-4.webp",
          "/images/hero/hero-5.webp",
        ]}
        rotationInterval={7000}
      />

      {/* Stats Section */}
      <Section background="white">
        <Stats stats={stats} variant="default" />
      </Section>

      {/* Services Section */}
      <Section>
        <SectionHeader
          subtitle="What We Do"
          title="Our Services"
          description="From new construction to restoration, we deliver comprehensive building envelope solutions."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </Section>

      {/* About/Value Proposition Section - Full bleed image */}
      <section className="relative bg-secondary-100">
        <div className="lg:grid lg:grid-cols-2">
          {/* Text Content */}
          <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 lg:py-32 xl:pr-16">
            <div className="lg:max-w-lg lg:ml-auto">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-2">
                Why Choose RSI
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                More Than 60 Years of Doing It Right
              </h2>
              <p className="mt-6 text-lg text-foreground-muted">
                RSI&apos;s expertise comes from six decades of serving Southeast Texas. From simple roof patches to massive, multi-story, multi-million dollar restoration or roofing projects, our experience combined with our commitment to quality means we deliver the ideal solution for your building.
              </p>
              <p className="mt-4 text-lg text-foreground-muted">
                We maintain constant watch for emerging technology, including infrared leak detection and non-destructive restoration methods. Innovation keeps us ahead and keeps you covered.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-500"
                >
                  Learn more about us
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {/* Full Bleed Image */}
          <div className="relative h-64 sm:h-80 lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              src="/images/RSI_Team_Hailey_Elementary_Sheet_Metal_Work.webp"
              alt="RSI team at work on sheet metal at Hailey Elementary"
              fill
              className="object-cover object-left"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <Section>
        <SectionHeader
          subtitle="Our Work"
          title="Featured Projects"
          description="Explore some of our recent work across Southeast Texas."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-primary-600 font-medium">
                  {project.location}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted line-clamp-2">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Testimonials testimonials={featuredTestimonials} />

      {/* Professional Memberships */}
      <Section background="alt">
        <SectionHeader
          subtitle="Our Credentials"
          title="Professional Memberships"
          description="We maintain active memberships in leading industry associations to ensure we deliver the highest quality work."
        />
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {company.memberships.map((membership) => (
            <div
              key={membership}
              className="flex items-center justify-center w-24 h-24 rounded-lg bg-white shadow-sm border border-secondary-200"
            >
              <span className="text-lg font-bold text-primary-600">
                {membership}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Contact us today for a consultation. Our team is ready to help with your roofing, waterproofing, or restoration needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${company.contact.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 transition-colors"
            >
              Call {company.contact.phone}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
