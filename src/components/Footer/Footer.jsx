import { motion, useReducedMotion } from "framer-motion";
import FooterCTA from "./FooterCTA";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-100/80 pt-16 text-slate-900 transition-colors duration-300 dark:border-white/10 dark:from-slate-950 dark:via-slate-950 dark:to-[#080d19] sm:pt-20 lg:pt-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/[0.09] blur-[110px] sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-72 w-72 rounded-full bg-violet-500/[0.08] blur-[110px] sm:h-96 sm:w-96"
      />

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] dark:opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100,116,139,.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,116,139,.35) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Subtle animated accents */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -12, 0], opacity: [0.45, 0.8, 0.45] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-[12%] top-28 -z-10 h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.5)]"
          />

          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 12, 0], opacity: [0.35, 0.7, 0.35] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-32 right-[14%] -z-10 h-2.5 w-2.5 rounded-full bg-violet-500 shadow-[0_0_18px_rgba(139,92,246,0.45)]"
          />
        </>
      )}

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-10">
        {/* Call to action */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: "easeOut",
          }}
        >
          <FooterCTA />
        </motion.div>

        {/* Footer sections */}
        <div className="mt-16 grid min-w-0 grid-cols-1 gap-10 border-b border-slate-200/80 pb-10 dark:border-white/10 sm:mt-20 sm:gap-12 sm:pb-12 lg:grid-cols-[1.35fr_0.8fr_0.85fr] lg:gap-14 xl:gap-20">
          {/* Brand */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
            }}
            className="min-w-0"
          >
            <FooterBrand />
          </motion.div>

          {/* Navigation links */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : 0.08,
            }}
            className="min-w-0"
          >
            <FooterLinks />
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : 0.16,
            }}
            className="min-w-0"
          >
            <FooterSocial />
          </motion.div>
        </div>

        {/* Copyright and bottom navigation */}
        <div className="py-5 sm:py-6">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}
