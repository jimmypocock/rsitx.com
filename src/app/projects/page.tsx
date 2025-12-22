import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section, ProjectFilter } from "@/components/ui";
import { projects } from "@/data/projects";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore our portfolio of commercial roofing, waterproofing, and restoration projects across Southeast Texas. ${company.name} has completed over 1000 projects in 60+ years.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="Portfolio"
        description="The Gulf Coast Experts"
        backgroundImage="https://placehold.co/1920x600/5c1909/ffffff?text=RSI+Projects"
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground-muted">
            With more than six decades of roofing and waterproofing expertise, RSI has completed projects across every sector. Our understanding of Gulf Coast climate challenges means we deliver solutions that stand the test of time.
          </p>
        </div>
      </Section>

      {/* Projects with Filter */}
      <Section background="alt">
        <ProjectFilter projects={projects} />
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Let&apos;s discuss how RSI can help with your next roofing, waterproofing, or restoration project.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-secondary-100 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
