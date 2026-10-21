import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import resume from "../../assets/resume/resume.pdf";

export default function FooterCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: "easeOut",
      }}
      aria-labelledby="footer-cta-heading"
      className="group relative isolate overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-5 py-10 text-center shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/70 sm:rounded-3xl sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px] transition-opacity duration-500 group-hover:opacity-150 sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 -z-10 h-64 w-64 rounded-full bg-violet-500/[0.09] blur-[100px] sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_65%)]"
      />

      {/* Availability badge */}
      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/[0.07] dark:text-emerald-300 sm:px-4 sm:text-sm">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50 motion-reduce:animate-none" />
          <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
        </span>

        <Sparkles size={15} aria-hidden="true" className="shrink-0" />

        <span>Available for New Opportunities</span>
      </div>

      {/* Heading */}
      <h2
        id="footer-cta-heading"
        className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:mt-7 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Let's Build Your Next{" "}
        <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
          Digital Product
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
        I build modern React applications, scalable Node.js backends, enterprise
        dashboards and full-stack web applications with clean architecture and
        thoughtful user experiences.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
        {/* Contact button */}
        <a
          href="#contact"
          className="group/primary inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-cyan-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 dark:focus-visible:ring-offset-slate-900 sm:min-h-13 sm:px-7 sm:text-base"
        >
          Let's Work Together
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/primary:translate-x-1"
          />
        </a>

        {/* Resume download */}

        <a
          href={resume}
          download
          className="group/resume inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-slate-300 bg-white px-6 py-3 text-sm font-bold text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-800 dark:border-slate-500 dark:bg-slate-800 dark:text-white dark:hover:border-cyan-400 dark:hover:bg-slate-700 dark:hover:text-cyan-300 sm:px-7"
        >
          <Download
            size={18}
            aria-hidden="true"
            className="shrink-0 text-black transition-transform duration-300 group-hover/resume:translate-y-0.5 dark:text-white"
          />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none dark:from-cyan-400"
      />
    </motion.section>
  );
}


