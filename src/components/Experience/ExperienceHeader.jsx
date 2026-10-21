import { motion, useReducedMotion } from "framer-motion";

export default function ExperienceHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      }}
      className="mx-auto mb-10 w-full max-w-4xl text-center sm:mb-14 lg:mb-16"
    >
      {/* Section badge */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-cyan-600/20 bg-cyan-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-800 transition-colors duration-300 dark:border-cyan-400/20 dark:bg-cyan-400/[0.08] dark:text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[0.22em]">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
          Professional Journey
        </span>
      </div>

      {/* Main heading */}
      <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition-colors duration-300 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Professional{" "}
        <span className="bg-gradient-to-r from-cyan-700 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-400">
          Experience
        </span>
      </h2>

      {/* Gradient accent */}
      <div
        aria-hidden="true"
        className="mx-auto mt-6 flex items-center justify-center gap-2"
      >
        <span className="h-1 w-8 rounded-full bg-cyan-500/60 dark:bg-cyan-400/60" />
        <span className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 dark:from-cyan-400 sm:w-20" />
        <span className="h-1 w-8 rounded-full bg-violet-500/60 dark:bg-violet-400/60" />
      </div>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-3xl px-1 text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:mt-7 sm:px-0 sm:text-base sm:leading-8 lg:text-lg">
        My journey as a MERN Stack Developer focuses on building scalable,
        secure, and high-performance web applications. I continue to develop
        my skills in backend architecture, REST APIs, database design, and
        modern development workflows.
      </p>
    </motion.div>
  );
}
