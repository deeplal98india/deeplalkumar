import { motion } from "framer-motion";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-8 xl:px-10">
        <ExperienceHeader />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <ExperienceTimeline />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
