import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  if (!project) return null;

  // Match the camelCase properties used in projects.js
  const {
    title,
    subtitle,
    category,
    image,
    imageAlt,
    description,
    problem,
    solution,
    contribution,
    features = [],
    tech = [],
    github,
    live,
  } = project;

  const hasGithub = Boolean(github && github !== "#");
  const hasLive = Boolean(live && live !== "#");

  const hasCaseStudy = Boolean(problem || solution || contribution);

  const descriptionClass =
    "text-sm leading-6 text-slate-600 dark:text-slate-400";

  const caseStudyHeadingClass =
    "text-sm font-bold text-slate-900 dark:text-white";

  const cardAnimation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: {
          duration: 0.4,
          delay: Math.min(index * 0.06, 0.24),
          ease: "easeOut",
        },
      };

  return (
    <motion.article
      {...cardAnimation}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-900/[0.07] dark:border-white/[0.09] dark:bg-[#10141E] dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:shadow-cyan-950/20"
    >
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />

      {/* Project image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? `${title ?? "Project"} project preview`}
            loading="lazy"
            decoding="async"
            width={700}
            height={440}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-50 via-slate-50 to-violet-100 dark:from-cyan-950/30 dark:via-slate-900 dark:to-violet-950/30">
            <div className="flex flex-col items-center gap-3 text-slate-400 dark:text-slate-500">
              <Sparkles className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Project Preview
              </span>
            </div>
          </div>
        )}

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-slate-950/[0.04] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

        {category && (
          <span className="absolute left-4 top-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-1.5 truncate rounded-lg border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-slate-950/80 dark:text-slate-100">
            {category}
          </span>
        )}

        {hasLive && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} live demo`}
            className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-slate-950/65 text-white opacity-100 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        )}
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {subtitle && (
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-400">
            {subtitle}
          </p>
        )}

        <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-cyan-800 dark:text-white dark:group-hover:text-cyan-300 sm:text-xl">
          {title}
        </h3>

        {description && (
          <p className={`mt-3 ${descriptionClass}`}>{description}</p>
        )}

        {/* Project features */}
        {features.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-500">
              Key Features
            </p>

            <ul className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="inline-flex items-center rounded-lg border border-cyan-200/80 bg-cyan-50/70 px-2.5 py-1.5 text-xs font-medium text-cyan-800 dark:border-cyan-400/15 dark:bg-cyan-400/[0.05] dark:text-cyan-300"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {tech.length > 0 && (
          <div className="mt-5">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-500">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {tech.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center rounded-lg border border-slate-200/90 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800 dark:border-white/[0.09] dark:bg-white/[0.035] dark:text-slate-300 dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/[0.06] dark:hover:text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions and case study */}
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-2.5">
            {hasLive && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} live demo`}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-cyan-700/15 transition-all duration-200 hover:-translate-y-0.5 hover:from-cyan-700 hover:to-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:from-cyan-400 dark:to-sky-400 dark:text-slate-950 dark:hover:from-cyan-300 dark:hover:to-sky-300 dark:focus-visible:ring-offset-[#10141E]"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {hasGithub && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title} GitHub repository`}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-300/90 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/[0.035] dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/[0.07] dark:focus-visible:ring-offset-[#10141E]"
              >
                <FaGithub size={17} />
                GitHub
              </a>
            )}

            {!hasLive && !hasGithub && (
              <span className="text-xs text-slate-500 dark:text-slate-500">
                Demo and repository links unavailable
              </span>
            )}
          </div>

          {/* Expandable case study */}
          {hasCaseStudy && (
            <div className="mt-5 border-t border-slate-200/80 pt-4 dark:border-white/[0.09]">
              <button
                type="button"
                onClick={() => setShowCaseStudy((value) => !value)}
                aria-expanded={showCaseStudy}
                className="flex min-h-9 w-full items-center justify-between gap-3 rounded-lg text-left text-sm font-semibold text-slate-700 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-cyan-300 dark:focus-visible:ring-offset-[#10141E]"
              >
                <span>
                  {showCaseStudy ? "Hide case study" : "Explore case study"}
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
                  {problem && (
                    <div>
                      <h4 className={caseStudyHeadingClass}>The Problem</h4>
                      <p className={`mt-1.5 ${descriptionClass}`}>
                        {problem}
                      </p>
                    </div>
                  )}

                  {solution && (
                    <div>
                      <h4 className={caseStudyHeadingClass}>The Solution</h4>
                      <p className={`mt-1.5 ${descriptionClass}`}>
                        {solution}
                      </p>
                    </div>
                  )}

                  {contribution && (
                    <div>
                      <h4 className={caseStudyHeadingClass}>
                        My Contribution
                      </h4>
                      <p className={`mt-1.5 ${descriptionClass}`}>
                        {contribution}
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
