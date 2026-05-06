import Image from "next/image";
import type { StaffMember } from "@/data/staff";

interface StaffCardProps {
  person: StaffMember;
  priority?: boolean;
}

export function StaffCard({ person, priority = false }: StaffCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary-50 shadow-sm ring-1 ring-secondary-200/70">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
          priority={priority}
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <h3 className="mt-4 text-base sm:text-lg font-semibold text-foreground">
        {person.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-primary-600">
        {person.role}
      </p>
    </article>
  );
}
