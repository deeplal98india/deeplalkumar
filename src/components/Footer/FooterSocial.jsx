import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "./footerData";

export default function FooterSocial() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className="relative min-w-0"
    >
      {/* Heading */}
      <div className="mb-7">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-1 w-9 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-cyan-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            Get in touch
          </span>
        </div>

        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Connect With Me
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
          Let's connect, exchange ideas, and build something amazing together.
        </p>
      </div>

      {/* Social Cards */}
      <div className="space-y-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.title} (opens in a new tab)`}
              whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.2,
                ease: "easeOut",
              }}
              className="group relative isolate flex min-h-[88px] items-center justify-between gap-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-sm transition-colors duration-300 hover:border-cyan-500/40 hover:bg-cyan-50/70 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 motion-reduce:transform-none motion-reduce:transition-none dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-cyan-400/30 dark:hover:bg-cyan-400/[0.05] dark:focus-visible:ring-offset-slate-950 sm:p-5"
            >
              {/* Hover accent */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 -z-10 w-0.5 origin-center scale-y-0 bg-gradient-to-b from-cyan-500 to-violet-500 transition-transform duration-300 group-hover:scale-y-100 motion-reduce:transition-none dark:from-cyan-400"
              />

              {/* Background glow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-300 group-hover:bg-cyan-400/20 motion-reduce:transition-none"
              />

              {/* Social information */}
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-700/15 bg-cyan-50 text-cyan-700 transition-colors duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300 dark:group-hover:bg-cyan-500/15 sm:h-14 sm:w-14">
                  {Icon && <Icon size={23} aria-hidden="true" />}
                </div>

                <div className="min-w-0">
                  <h4 className="break-words text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300 sm:text-base">
                    {social.title}
                  </h4>

                  <p className="mt-1 break-words text-xs leading-5 text-slate-600 dark:text-slate-400 sm:text-sm">
                    {social.subtitle}
                  </p>
                </div>
              </div>

              {/* External link indicator */}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-100 group-hover:text-cyan-800 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400 dark:group-hover:border-cyan-400/30 dark:group-hover:bg-cyan-400/10 dark:group-hover:text-cyan-300">
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                />
              </span>

              {/* Bottom gradient */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-[width] duration-500 group-hover:w-full motion-reduce:transition-none dark:from-cyan-400"
              />
            </motion.a>
          );
        })}
      </div>

      {/* Footer accent */}
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
