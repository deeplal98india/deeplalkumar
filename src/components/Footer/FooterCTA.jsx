import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import resume from "../../assets/resume/resume.pdf";

export default function FooterCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 60,
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
      transition={{ duration: 0.7 }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border-2
        border-[#1f1f1f]
        bg-[#111111]
        px-8
        py-10
        text-center
      "
    >
      {/* Glow */}

      <div className="absolute -left-28 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Spotlight */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_55%)]" />

      {/* Badge */}

      <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
        <Sparkles size={16} />
        Available For New Opportunities
      </div>

      {/* Heading */}

      <h2 className="relative z-10 mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
        Let's Build Your Next
        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          {" "}
          Digital Product
        </span>
      </h2>

      {/* Description */}

      <p className="relative z-10 mx-auto mt-4 max-w-3xl text-lg leading-7 text-slate-400">
        I build modern React applications, scalable Node.js backends, enterprise
        dashboards and production-ready full-stack web applications with clean
        architecture and premium user experience.
      </p>

      {/* Buttons */}

      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-5">
        <a
          href="#contact"
          className="
            group/button
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-cyan-500
            px-8
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-cyan-400
            hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
          "
        >
          Hire Me
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />
        </a>

        <a
          href={resume}
          download
          className="
            group/button
            inline-flex
            items-center
            gap-2
            rounded-lg
            border-2
            border-[#1f1f1f]
            bg-[#181818]
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400
            hover:bg-cyan-500/10
            hover:text-cyan-300
          "
        >
          Download Resume
          <Download
            size={18}
            className="transition-transform duration-300 group-hover/button:-translate-y-1"
          />
        </a>
      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />

      {/* Shine */}

      <div className="absolute -left-28 top-0 h-full w-16 -skew-x-12 bg-white/10 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
    </motion.section>
  );
}
