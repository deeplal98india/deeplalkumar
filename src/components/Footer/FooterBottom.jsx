import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function FooterBottom() {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className="mt-10"
    >
      {/* Divider */}
      <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent sm:mb-10" />

      {/* Bottom content */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* Footer message */}
        <div className="min-w-0 flex-1">
          <h3 className="text-center text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl lg:text-left">
            Thanks for Visiting{" "}
            <span aria-hidden="true">👋</span>
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-7 text-slate-600 dark:text-slate-400 lg:mx-0 lg:text-left">
            Thank you for exploring my portfolio. I'm always excited to
            collaborate on modern web applications, enterprise solutions,
            and innovative digital products.
          </p>

          {/* Built with */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm lg:justify-start">
            <span>Designed and built with</span>

            <Heart
              size={15}
              className="fill-rose-500 text-rose-500"
              aria-label="love"
            />

            <span className="font-medium text-slate-700 dark:text-slate-300">
              React · Tailwind CSS · Framer Motion
            </span>
          </div>

          {/* Copyright */}
          <p className="mt-4 text-center text-xs leading-6 text-slate-500 dark:text-slate-500 sm:text-sm lg:text-left">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Deeplal Kumar
            </span>
            . All rights reserved.
          </p>
        </div>

        {/* Back to top */}
        <div className="flex shrink-0 justify-center lg:justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
            className="group relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-400/50 dark:focus-visible:ring-offset-slate-950"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative z-10">
              Back to top
            </span>

            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 transition-transform duration-300 group-hover:-translate-y-0.5 dark:bg-cyan-400/10 dark:text-cyan-300">
              <ArrowUp size={17} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 opacity-70 sm:mt-10"
      />
    </motion.div>
  );
}
