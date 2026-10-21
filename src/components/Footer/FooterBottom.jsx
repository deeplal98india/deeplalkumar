import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function FooterBottom() {
  const shouldReduceMotion = useReducedMotion();

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

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
        delay: 0.4,
      }}
      className="mt-20"
    >
      {/* Divider */}
      <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Bottom Content */}
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
        {/* Left Content */}
        <div>
          <h3 className="text-center text-xl font-semibold text-slate-900 lg:text-left dark:text-white">
            Thanks for Visiting 👋
          </h3>

          <p className="mt-3 max-w-xl text-center leading-7 text-slate-600 lg:text-left dark:text-slate-400">
            Thank you for exploring my portfolio. I'm always excited to
            collaborate on modern web applications, enterprise solutions, and
            innovative digital products.
          </p>

          {/* Built With */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500 lg:justify-start dark:text-slate-500">
            <span>Built with</span>

            <Heart
              size={15}
              className="fill-red-500 text-red-500"
            />

            <span>React • Tailwind CSS • Framer Motion</span>
          </div>

          {/* Copyright */}
          <p className="mt-4 text-center text-sm text-slate-500 lg:text-left dark:text-slate-500">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Deeplal Kumar
            </span>
            . All Rights Reserved.
          </p>
        </div>

        {/* Scroll to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            group relative flex h-16 w-16 shrink-0
            items-center justify-center overflow-hidden rounded-full
            border-2 border-slate-200 bg-white
            transition-all duration-300
            hover:-translate-y-2 hover:border-cyan-500
            hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-500 focus-visible:ring-offset-2
            focus-visible:ring-offset-slate-50
            dark:border-[#272727] dark:bg-[#111111]
            dark:hover:border-cyan-400
            dark:focus-visible:ring-cyan-400
            dark:focus-visible:ring-offset-slate-950
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Icon */}
          <ArrowUp
            size={24}
            className="
              relative z-10 text-cyan-700
              transition-transform duration-300
              group-hover:-translate-y-1
              dark:text-cyan-400
            "
          />

          {/* Bottom Border */}
          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-all duration-500 group-hover:w-full dark:from-cyan-400" />
        </button>
      </div>
    </motion.div>
  );
}
