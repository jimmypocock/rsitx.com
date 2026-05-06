import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, ImageGallery } from "@/components/ui";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Good Brick Award 2025 - Buffalo Soldiers National Museum",
  description: `${company.name} provided full exterior restoration for the historic Houston Light Guard Armory, home of the Buffalo Soldiers National Museum, recipient of Preservation Houston's 2025 Good Brick Award.`,
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
  designation: "Recorded Texas Historic Landmark",
};

const rsiContributions = [
  {
    service: "Exterior Waterproofing",
    description:
      "Complete waterproofing of the building envelope to protect against Houston's severe weather, including hurricanes and tropical storms that had damaged the structure over its nearly 100-year history.",
  },
  {
    service: "Masonry Restoration",
    description:
      "Precise, surgical masonry repairs to the historic brick-and-limestone facade, restoring the alternating bands of brick and stone that define Alfred C. Finn's neo-Gothic English masonry design.",
  },
  {
    service: "Stone Repair",
    description:
      "Restoration of carved-stone sculptural embellishments, including relief panels depicting soldiers and militaristic insignia above the arched entrance.",
  },
  {
    service: "Building Envelope Protection",
    description:
      "Comprehensive exterior restoration to address decades of deterioration from neglect, weather damage, and vandalism, ensuring the landmark's preservation for future generations.",
  },
];

const projectTimeline = [
  { year: "1925", event: "Houston Light Guard Armory constructed, designed by renowned Houston architect Alfred C. Finn" },
  { year: "2009", event: "Buffalo Soldiers National Museum acquires the historic armory" },
  { year: "2012", event: "Museum moves into building; begins initial renovations" },
  { year: "2022", event: "$13 million 'Ready & Forward' campaign launched with support from Kinder Foundation and Houston Endowment" },
  { year: "2024", event: "RSI completes full exterior restoration including waterproofing and masonry work" },
  { year: "2025", event: "Awarded Preservation Houston Good Brick Award at 46th annual ceremony" },
];

const galleryImages = [
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-1.webp", alt: "Buffalo Soldiers Museum exterior restoration" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-2.webp", alt: "Masonry restoration work in progress" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-3.webp", alt: "Historic facade waterproofing" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-4.webp", alt: "Stone repair and restoration" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-5.webp", alt: "Building envelope protection" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-6.webp", alt: "Exterior restoration detail" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-7.webp", alt: "Historic armory restoration" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-8.webp", alt: "Waterproofing application" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-9.webp", alt: "Masonry detail work" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-10.webp", alt: "Restored facade detail" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-11.webp", alt: "Historic preservation work" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-12.webp", alt: "Exterior restoration progress" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-13.webp", alt: "Architectural detail restoration" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-14.webp", alt: "Building envelope work" },
  { src: "/images/projects/historical/waterproofing-buffalo-soldiers-museum-15.webp", alt: "Completed exterior restoration" },
];

