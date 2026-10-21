import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import myPic from "../../assets/images/my_pic.webp";

export default function HeroImage() {
  const shouldReduceMotion = useReducedMotion();

  const technologies = [
    {
      name: "React",
      style:
        "border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300",
    },
    {
      name: "Node.js",
      style:
        "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300",
    },
    {
      name: "MongoDB",
      style:
        "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300",
    },
  ];

  return (
    <motion.div
      initial={
        shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }
      }
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-[420px] px-2 pb-2 pt-7 sm:px-4 sm:pb-3 sm:pt-8 lg:ml-auto lg:mr-0"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-8 -z-10 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10"
      />

      {/* Main profile card */}
      <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-900 sm:p-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-1 pb-3 sm:px-2 sm:pb-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
              <Code2 size={19} aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Developer Portfolio
              </p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Personal workspace
              </p>
            </div>
          </div>

          <Sparkles
            size={18}
            className="shrink-0 text-cyan-600 dark:text-cyan-400"
            aria-hidden="true"
          />
        </div>

        {/* Profile image */}
        <div className="group relative isolate overflow-hidden rounded-2xl bg-slate-800">
          <img
            src={myPic}
            alt="Deeplal Kumar, Full-Stack Developer"
            className="block aspect-[4/4.5] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            loading="eager"
            fetchPriority="high"
          />

          {/* Always-dark overlay for consistent white text contrast */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-black/65 to-transparent"
          />

          {/* Name and designation */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
            <p
              className="text-xl font-extrabold tracking-tight !text-white drop-shadow-[0_2px_5px_rgba(0,0,0,1)] sm:text-2xl"
              style={{ color: "#FFFFFF", opacity: 1 }}
            >
              Deeplal Kumar
            </p>

            <p
              className="mt-1 text-sm font-semibold !text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
              style={{ color: "#FFFFFF", opacity: 1 }}
            >
              Full-Stack Developer
            </p>
          </div>

          {/* Arrow button */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/80 text-white shadow-lg sm:bottom-5 sm:right-5"
            style={{ color: "#FFFFFF", opacity: 1 }}
          >
            <ArrowUpRight
              size={21}
              color="#FFFFFF"
              strokeWidth={2.5}
            />
          </div>
        </div>

        {/* Technologies and GitHub */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-1 pt-4 sm:px-2">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className={`rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold ${tech.style}`}
              >
                {tech.name}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/deeplal98india"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Deeplal Kumar's GitHub profile"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-cyan-300"
          >
            <FaGithub size={19} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Availability badge */}
      <motion.div
        animate={
          shouldReduceMotion ? undefined : { y: [0, -3, 0] }
        }
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 z-30 inline-flex max-w-[85%] items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-lg shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 sm:right-1 sm:px-4 sm:py-2.5"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
        <span className="text-[10px] font-semibold text-slate-800 dark:text-slate-100 sm:text-xs">
          Open to opportunities
        </span>
      </motion.div>

      {/* GitHub connection card below the profile card */}
      <a
        href="https://github.com/deeplal98india"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Deeplal Kumar on GitHub"
        className="relative z-20 mt-3 inline-flex max-w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-md transition-colors hover:border-cyan-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:bg-slate-900 sm:ml-2 sm:px-4"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-700">
          <FaGithub size={18} aria-hidden="true" />
        </span>

        <span className="min-w-0">
          <span className="block text-xs font-bold text-slate-900 dark:text-white">
            Let's connect
          </span>
          <span className="mt-0.5 block text-[11px] text-slate-500 dark:text-slate-400">
            Explore my work
          </span>
        </span>

        <ArrowUpRight
          size={16}
          className="shrink-0 text-slate-500 dark:text-slate-400"
          aria-hidden="true"
        />
      </a>
    </motion.div>
  );
}
