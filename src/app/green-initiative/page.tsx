import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeader } from "@/components/ui";
import { TestimonialBlock } from "@/components/ui/Testimonials";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Green Initiative",
  description: `${company.name} is committed to environmental sustainability through green roofing solutions and eco-friendly practices.`,
};

const greenProjects = [
  {
    name: "Rice University",
    description: "Comprehensive green roofing installation across multiple campus buildings.",
    image: "https://placehold.co/400x300/5c1909/ffffff?text=Rice+University",
  },
  {
    name: "Moody Gardens",
    description: "Sustainable roofing solutions for this iconic Galveston destination.",
    image: "https://placehold.co/400x300/5c1909/ffffff?text=Moody+Gardens",
  },
  {
    name: "Prairie View A&M School of Nursing",
    description: "LEED-compliant roofing for state-of-the-art healthcare education facility.",
    image: "https://placehold.co/400x300/5c1909/ffffff?text=Prairie+View",
  },
];

export default function GreenInitiativePage() {
  return (
    <>
      <PageHeader
        title="Green Initiative"
        subtitle="Sustainability"
        description="Your building isn't the only thing we're restoring"
        backgroundImage="https://placehold.co/1920x600/5c1909/ffffff?text=RSI+Green+Initiative"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            At RSI, we make a concerted effort to minimize our impact on the environment. We work with industry leaders in green initiatives and employ operational practices that effectively contain waste materials and chemicals.
          </p>
        </div>
      </Section>

      {/* Our Commitment */}
      <Section background="alt">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Environmental Commitment
            </h2>
            <p className="mt-6 text-lg text-foreground-muted">
              We believe that quality construction and environmental responsibility go hand in hand. Our green initiatives include:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-foreground-muted">
                  Green and cool roof installations that reduce energy consumption
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-foreground-muted">
                  Proper recycling and disposal of construction materials
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-foreground-muted">
                  Partnership with eco-conscious manufacturers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-foreground-muted">
                  LEED-compliant project capabilities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-foreground-muted">
                  Effective containment of waste and chemicals
                </span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/800x600/5c1909/ffffff?text=Green+Roofing"
              alt="Green roofing installation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Green Projects */}
      <Section>
        <SectionHeader
          title="Featured Green Projects"
          description="Examples of our sustainable roofing work"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {greenProjects.map((project) => (
            <article
              key={project.name}
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
                <h3 className="text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="alt">
        <div className="max-w-3xl mx-auto">
          <TestimonialBlock
            testimonial={{
              quote:
                "Our architecture firm specializes in green housing. RSI was knowledgeable about the latest in green roofing materials and they ensured the roof was installed perfectly and met all current code requirements. I look forward to working with them on our next project.",
            }}
          />
        </div>
      </Section>

      {/* Benefits of Green Roofing */}
      <Section>
        <SectionHeader
          title="Benefits of Green Roofing"
          description="Why sustainable roofing makes sense for your building"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Energy Savings</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Reduce cooling costs with reflective and vegetated roofing systems.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Environmental Impact</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Reduce urban heat island effect and improve air quality.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Extended Lifespan</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Green roofs can last twice as long as conventional roofing.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">LEED Credits</h3>
            <p className="mt-2 text-sm text-foreground-muted">
              Contribute to your building&apos;s sustainability certification.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Go Green?
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Contact us to learn how sustainable roofing solutions can benefit your building and the environment.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Discuss Green Options
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
