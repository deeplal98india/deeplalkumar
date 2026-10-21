import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import resume from "../../assets/resume/resume.pdf";

export default function FooterCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 60,
            }
      }
      whileInView={
        shouldReduceMotion
          ? {}
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        group relative isolate overflow-hidden rounded-2xl
        border-2 border-slate-200 bg-white
        px-5 py-10 text-center sm:px-8
        dark:border-[#272727] dark:bg-[#111111]
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -left-28 -top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Spotlight */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,.05),transparent_55%)]
          dark:bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_55%)]
        "
      />

      {/* Badge */}
      <div
        className="
          relative z-10 inline-flex items-center gap-2 rounded-full
          border border-cyan-700/20 bg-cyan-50
          px-5 py-2 text-sm font-semibold text-cyan-700
          dark:border-cyan-400/20 dark:bg-cyan-500/10
          dark:text-cyan-300
        "
      >
        <Sparkles size={16} />
        Available For New Opportunities
      </div>

      {/* Heading */}
      <h2 className="relative z-10 mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
        Let's Build Your Next{" "}
        <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-violet-500">
          Digital Product
        </span>
      </h2>

      {/* Description */}
      <p className="relative z-10 mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
        I build modern React applications, scalable Node.js backends,
        enterprise dashboards and production-ready full-stack web applications
        with clean architecture and premium user experience.
      </p>

      {/* Buttons */}
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        {/* Hire Me */}
        <a
          href="#contact"
          className="
            group/button inline-flex items-center gap-2 rounded-lg
            bg-cyan-600 px-6 py-3.5 font-semibold text-white
            transition-all duration-300
            hover:-translate-y-1 hover:bg-cyan-500
            hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-500 focus-visible:ring-offset-2
            focus-visible:ring-offset-white
            sm:px-8 sm:py-4
            dark:bg-cyan-500 dark:text-black
            dark:hover:bg-cyan-400
            dark:focus-visible:ring-offset-[#111111]
          "
        >
          Hire Me
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />
        </a>

        {/* Download Resume */}
        <a
          href={resume}
          download
          className="
            group/button inline-flex items-center gap-2 rounded-lg
            border-2 border-slate-200 bg-slate-50
            px-6 py-3.5 font-semibold text-slate-800
            transition-all duration-300
            hover:-translate-y-1 hover:border-cyan-500
            hover:bg-cyan-50 hover:text-cyan-700
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-500 focus-visible:ring-offset-2
            focus-visible:ring-offset-white
            sm:px-8 sm:py-4
            dark:border-[#303030] dark:bg-[#181818]
            dark:text-white dark:hover:border-cyan-400
            dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300
            dark:focus-visible:ring-offset-[#111111]
          "
        >
          Download Resume
          <Download
            size={18}
            className="transition-transform duration-300 group-hover/button:-translate-y-1"
          />
        </a>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 transition-all duration-700 group-hover:w-full dark:from-cyan-400" />

      {/* Shine */}
      <div className="pointer-events-none absolute -left-28 top-0 h-full w-16 -skew-x-12 bg-slate-900/5 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 dark:bg-white/10" />
    </motion.section>
  );
}
