import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Mail, Download, ArrowUpRight } from "lucide-react";
import resume from "../../assets/resume/resume.pdf";

const opportunities = [
  "Full-Time",
  "Freelance",
  "Remote",
  "Fast Response",
];

export default function AvailabilityCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      className="group relative isolate overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/40 hover:shadow-[0_16px_50px_rgba(8,145,178,0.10)] dark:border-white/10 dark:bg-[#101318] dark:hover:border-cyan-400/30 dark:hover:shadow-[0_16px_50px_rgba(34,211,238,0.08)] sm:p-8 md:p-10 lg:p-12"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 h-64 w-64 rounded-full bg-cyan-400/[0.10] blur-[100px] transition-opacity duration-500 group-hover:opacity-150 dark:bg-cyan-400/[0.12]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-56 w-56 rounded-full bg-violet-500/[0.08] blur-[100px] dark:bg-violet-500/[0.10]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.05),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.07),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Availability badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/[0.08] dark:text-emerald-300 sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              {!shouldReduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50 motion-reduce:animate-none" />
              )}
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for Opportunities
          </span>
        </div>

        {/* Heading */}
        <h3 className="mx-auto mt-6 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Ready to Build Your{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-300 dark:to-violet-400">
            Next Project?
          </span>
        </h3>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8 md:text-lg">
          I'm available for freelance projects, remote opportunities, and
          full-time roles. Let's create scalable, modern, and
          high-performance web applications together.
        </p>

        {/* Opportunity highlights */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {opportunities.map((item, index) => (
            <motion.div
              key={item}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                delay: shouldReduceMotion ? 0 : index * 0.06,
              }}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50/80 px-2 py-3 transition-colors duration-200 hover:border-cyan-500/30 hover:bg-cyan-50/70 dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:border-cyan-400/20 dark:hover:bg-cyan-400/[0.05] sm:px-3"
            >
              <CheckCircle2
                size={17}
                aria-hidden="true"
                className="shrink-0 text-cyan-700 dark:text-cyan-400"
              />

              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 sm:text-sm">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=deeplalkumar1400036@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Deeplal,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transform-none motion-reduce:transition-none dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 dark:focus-visible:ring-offset-[#101318] sm:min-w-44 sm:px-7 sm:text-base"
          >
            <Mail size={18} aria-hidden="true" />
            Email Me
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href={resume}
            download
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transform-none motion-reduce:transition-none dark:border-white/15 dark:bg-white/[0.03] dark:text-white dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/[0.06] dark:focus-visible:ring-offset-[#101318] sm:min-w-44 sm:px-7 sm:text-base"
          >
            <Download size={18} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <p className="mt-5 text-xs text-slate-500 dark:text-slate-500 sm:text-sm">
          Have an idea in mind? Let's discuss it.
        </p>
      </div>

      {/* Bottom gradient accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none dark:from-cyan-400"
      />
    </motion.div>
  );
}
