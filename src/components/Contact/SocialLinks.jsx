import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "./contactData";

export default function SocialLinks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section>
      {/* Heading */}
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
          Connect With Me
        </h3>

        <div className="h-2" />

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Let's connect and build something amazing together.
        </p>
      </div>

      <div className="h-4" />

      {/* Social Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.id ?? social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.title} profile`}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      scale: 1.01,
                    }
              }
              className="group relative overflow-hidden rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.15)] dark:border-[#1f1f1f] dark:bg-[#111111] dark:hover:border-cyan-400 dark:hover:shadow-[0_0_30px_rgba(34,211,238,.15)]"
            >
              <div className="relative">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-700/20 bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300 dark:group-hover:bg-cyan-500/15">
                  {Icon && <Icon size={28} />}
                </div>

                {/* Title */}
                <h4 className="mt-6 text-xl font-semibold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                  {social.title}
                </h4>

                {/* Subtitle */}
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {social.subtitle}
                </p>

                {/* Link Label */}
                <div className="mt-6 inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400">
                  <span className="text-sm font-medium">
                    Visit Profile
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-all duration-500 group-hover:w-full dark:from-cyan-400" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
