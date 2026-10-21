import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { quickLinks } from "./footerData";

export default function FooterLinks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: "easeOut",
      }}
      className="relative min-w-0"
    >
      {/* Heading */}
      <div className="mb-7">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-1 w-9 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-cyan-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            Navigation
          </span>
        </div>

        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Quick Links
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
          Explore my portfolio, technical skills, experience and projects.
        </p>
      </div>

      {/* Navigation links */}
      <nav aria-label="Footer navigation">
        <ul className="space-y-2.5">
          {quickLinks.map((link, index) => (
            <li key={link.title}>
              <motion.a
                href={link.href}
                whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.2,
                  ease: "easeOut",
                }}
                className="group relative flex min-h-14 items-center justify-between gap-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 transition-colors duration-200 hover:border-cyan-500/40 hover:bg-cyan-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-cyan-400/30 dark:hover:bg-cyan-400/[0.05] dark:focus-visible:ring-offset-slate-950 sm:px-4"
              >
                {/* Hover accent */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-0.5 origin-center scale-y-0 bg-gradient-to-b from-cyan-500 to-violet-500 transition-transform duration-200 group-hover:scale-y-100 motion-reduce:transition-none dark:from-cyan-400"
                />

                {/* Link title */}
                <span className="relative flex min-w-0 items-center gap-3">
                  <span className="shrink-0 font-mono text-xs font-semibold tabular-nums text-slate-400 transition-colors group-hover:text-cyan-700 dark:text-slate-500 dark:group-hover:text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="break-words text-sm font-medium text-slate-700 transition-colors group-hover:text-cyan-800 dark:text-slate-300 dark:group-hover:text-white sm:text-[15px]">
                    {link.title}
                  </span>
                </span>

                {/* Arrow */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-200 group-hover:border-cyan-500/30 group-hover:bg-cyan-100 group-hover:text-cyan-800 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:group-hover:border-cyan-400/30 dark:group-hover:bg-cyan-400/10 dark:group-hover:text-cyan-300">
                  <ChevronRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="mt-7 flex items-center gap-2.5"
      >
        <span className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 dark:from-cyan-400" />
        <span className="h-1 w-5 rounded-full bg-violet-500/30 dark:bg-violet-400/40" />
      </div>
    </motion.div>
  );
}
