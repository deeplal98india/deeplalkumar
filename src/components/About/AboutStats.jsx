import { motion } from "framer-motion";
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
    color: "#22D3EE",
  },
  {
    title: "Months Experience",
    description: "Professional Development",
    icon: FaLaptopCode,
    color: "#8B5CF6",
  },
  {
    title: "Technologies",
    description: "Modern Tech Stack",
    icon: FaCode,
    color: "#22C55E",
  },
  {
    title: "Code Quality",
    description: "Clean & Scalable Code",
    icon: FaAward,
    color: "#FACC15",
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

export default function AboutStats() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="relative isolate w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-950/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,.35)] sm:rounded-3xl sm:p-6 lg:p-8"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -left-20 top-12 -z-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl sm:h-72 sm:w-72" />

      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-3 py-2 sm:gap-3 sm:px-5">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
        </span>
        <span className="break-words text-[10px] font-semibold uppercase tracking-[2px] text-cyan-300 sm:text-xs sm:tracking-[4px]">
          Achievements
        </span>
      </div>

      <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:mt-7 sm:text-4xl lg:text-5xl">
        Quick
        <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-clip-text text-transparent sm:mt-2">
          Overview
        </span>
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-6 sm:text-[15px] sm:leading-8">
        Software Developer with <span className="font-semibold text-cyan-300">1+ Years</span> of professional experience building enterprise web and mobile applications using React.js, React Native, Node.js, Express.js and MongoDB. Passionate about clean architecture, scalable development and modern user experiences.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              className="group flex min-w-0 min-h-[145px] flex-col items-start overflow-hidden rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-3 transition-colors duration-300 hover:border-cyan-400/60 hover:shadow-[0_12px_30px_rgba(34,211,238,.12)] sm:min-h-[160px] sm:rounded-2xl sm:p-5"
            >
              <div
                className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-xl sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl"
                style={{ borderColor: `${item.color}55`, background: `${item.color}15`, color: item.color }}
              >
                <Icon aria-hidden="true" />
              </div>
              <h3 className="break-words text-base font-bold leading-snug text-white sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-1 break-words text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-5 min-w-0 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 p-4 sm:mt-8 sm:rounded-2xl sm:p-6"
      >
        <div className="flex min-w-0 items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold text-white sm:text-xl">Current Focus</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400 sm:leading-7">
              Building scalable enterprise web and mobile applications using modern frontend, backend and mobile technologies.
            </p>
          </div>
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-xl text-cyan-400 sm:flex">
            <FaCode aria-hidden="true" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
          {technologies.map((skill) => (
            <span
              key={skill}
              className="max-w-full break-words rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/20 sm:px-4 sm:py-2 sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-7" />

        <div className="flex min-w-0 items-start gap-3">
          <span className="relative mt-1 flex h-3 w-3 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-emerald-400 sm:text-base">Available for Opportunities</p>
            <p className="mt-1 break-words text-xs leading-5 text-slate-500 sm:text-sm">
              Full-Stack Developer · React Native Developer
            </p>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
}
