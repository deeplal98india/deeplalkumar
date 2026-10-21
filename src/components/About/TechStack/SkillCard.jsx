import { motion, useReducedMotion } from "framer-motion";
import CircularProgress from "./CircularProgress";

export default function SkillCard({
  name,
  icon: Icon,
  percentage,
  level,
  category,
  color = "#0891B2",
  index = 0,
}) {
  const reduceMotion = useReducedMotion();

  const safePercentage = Math.min(
    100,
    Math.max(0, Number(percentage) || 0)
  );

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 24, scale: 0.98 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.3),
        ease: "easeOut",
      }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/[0.04] transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/[0.06] dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20 dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-500/[0.08] sm:p-5 lg:p-6"
    >
      {/* Top accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 -z-10 h-40 w-40 rounded-full opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-20 dark:opacity-[0.12] dark:group-hover:opacity-25"
        style={{ backgroundColor: color }}
      />

      <div className="relative flex h-full min-w-0 flex-col">
        {/* Icon */}
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl"
            style={{
              backgroundColor: `${color}14`,
              borderColor: `${color}40`,
              color,
            }}
          >
            {Icon && (
              <Icon
                size={26}
                aria-hidden="true"
                focusable="false"
              />
            )}
          </div>

          <span
            className="max-w-[50%] truncate rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider sm:text-xs"
            style={{
              color,
              backgroundColor: `${color}10`,
              borderColor: `${color}30`,
            }}
            title={category}
          >
            {category}
          </span>
        </div>

        {/* Skill name */}
        <h3 className="mt-4 break-words text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-cyan-800 dark:text-white dark:group-hover:text-cyan-300 sm:mt-5 sm:text-xl">
          {name}
        </h3>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
          Technical proficiency
        </p>

        {/* Progress */}
        <div className="my-4 flex items-center justify-center sm:my-5">
          <CircularProgress
            percentage={safePercentage}
            color={color}
          />
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-slate-200 pt-4 dark:border-white/10 sm:pt-5">
          <div className="flex min-w-0 items-center justify-between gap-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
              Skill Level
            </span>

            <span
              className="max-w-[60%] truncate rounded-full px-3 py-1.5 text-xs font-semibold sm:text-sm"
              style={{
                color,
                backgroundColor: `${color}16`,
              }}
              title={level}
            >
              {level}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}