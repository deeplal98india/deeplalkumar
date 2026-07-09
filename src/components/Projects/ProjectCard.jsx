import { motion, useReducedMotion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion();

  if (!project) return null;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              scale: 1.01,
            }
      }
      className="group relative overflow-hidden rounded-lg border-2 border-[#1f1f1f] bg-[#111111] transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.15)]"
    >
      {/* Image */}

      <div className="relative h-40 overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt ?? `${project.title} project preview`}
          loading="lazy"
          decoding="async"
          width={700}
          height={500}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/project-placeholder.webp";
          }}
          className="h-full w-full transform-gpu object-cover transition duration-700 will-change-transform group-hover:scale-105"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

        {/* Category */}

        {project.category && (
          <span className="absolute left-5 top-5 rounded-lg bg-cyan-500/20 px-3 py-2 text-[13px] font-semibold text-cyan-300 backdrop-blur-xl">
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}

      <div className="relative flex min-h-[160px] flex-col p-5">
        {project.subtitle && (
          <p className="text-sm text-cyan-400">{project.subtitle}</p>
        )}

        <h3 className="mt-2 text-lg font-bold text-white transition group-hover:text-cyan-300">
          {project.title}
        </h3>

        {project.description && (
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
            {project.description}
          </p>
        )}

        {/* Tech Stack */}

        {project.tech?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-[13px] font-medium text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} GitHub Repository`}
              className="group flex items-center gap-2 rounded-lg border-2 border-[#1f1f1f] bg-[#181818] px-4 py-2 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
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
              className="group flex items-center gap-2 rounded-lg border border-2 border-[#1f1f1f] bg-cyan-500 px-4 py-3 font-medium text-black transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] hover:shadow-[0_0_18px_rgba(34,211,238,.25)]"
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
    </motion.div>
  );
}
