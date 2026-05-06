import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader, Section, ServiceCard, ImageGallery, StaffCard } from "@/components/ui";
import { TestimonialBlock } from "@/components/ui/Testimonials";
import { services, getServiceBySlug, roofingSubServices, roofingSystems, waterproofingApplications } from "@/data/services";
import { company } from "@/data/company";
import { projectCategories } from "@/data/projectCategories";
import { getStaffForService } from "@/data/staff";

// Get projects that match a service type
function getProjectsForService(serviceId: string) {
  const serviceMapping: Record<string, string[]> = {
    roofing: ["Roofing"],
    waterproofing: ["Waterproofing", "Restoration"],
    "sheet-metal": ["Sheet Metal"],
    "concrete-masonry": ["Concrete & Masonry", "Restoration"],
  };

  const matchingServices = serviceMapping[serviceId] || [];
  const projects: { name: string; location: string; images: { src: string; alt: string }[] }[] = [];

  projectCategories.forEach((category) => {
    category.projects.forEach((project) => {
      if (project.services.some((s) => matchingServices.includes(s)) && project.images && project.images.length > 0) {
        projects.push({
          name: project.name,
          location: project.location,
          images: project.images.slice(0, 4), // Show max 4 images per project
        });
      }
    });
  });

  return projects.slice(0, 3); // Max 3 projects
}

// Houston-targeted titles, descriptions, and PageHeader copy per service.
// Kept here (not in services data) because these are SEO-tuned for the
// /services/[slug] route specifically and don't belong in the shared model.
const SERVICE_SEO: Record<
  string,
  { title: string; description: string; pageDescription: string }
