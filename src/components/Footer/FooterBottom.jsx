import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function FooterBottom() {
  const shouldReduceMotion = useReducedMotion();

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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

      {/* Bottom */}

      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
        {/* Left */}

        <div>
          <h3 className="text-center text-xl font-semibold text-white lg:text-left">
            Thanks for Visiting 👋
          </h3>

          <p className="mt-3 max-w-xl text-center leading-7 text-slate-400 lg:text-left">
            Thank you for exploring my portfolio. I'm always excited to
            collaborate on modern web applications, enterprise solutions, and
            innovative digital products.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500 lg:justify-start">
            <span>Built with</span>

            <Heart size={15} className="fill-red-500 text-red-500" />

            <span>React • Tailwind CSS • Framer Motion</span>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            © {currentYear}{" "}
            <span className="font-semibold text-white">Deeplal Kumar</span>. All
            Rights Reserved.
          </p>
        </div>

        {/* Scroll */}

        <button
          onClick={scrollToTop}
          className="
            group
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-2
            border-[#1f1f1f]
            bg-[#111111]
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
          "
        >
          {/* Glow */}

          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

          <ArrowUp
            size={24}
            className="
              relative
              z-10
              text-cyan-400
              transition-transform
              duration-300
              group-hover:-translate-y-1
            "
          />

          {/* Bottom Border */}

          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 transition-all duration-500 group-hover:w-full" />
        </button>
      </div>
    </motion.div>
  );
}
