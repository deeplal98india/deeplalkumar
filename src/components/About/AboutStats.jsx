import { motion, useReducedMotion } from "framer-motion";
import {
  FaProjectDiagram,
  FaLaptopCode,
  FaAward,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    title: "Projects",
    description: "Enterprise & Portfolio Apps",
    icon: FaProjectDiagram,
    color: "#0891B2",
    number: "01",
  },
  {
    title: "Experience",
    description: "Professional Development",
    icon: FaLaptopCode,
    color: "#8B5CF6",
    number: "02",
  },
  {
    title: "Technologies",
    description: "Modern Tech Stack",
    icon: FaCode,
    color: "#16A34A",
    number: "03",
  },
  {
    title: "Code Quality",
    description: "Clean & Scalable Code",
    icon: FaAward,
    color: "#CA8A04",
    number: "04",
  },
];

const technologies = [
  "React.js",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

export default function AboutStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
      aria-labelledby="overview-heading"
      className="relative isolate w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-4 shadow-xl shadow-slate-900/5 transition-colors duration-300 dark:border-white/10 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:shadow-black/20 sm:rounded-3xl sm:p-6 lg:p-8"
    >
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 -z-10 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl sm:h-64 sm:w-64"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl sm:h-64 sm:w-64"
      />

      {/* Section label */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-600/20 bg-cyan-500/10 px-3 py-2 dark:border-cyan-400/20 dark:bg-cyan-500/5 sm:px-4">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          {!shouldReduceMotion && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-50" />
          )}
          <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
        </span>

        <span className="text-[10px] font-bold uppercase tracking-[2px] text-cyan-800 dark:text-cyan-300 sm:text-xs sm:tracking-[3px]">
          Developer Overview
        </span>
      </div>

      {/* Heading */}
      <h2
        id="overview-heading"
        className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:mt-6 sm:text-4xl lg:text-5xl"
      >
        Quick
        <span className="mt-1 block bg-gradient-to-r from-cyan-700 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
          Overview
        </span>
      </h2>

      {/* Introduction */}
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-5 sm:text-[15px] sm:leading-8">
        Full-Stack Developer focused on building modern web and mobile
        applications with{" "}
        <span className="font-semibold text-cyan-800 dark:text-cyan-300">
          React.js, React Native, Node.js
        </span>{" "}
        and MongoDB. I value clean architecture, maintainable code and
        intuitive user experiences.
      </p>

      {/* Overview cards */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="group relative flex min-h-[150px] min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white/90 p-3 shadow-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-cyan-400/40 sm:min-h-[165px] sm:rounded-2xl sm:p-5"
            >
              {/* Card accent */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex items-start justify-between gap-2">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-lg transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12 sm:text-xl"
                  style={{
                    color: item.color,
                    borderColor: `${item.color}40`,
                    backgroundColor: `${item.color}12`,
                  }}
                >
                  <Icon aria-hidden="true" />
                </div>

                <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-600 sm:text-xs">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-4 break-words text-sm font-bold leading-snug text-slate-900 dark:text-white sm:mt-5 sm:text-lg">
                {item.title}
              </h3>

              <p className="mt-1 break-words text-xs leading-5 text-slate-600 dark:text-slate-400 sm:text-sm sm:leading-6">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Current focus */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: 0.1 }}
        className="mt-5 min-w-0 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-cyan-50 via-white to-violet-50 p-4 dark:border-white/10 dark:from-cyan-500/5 dark:via-slate-900/70 dark:to-violet-500/5 sm:mt-6 sm:p-5"
      >
        <div className="flex min-w-0 items-start gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
              Current Focus
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:leading-7">
              Developing scalable applications, reusable UI components,
              reliable REST APIs and responsive experiences across devices.
            </p>
          </div>

          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-100 text-lg text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300 sm:flex">
            <FaCode aria-hidden="true" />
          </div>
        </div>

        {/* Technology badges */}
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {technologies.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-700/15 bg-cyan-50 px-3 py-1.5 text-xs font-medium text-cyan-800 transition-colors hover:border-cyan-600/40 hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300 dark:hover:bg-cyan-500/20 sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="my-5 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10" />

        {/* Availability */}
        <div className="flex items-start gap-3">
          <span className="relative mt-1 flex h-3 w-3 shrink-0">
            {!shouldReduceMotion && (
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
            )}
            <span className="relative h-3 w-3 rounded-full bg-emerald-600 dark:bg-emerald-400" />
          </span>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 sm:text-base">
              Open to Opportunities
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400 sm:text-sm">
              Full-Stack Development · React Native · Backend APIs
            </p>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
}
