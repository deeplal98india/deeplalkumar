import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { projects } from "../../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );

  const normalProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    []
  );

  return (
    <section
      id="projects"
      aria-label="Portfolio projects"
      className="relative overflow-hidden py-16 transition-colors duration-300 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 14 }
          }
          whileInView={
            shouldReduceMotion
              ? {}
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-3xl sm:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Projects built to solve real problems.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            A selection of web applications, dashboards and full-stack
            projects. Explore the technology, my contribution and available
            demos.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="space-y-5">
            {featuredProjects.map((project) => (
              <FeaturedProject
                key={project.id ?? project.title}
                project={project}
              />
            ))}
          </div>
        )}

        {/* Other Projects */}
        {normalProjects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {normalProjects.map((project, index) => (
              <ProjectCard
                key={project.id ?? project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {projects.length === 0 && (
          <p className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-[#101116] dark:text-slate-400">
            Projects will be added here soon.
          </p>
        )}
      </div>
    </section>
  );
}
