import { motion, useReducedMotion } from "framer-motion";

import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import AvailabilityCard from "./AvailabilityCard";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion
      ? false
      : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: {
      once: true,
      amount: 0.12,
    },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.55,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="contact"
      aria-label="Contact section"
      className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Left glow */}
        <div className="absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/[0.08] blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[140px] dark:bg-cyan-500/[0.10]" />

        {/* Right glow */}
        <div className="absolute -right-40 bottom-0 h-[320px] w-[320px] rounded-full bg-violet-500/[0.07] blur-[110px] sm:h-[440px] sm:w-[440px] sm:blur-[150px] dark:bg-violet-500/[0.10]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-[42%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.04] blur-[120px] sm:h-[520px] sm:w-[520px] sm:blur-[160px] dark:bg-cyan-400/[0.05]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        {/* Soft bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-100/50 to-transparent dark:from-slate-950/30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section heading */}
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <ContactHeader />
        </div>

        {/* Contact information */}
        <motion.div
          {...reveal(0.05)}
          className="mt-12 w-full sm:mt-16 lg:mt-20"
        >
          <ContactInfo />
        </motion.div>

        {/* Social links */}
        <motion.div
          {...reveal(0.12)}
          className="mt-14 w-full sm:mt-16 lg:mt-20"
        >
          <SocialLinks />
        </motion.div>

        {/* Availability */}
        <motion.div
          {...reveal(0.18)}
          className="mt-14 w-full sm:mt-16 lg:mt-20"
        >
          <AvailabilityCard />
        </motion.div>

        {/* Closing accent */}
        <motion.div
          {...reveal(0.22)}
          aria-hidden="true"
          className="mx-auto mt-16 flex items-center justify-center gap-2 sm:mt-20"
        >
          <span className="h-1 w-10 rounded-full bg-cyan-500/80 dark:bg-cyan-400/80" />
          <span className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 dark:from-cyan-400" />
          <span className="h-1 w-10 rounded-full bg-violet-500/60 dark:bg-violet-400/60" />
        </motion.div>
      </div>
    </section>
  );
}
