import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { quickLinks } from "./footerData";

export default function FooterLinks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 40,
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
      transition={{
        duration: 0.7,
        delay: 0.15,
      }}
      className="relative"
    >
      {/* Heading */}
      <div className="relative mb-10">
        {/* Accent Line */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 dark:from-cyan-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
            Navigation
          </span>
        </div>

        {/* Title */}
        <h3 className="bg-gradient-to-r from-slate-900 via-slate-700 to-cyan-700 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent dark:from-white dark:via-slate-100 dark:to-cyan-300">
          Quick Links
        </h3>

        {/* Description */}
        <p className="mt-3 max-w-sm text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          Explore different sections of my portfolio and discover my work,
          skills, experience, and contact information.
        </p>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        {quickLinks.map((link, index) => (
          <motion.a
            key={link.title}
            href={link.href}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    x: 6,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="
              group relative flex items-center justify-between
              overflow-hidden rounded-2xl border
              border-slate-200 bg-gradient-to-br
              from-white via-slate-50 to-slate-100
              px-5 py-5 shadow-sm backdrop-blur-2xl
              transition-all duration-500
              hover:border-cyan-500/40
              hover:shadow-[0_15px_40px_rgba(34,211,238,.12)]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-cyan-500
              dark:border-white/10 dark:from-slate-900
              dark:via-[#0b1220] dark:to-slate-950
              dark:hover:border-cyan-400/40
              dark:hover:shadow-[0_15px_40px_rgba(34,211,238,.18)]
              sm:px-6
            "
          >
            {/* Left Accent */}
            <div
              className="
                absolute left-0 top-0 h-full w-1 origin-top
                scale-y-0 rounded-full
                bg-gradient-to-b from-cyan-500 via-sky-400 to-indigo-500
                transition-transform duration-500
                group-hover:scale-y-100
                dark:from-cyan-400
              "
            />

            {/* Glow */}
            <div
              className="
                absolute -left-10 top-1/2 h-20 w-20
                -translate-y-1/2 rounded-full bg-cyan-400/10
                blur-2xl opacity-0 transition-all duration-500
                group-hover:left-2 group-hover:opacity-100
                dark:bg-cyan-400/20
              "
            />

            {/* Shine */}
            <span
              className="
                absolute -left-20 top-0 h-full w-16 rotate-12
                bg-gradient-to-r from-transparent via-cyan-900/5 to-transparent
                transition-all duration-700
                group-hover:left-[140%]
                dark:via-white/15
              "
            />

            {/* Link Content */}
            <div className="relative z-10 flex min-w-0 items-center gap-4">
              {/* Number */}
              <span
                className="
                  shrink-0 text-sm font-bold text-slate-400
                  transition-colors duration-300
                  group-hover:text-cyan-700
                  dark:text-slate-600 dark:group-hover:text-cyan-400
                "
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Title */}
              <span
                className="
                  text-sm font-medium tracking-wide text-slate-700
                  transition-colors duration-300
                  group-hover:text-cyan-800
                  dark:text-slate-300 dark:group-hover:text-white
                  sm:text-[15px]
                "
              >
                {link.title}
              </span>
            </div>

            {/* Arrow */}
            <div
              className="
                relative z-10 ml-3 flex h-10 w-10 shrink-0
                items-center justify-center rounded-full border
                border-slate-200 bg-white
                transition-all duration-500
                group-hover:border-cyan-500/50
                group-hover:bg-cyan-50
                group-hover:shadow-[0_0_20px_rgba(34,211,238,.15)]
                dark:border-white/10 dark:bg-white/5
                dark:group-hover:border-cyan-400/50
                dark:group-hover:bg-cyan-500/15
                dark:group-hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
              "
            >
              <ChevronRight
                size={18}
                className="
                  text-cyan-700 transition-transform duration-500
                  group-hover:translate-x-1
                  dark:text-cyan-400
                "
              />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Bottom Accent */}
      <div className="mt-10 flex items-center gap-3">
        <span className="h-[4px] w-24 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 dark:from-cyan-400" />

        <span className="h-[4px] w-10 rounded-full bg-cyan-600/30 dark:bg-cyan-400/40" />
      </div>
    </motion.div>
  );
}
