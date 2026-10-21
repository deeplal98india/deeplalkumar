import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index = 0 }) {
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

  const descriptionClass =
    "text-sm leading-6 text-slate-600 dark:text-slate-400";

  const caseStudyHeadingClass =
    "text-sm font-semibold text-slate-900 dark:text-white";

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 16 }
      }
      whileInView={
        shouldReduceMotion
          ? {}
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.05, 0.2),
      }}
      className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors duration-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-slate-200/50 dark:border-white/10 dark:bg-[#101116] dark:shadow-none dark:hover:border-white/20"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#171922]">
        {project.image && (
          <img
            src={project.image}
            alt={
              project.imageAlt ??
              `${project.title} project preview`
            }
            loading="lazy"
            decoding="async"
            width={700}
            height={440}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}

        {project.category && (
          <span className="absolute left-3 top-3 rounded-md border border-slate-200 bg-white/95 px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-[#101116]/90 dark:text-slate-200">
            {project.category}
          </span>
        )}
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-5">
        {project.subtitle && (
          <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">
            {project.subtitle}
          </p>
        )}

        <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          {project.title}
        </h3>

        {project.description && (
          <p className={`mt-2 ${descriptionClass}`}>
            {project.description}
          </p>
        )}

        {/* Technologies */}
        {project.tech?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links and Case Study */}
        <div className="mt-auto">
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {hasLive && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-cyan-600 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300 dark:focus-visible:ring-cyan-300 dark:focus-visible:ring-offset-[#101116]"
              >
                Live Demo
                <ExternalLink size={15} />
              </a>
            )}

            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} GitHub repository`}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/15 dark:bg-transparent dark:text-slate-200 dark:hover:border-white/30 dark:hover:bg-white/5 dark:focus-visible:ring-cyan-300"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            )}

            {!hasLive && !hasGithub && (
              <span className="text-xs text-slate-500 dark:text-slate-500">
                Demo and repository links unavailable
              </span>
            )}
          </div>

          {/* Case Study */}
          {hasCaseStudy && (
            <div className="mt-4 border-t border-slate-200 pt-3 dark:border-white/10">
              <button
                type="button"
                onClick={() =>
                  setShowCaseStudy((value) => !value)
                }
                aria-expanded={showCaseStudy}
                className="inline-flex items-center gap-2 py-1 text-sm font-medium text-slate-700 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-300 dark:hover:text-white dark:focus-visible:ring-cyan-300"
              >
                {showCaseStudy
                  ? "Hide case study"
                  : "View case study"}

                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    showCaseStudy ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showCaseStudy && (
                <div className="mt-3 space-y-3">
                  {project.problem && (
                    <div>
                      <h4 className={caseStudyHeadingClass}>
                        Problem
                      </h4>
                      <p className={`mt-1 ${descriptionClass}`}>
                        {project.problem}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div>
                      <h4 className={caseStudyHeadingClass}>
                        Solution
                      </h4>
                      <p className={`mt-1 ${descriptionClass}`}>
                        {project.solution}
                      </p>
                    </div>
                  )}

                  {project.contribution && (
                    <div>
                      <h4 className={caseStudyHeadingClass}>
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
