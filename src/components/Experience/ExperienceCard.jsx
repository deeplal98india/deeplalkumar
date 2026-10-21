import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Building2,
  BriefcaseBusiness,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

import ExperienceBadge from "./ExperienceBadge";

const ExperienceCard = ({ experience, index = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  const achievements = experience.achievements || [];
  const technologies = experience.technologies || [];

  const companyInitials =
    experience.company
      ?.split(/\s+/)
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .slice(0, 2) || "CO";

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.12, 0.36),
        ease: "easeOut",
      }}
      className="group relative min-w-0"
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 via-sky-500/5 to-violet-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Main card */}
      <div className="relative isolate overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-[border-color,box-shadow] duration-300 group-hover:border-cyan-500/35 group-hover:shadow-[0_12px_40px_rgba(8,145,178,0.09)] dark:border-white/10 dark:bg-[#111318] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] dark:group-hover:border-cyan-400/30 dark:group-hover:shadow-[0_12px_40px_rgba(34,211,238,0.08)] sm:p-6 md:p-7"
      >
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-cyan-400/[0.08] blur-3xl dark:bg-cyan-400/[0.09]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.04),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.06),transparent_55%)]"
        />

        {/* Header */}
        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          {/* Company and role */}
          <div className="flex min-w-0 items-start gap-4 sm:gap-5">
            {/* Company logo */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/20 bg-cyan-50 shadow-sm dark:bg-cyan-400/[0.07] sm:h-16 sm:w-16 sm:rounded-2xl">
              {experience.logo ? (
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  loading="lazy"
                  className="h-full w-full object-contain p-2"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <Building2
                    size={23}
                    aria-hidden="true"
                    className="text-cyan-700 dark:text-cyan-400"
                  />
                  <span className="mt-1 max-w-12 truncate text-[10px] font-bold tracking-wider text-cyan-800 dark:text-cyan-300">
                    {companyInitials}
                  </span>
                </div>
              )}
            </div>

            {/* Position details */}
            <div className="min-w-0 flex-1">
              {experience.current && (
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/[0.08] dark:text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    {!shouldReduceMotion && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50 motion-reduce:animate-none" />
                    )}
                    <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Current Position
                </span>
              )}

              <h3 className="break-words text-xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-2xl md:text-3xl">
                {experience.position}
              </h3>

              <p className="mt-2 break-words text-base font-semibold text-cyan-700 dark:text-cyan-300 sm:text-lg">
                {experience.company}
              </p>
            </div>
          </div>

          {/* Employment details */}
          <div className="grid min-w-0 gap-3 border-t border-slate-200/80 pt-4 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400 lg:min-w-[190px] lg:border-t-0 lg:pt-1">
            <div className="flex min-w-0 items-start gap-2.5">
              <CalendarDays
                size={17}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-cyan-700 dark:text-cyan-400"
              />
              <span className="break-words leading-6">
                {experience.duration}
              </span>
            </div>

            <div className="flex min-w-0 items-start gap-2.5">
              <MapPin
                size={17}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-cyan-700 dark:text-cyan-400"
              />
              <span className="break-words leading-6">
                {experience.location}
              </span>
            </div>

            <div className="flex min-w-0 items-start gap-2.5">
              <BriefcaseBusiness
                size={17}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-cyan-700 dark:text-cyan-400"
              />
              <span className="break-words leading-6">
                {experience.type}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent sm:my-7"
        />

        {/* Description */}
        <div>
          <p className="break-words text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
            {experience.description}
          </p>
        </div>

        {/* Key contributions */}
        {achievements.length > 0 && (
          <div className="mt-8 sm:mt-9">
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-50 dark:border-amber-400/20 dark:bg-amber-400/[0.08]">
                <Sparkles
                  size={18}
                  aria-hidden="true"
                  className="text-amber-600 dark:text-amber-400"
                />
              </span>

              <h4 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                Key Contributions
              </h4>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 sm:gap-4">
              {achievements.map((item, achievementIndex) => (
                <motion.div
                  key={`${achievementIndex}-${item}`}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -2 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.2,
                  }}
                  className="flex min-w-0 items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 transition-colors duration-200 hover:border-cyan-500/30 hover:bg-cyan-50/60 motion-reduce:transition-none dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:border-cyan-400/25 dark:hover:bg-cyan-400/[0.04]"
                >
                  <BadgeCheck
                    size={19}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-cyan-700 dark:text-cyan-400"
                  />

                  <span className="break-words text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mt-8 sm:mt-9">
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-50 dark:bg-cyan-400/[0.08]">
                <Building2
                  size={17}
                  aria-hidden="true"
                  className="text-cyan-700 dark:text-cyan-400"
                />
              </span>

              <h4 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                Tech Stack
              </h4>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {technologies.map((tech) => (
                <ExperienceBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom accent */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none dark:from-cyan-400"
        />
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
