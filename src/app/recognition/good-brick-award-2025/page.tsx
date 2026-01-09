import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Good Brick Award 2025 - Buffalo Soldiers National Museum",
  description: `${company.name} contributed to the restoration of the historic Houston Light Guard Armory, home of the Buffalo Soldiers National Museum, recipient of Preservation Houston's 2025 Good Brick Award.`,
};

const projectDetails = {
  award: "Good Brick Award",
  year: 2025,
  organization: "Preservation Houston",
  building: "Houston Light Guard Armory",
  builtYear: 1925,
  architect: "Alfred C. Finn",
  location: "3816 Caroline Street, Midtown/Third Ward, Houston",
  client: "Buffalo Soldiers National Museum",
};

// TODO: Update with actual RSI services provided
const rsiContributions = [
  {
    service: "Restoration Services",
    description: "Details about RSI's specific contribution to be added.",
  },
  // Add more services as information becomes available
];

const projectTimeline = [
  { year: "1925", event: "Houston Light Guard Armory constructed, designed by Alfred C. Finn" },
  { year: "2009", event: "Buffalo Soldiers National Museum acquires the historic armory" },
  { year: "2012", event: "Museum moves into one floor after initial renovations" },
  { year: "2022", event: "$13 million 'Ready & Forward' campaign launched" },
  { year: "2025", event: "Awarded Preservation Houston Good Brick Award" },
];

export default function GoodBrickAward2025Page() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-primary-600 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://placehold.co/1920x800/5c1909/ffffff?text=Buffalo+Soldiers+Museum"
            alt="Buffalo Soldiers National Museum - Houston Light Guard Armory"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Link
            href="/recognition"
            className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Recognition
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-white text-primary-600">
              2025
            </span>
            <span className="text-primary-200">Preservation Houston</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Good Brick Award
          </h1>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl">
            Buffalo Soldiers National Museum — Houston Light Guard Armory Restoration
          </p>
        </div>
      </div>

      {/* Project Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground">
              About the Project
            </h2>
            <div className="mt-6 space-y-4 text-foreground-muted">
              <p>
                The Buffalo Soldiers National Museum received Preservation Houston&apos;s prestigious Good Brick Award in 2025 for the rehabilitation of the historic Houston Light Guard Armory. This 1925 landmark, designed by noted Houston architect Alfred C. Finn, has been meticulously restored to serve as the permanent home of the museum honoring African American military history.
              </p>
              <p>
                The restoration project addressed years of deterioration from neglect, hurricanes, tropical storms, and vandalism. The work included precise masonry repairs and structural improvements that brought new life to this Third Ward landmark while preserving its architectural heritage.
              </p>
              <p>
                RSI provided restoration services as part of the team that made this award-winning preservation project possible.
              </p>
              {/* TODO: Add more specific details about RSI's involvement */}
              <div className="mt-6 p-4 bg-secondary-100 rounded-lg border-l-4 border-primary-600">
                <p className="text-sm text-foreground italic">
                  <strong>Note:</strong> Additional details about RSI&apos;s specific contributions to this project will be added as information becomes available.
                </p>
              </div>
            </div>

            {/* RSI Contributions */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-foreground">
                RSI&apos;s Contribution
              </h3>
              <div className="mt-4 grid gap-4">
                {rsiContributions.map((contribution, index) => (
                  <div key={index} className="bg-secondary-50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground">
                      {contribution.service}
                    </h4>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {contribution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Project Details */}
              <div className="bg-secondary-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Project Details
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-foreground-muted">Award</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.award}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Year</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.year}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Organization</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.organization}</dd>
                  </div>
                  <div className="pt-3 border-t border-secondary-200">
                    <dt className="text-foreground-muted">Building</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.building}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Built</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.builtYear}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Architect</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.architect}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Location</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.location}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Client</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.client}</dd>
                  </div>
                </dl>
              </div>

              {/* About the Award */}
              <div className="bg-primary-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">
                  About the Good Brick Award
                </h3>
                <p className="text-sm text-primary-100">
                  Since 1979, Preservation Houston has presented the Good Brick Awards to honor outstanding contributions to the preservation, restoration, and enhancement of Houston&apos;s architectural and cultural heritage.
                </p>
                <a
                  href="https://www.preservationhouston.org/awards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-sm font-medium text-white hover:underline"
                >
                  Learn more at Preservation Houston
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Project Timeline */}
      <Section background="alt">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">
          Project Timeline
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200" />

            <div className="space-y-6">
              {projectTimeline.map((item, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-primary-600 border-4 border-white shadow" />
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <span className="text-sm font-bold text-primary-600">{item.year}</span>
                    <p className="mt-1 text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Image Gallery Placeholder */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">
          Project Gallery
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={`https://placehold.co/600x450/5c1909/ffffff?text=Project+Photo+${i}`}
                alt={`Buffalo Soldiers Museum restoration project photo ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-foreground-muted">
          Project photos to be added.
        </p>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Historic Preservation Expertise
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            RSI brings decades of experience to historic building restoration. Contact us about your preservation project.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
