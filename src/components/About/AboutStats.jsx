import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaLaptopCode,
  FaAward,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    title: "Projects",
    description: "Enterprise & Portfolio Apps",
    icon: FaProjectDiagram,
    color: "#22D3EE",
  },
  {
    title: "Months Experience",
    description: "Professional Development",
    icon: FaLaptopCode,
    color: "#8B5CF6",
  },
  {
    title: "Technologies",
    description: "Modern Tech Stack",
    icon: FaCode,
    color: "#22C55E",
  },
  {
    title: "Code Quality",
    description: "Clean & Scalable Code",
    icon: FaAward,
    color: "#FACC15",
  },
];

export default function AboutStats() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
  w-full
max-w-none
min-h-fit
  relative
  overflow-visible
  rounded-[10px]
  border
  border-white/10
  bg-gradient-to-br
  from-slate-900/90
  via-slate-900/70
  to-slate-950/90
  p-10
  backdrop-blur-3xl
  shadow-[0_25px_80px_rgba(0,0,0,.45)]
"
    >
      {/* Background Glow */}

      <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Top Badge */}
      <div className="h-2" />

      <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-5 py-2 backdrop-blur-xl">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
        </span>

        <span className="text-xs font-semibold uppercase tracking-[4px] text-cyan-300">
          ACHIEVEMENTS
        </span>
      </div>
      <div className="h-4" />

      {/* Heading */}

      <h2 className="mt-7 text-5xl font-black leading-none text-white">
        Quick
        <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">
          Overview
        </span>
      </h2>
      <div className="h-4" />

      {/* Description */}

      <p className="mt-6 text-[15px] leading-8 text-slate-400">
        Software Developer with{" "}
        <span className="font-semibold text-cyan-300">1+ Years</span> of
        professional experience building enterprise web applications using
        React.js, Node.js, Express.js and MongoDB. Passionate about clean
        architecture, scalable development and modern user experiences.
      </p>
      <div className="h-6" />

      {/* Stats Grid */}

      <div className="mt-10 grid grid-cols-2 gap-7">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -4,
              }}
              className="
group
relative
overflow-hidden
flex
min-h-[160px]
flex-col
justify-start
rounded-2xl
border
border-slate-700/50
bg-gradient-to-br
from-slate-900
via-slate-900
to-slate-950
p-6
transition-all
duration-300
hover:-translate-y-1
hover:border-cyan-400
hover:shadow-[0_15px_40px_rgba(34,211,238,.18)]
"
            >
              {/* Icon */}

              <div
                className="
mb-6
flex
h-16
w-16
items-center
justify-center
rounded-2xl
border
border-cyan-400/20
bg-cyan-400/10
text-3xl
text-cyan-400
"
                style={{
                  borderColor: item.color,
                  background: `${item.color}15`,
                }}
              >
                <Icon size={28} color={item.color} />
              </div>

              {/* Title */}

              <h4
                className="
                  mt-3
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {item.title}
              </h4>

              {/* Description */}

              <p
                className="
                  mt-2
                  text-sm
leading-7
                  text-slate-400
                "
              >
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
      <div className="h-6" />

      {/* Bottom Premium Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.35,
        }}
        className="
          mt-8
          rounded-[10px]
          border
          border-white/10
          bg-gradient-to-br
          from-cyan-500/5
          via-transparent
          to-violet-500/5
          p-8
          backdrop-blur-2xl
        "
      >
        {/* Header */}
        <div className="h-2" />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Current Focus</h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Building scalable enterprise applications using modern frontend
              and backend technologies.
            </p>
          </div>

          <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400 lg:flex">
            <FaCode />
          </div>
        </div>

        {/* Tech Pills */}
        <div className="h-2" />

        <div className="mt-7 flex flex-wrap gap-3">
          {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"].map(
            (skill) => (
              <span
                key={skill}
                className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:bg-cyan-500/20
              "
              >
                {skill}
              </span>
            ),
          )}
        </div>

        {/* Divider */}
        <div className="h-2" />

        <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400" />
            </span>

            <div>
              <p className="text-sm font-semibold text-emerald-400">
                Available for Opportunities
              </p>

              <p className="text-xs text-slate-500">
                Full Stack Developer • Software Developer
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[34px]
          border
          border-white/5
        "
      />
    </motion.aside>
  );
}
