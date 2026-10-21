
import { motion, useReducedMotion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate w-full scroll-mt-20 overflow-hidden bg-[var(--background)] pt-24 text-[var(--text-primary)] transition-colors duration-300 sm:pt-28"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/[0.09] blur-3xl dark:bg-cyan-400/[0.08]" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-3xl dark:bg-blue-500/[0.09]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,116,139,0.12)_1px,transparent_0)] [background-size:26px_26px] opacity-40 dark:opacity-20" />
      </div>

      {/* Main hero layout */}
      <div className="relative z-10 mx-auto grid min-h-[calc(88vh-72px)] w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-5 pb-20 sm:px-8 sm:pb-24 md:grid-cols-[1.05fr_0.95fr] md:gap-8 lg:gap-12 lg:px-12 xl:gap-16 xl:px-16 2xl:px-20">
        {/* Left: Introduction and CTA */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, x: -18 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="order-2 min-w-0 md:order-1"
        >
          <HeroContent />
        </motion.div>

        {/* Right: Existing hero visual */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, x: 18, scale: 0.98 }
          }
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: "easeOut",
          }}
          className="relative order-1 flex min-w-0 items-center justify-center py-3 md:order-2 md:py-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-blue-600/15 blur-3xl"
          />

          <div className="relative z-10 w-full max-w-[540px]">
            <HeroImage />
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent dark:via-slate-700/80"
      />
    </section>
  );
}
