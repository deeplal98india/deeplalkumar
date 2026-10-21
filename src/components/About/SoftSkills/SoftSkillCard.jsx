import { motion, useReducedMotion } from "framer-motion";

export default function SoftSkillCard({
  title,
  description,
  icon: Icon,
  color = "#0891B2",
  level,
  index = 0,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.3),
        ease: "easeOut",
      }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/[0.04] transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/[0.06] dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20 dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-500/[0.08] sm:p-6"
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
          <motion.div
            whileHover={
              reduceMotion ? undefined : { rotate: 6, scale: 1.05 }
            }
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300"
            style={{
              backgroundColor: `${color}14`,
              borderColor: `${color}40`,
              color,
            }}
          >
            {Icon && (
              <Icon
                size={27}
                aria-hidden="true"
                focusable="false"
              />
            )}
          </motion.div>

          <span
            aria-hidden="true"
            className="select-none text-xs font-bold tracking-[2px] text-slate-300 dark:text-slate-700"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <h3 className="mt-5 break-words text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-cyan-800 dark:text-white dark:group-hover:text-cyan-300 sm:text-xl">
          {title}
        </h3>

        <p className="mt-3 flex-1 break-words text-sm leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-6 border-t border-slate-200 pt-4 transition-colors duration-300 dark:border-white/10 sm:mt-7 sm:pt-5">
          <div className="flex min-w-0 items-center justify-between gap-3">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
              Skill Level
            </span>

            <span
              className="max-w-[60%] truncate rounded-full border px-3 py-1.5 text-xs font-semibold sm:text-sm"
              style={{
                color,
                backgroundColor: `${color}14`,
                borderColor: `${color}30`,
              }}
              title={level}
            >
              {level}
            </span>
          </div>

          {/* Decorative progress line */}
          <div
            aria-hidden="true"
            className="mt-4 h-1 overflow-hidden rounded-full bg-slate-100 dark:bg-white/5"
          >
            <div
              className="h-full w-full origin-left rounded-full transition-transform duration-500 group-hover:scale-x-100"
              style={{
                backgroundColor: color,
                transform: "scaleX(0.35)",
              }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
