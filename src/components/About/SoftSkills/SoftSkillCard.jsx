import { motion } from "framer-motion";

export default function SoftSkillCard({
  title,
  description,
  icon: Icon,
  color,
  level,
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
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{ duration: 0.3 }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border transition-colors duration-300"
          style={{
            backgroundColor: `${color}15`,
            borderColor: `${color}40`,
            color,
          }}
        >
          {Icon && <Icon size={30} />}
        </motion.div>

        {/* Content */}
        <h3 className="break-words text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-200 pt-5 transition-colors duration-300 dark:border-[#272727]">
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
    </motion.div>
  );
}
