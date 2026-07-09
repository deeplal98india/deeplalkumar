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
    >
      {/* Heading */}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white">Quick Links</h3>

        <p className="mt-2 text-sm text-slate-400">
          Navigate through my portfolio.
        </p>
      </div>

      {/* Links */}

      <div className="space-y-4">
        {quickLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="
              group
              flex
              items-center
              justify-between
              rounded-lg
              border-2
              border-[#1f1f1f]
              bg-[#111111]
              px-5
              py-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400
              hover:bg-cyan-500/10
              hover:shadow-[0_0_20px_rgba(34,211,238,.15)]
            "
          >
            <span
              className="
                font-medium
                text-slate-300
                transition-colors
                duration-300
                group-hover:text-cyan-300
              "
            >
              {link.title}
            </span>

            <ChevronRight
              size={18}
              className="
                text-cyan-400
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        ))}
      </div>

      {/* Bottom Accent */}

      <div className="mt-8 h-[3px] w-36 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500" />
    </motion.div>
  );
}
