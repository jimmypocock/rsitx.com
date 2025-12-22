import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group block rounded-lg border border-secondary-200 bg-white p-6 hover:border-primary-300 hover:shadow-md transition-all"
      >
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-foreground-muted line-clamp-2">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600">
          Learn more
          <svg
            className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
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
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
          {service.title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-foreground-muted line-clamp-2">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600">
          Learn more
          <svg
            className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
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
        </span>
      </div>
    </Link>
  );
}
