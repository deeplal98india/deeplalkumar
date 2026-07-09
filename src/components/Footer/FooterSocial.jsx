import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "./footerData";

export default function FooterSocial() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              x: 50,
            }
      }
      whileInView={
        shouldReduceMotion
          ? {}
          : {
              opacity: 1,
              x: 0,
            }
      }
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.3,
      }}
    >
      {/* Heading */}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white">Connect With Me</h3>

        <p className="mt-2 text-sm text-slate-400">
          Let's build something amazing together.
        </p>
      </div>

      {/* Social Cards */}

      <div className="space-y-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      x: 6,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 0.98,
                    }
              }
              className="
                group
                relative
                overflow-hidden
                rounded-lg
                border-2
                border-[#1f1f1f]
                bg-[#111111]
                p-5
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-cyan-500/10
                hover:shadow-[0_0_25px_rgba(34,211,238,.15)]
              "
            >
              {/* Glow */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Spotlight */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_50%)] opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-cyan-400/20
                      bg-cyan-500/10
                      text-cyan-400
                    "
                  >
                    <Icon size={24} />
                  </div>

                  {/* Text */}

                  <div>
                    <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {social.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      {social.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow */}

                <ArrowUpRight
                  size={20}
                  className="
                    text-cyan-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </div>

              {/* Bottom Border */}

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 transition-all duration-500 group-hover:w-full" />

              {/* Shine */}

              <div className="absolute -left-24 top-0 h-full w-12 -skew-x-12 bg-white/10 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
            </motion.a>
          );
        })}
      </div>

      {/* Accent */}

      <div className="mt-8 h-[3px] w-36 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500" />
    </motion.div>
  );
}
