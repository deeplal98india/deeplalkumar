
import { motion } from "framer-motion";
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

function TechCard({ tech, compact = false }) {
  const Icon = tech.icon;

  return (
    <motion.div
      whileHover={compact ? undefined : { y: -4 }}
      transition={{ duration: 0.3 }}
      className={
        compact
          ? "group relative flex min-w-0 flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-2 py-5 text-center shadow-sm shadow-slate-900/5 transition-colors duration-300 hover:border-cyan-500/60 hover:shadow-md dark:border-slate-700/60 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:hover:border-cyan-400/60"
          : "group relative flex h-[220px] w-[200px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-700/50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:hover:border-cyan-400 dark:hover:shadow-cyan-400/10"
      }
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ backgroundColor: tech.color }}
      />

      {/* Technology icon */}
      <div
        className={
          compact
            ? "relative flex h-12 w-12 items-center justify-center rounded-xl border"
            : "relative flex h-16 w-16 items-center justify-center rounded-2xl border"
        }
        style={{
          borderColor: `${tech.color}40`,
          backgroundColor: `${tech.color}18`,
        }}
      >
        <Icon
          size={compact ? 26 : 34}
          color={tech.color}
          aria-hidden="true"
        />
      </div>

      {/* Technology title */}
      <div
        className={
          compact
            ? "relative mt-3 min-w-0"
            : "relative mt-8 text-center"
        }
      >
        <h3
          className={
            compact
              ? "break-words text-sm font-semibold leading-snug text-slate-900 dark:text-white sm:text-base"
              : "text-xl font-bold text-slate-900 dark:text-white"
          }
        >
          {tech.title}
        </h3>

        {!compact && (
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Professional
            <br />
            Development
          </p>
        )}
      </div>

      {/* Bottom accent */}
      {!compact && (
        <div
          className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: tech.color }}
        />
      )}
    </motion.div>
  );
}

export default function AboutHighlights() {
  return (
    <section className="relative w-full min-w-0 overflow-hidden py-14 transition-colors duration-300 sm:py-20 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:h-72 sm:w-72 sm:blur-[140px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="relative mb-10 px-4 text-center sm:mb-16 lg:mb-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-800 dark:text-cyan-400 sm:text-sm sm:tracking-[8px]">
          Technologies
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Tech Stack
        </h2>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 dark:from-cyan-400 sm:w-28" />
      </motion.div>

      {/* Desktop and tablet marquee */}
      <div className="relative hidden overflow-hidden py-4 md:block">
        <Marquee
          speed={35}
          direction="right"
          pauseOnHover
          gradient={false}
          autoFill
        >
          {highlights.map((tech, index) => (
            <div
              key={`${tech.title}-${index}`}
              className="px-5"
            >
              <TechCard tech={tech} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Mobile technology grid */}
      <div className="relative grid grid-cols-2 gap-3 px-4 sm:gap-4 sm:px-6 md:hidden">
        {highlights.map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.3,
              delay: index * 0.04,
            }}
            className="min-w-0"
          >
            <TechCard tech={tech} compact />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
