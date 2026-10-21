import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "./contactData";

export default function SocialLinks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="social-links-heading" className="w-full">
      {/* Section heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500 dark:to-cyan-400" />

          <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
            Let's Connect
          </span>

          <span className="h-px w-8 bg-gradient-to-l from-transparent to-violet-500 dark:to-violet-400" />
        </div>

        <h3
          id="social-links-heading"
          className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl"
        >
          Connect With Me
        </h3>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
          Find me on social platforms, explore my work, and let's build
          something amazing together.
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 dark:from-cyan-400"
        />
      </div>

      {/* Social cards */}
      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.id ?? social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.title} profile (opens in a new tab)`}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 22 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion
                  ? 0
                  : Math.min(index * 0.08, 0.24),
                ease: "easeOut",
              }}
              whileHover={
                shouldReduceMotion ? undefined : { y: -4 }
              }
              className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm transition-[border-color,box-shadow,background-color] duration-300 hover:border-cyan-500/40 hover:shadow-[0_14px_35px_rgba(8,145,178,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transform-none motion-reduce:transition-none dark:border-white/10 dark:bg-[#111318] dark:hover:border-cyan-400/30 dark:focus-visible:ring-offset-slate-950 sm:p-6 md:p-7"
            >
              {/* Background glow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 -z-10 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl transition-colors duration-300 group-hover:bg-cyan-400/[0.16] dark:bg-cyan-400/[0.07] dark:group-hover:bg-cyan-400/[0.12]"
              />

              {/* Spotlight */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.04),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.06),transparent_55%)]"
              />

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-700/15 bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-400/[0.08] dark:text-cyan-300 dark:group-hover:bg-cyan-400/[0.14] sm:h-16 sm:w-16">
                {Icon && (
                  <Icon size={27} aria-hidden="true" />
                )}
              </div>

              {/* Content */}
              <div className="mt-6 flex flex-1 flex-col">
                <h4 className="break-words text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300 sm:text-xl">
                  {social.title}
                </h4>

                <p className="mt-2 flex-1 break-words text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {social.subtitle}
                </p>

                {/* Link label */}
                <div className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                  <span>Visit Profile</span>

                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  />
                </div>
              </div>

              {/* Bottom gradient */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none dark:from-cyan-400"
              />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
