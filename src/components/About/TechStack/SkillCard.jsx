import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";

export default function SkillCard({
  name,
  icon: Icon,
  percentage,
  level,
  category,
  color,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{ y: -6 }}
      className="group relative isolate overflow-hidden rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] dark:border-[#272727] dark:bg-[#0b0b0b] dark:hover:border-cyan-400 dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] sm:rounded-2xl sm:p-6"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-48 w-48 rounded-full opacity-[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-20 dark:opacity-10 dark:group-hover:opacity-30"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16"
          style={{
            backgroundColor: `${color}15`,
            borderColor: `${color}40`,
            color,
          }}
        >
          {Icon && <Icon size={30} />}
        </div>

        {/* Title */}
        <h3 className="break-words text-center text-lg font-semibold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">
          {name}
        </h3>

        {/* Category */}
        <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
          {category}
        </p>

        {/* Progress */}
        <div className="my-6 flex justify-center sm:my-7">
          <CircularProgress
            percentage={percentage}
            color={color}
          />
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 pt-5 dark:border-[#272727]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-slate-600 dark:text-slate-500">
              Skill Level
            </span>

            <span
              className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: `${color}20`,
                color,
              }}
            >
              {level}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}