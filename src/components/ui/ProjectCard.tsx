import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-700 capitalize">
            {project.category.replace("-", " ")}
          </span>
          {project.location && (
            <span className="text-xs text-foreground-muted">
              {project.location}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-foreground-muted line-clamp-2">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {project.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="inline-flex items-center rounded bg-secondary-100 px-2 py-0.5 text-xs text-foreground-muted"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
