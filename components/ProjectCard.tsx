"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:border-foreground/20 hover:shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold group-hover:text-foreground/80 transition-colors">
            {project.name}
          </h3>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label={`View ${project.name} on GitHub`}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label={`View ${project.name} live demo`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-foreground/70 mb-4">{project.description}</p>

        <div className="space-y-3 mb-4">
          <div>
            <span className="text-xs font-medium text-foreground/50 uppercase tracking-wide">
              Problem
            </span>
            <p className="text-sm text-foreground/70 mt-1">{project.problem}</p>
          </div>
          <div>
            <span className="text-xs font-medium text-foreground/50 uppercase tracking-wide">
              Solution
            </span>
            <p className="text-sm text-foreground/70 mt-1">{project.solution}</p>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono bg-foreground/5 text-foreground/70 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
