import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader, Section, SectionHeader } from "@/components/ui";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Recognition & Awards",
  description: `${company.name} has been recognized for excellence in commercial roofing, waterproofing, and historic building restoration across Texas.`,
};

interface Award {
  id: string;
  title: string;
  year: number;
  organization: string;
  project: string;
  description: string;
  image: string;
  href: string;
}

const awards: Award[] = [
  {
    id: "good-brick-2025",
    title: "Good Brick Award",
    year: 2025,
    organization: "Preservation Houston",
    project: "Buffalo Soldiers National Museum",
    description:
      "RSI provided restoration services for the historic Houston Light Guard Armory (1925), home of the Buffalo Soldiers National Museum, which received the prestigious Good Brick Award for excellence in historic preservation.",
    image: "https://placehold.co/600x400/5c1909/ffffff?text=Good+Brick+Award+2025",
    href: "/recognition/good-brick-award-2025",
  },
];

export default function RecognitionPage() {
  return (
    <>
      <PageHeader
        title="Recognition & Awards"
        subtitle="Excellence in Preservation"
        description="Honored for our commitment to quality craftsmanship and historic preservation"
        backgroundImage="https://placehold.co/1920x600/5c1909/ffffff?text=Recognition"
      />

      {/* Intro Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            For over 90 years, the companies that became RSI have been trusted partners in preserving and protecting Houston&apos;s most important buildings. Our work on historic landmarks, commercial properties, and institutional facilities has earned recognition from leading preservation organizations.
          </p>
        </div>
      </Section>

      {/* Awards Grid */}
      <Section background="alt">
        <SectionHeader
          title="Awards & Honors"
          description="Recent recognition for our restoration and preservation work"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <Link
              key={award.id}
              href={award.href}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/2] relative">
                <Image
                  src={award.image}
                  alt={`${award.title} - ${award.project}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary-600 text-white">
                    {award.year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-primary-600 mb-1">
                  {award.organization}
                </p>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary-600 transition-colors">
                  {award.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {award.project}
                </p>
                <p className="mt-3 text-sm text-foreground-muted line-clamp-2">
                  {award.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-primary-600 group-hover:underline">
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Memberships Reference */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Professional Affiliations
          </h2>
          <p className="mt-4 text-foreground-muted">
            RSI maintains active memberships in leading industry associations, reflecting our commitment to professional standards and continuing education.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {company.memberships.map((membership) => (
              <span
                key={membership}
                className="px-4 py-2 rounded-lg bg-secondary-100 text-primary-600 font-semibold"
              >
                {membership}
              </span>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/about"
              className="text-primary-600 font-medium hover:underline"
            >
              Learn more about our company →
            </Link>
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Work With an Award-Winning Team
          </h2>
          <p className="mt-3 text-primary-200 max-w-xl mx-auto">
            Bring the same expertise we&apos;ve applied to Houston&apos;s historic landmarks to your next project.
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
