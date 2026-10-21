import { motion } from "framer-motion";
import { softSkills } from "./skillsData";
import SoftSkillCard from "./SoftSkillCard";

export default function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="relative isolate overflow-hidden bg-slate-50 py-16 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-20 md:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-10 top-10 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] sm:h-72 sm:w-72 sm:blur-[140px]" />

      <div className="pointer-events-none absolute -right-10 bottom-10 -z-10 h-64 w-64 rounded-full bg-violet-500/10 blur-[120px] sm:h-72 sm:w-72 sm:blur-[140px]" />

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,.12) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 xl:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <span className="inline-flex max-w-full rounded-full border border-cyan-700/20 bg-cyan-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[3px] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[4px]">
            Professional Qualities
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:mt-6 sm:text-4xl md:text-5xl">
            Soft Skills
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 dark:from-cyan-400 sm:w-28" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            Beyond coding, I believe communication, collaboration and
            continuous learning are essential for building successful
            products and working effectively with teams.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              className="min-w-0"
            >
              <SoftSkillCard {...skill} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
