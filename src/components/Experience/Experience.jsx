import { motion } from "framer-motion";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  return (
    <section
      id="experience"
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

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 xl:px-10">
        <ExperienceHeader />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="mt-10 sm:mt-12 md:mt-16"
        >
          <ExperienceTimeline />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
