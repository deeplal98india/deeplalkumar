import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      {/* Badge */}

      <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
        Professional Journey
      </span>
      <div className="h-2" />

      {/* Heading */}

      <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        Professional{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>
      <div className="h-2" />

      {/* Description */}

      <p className="mt-4 text-center text-lg text-slate-400">
        My journey as a MERN Stack Developer has been focused on building
        scalable, secure, and high-performance web applications while gaining
        hands-on experience with enterprise architecture, modern development
        workflows, and industry best practices.
      </p>
      <div className="h-4" />
    </motion.div>
  );
}
