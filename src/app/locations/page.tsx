import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";
import { getLocationsWithProjects, getServiceAreas } from "@/data/locations";

export const metadata: Metadata = {
  title: "Service Locations",
  description: `${company.name} provides commercial roofing, waterproofing, and restoration services across Texas, including Houston, San Antonio, Galveston, and the Gulf Coast region.`,
};

export default function LocationsPage() {
  const locationsWithProjects = getLocationsWithProjects();
  const serviceAreas = getServiceAreas();

  return (
    <>
      <PageHeader
        title="Service Locations"
        subtitle="Serving Texas"
        description="Commercial roofing and restoration services across the Lone Star State"
        backgroundImage="/images/projects/colleges-universities/waterproofing-texas-am-galveston-tennis-courts-1.webp"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            From our Houston headquarters, RSI serves commercial clients throughout Texas. Our teams bring nearly a century of combined experience to every project, whether it&apos;s a historic restoration in Galveston or an industrial roofing project in the Golden Triangle.
          </p>
        </div>
      </Section>

      {/* Featured Locations with Projects */}
      <Section background="alt">
        <SectionHeader
          title="Featured Locations"
          description="View our completed projects in these areas"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {locationsWithProjects.map((location) => (
            <Link
              key={location.id}
              href={`/locations/${location.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                {location.image ? (
                  <Image
                    src={location.image}
                    alt={`${location.name} service area`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary-600" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                    {location.name}
                  </h3>
                  <p className="text-sm text-white/80">
                    {location.region}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-foreground-muted line-clamp-2">
                  {location.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-foreground-muted">
                    {location.projects.length} project{location.projects.length !== 1 ? "s" : ""}
                  </span>
                  <span className="text-sm font-semibold text-primary-600 group-hover:underline">
                    View projects →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Additional Service Areas */}
      <Section>
        <SectionHeader
          title="Additional Service Areas"
          description="RSI provides commercial roofing and restoration services throughout Texas"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {serviceAreas.map((area) => (
            <div
              key={area.id}
              className="bg-secondary-50 rounded-lg p-5 border border-secondary-100"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {area.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium">
                    {area.region}
                  </p>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Don&apos;t See Your Area?
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            We regularly take on projects throughout Texas. Contact us to discuss your location and project needs.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