> = {
  roofing: {
    title: "Commercial Roofing in Houston, TX",
    description:
      "Commercial roofing in Houston, TX — new construction, re-roofing, infrared leak detection, and storm repairs. Serving Southeast Texas since 1932.",
    pageDescription:
      "Complete commercial roofing solutions for Houston and Southeast Texas — from new construction to repairs.",
  },
  waterproofing: {
    title: "Commercial Waterproofing in Houston, TX",
    description:
      "Commercial waterproofing services in Houston — below-grade, plaza decks, parking structures, and building envelope. Gulf Coast specialists since 1932.",
    pageDescription:
      "The Gulf Coast's authority on waterproofing — protect your Houston building from moisture damage.",
  },
  "sheet-metal": {
    title: "Architectural Sheet Metal in Houston, TX",
    description:
      "Custom architectural sheet metal in Houston — coping, flashing, gutters, expansion joints, and metal panels. In-house fabrication shop, fast turnaround.",
    pageDescription:
      "Custom architectural sheet metal fabrication and installation in Houston, from our in-house shop.",
  },
  "concrete-masonry": {
    title: "Concrete & Masonry Restoration in Houston, TX",
    description:
      "Commercial concrete and masonry restoration in Houston — expansion joints, tuckpointing, exterior wall coatings, and historic preservation.",
    pageDescription:
      "Concrete repair, masonry restoration, and building envelope services for Houston commercial properties.",
  },
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const seo = SERVICE_SEO[slug];

  return {
    title: seo?.title ?? service.title,
    description: seo?.description ?? service.shortDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const isRoofingService = service.id === "roofing";
  const isWaterproofingService = service.id === "waterproofing";
  const relatedProjects = getProjectsForService(service.id);
  const teamMembers = getStaffForService(service.slug);
  const seo = SERVICE_SEO[slug];

  const serviceSchema = seo && {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seo.title,
    description: seo.description,
    provider: { "@id": "https://rsitx.com/#business" },
    areaServed: [
      { "@type": "City", name: "Houston" },
      { "@type": "AdministrativeArea", name: "Southeast Texas" },
    ],
    serviceType: service.title,
    url: `https://rsitx.com/services/${slug}`,
  };

  return (
    <>
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      <PageHeader
        title={service.title}
        subtitle="Our Services"
        description={seo?.pageDescription ?? service.shortDescription}
        backgroundImage={service.image}
      />

      {/* Main Content */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              About This Service
            </h2>
            <p className="text-lg text-foreground-muted">
              {service.fullDescription}
            </p>

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What We Offer
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
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
                      <span className="text-foreground-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Roofing Sub-Services */}
            {isRoofingService && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Our Roofing Services Include
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {roofingSubServices.map((subService) => (
                    <div
                      key={subService.id}
                      className="bg-secondary-50 rounded-lg p-6"
                    >
                      <h4 className="text-lg font-semibold text-foreground">
                        {subService.title}
                      </h4>
                      <p className="mt-2 text-sm text-foreground-muted">
                        {subService.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Roofing Systems */}
            {isRoofingService && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Roofing Systems We Install
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {roofingSystems.map((system) => (
                    <div
                      key={system.id}
                      className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 font-bold text-xs">
                          {system.acronym || system.name.substring(0, 3).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">
                          {system.acronym ? `${system.acronym} - ${system.name}` : system.name}
                        </h4>
                        <p className="mt-1 text-xs text-foreground-muted">
                          {system.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Waterproofing Applications */}
            {isWaterproofingService && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Waterproofing Applications
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {waterproofingApplications.map((app) => (
                    <div
                      key={app.id}
                      className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
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
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">
                          {app.name}
                        </h4>
                        <p className="mt-1 text-xs text-foreground-muted">
                          {app.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {service.testimonial && (
              <div className="mt-12">
                <TestimonialBlock testimonial={service.testimonial} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* CTA Card */}
              <div className="bg-primary-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
                <p className="mt-2 text-primary-200">
                  Contact us today for a free consultation and estimate.
                </p>
                <div className="mt-6 space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center rounded-md bg-white px-4 py-2.5 font-semibold text-primary-600 hover:bg-secondary-100 transition-colors"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href={`tel:${company.contact.phoneRaw}`}
                    className="block w-full text-center rounded-md bg-primary-500 px-4 py-2.5 font-semibold text-white hover:bg-primary-400 transition-colors"
                  >
                    Call {company.contact.phone}
                  </a>
                </div>
              </div>

              {/* Service Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Project Examples */}
      {relatedProjects.length > 0 && (
        <Section background="alt">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
            Recent {service.title} Projects
          </h2>
          <p className="text-center text-foreground-muted mb-8">
            Click any image to view full size
          </p>
          <div className="space-y-10">
            {relatedProjects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <span className="text-sm text-primary-600 font-medium">
                    {project.location}
                  </span>
                </div>
                <ImageGallery
                  images={project.images}
                  columns={project.images.length >= 4 ? 4 : project.images.length >= 3 ? 3 : 2}
                  aspectRatio="4/3"
                  gap="sm"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-500"
            >
              View all projects
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
        </Section>
      )}

      {/* Meet the Team */}
      {teamMembers.length > 0 && (
        <Section background={relatedProjects.length > 0 ? undefined : "alt"}>
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-2">
              The People
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Meet the {service.title} Team
            </h2>
            <p className="mt-3 text-foreground-muted max-w-2xl mx-auto">
              The estimators, project managers, and superintendents you&apos;ll work with on a {service.title.toLowerCase()} project.
            </p>
          </div>
          <ul className="grid gap-x-6 gap-y-10 sm:gap-x-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((person) => (
              <li key={person.id}>
                <StaffCard person={person} />
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              href="/team"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-500"
            >
              See the full team
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
        </Section>
      )}

      {/* Other Services */}
      <Section
        background={
          (relatedProjects.length > 0) === (teamMembers.length > 0) ? "alt" : undefined
        }
      >
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Other Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((s) => (
            <ServiceCard key={s.id} service={s} variant="compact" />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-500"
          >
            View all services
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
      </Section>
    </>
  );
}
