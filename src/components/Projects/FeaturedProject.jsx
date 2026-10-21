import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Code2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function FeaturedProject({ project }) {
  const shouldReduceMotion = useReducedMotion();
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  if (!project) return null;

  const hasGithub = Boolean(
    project.github && project.github !== "#"
  );

  const hasLive = Boolean(
    project.live && project.live !== "#"
  );

  const hasCaseStudy = Boolean(
    project.problem ||
      project.solution ||
      project.contribution
  );

  const headingClass =
    "text-sm font-bold text-slate-900 dark:text-white";

  const descriptionClass =
    "text-sm leading-7 text-slate-600 dark:text-slate-400";

  return (
    <motion.article
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-900/[0.06] dark:border-white/[0.09] dark:bg-[#10141E] dark:hover:border-cyan-400/30 dark:hover:shadow-cyan-950/20"
    >
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 z-20 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="grid min-w-0 md:grid-cols-2">
        {/* Project Preview */}
        <div className="relative min-h-[240px] overflow-hidden bg-slate-100 dark:bg-slate-900 sm:min-h-[320px] md:min-h-full">
          {project.image ? (
            <img
              src={project.image}
              alt={
                project.imageAlt ??
                `${project.title ?? "Project"} preview`
              }
              loading="lazy"
              decoding="async"
              width={900}
              height={650}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-50 via-slate-50 to-violet-100 dark:from-cyan-950/40 dark:via-slate-900 dark:to-violet-950/40">
              <div className="flex flex-col items-center gap-3 text-slate-400 dark:text-slate-500">
                <Code2 className="h-12 w-12 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Project Preview
                </span>
              </div>
            </div>
          )}

          {/* Image overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-slate-950/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/[0.04]" />

          {/* Featured badge */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-slate-950/75 px-3 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Featured Project
          </div>

          {/* Category badge */}
          {project.category && (
            <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] sm:bottom-5 sm:left-5">
              <span className="inline-flex max-w-full items-center truncate rounded-lg border border-white/20 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md dark:bg-slate-900/90 dark:text-white">
                {project.category}
              </span>
            </div>
          )}

          {/* Preview link */}
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-slate-950/70 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:bottom-5 sm:right-5"
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>

        {/* Project Details */}
        <div className="flex min-w-0 flex-col p-5 sm:p-7 lg:p-8">
          {/* Category and subtitle */}
          {(project.category || project.subtitle) && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
              {project.category && (
                <span>{project.category}</span>
              )}

              {project.category && project.subtitle && (
                <span
                  aria-hidden="true"
                  className="text-cyan-500"
                >
                  /
                </span>
              )}

              {project.subtitle && (
                <span className="text-cyan-700 dark:text-cyan-400">
                  {project.subtitle}
                </span>
              )}
            </div>
          )}

          <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-cyan-800 dark:text-white dark:group-hover:text-cyan-300 sm:text-3xl">
            {project.title}
          </h3>

          {/* Description */}
          {project.description && (
            <p className={`mt-4 ${descriptionClass}`}>
              {project.description}
            </p>
          )}

          {/* Key Features */}
          {project.features?.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                Key Features
              </h4>

              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="flex min-w-0 items-start gap-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-400"
                    />
                    <span className="min-w-0">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {project.tech?.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                Built With
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg border border-slate-200/90 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800 dark:border-white/[0.09] dark:bg-white/[0.035] dark:text-slate-300 dark:hover:border-cyan-400/25 dark:hover:bg-cyan-400/[0.06] dark:hover:text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Actions */}
          <div className="mt-auto pt-7">
            <div className="flex flex-wrap items-center gap-3">
              {hasLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-cyan-700/15 transition-all duration-200 hover:-translate-y-0.5 hover:from-cyan-700 hover:to-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:from-cyan-400 dark:to-sky-400 dark:text-slate-950 dark:hover:from-cyan-300 dark:hover:to-sky-300 dark:focus-visible:ring-offset-[#10141E]"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>
              )}

              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} GitHub repository`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300/90 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/[0.035] dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/[0.07] dark:focus-visible:ring-offset-[#10141E]"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>
              )}

              {!hasLive && !hasGithub && (
                <p className="text-xs leading-5 text-slate-500 dark:text-slate-500">
                  Project links are not publicly available.
                </p>
              )}
            </div>

            {/* Case Study */}
            {hasCaseStudy && (
              <div className="mt-6 border-t border-slate-200/80 pt-4 dark:border-white/[0.09]">
                <button
                  type="button"
                  onClick={() =>
                    setShowCaseStudy((value) => !value)
                  }
                  aria-expanded={showCaseStudy}
                  className="flex min-h-10 w-full items-center justify-between gap-3 rounded-lg text-left text-sm font-bold text-slate-700 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-cyan-300 dark:focus-visible:ring-offset-[#10141E]"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                      <Code2 size={15} />
                    </span>

                    {showCaseStudy
                      ? "Hide case study"
                      : "Explore case study"}
                  </span>

                  <ChevronDown
                    size={17}
                    className={`shrink-0 transition-transform duration-300 ${
                      showCaseStudy ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showCaseStudy && (
                  <div className="mt-4 space-y-4 border-l-2 border-cyan-500/30 pl-4">
                    {project.problem && (
                      <div>
                        <h4 className={headingClass}>
                          The Problem
                        </h4>
                        <p className={`mt-1.5 ${descriptionClass}`}>
                          {project.problem}
                        </p>
                      </div>
                    )}

                    {project.solution && (
                      <div>
                        <h4 className={headingClass}>
                          The Solution
                        </h4>
                        <p className={`mt-1.5 ${descriptionClass}`}>
                          {project.solution}
                        </p>
                      </div>
                    )}

                    {project.contribution && (
                      <div>
                        <h4 className={headingClass}>
                          My Contribution
                        </h4>
                        <p className={`mt-1.5 ${descriptionClass}`}>
                          {project.contribution}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
