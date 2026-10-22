import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FolderKanban, Sparkles, ArrowDown } from "lucide-react";

import { projects } from "../../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  // Keep project lists in sync with the projects data.
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured === true),
    []
  );

  const normalProjects = useMemo(
    () => projects.filter((project) => project.featured !== true),
    []
  );

  const revealAnimation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <section
      id="projects"
      aria-label="Portfolio projects"
      className="relative isolate overflow-hidden bg-slate-50 py-16 transition-colors duration-300 dark:bg-[#090D16] sm:py-20 lg:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-400/[0.08] blur-3xl dark:bg-cyan-500/[0.08]" />

        <div className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-violet-400/[0.08] blur-3xl dark:bg-violet-500/[0.08]" />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          {...revealAnimation}
          className="mb-10 max-w-3xl sm:mb-14 lg:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 shadow-sm shadow-cyan-950/[0.03] backdrop-blur-sm dark:border-cyan-400/20 dark:bg-slate-900/70 dark:text-cyan-300">
            <Sparkles className="h-4 w-4" />
            <span>Selected Work</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Projects built to{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-400 dark:via-sky-400 dark:to-violet-400">
              solve real problems.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-400">
            A collection of web applications, dashboards and full-stack
            solutions showcasing my approach to clean architecture,
            intuitive interfaces and practical problem-solving.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
              <FolderKanban className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span>
                {projects.length}{" "}
                {projects.length === 1 ? "Project" : "Projects"}
              </span>
            </div>

            {featuredProjects.length > 0 && (
              <div className="inline-flex items-center gap-2 rounded-xl border border-violet-200/80 bg-violet-50/80 px-3.5 py-2.5 text-sm font-medium text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/[0.06] dark:text-violet-300">
                <Sparkles className="h-4 w-4" />
                <span>{featuredProjects.length} Featured</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <div className="space-y-5 sm:space-y-6">
            <motion.div
              {...revealAnimation}
              className="mb-5 flex items-center gap-3 sm:mb-6"
            >
              <div className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-500 to-violet-500" />

              <div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl dark:text-white">
                  Featured Projects
                </h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                  Highlighted work and key implementations
                </p>
              </div>
            </motion.div>

            {featuredProjects.map((project, index) => (
              <FeaturedProject
                key={project.id ?? project._id ?? `${project.title}-${index}`}
                project={project}
              />
            ))}
          </div>
        )}

        {/* Other projects */}
        {normalProjects.length > 0 && (
          <div
            className={
              featuredProjects.length > 0 ? "mt-12 sm:mt-16" : ""
            }
          >
            <motion.div
              {...revealAnimation}
              className="mb-5 flex items-center gap-3 sm:mb-6"
            >
              <div className="h-8 w-1 rounded-full bg-gradient-to-b from-sky-500 to-cyan-400" />

              <div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl dark:text-white">
                  More Projects
                </h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                  More applications and development experiments
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {normalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id ?? project._id ?? `${project.title}-${index}`}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {projects.length === 0 && (
          <motion.div
            {...revealAnimation}
            className="rounded-2xl border border-dashed border-slate-300 bg-white/70 px-5 py-12 text-center shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/[0.03] sm:px-8"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
              <FolderKanban className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              Projects coming soon
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
              New projects and development work will be showcased here soon.
            </p>
          </motion.div>
        )}

        {/* Bottom accent */}
        {projects.length > 0 && (
          <motion.div
            {...revealAnimation}
            className="mt-12 flex justify-center sm:mt-16"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:text-cyan-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300 dark:focus-visible:ring-offset-[#090D16]"
            >
              Have a project in mind?
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
