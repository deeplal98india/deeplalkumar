
import { motion, useReducedMotion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const highlights = [
  { title: "React.js", icon: FaReact, color: "#61DAFB" },
  { title: "React Native", icon: FaReact, color: "#61DAFB" },
  { title: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { title: "MongoDB", icon: SiMongodb, color: "#13AA52" },
  { title: "Express.js", icon: SiExpress, color: "#64748B" },
  { title: "JavaScript", icon: SiJavascript, color: "#CA8A04" },
  { title: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { title: "Git", icon: FaGitAlt, color: "#F1502F" },
];

function TechCard({ tech, compact = false, reducedMotion = false }) {
  const Icon = tech.icon;

  return (
    <motion.div
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={
        compact
          ? "group relative flex min-h-[142px] min-w-0 flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 px-3 py-5 text-center shadow-sm shadow-slate-900/[0.025] transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/50 hover:shadow-md dark:border-slate-700/70 dark:bg-slate-900/75 dark:hover:border-cyan-400/50"
          : "group relative flex h-[210px] w-[190px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-sm shadow-slate-900/[0.025] transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/[0.06] dark:border-slate-700/70 dark:bg-slate-900/80 dark:hover:border-cyan-400/50 dark:hover:shadow-cyan-400/[0.06]"
      }
    >
      {/* Technology-specific ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-15"
        style={{ backgroundColor: tech.color }}
      />

      {/* Top accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px opacity-40 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className={
          compact
            ? "relative flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105"
            : "relative flex h-16 w-16 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105"
        }
        style={{
          borderColor: `${tech.color}40`,
          backgroundColor: `${tech.color}12`,
        }}
      >
        <Icon
          size={compact ? 25 : 33}
          color={tech.color}
          aria-hidden="true"
        />
      </div>

      {/* Name */}
      <h3
        className={
          compact
            ? "relative mt-3 break-words text-sm font-bold leading-snug text-slate-900 dark:text-white sm:text-base"
            : "relative mt-6 text-lg font-bold text-slate-900 dark:text-white"
        }
      >
        {tech.title}
      </h3>

      {!compact && (
        <p className="relative mt-2 text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
          Technology
        </p>
      )}

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ backgroundColor: tech.color }}
      />
    </motion.div>
  );
}

export default function AboutHighlights() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="relative w-full min-w-0 overflow-hidden py-12 transition-colors duration-300 sm:py-16 lg:py-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-3xl dark:bg-cyan-400/[0.05] sm:h-80 sm:w-80"
      />

      {/* Section heading */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        className="relative mb-10 px-4 text-center sm:mb-14 lg:mb-16"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/[0.05] dark:text-cyan-300 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
          Technologies I Use
        </span>

        <h2
          id="tech-stack-heading"
          className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
        >
          My{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
            Tech Stack
          </span>
        </h2>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 dark:from-cyan-400 sm:w-24" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
          The tools and technologies I use to build modern,
          responsive, and maintainable applications.
        </p>
      </motion.div>

      {/* Desktop and tablet marquee */}
      <div className="relative hidden overflow-hidden py-4 md:block">
        {shouldReduceMotion ? (
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {highlights.map((tech) => (
              <TechCard
                key={tech.title}
                tech={tech}
                reducedMotion
              />
            ))}
          </div>
        ) : (
          <Marquee
            speed={32}
            direction="right"
            pauseOnHover
            gradient={false}
            autoFill
          >
            {highlights.map((tech) => (
              <div key={tech.title} className="px-3 py-2">
                <TechCard tech={tech} />
              </div>
            ))}
          </Marquee>
        )}
      </div>

      {/* Mobile technology grid */}
      <div className="relative grid grid-cols-2 gap-3 px-4 sm:gap-4 sm:px-6 md:hidden">
        {highlights.map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.3,
              delay: shouldReduceMotion ? 0 : index * 0.04,
            }}
            className="min-w-0"
          >
            <TechCard
              tech={tech}
              compact
              reducedMotion={shouldReduceMotion}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
