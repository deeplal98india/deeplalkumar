
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Download,
  Mail,
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
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=deeplalkumar1400036@gmail.com",
  },
];

const highlights = [
  { value: "6+", label: "Projects built" },
  { value: "MERN", label: "Full-stack" },
  { value: "Web + Mobile", label: "Experiences" },
];

const technologies = ["React.js", "Node.js", "Express.js", "MongoDB"];

export default function HeroContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 16 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold tracking-wide text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/[0.06] dark:text-emerald-300 sm:text-sm">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        </span>
        Available for freelance projects
      </div>

      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400 sm:text-base">
        Hello, I'm
      </p>

      <h1 className="max-w-full text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl xl:text-6xl 2xl:text-7xl">
        Deeplal{" "}
        <span className="text-cyan-700 dark:text-cyan-400">
          Kumar
        </span>
      </h1>

      <h2 className="mt-4 max-w-2xl text-xl font-semibold leading-snug text-slate-900 dark:text-slate-100 sm:text-2xl xl:text-[1.7rem]">
        I build reliable web apps and mobile experiences.
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8 lg:text-[1.05rem]">
        Full-stack developer helping turn ideas into responsive,
        user-friendly products—from polished React interfaces to
        dependable Node.js APIs and MongoDB-backed applications.
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-300 sm:text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 min-[420px]:w-auto min-[420px]:flex-row lg:justify-start">
        <a
          href="#contact"
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors duration-200 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 dark:focus-visible:ring-offset-slate-950 sm:px-6"
        >
          Let's discuss your project
          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>

        <a
          href="#projects"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:border-cyan-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:border-cyan-400/50 dark:hover:bg-slate-800/80 dark:focus-visible:ring-offset-slate-950 sm:px-6"
        >
          View projects
          <ArrowDownRight size={17} />
        </a>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 lg:justify-start">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
        >
          <Download size={15} />
          View resume
        </a>

        <span className="hidden h-4 w-px bg-slate-300 dark:bg-slate-700 min-[420px]:block" />

        {socialLinks.map(({ label, icon: Icon, link }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-800 dark:bg-transparent dark:text-slate-400 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      <div className="mt-8 grid w-full max-w-xl grid-cols-3 gap-2 border-t border-slate-200 pt-5 dark:border-slate-800/90 sm:mt-9 sm:gap-4 sm:pt-6">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="min-w-0 text-center lg:text-left"
          >
            <p className="break-words text-base font-bold text-slate-950 dark:text-white sm:text-xl">
              {item.value}
            </p>
            <p className="mt-1 text-[11px] leading-4 text-slate-600 dark:text-slate-500 sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
