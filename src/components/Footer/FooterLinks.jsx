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
      {/* ================= Heading ================= */}

      <div className="relative mb-10">
        {/* Accent Line */}

        <div className="mb-5 flex items-center gap-3">
          <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Navigation
          </span>
        </div>

        <h3
          className="
            bg-gradient-to-r
            from-white
            via-slate-100
            to-cyan-300
            bg-clip-text
            text-3xl
            font-extrabold
            tracking-tight
            text-transparent
          "
        >
          Quick Links
        </h3>

        <p className="mt-3 max-w-sm text-[15px] leading-7 text-slate-400">
          Explore different sections of my portfolio and discover my work,
          skills, experience, and contact information.
        </p>
      </div>

      {/* ================= Links ================= */}

      <div className="space-y-4">

        {quickLinks.map((link, index) => (
          <motion.a
            key={link.title}
            href={link.href}
            whileHover={{
              x: 6,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="
              group
              relative
              flex
              items-center
              justify-between
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-br
              from-slate-900
              via-[#0b1220]
              to-slate-950
              px-6
              py-5
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:border-cyan-400/40
              hover:shadow-[0_15px_40px_rgba(34,211,238,.18)]
            "
          >
            {/* Left Accent */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-1
                rounded-full
                bg-gradient-to-b
                from-cyan-400
                via-sky-400
                to-indigo-500
                scale-y-0
                origin-top
                transition-transform
                duration-500
                group-hover:scale-y-100
              "
            />

            {/* Glow */}
            <div
              className="
                absolute
                -left-10
                top-1/2
                h-20
                w-20
                -translate-y-1/2
                rounded-full
                bg-cyan-400/20
                blur-2xl
                opacity-0
                transition-all
                duration-500
                group-hover:left-2
                group-hover:opacity-100
              "
            />

            {/* Shine */}
            <span
              className="
                absolute
                -left-20
                top-0
                h-full
                w-16
                rotate-12
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
                transition-all
                duration-700
                group-hover:left-[140%]
              "
            />

            {/* Content */}
            <div className="relative z-20 flex items-center gap-4">
              {/* Number */}
              <span
                className="
                  text-sm
                  font-bold
                  text-slate-600
                  transition-all
                  duration-300
                  group-hover:text-cyan-400
                "
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Title */}
              <span
                className="
                  text-[15px]
                  font-medium
                  tracking-wide
                  text-slate-300
                  transition-all
                  duration-300
                  group-hover:text-white
                "
              >
                {link.title}
              </span>
            </div>

            {/* Arrow */}
            <div
              className="
                relative
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                transition-all
                duration-500
                group-hover:border-cyan-400/50
                group-hover:bg-cyan-500/15
                group-hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
              "
            >
              <ChevronRight
                size={18}
                className="
                  text-cyan-400
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                "
              />
            </div>
          </motion.a>
        ))}
      </div>

      {/* ================= Bottom Accent ================= */}

      <div className="mt-10 flex items-center gap-3">
        <span className="h-[4px] w-24 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" />

        <span className="h-[4px] w-10 rounded-full bg-cyan-400/40" />
      </div>
    </motion.div>
  );
}