export default function GoodBrickAward2025Page() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-primary-600 text-white pt-28 md:pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/historical/waterproofing-buffalo-soldiers-museum-1.webp"
            alt="Buffalo Soldiers National Museum - Houston Light Guard Armory"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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
              2025 Good Brick Award
            </span>
            <span className="text-primary-200">Preservation Houston</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Buffalo Soldiers National Museum
          </h1>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl">
            Full Exterior Restoration of the Historic Houston Light Guard Armory
          </p>
        </div>
      </div>

      {/* Award Announcement Banner */}
      <div className="bg-secondary-100 border-b border-secondary-200">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-foreground">
              <span className="font-semibold">46th Annual Good Brick Awards</span>
              {" — "}Recognized for outstanding contributions to the preservation of Houston&apos;s architectural heritage
            </p>
            <a
              href="https://www.preservationhouston.org/awards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              About the Award
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground">
              Preserving a Houston Landmark
            </h2>
            <div className="mt-6 space-y-4 text-foreground-muted">
              <p>
                The Buffalo Soldiers National Museum received Preservation Houston&apos;s prestigious Good Brick Award in 2025 for the rehabilitation of the historic Houston Light Guard Armory. This 1925 landmark, designed by renowned Houston architect Alfred C. Finn, has been meticulously restored to serve as the permanent home of the museum honoring African American military history.
              </p>
              <p>
                The three-story building is a Recorded Texas Historic Landmark, a City of Houston Protected Landmark, and eligible for the National Register of Historic Places. Finn designed the structure with late Renaissance period neo-Gothic English masonry, featuring alternating bands of brick and limestone, elaborate relief panels above the arched entrance, and carved-stone sculptural embellishments depicting soldiers shouldering weapons and other militaristic insignia.
              </p>
              <p className="font-medium text-foreground">
                RSI provided complete exterior restoration services for this award-winning project, including waterproofing, masonry restoration, and stone repair—bringing new life to a building that had faced nearly 70 years of neglect, multiple hurricanes, tropical storms, and vandalism.
              </p>
            </div>

            {/* RSI Contributions */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-foreground">
                RSI&apos;s Exterior Restoration Work
              </h3>
              <p className="mt-2 text-foreground-muted">
                As part of the museum&apos;s $13 million &quot;Ready &amp; Forward&quot; campaign, RSI delivered comprehensive exterior restoration services:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {rsiContributions.map((contribution, index) => (
                  <div key={index} className="bg-secondary-50 rounded-lg p-5 border border-secondary-100">
                    <h4 className="font-semibold text-foreground">
                      {contribution.service}
                    </h4>
                    <p className="mt-2 text-sm text-foreground-muted">
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
                    <dt className="text-foreground-muted">Presented By</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.organization}</dd>
                  </div>
                  <div className="pt-3 border-t border-secondary-200">
                    <dt className="text-foreground-muted">Historic Building</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.building}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Original Construction</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.builtYear}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Original Architect</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.architect}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Designation</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.designation}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground-muted">Location</dt>
                    <dd className="font-semibold text-foreground">{projectDetails.location}</dd>
                  </div>
                </dl>
              </div>

              {/* About the Award */}
              <div className="bg-primary-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">
                  About the Good Brick Award
                </h3>
                <p className="text-sm text-primary-100">
                  Since 1979, Preservation Houston has presented the Good Brick Awards to honor outstanding contributions to the preservation, restoration, and enhancement of Houston&apos;s architectural and cultural heritage. The 2025 awards marked the 46th year of the program, having recognized more than 420 people and projects.
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

      {/* Featured Image */}
      <Section background="alt">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/projects/historical/waterproofing-buffalo-soldiers-museum-2.webp"
              alt="Buffalo Soldiers Museum exterior restoration by RSI"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/projects/historical/waterproofing-buffalo-soldiers-museum-3.webp"
              alt="Historic masonry restoration work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Project Timeline */}
      <Section>
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
                  <div className={`absolute left-2 top-1 w-5 h-5 rounded-full border-4 border-white shadow ${
                    item.year === "2024" || item.year === "2025"
                      ? "bg-primary-600"
                      : "bg-primary-300"
                  }`} />
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <span className={`text-sm font-bold ${
                      item.year === "2024" || item.year === "2025"
                        ? "text-primary-600"
                        : "text-foreground-muted"
                    }`}>{item.year}</span>
                    <p className="mt-1 text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Image Gallery */}
      <Section background="alt">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Project Gallery
        </h2>
        <p className="text-center text-foreground-muted mb-8">
          Click any image to view full size
        </p>
        <ImageGallery
          images={galleryImages}
          columns={3}
          aspectRatio="4/3"
          gap="md"
        />
      </Section>

      {/* Quote Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 text-primary-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl text-foreground italic">
            &quot;Precise, almost surgical masonry repairs brought new life to a historic Third Ward landmark.&quot;
          </blockquote>
          <cite className="mt-4 block text-foreground-muted">
            — Preservation Houston, 2025 Good Brick Awards
          </cite>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Historic Preservation Expertise
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            RSI brings decades of experience to historic building restoration. From waterproofing to masonry repair, we have the expertise to preserve your landmark building.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects/historical-projects"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              View Historical Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 transition-colors"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
