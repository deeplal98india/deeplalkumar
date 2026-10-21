import { motion, useReducedMotion } from "framer-motion";
import { softSkills } from "./skillsData";
import SoftSkillCard from "./SoftSkillCard";

export default function SoftSkills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="soft-skills"
      aria-labelledby="soft-skills-heading"
      className="relative isolate w-full min-w-0 overflow-hidden bg-slate-50 py-16 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 -z-10 h-64 w-64 rounded-full bg-cyan-500/[0.08] blur-[100px] sm:h-80 sm:w-80 sm:blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-64 w-64 rounded-full bg-violet-500/[0.08] blur-[100px] sm:h-80 sm:w-80 sm:blur-[140px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] dark:opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100,116,139,.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,.35) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: "easeOut",
          }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-600/20 bg-cyan-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-cyan-800 dark:border-cyan-400/20 dark:text-cyan-300 sm:text-xs sm:tracking-[3px]">
            <span className="h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
            Professional Qualities
          </span>

          <h2
            id="soft-skills-heading"
            className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:mt-6 sm:text-4xl md:text-5xl"
          >
            Soft{" "}
            <span className="bg-gradient-to-r from-cyan-700 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
              Skills
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 sm:w-28" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
            Strong technical skills work best alongside effective
            communication, collaboration and adaptability. These qualities
            help me work with teams and build thoughtful software solutions.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill._id ?? skill.name ?? index}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.3),
                ease: "easeOut",
              }}
              className="flex min-w-0"
            >
              <div className="w-full min-w-0">
                <SoftSkillCard
                  {...skill}
                  index={index}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing note */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="mx-auto mt-10 max-w-2xl text-center sm:mt-14"
        >
          <p className="text-xs leading-6 text-slate-500 dark:text-slate-400 sm:text-sm sm:leading-7">
            Continuous improvement, thoughtful collaboration and a
            problem-solving mindset guide my professional growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
