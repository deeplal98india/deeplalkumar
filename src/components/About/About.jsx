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
    <section id="about" className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 sm:px-8 lg:px-12">
        {/* ================= About Layout ================= */}

        <div
          className="
            grid
            items-start
            gap-10
            xl:grid-cols-[minmax(0,1fr)_680px]
          "
        >
          {/* ================= Left ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            {/* Heading */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="uppercase tracking-[8px] font-semibold text-cyan-400">
                GET TO KNOW ME
              </p>

              <h2 className="mt-3 text-5xl font-extrabold text-white md:text-5xl">
                About Me
              </h2>

              <div className="mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500" />
            </motion.div>

            <AboutContent />
          </motion.div>

          {/* ================= Right ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full self-start"
          >
            <AboutStats />
          </motion.div>
        </div>

        {/* ================= Highlights ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <AboutHighlights />
        </motion.div>

        {/* ================= Timeline ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <AboutTimeline />
        </motion.div>

        {/* ================= Tech Stack ================= */}

        <div className="mt-28">
          <TechStack />
        </div>

        {/* ================= Soft Skills ================= */}

        <div className="mt-28">
          <SoftSkills />
        </div>

        {/* ================= Services ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <AboutServices />
        </motion.div>
      </div>
    </section>
  );
}
