"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectCategories } from "@/data/projects";

interface ProjectFilterProps {
  projects: Project[];
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all"
  );

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-primary-600 text-white"
              : "bg-secondary-100 text-foreground hover:bg-secondary-200"
          }`}
        >
          All Projects
        </button>
        {projectCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-primary-600 text-white"
                : "bg-secondary-100 text-foreground hover:bg-secondary-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground-muted">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
