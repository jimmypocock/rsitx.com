import Link from "next/link";
import Image from "next/image";
import { Hero, Section, SectionHeader, ServiceCard } from "@/components/ui";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { getFeaturedProjects } from "@/data/projectCategories";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

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

      {/* Services Section */}
      <Section>
        <SectionHeader
          subtitle="What We Do"
          title="Our Services"
          description="From new construction to restoration, we deliver comprehensive building envelope solutions."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              src="/images/rsi-team-sheet-metal-work.webp"
              alt="RSI team at work on sheet metal at Hailey Elementary"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
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
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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

      {/* What Sets Us Apart */}
      <Section background="alt">
        <SectionHeader
          subtitle="The RSI Difference"
          title="What Sets Us Apart"
          description="Expertise and capabilities that have made us the Gulf Coast's trusted authority."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {/* Gulf Coast Expertise */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-secondary-100">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground">
              {company.differentiators.gulfCoastExpertise.title}
            </h3>
            <p className="mt-2 text-foreground-muted text-sm">
              {company.differentiators.gulfCoastExpertise.description}
            </p>
          </div>

          {/* Infrared Detection */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-secondary-100">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground">
              {company.differentiators.infraredDetection.title}
            </h3>
            <p className="mt-2 text-foreground-muted text-sm">
              {company.differentiators.infraredDetection.description}
            </p>
          </div>

          {/* On-Site Shop */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-secondary-100">
            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground">
              {company.differentiators.onSiteShop.title}
            </h3>
            <p className="mt-2 text-foreground-muted text-sm">
              {company.differentiators.onSiteShop.description}
            </p>
          </div>
        </div>
      </Section>

      {/* Trusted By */}
      <Section>
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-2">
            Trusted By
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Notable Clients
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {company.notableClients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 rounded-lg bg-secondary-100 h-20"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={48}
                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </Section>

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
