import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { projects } from "../../data/projects";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  // Featured Projects
  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [],
  );

  // Normal Projects
  const normalProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    [],
  );

  return (
    <section
      id="projects"
      aria-label="Portfolio Projects"
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

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-8 xl:px-10">
        {/* Heading */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
            PORTFOLIO
          </span>
          <div className="h-2" />

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            My Projects
          </h2>
          <div className="h-4" />
     <p
  className="mt-6 text-center text-lg text-slate-400 whitespace-nowrap"
>
  A collection of enterprise applications, full-stack products, dashboards and modern web experiences built with React, Node.js, Express.js and MongoDB.
</p>
        </motion.div>
        <div className="h-4" />

        {/* Featured Projects */}

        <div className="space-y-14">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="h-4" />

        <motion.div
          layout
          className="mt-16 grid gap-x-6 gap-y-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {normalProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
