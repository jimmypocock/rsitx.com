import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader, Section, ServiceCard } from "@/components/ui";
import { TestimonialBlock } from "@/components/ui/Testimonials";
import { services, getServiceBySlug, restorationSubServices, roofingSubServices } from "@/data/services";
import { company } from "@/data/company";

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

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const isRestorationService = service.id === "restoration-services";
  const isRoofingService = service.id === "roofing";

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle="Our Services"
        description={service.shortDescription}
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

            {/* Restoration Sub-Services */}
            {isRestorationService && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Our Restoration Services Include
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {restorationSubServices.map((subService) => (
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
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Other Services */}
      <Section background="alt">
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
