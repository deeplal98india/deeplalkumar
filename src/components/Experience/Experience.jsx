import { motion, useReducedMotion } from "framer-motion";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-label="Professional experience"
      className="relative isolate overflow-hidden bg-slate-50 py-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-24 lg:py-28"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Cyan glow */}
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-cyan-500/[0.08] blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px] dark:bg-cyan-500/[0.10]" />

        {/* Violet glow */}
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[100px] sm:h-96 sm:w-96 sm:blur-[140px] dark:bg-violet-500/[0.10]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.035] blur-[120px] sm:h-[480px] sm:w-[480px] dark:bg-cyan-400/[0.04]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 text-slate-900 opacity-[0.035] dark:text-white dark:opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100/70 to-transparent dark:from-slate-950/60" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section heading */}
        <ExperienceHeader />

        {/* Timeline */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 28 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            ease: "easeOut",
          }}
          className="mt-12 sm:mt-14 md:mt-16 lg:mt-20"
        >
          <ExperienceTimeline />
        </motion.div>

        {/* Closing accent */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            delay: shouldReduceMotion ? 0 : 0.15,
          }}
          aria-hidden="true"
          className="mx-auto mt-16 flex items-center justify-center gap-2 sm:mt-20"
        >
          <span className="h-1 w-8 rounded-full bg-cyan-500/60 dark:bg-cyan-400/60" />
          <span className="h-1 w-14 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 dark:from-cyan-400" />
          <span className="h-1 w-8 rounded-full bg-violet-500/60 dark:bg-violet-400/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
