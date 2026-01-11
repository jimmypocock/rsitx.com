import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";
import { locations, getLocationBySlug, getAllLocationSlugs } from "@/data/locations";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: `${location.name} - Service Area`,
    description: `${company.name} provides commercial roofing, waterproofing, and restoration services in ${location.name} and the ${location.region} area. View our projects.`,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Get other locations for the "Other Locations" section (only those with images)
  const otherLocations = locations
    .filter((l) => l.id !== location.id && l.image)
    .slice(0, 4);

  return (
    <>
      {/* Hero */}
      <div className="relative bg-primary-600 text-white pt-28 md:pt-32">
        {location.image && (
          <div className="absolute inset-0">
            <Image
              src={location.image}
              alt={`${location.name} skyline`}
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        )}
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Link
            href="/locations"
            className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Locations
          </Link>
          <p className="text-primary-200 text-sm font-medium uppercase tracking-wider">
            {location.region}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {location.name}
          </h1>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl">
            {location.description}
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <Section>
        <SectionHeader
          title={`Projects in ${location.name}`}
          description={`Commercial roofing, waterproofing, and restoration work in the ${location.region} area`}
        />

        {location.projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {location.projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.year && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-foreground">
                        {project.year}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary-50 rounded-xl">
            <svg
              className="w-12 h-12 text-secondary-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <p className="text-foreground-muted">
              Project details coming soon for this location.
            </p>
          </div>
        )}
      </Section>

      {/* Services Available */}
      <Section background="alt">
        <SectionHeader
          title="Services Available"
          description={`Full range of commercial roofing and restoration services in ${location.name}`}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/services/roofing"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
              Roofing
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              New construction, re-roofing, and repairs
            </p>
          </Link>
          <Link
            href="/services/waterproofing"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
              Waterproofing
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Below-grade and above-grade systems
            </p>
          </Link>
          <Link
            href="/services/sheet-metal"
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary-600 transition-colors">
              Sheet Metal
            </h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Custom fabrication and installation
            </p>
          </Link>
        </div>
      </Section>

      {/* Other Locations */}
      <Section>
        <SectionHeader
          title="Other Service Areas"
          description="We serve commercial clients throughout Texas"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherLocations.map((otherLocation) => (
            <Link
              key={otherLocation.id}
              href={`/locations/${otherLocation.slug}`}
              className="group flex items-center gap-4 bg-secondary-50 hover:bg-primary-600 rounded-lg p-4 transition-colors"
            >
              {otherLocation.image && (
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={otherLocation.image}
                    alt={otherLocation.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-white transition-colors">
                  {otherLocation.name}
                </h3>
                <p className="text-sm text-foreground-muted group-hover:text-primary-100 transition-colors">
                  {otherLocation.projects.length} project{otherLocation.projects.length !== 1 ? "s" : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/locations"
            className="text-primary-600 font-medium hover:underline"
          >
            View all locations →
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Need Service in {location.name}?
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            Contact us to discuss your commercial roofing, waterproofing, or restoration project.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Get a Quote
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
