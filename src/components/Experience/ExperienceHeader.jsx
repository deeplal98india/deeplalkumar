import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-center sm:mb-14 lg:mb-16"
    >
      {/* Badge */}
      <span className="inline-flex max-w-full rounded-full border border-cyan-700/20 bg-cyan-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[3px] text-cyan-800 transition-colors duration-300 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[4px]">
        Professional Journey
      </span>

      {/* Heading */}
      <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 transition-colors duration-300 dark:text-white sm:mt-6 sm:text-4xl md:text-5xl">
        Professional{" "}
        <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-violet-500">
          Experience
        </span>
      </h2>

      {/* Gradient Underline */}
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 dark:from-cyan-400 sm:w-28" />

      {/* Description */}
      <p className="mx-auto mt-5 max-w-3xl px-1 text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:mt-6 sm:px-0 sm:text-base sm:leading-8 lg:text-lg">
        My journey as a MERN Stack Developer has been focused on building
        scalable, secure, and high-performance web applications while gaining
        hands-on experience with enterprise architecture, modern development
        workflows, and industry best practices.
      </p>
    </motion.div>
  );
}
