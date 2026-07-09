import { motion } from "framer-motion";
import { skills } from "./skills";
import SkillCard from "./SkillCard";

export default function TechStack() {
  return (
    <section id="skills" className="relative py-20 md:py-24">
      {/* Background Blur */}

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

      <div className="relative z-10 w-full px-4 md:px-8 xl:px-12">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
            Technical Skills
          </span>
          <div className="h-2" />

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            My Tech Stack
          </h2>
          <div className="h-4" />

          <p className="mt-6 w-full text-center text-lg leading-8 text-slate-400">
  I specialize in building modern, scalable and high-performance web applications using the latest frontend and backend technologies with clean architecture and responsive design.
</p>
        </motion.div>
        <div className="h-4" />

        {/* Cards */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
