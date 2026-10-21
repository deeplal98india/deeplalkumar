
import { motion, useReducedMotion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutHighlights from "./AboutHighlights";
import AboutStats from "./AboutStats";
import AboutTimeline from "./AboutTimeline";
import TechStack from "./TechStack/TechStack";
import AboutServices from "./AboutServices";
import SoftSkills from "./SoftSkills/SoftSkills";

const sectionTransition = {
  duration: 0.65,
  ease: "easeOut",
};

function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 22 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        ...sectionTransition,
        duration: shouldReduceMotion ? 0 : sectionTransition.duration,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate scroll-mt-20 overflow-hidden bg-slate-50 py-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-24 lg:py-28"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,116,139,0.12)_1px,transparent_0)] [background-size:28px_28px] opacity-35 dark:opacity-15" />

        {/* Cyan glow */}
        <div className="absolute -left-40 top-32 h-72 w-72 rounded-full bg-cyan-500/[0.09] blur-3xl sm:h-96 sm:w-96 dark:bg-cyan-400/[0.07]" />

        {/* Violet glow */}
        <div className="absolute -right-40 top-[35%] h-80 w-80 rounded-full bg-violet-500/[0.08] blur-3xl sm:h-[26rem] sm:w-[26rem] dark:bg-violet-500/[0.05]" />

        {/* Bottom glow */}
        <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-sky-500/[0.06] blur-3xl dark:bg-sky-500/[0.04]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section heading */}
        <Reveal className="mb-12 sm:mb-16 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/[0.06] dark:text-cyan-300 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
              Get to know me
            </span>

            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
                Me
              </span>
            </h2>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 sm:w-24" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
              A little about my journey, the way I work, and the
              technologies I use to turn ideas into useful digital
              experiences.
            </p>
          </div>
        </Reveal>

        {/* About and stats */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-10 xl:gap-14">
          <Reveal className="min-w-0">
            <div className="relative h-full rounded-3xl border border-slate-200/80 bg-white/75 p-5 shadow-sm shadow-slate-900/[0.025] backdrop-blur-xl dark:border-slate-800/90 dark:bg-slate-900/45 sm:p-7 lg:p-8">
              <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-gradient-to-b from-cyan-500 to-blue-600" />
              <AboutContent />
            </div>
          </Reveal>

          <Reveal className="min-w-0" delay={0.08}>
            <div className="rounded-3xl border border-slate-200/80 bg-white/75 p-5 shadow-sm shadow-slate-900/[0.025] backdrop-blur-xl dark:border-slate-800/90 dark:bg-slate-900/45 sm:p-7 lg:sticky lg:top-24 lg:p-8">
              <AboutStats />
            </div>
          </Reveal>
        </div>

        {/* Highlights */}
        <Reveal className="mt-16 min-w-0 sm:mt-20 lg:mt-24">
          <AboutHighlights />
        </Reveal>

        {/* Experience timeline */}
        <Reveal className="mt-20 min-w-0 sm:mt-24 lg:mt-28">
          <AboutTimeline />
        </Reveal>

        {/* Technology stack */}
        <div id="skills" className="mt-20 min-w-0 scroll-mt-24 sm:mt-24 lg:mt-28">
          <Reveal>
            <TechStack />
          </Reveal>
        </div>

        {/* Soft skills */}
        <Reveal className="mt-20 min-w-0 sm:mt-24 lg:mt-28">
          <SoftSkills />
        </Reveal>

        {/* Services */}
        <Reveal className="mt-20 min-w-0 sm:mt-24 lg:mt-28">
          <AboutServices />
        </Reveal>
      </div>

      {/* Bottom separator */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent dark:via-slate-700/70"
      />
    </section>
  );
}
