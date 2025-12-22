import Image from "next/image";
import type { Partner } from "@/data/partners";

interface PartnerGridProps {
  partners: Partner[];
  title?: string;
}

export function PartnerGrid({ partners, title }: PartnerGridProps) {
  return (
    <div>
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-4 rounded-lg bg-white border border-secondary-200 hover:border-primary-300 hover:shadow-md transition-all"
            title={partner.name}
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={64}
                className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            ) : (
              <span className="text-sm font-medium text-foreground-muted group-hover:text-primary-600 text-center transition-colors">
                {partner.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
