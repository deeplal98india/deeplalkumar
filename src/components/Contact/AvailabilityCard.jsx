import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Mail, Download } from "lucide-react";
import resume from "../../assets/resume/resume.pdf";

export default function AvailabilityCard() {
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
      transition={{ duration: 0.6 }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      className="group relative isolate overflow-hidden rounded-xl border-2 border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.15)] md:p-10 dark:border-[#1f1f1f] dark:bg-[#111111] dark:hover:shadow-[0_0_35px_rgba(34,211,238,.15)]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-28 -top-28 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-56 w-56 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_45%)]" />

      <div className="relative z-10 text-center">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-cyan-700/20 bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300">
          Available For Work
        </span>

        {/* Heading */}
        <h3 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          Ready to Build Your Next Project?
        </h3>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
          I'm currently available for freelance projects, remote opportunities
          and full-time roles. Let's create scalable, modern and
          high-performance web applications together.
        </p>

        {/* Highlights */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Full-Time",
            "Freelance",
            "Remote",
            "Fast Response",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 rounded-lg border border-cyan-700/20 bg-cyan-50/70 px-4 py-3 dark:border-cyan-400/20 dark:bg-cyan-500/5"
            >
              <CheckCircle2
                size={18}
                className="shrink-0 text-cyan-700 dark:text-cyan-400"
              />

              <span className="text-sm font-medium text-slate-800 dark:text-white">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=deeplalkumar1400036@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Deeplal,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-700 hover:shadow-[0_0_20px_rgba(34,211,238,.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-cyan-500 dark:text-black dark:hover:bg-cyan-400"
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-[#333333] dark:bg-[#181818] dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-all duration-700 group-hover:w-full dark:from-cyan-400" />

      {/* Shine */}
      <div className="pointer-events-none absolute -left-24 top-0 h-full w-14 -skew-x-12 bg-slate-900/5 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 dark:bg-white/10" />
    </motion.div>
  );
}
