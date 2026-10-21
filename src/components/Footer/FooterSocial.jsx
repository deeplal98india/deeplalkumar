import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "./footerData";

export default function FooterSocial() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? false : { opacity: 0, x: 50 }
      }
      whileInView={
        shouldReduceMotion ? {} : { opacity: 1, x: 0 }
      }
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      {/* Heading */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Connect With Me
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Let's build something amazing together.
        </p>
      </div>

      {/* Social Cards */}
      <div className="space-y-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.title}`}
              whileHover={
                shouldReduceMotion ? {} : { x: 6 }
              }
              whileTap={
                shouldReduceMotion ? {} : { scale: 0.98 }
              }
              className="group relative isolate block overflow-hidden rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50/70 hover:shadow-[0_0_25px_rgba(34,211,238,.12)] dark:border-[#1f1f1f] dark:bg-[#111111] dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10 dark:hover:shadow-[0_0_25px_rgba(34,211,238,.15)]"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Spotlight */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.04),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_50%)]" />

              <div className="relative flex items-center justify-between gap-3">
                {/* Icon and Text */}
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-cyan-700/20 bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300 dark:group-hover:bg-cyan-500/15">
                    {Icon && <Icon size={24} />}
                  </div>

                  <div className="min-w-0">
                    <h4 className="break-words font-semibold text-slate-900 transition-colors duration-300 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                      {social.title}
                    </h4>

                    <p className="mt-1 break-words text-sm text-slate-600 dark:text-slate-400">
                      {social.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-cyan-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-cyan-400"
                />
              </div>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-all duration-500 group-hover:w-full dark:from-cyan-400" />

              {/* Shine */}
              <div className="pointer-events-none absolute -left-24 top-0 h-full w-12 -skew-x-12 bg-slate-900/5 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 dark:bg-white/10" />
            </motion.a>
          );
        })}
      </div>

      {/* Accent */}
      <div className="mt-8 h-[3px] w-36 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 dark:from-cyan-400" />
    </motion.div>
  );
}
