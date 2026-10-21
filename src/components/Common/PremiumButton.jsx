import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PremiumButton({
  href = "#",
  children,
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -3,
              scale: 1.02,
            }
      }
      whileTap={
        shouldReduceMotion
          ? {}
          : {
              scale: 0.98,
            }
      }
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className={`
        group relative inline-flex rounded-3xl
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-cyan-500 focus-visible:ring-offset-4
        focus-visible:ring-offset-white
        dark:focus-visible:ring-cyan-400
        dark:focus-visible:ring-offset-slate-950
        ${className}
      `}
    >
      {/* Outer Glow */}
      <div
        className="
          pointer-events-none absolute -inset-1 rounded-3xl
          bg-gradient-to-r from-cyan-500/35 via-sky-500/35
          to-indigo-500/35 opacity-0 blur-xl
          transition-opacity duration-500
          group-hover:opacity-100
          dark:from-cyan-500/50 dark:via-sky-500/50
          dark:to-indigo-500/50
        "
      />

      {/* Gradient Border */}
      <div
        className="
          relative rounded-3xl bg-gradient-to-r
          from-cyan-500 via-sky-500 to-indigo-500 p-[1.5px]
          dark:from-cyan-400 dark:via-sky-500 dark:to-indigo-500
        "
      >
        {/* Button Body */}
        <div
          className="
            flex h-full w-full items-center justify-between gap-6
            rounded-[22px] border border-slate-200/80
            bg-white/95 px-6 py-3.5 backdrop-blur-2xl
            transition-colors duration-300
            group-hover:bg-cyan-50/95
            sm:px-8 sm:py-4
            dark:border-white/10 dark:bg-[#08111f]/95
            dark:group-hover:bg-[#0b1929]/95
          "
        >
          {/* Text */}
          <span
            className="
              bg-gradient-to-r from-slate-900 via-slate-700 to-cyan-700
              bg-clip-text text-sm font-semibold tracking-wide
              text-transparent transition-opacity duration-300
              group-hover:opacity-90
              sm:text-[15px]
              dark:from-white dark:via-slate-100 dark:to-cyan-300
            "
          >
            {children}
          </span>

          {/* Arrow Icon */}
          <div
            className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-full bg-gradient-to-br from-cyan-500 to-sky-600
              shadow-[0_0_20px_rgba(34,211,238,.2)]
              transition-all duration-300
              group-hover:shadow-[0_0_25px_rgba(34,211,238,.35)]
              sm:h-11 sm:w-11
              dark:from-cyan-400 dark:to-sky-500
              dark:shadow-[0_0_20px_rgba(34,211,238,.35)]
            "
          >
            <ArrowRight
              size={18}
              className={`
                text-white transition-transform duration-300
                ${shouldReduceMotion ? "" : "group-hover:translate-x-1"}
              `}
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
