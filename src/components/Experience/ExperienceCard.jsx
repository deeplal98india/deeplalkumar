import { motion } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
      whileHover={{ y: -6 }}
      className="group relative min-w-0"
    >
      {/* Glow Border */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/40 via-blue-500/20 to-cyan-500/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative isolate overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.12)] dark:border-[#272727] dark:bg-[#111111] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] dark:group-hover:border-cyan-400 dark:group-hover:shadow-[0_0_25px_rgba(34,211,238,0.18)] sm:p-6 md:p-7">
        {/* Decorative Blur */}
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Spotlight */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.05),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_45%)]" />

        {/* Header */}
        <div className="relative flex flex-col gap-6 md:flex-row md:justify-between md:gap-8">
          {/* Left: Company and Position */}
          <div className="flex min-w-0 items-start gap-4 sm:gap-5">
            {/* Company Logo */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 shadow-lg shadow-cyan-500/5 sm:h-16 sm:w-16 sm:rounded-2xl sm:shadow-cyan-500/10">
              {experience.logo ? (
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <Building2
                    size={24}
                    className="text-cyan-600 dark:text-cyan-400"
                  />

                  <span className="mt-1 text-[11px] font-bold tracking-widest text-cyan-700 dark:text-cyan-300">
                    {experience.company
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
              )}
            </div>

            {/* Position Info */}
            <div className="min-w-0 flex-1">
              {experience.current && (
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  Current Position
                </div>
              )}

              <h3 className="break-words text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 dark:text-white sm:text-2xl md:text-3xl">
                {experience.position}
              </h3>

              <p className="mt-2 break-words text-base font-semibold tracking-wide text-cyan-700 dark:text-cyan-400">
                {experience.company}
              </p>
            </div>
          </div>

          {/* Right: Experience Details */}
          <div className="space-y-3 pl-0 text-sm text-slate-600 dark:text-slate-400 md:shrink-0 md:pl-2 md:text-[15px]">
            <div className="flex items-start gap-2">
              <CalendarDays
                size={16}
                className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400"
              />
              <span>{experience.duration}</span>
            </div>

            <div className="flex items-start gap-2">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400"
              />
              <span>{experience.location}</span>
            </div>

            <div className="flex items-start gap-2">
              <BriefcaseBusiness
                size={16}
                className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400"
              />
              <span>{experience.type}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        {/* Description */}
        <p className="text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-300 sm:text-base">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mt-8">
          <div className="mb-5 flex items-center gap-2">
            <Sparkles size={20} className="shrink-0 text-yellow-500 dark:text-yellow-400" />

            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
              Key Contributions
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            {(experience.achievements || []).map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  scale: 1.02,
                  x: 4,
                }}
                transition={{ duration: 0.25 }}
                className="flex min-w-0 items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50/70 hover:shadow-[0_0_18px_rgba(34,211,238,0.10)] dark:border-[#272727] dark:bg-[#111111] dark:hover:border-cyan-400 dark:hover:bg-cyan-500/5 dark:hover:shadow-[0_0_18px_rgba(34,211,238,0.15)]"
              >
                <BadgeCheck
                  size={18}
                  className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-400"
                />

                <span className="break-words text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8">
          <h4 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
            Tech Stack
          </h4>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {(experience.technologies || []).map((tech) => (
              <ExperienceBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
