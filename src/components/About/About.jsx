
import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutHighlights from "./AboutHighlights";
import AboutStats from "./AboutStats";
import AboutTimeline from "./AboutTimeline";
import TechStack from "./TechStack/TechStack";
import AboutServices from "./AboutServices";
import SoftSkills from "./SoftSkills/SoftSkills";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-16 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-20 lg:py-24"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-0 top-40 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] sm:h-80 sm:w-80 sm:blur-[150px]" />

      <div className="pointer-events-none absolute bottom-20 right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[120px] sm:h-80 sm:w-80 sm:blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-8 lg:px-12">
        {/* About layout */}
        <div className="grid min-w-0 items-start gap-10 xl:grid-cols-[minmax(0,1fr)_680px] xl:gap-12">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="w-full min-w-0"
          >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-12 lg:mb-16"
            >
              <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-700 dark:text-cyan-400 sm:text-sm sm:tracking-[6px] lg:tracking-[8px]">
                Get to know me
              </p>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                About Me
              </h2>

              <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 dark:from-cyan-400 sm:mt-6 sm:w-32" />
            </motion.div>

            <AboutContent />
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="w-full min-w-0 self-start"
          >
            <AboutStats />
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 min-w-0 sm:mt-20 lg:mt-28"
        >
          <AboutHighlights />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 min-w-0 sm:mt-20 lg:mt-28"
        >
          <AboutTimeline />
        </motion.div>

        {/* Tech stack */}
        <div className="mt-16 min-w-0 sm:mt-20 lg:mt-28">
          <TechStack />
        </div>

        {/* Soft skills */}
        <div className="mt-16 min-w-0 sm:mt-20 lg:mt-28">
          <SoftSkills />
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 min-w-0 sm:mt-20 lg:mt-28"
        >
          <AboutServices />
        </motion.div>
      </div>
    </section>
  );
}
