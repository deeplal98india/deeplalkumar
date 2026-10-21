import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ContactHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      }}
      className="mx-auto w-full max-w-4xl text-center"
    >
      {/* Section badge */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-600/20 bg-cyan-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/[0.08] dark:text-cyan-300 sm:px-5 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
          Contact
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
        Let's Build
        <span className="mt-1 block bg-gradient-to-r from-cyan-700 via-sky-600 to-violet-600 bg-clip-text pb-1 text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-400">
          Something Amazing
        </span>
      </h2>

      {/* Decorative accent */}
      <div
        aria-hidden="true"
        className="mx-auto mt-6 flex items-center justify-center gap-2"
      >
        <span className="h-1 w-8 rounded-full bg-cyan-500/60 dark:bg-cyan-400/60" />
        <span className="h-1 w-14 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 dark:from-cyan-400" />
        <span className="h-1 w-8 rounded-full bg-violet-500/60 dark:bg-violet-400/60" />
      </div>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl px-1 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8 md:text-lg">
        I'm interested in building scalable web applications, enterprise
        dashboards, and modern digital products. Whether you have a freelance
        project, a full-time opportunity, or an idea for collaboration, I'd
        love to hear from you.
      </p>

      {/* Scroll hint */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.4,
          delay: shouldReduceMotion ? 0 : 0.25,
        }}
        className="mt-7 flex justify-center"
      >
        <a
          href="#contact"
          aria-label="Contact section"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 text-slate-500 transition-colors hover:border-cyan-500/50 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/10 dark:text-slate-400 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300"
        >
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </motion.div>
    </motion.div>
  );
}
