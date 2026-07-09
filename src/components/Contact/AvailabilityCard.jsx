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
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -4,
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
        p-8
        md:p-10
        transition-all
        duration-500
        hover:border-cyan-400
        hover:shadow-[0_0_35px_rgba(34,211,238,.15)]
      "
    >
      {/* Glow */}

      <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Spotlight */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_45%)]" />

      <div className="relative z-10 text-center">
        {/* Badge */}

        <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
          Available For Work
        </span>
        <div className="h-2" />

        {/* Heading */}

        <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
          Ready to Build Your Next Project?
        </h3>
        <div className="h-2" />

        {/* Description */}

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          I'm currently available for freelance projects, remote opportunities
          and full-time roles. Let's create scalable, modern and
          high-performance web applications together.
        </p>
        <div className="h-2" />

        {/* Highlights */}

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Full-Time", "Freelance", "Remote", "Fast Response"].map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-cyan-400/20
                bg-cyan-500/5
                px-4
                py-3
              "
            >
              <CheckCircle2 size={18} className="text-cyan-400" />

              <span className="text-sm font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
        <div className="h-4" />

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=deeplalkumar1400036@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Deeplal,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-cyan-500
              px-7
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-400
              hover:shadow-[0_0_20px_rgba(34,211,238,.35)]
            "
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href={resume}
            download
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border-2
              border-[#1f1f1f]
              bg-[#181818]
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500/10
            "
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Bottom Border */}

      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 transition-all duration-700 group-hover:w-full" />

      {/* Shine */}

      <div className="absolute -left-24 top-0 h-full w-14 -skew-x-12 bg-white/10 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
    </motion.div>
  );
}
