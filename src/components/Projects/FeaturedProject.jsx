import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  ChevronDown,
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
    "font-semibold text-slate-900 dark:text-white";

  const descriptionClass =
    "text-sm leading-7 text-slate-600 dark:text-slate-400";

  const secondaryTextClass =
    "text-slate-600 dark:text-slate-400";

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 20 }
      }
      whileInView={
        shouldReduceMotion
          ? {}
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition-colors duration-300 dark:border-white/10 dark:bg-[#101116] dark:shadow-black/20"
    >
      <div className="grid md:grid-cols-2">
        {/* Project Image */}
        <div className="relative min-h-[230px] overflow-hidden bg-slate-100 sm:min-h-[300px] dark:bg-[#171922]">
          {project.image && (
            <img
              src={project.image}
              alt={
                project.imageAlt ??
                `${project.title} project preview`
              }
              loading="lazy"
              decoding="async"
              width={900}
              height={650}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent dark:from-black/40" />

          <span className="absolute left-4 top-4 rounded-md border border-white/30 bg-slate-950/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            Featured Project
          </span>
        </div>

        {/* Project Details */}
        <div className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            {project.category && <span>{project.category}</span>}

            {project.category && project.subtitle && (
              <span aria-hidden="true">·</span>
            )}

            {project.subtitle && <span>{project.subtitle}</span>}
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            {project.title}
          </h3>

          {project.description && (
            <p className={`mt-3 ${descriptionClass}`}>
              {project.description}
            </p>
          )}

          {/* Key Features */}
          {project.features?.length > 0 && (
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.slice(0, 4).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          {project.tech?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Project Links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {hasLive && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300 dark:focus-visible:ring-cyan-300 dark:focus-visible:ring-offset-[#101116]"
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
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5 dark:focus-visible:ring-cyan-300"
              >
                <FaGithub size={17} />
                GitHub
              </a>
            )}

            {!hasLive && !hasGithub && (
              <p className="text-xs text-slate-500 dark:text-slate-500">
                Project links are not publicly available.
              </p>
            )}
          </div>

          {/* Case Study */}
          {hasCaseStudy && (
            <div className="mt-5 border-t border-slate-200 pt-4 dark:border-white/10">
              <button
                type="button"
                onClick={() =>
                  setShowCaseStudy((value) => !value)
                }
                aria-expanded={showCaseStudy}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-300 dark:hover:text-white dark:focus-visible:ring-cyan-300"
              >
                {showCaseStudy
                  ? "Hide case study"
                  : "Read case study"}

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    showCaseStudy ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showCaseStudy && (
                <div className="mt-4 space-y-4">
                  {project.problem && (
                    <div>
                      <h4 className={`text-sm ${headingClass}`}>
                        The problem
                      </h4>
                      <p className={`mt-1 ${descriptionClass}`}>
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div>
                      <h4 className={`text-sm ${headingClass}`}>
                        The solution
                      </h4>
                      <p className={`mt-1 ${descriptionClass}`}>
                        {project.solution}
                      </p>
                    </div>
                  )}

                  {project.contribution && (
                    <div>
                      <h4 className={`text-sm ${headingClass}`}>
                        My contribution
                      </h4>
                      <p className={`mt-1 ${descriptionClass}`}>
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
    </motion.article>
  );
}
