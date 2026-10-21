
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/resume/resume.pdf";

const socialLinks = [
  {
    label: "GitHub",
    icon: FaGithub,
    link: "https://github.com/deeplal98india",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/deeplal-kumar-b47548229/",
  },
  {
    label: "Email",
    icon: Mail,
    link: "mailto:deeplalkumar1400036@gmail.com",
  },
];

const highlights = [
  { value: "6+", label: "Projects built" },
  { value: "MERN", label: "Full-stack" },
  { value: "Web + Mobile", label: "Experiences" },
];

const technologies = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export default function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 18 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut",
      }}
      className="relative z-10 flex w-full flex-col items-center text-center lg:items-start lg:text-left"
    >
      {/* Availability */}
      <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3.5 py-2 text-xs font-semibold tracking-wide text-emerald-700 shadow-sm shadow-emerald-500/[0.03] dark:border-emerald-400/20 dark:bg-emerald-400/[0.06] dark:text-emerald-300 sm:text-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        </span>
        Available for freelance projects
        <Sparkles size={14} className="ml-0.5 opacity-70" />
      </div>

      {/* Intro */}
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-400 sm:text-base">
        Hello, I'm
      </p>

      <h1 className="max-w-full text-5xl font-extrabold leading-[1.04] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-6xl xl:text-7xl 2xl:text-[5.25rem]">
        Deeplal
        <span className="mt-1 block bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 bg-clip-text pb-1 text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-blue-400">
          Kumar<span className="text-cyan-600 dark:text-cyan-400">.</span>
        </span>
      </h1>

      <h2 className="mt-6 max-w-2xl text-xl font-semibold leading-snug tracking-tight text-slate-800 dark:text-slate-100 sm:text-2xl xl:text-[1.75rem]">
        Building digital products that{" "}
        <span className="text-cyan-700 dark:text-cyan-400">
          work beautifully.
        </span>
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
        Full-stack developer focused on building responsive user
        interfaces, dependable backend APIs, and data-driven
        applications using React, Node.js, Express, and MongoDB.
      </p>

      {/* Technology badges */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
        {technologies.map((technology, index) => (
          <motion.span
            key={technology}
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 8 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.35,
              delay: shouldReduceMotion ? 0 : 0.12 + index * 0.07,
            }}
            className="rounded-lg border border-slate-200/90 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm shadow-slate-900/[0.025] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-cyan-700 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300 sm:text-sm"
          >
            {technology}
          </motion.span>
        ))}
      </div>

      {/* Primary actions */}
      <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 min-[420px]:w-auto min-[420px]:flex-row lg:justify-start">
        <a
          href="#contact"
          className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:from-cyan-500 dark:to-sky-500 dark:text-slate-950 dark:focus-visible:ring-offset-slate-950 sm:px-6"
        >
          <Mail size={17} />
          Let's discuss your project
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>

        <a
          href="#projects"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300/90 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-600/60 hover:bg-cyan-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-cyan-400/50 dark:hover:bg-slate-800/80 dark:focus-visible:ring-offset-slate-950 sm:px-6"
        >
          View projects
          <ArrowDownRight size={17} />
        </a>
      </div>

      {/* Resume and social links */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 lg:justify-start">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-slate-600 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
        >
          <Download size={16} />
          View resume
          <ArrowRight size={13} />
        </a>

        <span className="hidden h-4 w-px bg-slate-300 dark:bg-slate-700 min-[420px]:block" />

        {socialLinks.map(({ label, icon: Icon, link }) => (
          <a
            key={label}
            href={link}
            target={label === "Email" ? undefined : "_blank"}
            rel={
              label === "Email" ? undefined : "noopener noreferrer"
            }
            aria-label={label}
            title={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      {/* Highlights */}
      <div className="mt-9 grid w-full max-w-xl grid-cols-3 gap-3 border-t border-slate-200/80 pt-6 dark:border-slate-800/90 sm:gap-5">
        {highlights.map((item) => (
          <div key={item.label} className="min-w-0 text-center lg:text-left">
            <p className="break-words text-base font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-xl">
              {item.value}
            </p>
            <p className="mt-1.5 text-[11px] leading-4 text-slate-500 dark:text-slate-400 sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
