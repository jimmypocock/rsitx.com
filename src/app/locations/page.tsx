import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Service Locations",
  description: `${company.name} provides commercial roofing, waterproofing, and restoration services across Texas, including Houston, San Antonio, Galveston, and the Gulf Coast region.`,
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        title="Service Locations"
        subtitle="Serving Texas"
        description="Commercial roofing and restoration services across the Lone Star State"
        backgroundImage="https://placehold.co/1920x600/5c1909/ffffff?text=Texas+Locations"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            From our Houston headquarters, RSI serves commercial clients throughout Texas. Our teams bring nearly a century of combined experience to every project, whether it&apos;s a historic restoration in Galveston or an industrial roofing project in the Golden Triangle.
          </p>
        </div>
      </Section>

      {/* Locations Grid */}
      <Section background="alt">
        <SectionHeader
          title="Our Service Areas"
          description="Select a location to view projects in that area"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={`/locations/${location.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={location.image}
                  alt={`${location.name} service area`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
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

      {/* Map Placeholder */}
      <Section>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <div className="aspect-[21/9] bg-secondary-200 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-secondary-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="text-foreground-muted">
                Interactive service area map
              </p>
              <p className="text-sm text-foreground-muted mt-2">
                Covering Houston, the Gulf Coast, South Texas, and beyond
              </p>
            </div>
          </div>
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
