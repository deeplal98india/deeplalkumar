import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const highlights = [
  {
    title: "React.js",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    title: "Node.js",
    icon: FaNodeJs,
    color: "#68A063",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    color: "#13AA52",
  },
  {
    title: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },
  {
    title: "Git",
    icon: FaGitAlt,
    color: "#F1502F",
  },
];

export default function AboutHighlights() {
  return (
    <section className="relative overflow-visible py-28">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24 text-center"
      >
        <p className="font-semibold uppercase tracking-[8px] text-cyan-400">
          TECHNOLOGIES
        </p>
        <div className="h-1" />

        <h2 className="mt-3 text-5xl font-extrabold text-white">Tech Stack</h2>
        <div className="h-6" />
      </motion.div>

      {/* Tech Cards */}

      <div className="overflow-visible py-4">
        <Marquee
          speed={35}
          direction="right"
          pauseOnHover
          gradient={false}
          autoFill
        >
          {highlights.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div key={index} className="px-5">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="
      group
      relative
      flex
      h-[220px]
      w-[200px]
      flex-col
      items-center
      justify-center
      overflow-hidden
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
                  {/* Glow */}
                  <div
                    className="absolute inset-0 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20"
                    style={{ background: tech.color }}
                  />

                  {/* Icon */}
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl border"
                    style={{
                      borderColor: `${tech.color}40`,
                      background: `${tech.color}20`,
                    }}
                  >
                    <Icon size={34} color={tech.color} />
                  </div>

                  {/* Text */}
                  <div className="relative mt-8 text-center">
                    <h3 className="text-xl font-bold text-white">
                      {tech.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Professional
                      <br />
                      Development
                    </p>
                  </div>

                  {/* Bottom Border */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ background: tech.color }}
                  />
                </motion.div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
