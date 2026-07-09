import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function FeaturedProject({ project }) {
  const shouldReduceMotion = useReducedMotion();

  if (!project) return null;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              scale: 1.005,
            }
      }
      className="group relative z-10 mb-20 overflow-hidden rounded-lg border-2 border-[#1f1f1f] bg-[#111111] transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.18)]"
    >
      <div className="grid items-center gap-6 lg:grid-cols-2">
        {/* Left */}
        <div className="relative h-[280px] lg:h-[300px] overflow-hidden border-r border-[#1f1f1f]">
          <img
            src={project.image}
            alt={project.imageAlt ?? `${project.title} project preview`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={900}
            height={650}
            onError={(e) => {
              e.currentTarget.src = "/images/project-placeholder.webp";
            }}
            className="h-full w-full transform-gpu object-cover transition duration-700 will-change-transform group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />

          <span className="absolute left-6 top-6 rounded-lg bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
            Featured
          </span>
        </div>

        {/* Right */}
        <div className="relative flex h-full flex-col justify-center p-4 lg:p-5">
          {project.subtitle && (
            <p className="text-cyan-400">{project.subtitle}</p>
          )}

          <h2 className="mt-2 text-xl font-bold text-white lg:text-3xl">
            {project.title}
          </h2>

          {project.description && (
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
              {project.description}
            </p>
          )}

          {/* Features */}
          {project.features?.length > 0 && (
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400" />

                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          {project.tech?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} GitHub Repository`}
                className="group flex items-center gap-2 rounded-lg border-2 border-[#1f1f1f] bg-[#181818] px-5 py-2 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
              >
                <FaGithub
                  size={18}
                  className="transition-transform duration-300 group-hover:-rotate-12"
                />

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  GitHub
                </span>
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} Live Demo`}
                className="group flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-black transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] hover:shadow-[0_0_20px_rgba(34,211,238,.25)]"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Live Demo
                </span>

                <ExternalLink
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
}
