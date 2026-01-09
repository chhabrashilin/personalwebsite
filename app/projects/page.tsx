"use client";

import { useState } from "react";
import { clsx } from "clsx";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { PROJECTS, CATEGORIES } from "@/lib/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="w-full">
      <Section className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              A collection of projects showcasing my work in systems engineering, machine learning,
              web development, and blockchain technology.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={clsx(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-foreground text-background"
                    : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60">No projects found in this category.</p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
