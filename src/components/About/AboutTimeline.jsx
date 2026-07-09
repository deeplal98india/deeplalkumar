import { motion } from "framer-motion";
import {
  GraduationCap,
  CheckCircle2,
  Building2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    short: "MCA",
    stream: "Computer Science",
    institute: "Chaudhary Charan Singh University, Meerut",
    year: "2025",
    cgpa: "",
    color: "#8B5CF6",

    description:
      "Specialized in Full Stack Development, Database Management Systems, Data Structures, Software Engineering and modern web technologies with strong practical implementation.",

    highlights: [
      "Full Stack Development",
      "Database Management System",
      "Data Structures & Algorithms",
      "Software Engineering",
    ],

    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Git", "REST API"],
  },

  {
    id: 2,

    degree: "Bachelor of Computer Applications",

    short: "BCA",

    stream: "Computer Applications",

    institute: "Mahatma Gandhi Kashi Vidyapeeth University, Varanasi",

    year: "2021",

    color: "#F59E0B",

    description:
      "Built a strong foundation in programming, web development, object-oriented programming, databases and computer science fundamentals.",

    highlights: [
      "Programming",
      "Web Development",
      "Database Concepts",
      "Computer Fundamentals",
    ],

    skills: ["HTML", "CSS", "JavaScript", "SQL", "C", "OOP"],
  },
];

export default function AboutTimeline() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[220px]" />
      </div>

      <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <span className="font-semibold uppercase tracking-[8px] text-cyan-400">
            EDUCATION
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white md:text-6xl">
            Academic Background
          </h2>
          <div className="h-6" />

          <p className="mt-6 w-full text-center text-lg leading-8 text-gray-400">
            My academic journey has provided a solid foundation in software
            engineering, full-stack development, database management and modern
            web technologies that continue to shape my professional growth.
          </p>
          <div className="h-6" />
        </motion.div>

        {/* Main Layout */}

        <div className="grid items-start gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="sticky top-28"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
              <div className="h-2" />

              <GraduationCap size={18} className="text-cyan-400" />
              <span className="text-sm font-semibold tracking-[3px] text-cyan-300">
                MY EDUCATION
              </span>
              <div className="h-6" />
            </div>
            <div className="h-2" />

            <h3 className="mt-8 text-4xl font-bold leading-tight text-white">
              Learning Never Stops.
            </h3>
            <div className="h-4" />

            <p className="mt-6 text-lg leading-9 text-gray-400">
              Throughout my academic journey, I focused on building strong
              technical fundamentals while continuously improving my practical
              development skills through real-world projects and enterprise
              applications.
            </p>
            <div className="h-4" />

            <div className="mt-10 space-y-5">
              {[
                "Full Stack Development",
                "Software Engineering",
                "Database Management",
                "Problem Solving",
                "Modern Web Technologies",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                    <CheckCircle2 size={20} className="text-cyan-400" />
                  </div>

                  <span className="text-lg text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="h-4" />
            {/* Bottom Banner */}

            <motion.div
              whileHover={{
                scale: 1.01,
                y: -3,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-24 flex justify-center"
            >
              <div
                className="relative w-full max-w-5xl overflow-hidden rounded-[15px]
border border-white/10
bg-gradient-to-r
from-cyan-500/10
via-slate-900/90
to-violet-500/10
px-10
py-12
md:px-16
md:py-14
backdrop-blur-3xl"
              >
                {/* Glow */}

                <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

                <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

                <div className="relative text-center">
                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-[3px] text-cyan-300">
                    CONTINUOUS LEARNING
                  </span>

                  <h3 className="mt-6 text-4xl font-bold text-white">
                    Always Learning.
                    <br />
                    Always Building.
                  </h3>

                  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                    I believe great software is built through continuous
                    learning, consistency and real-world experience. Every
                    project strengthens my technical knowledge and helps me
                    deliver scalable, user-focused applications.
                  </p>

                  {/* Tech Stack */}

                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {[
                      "React.js",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "Tailwind CSS",
                      "JavaScript",
                      "REST APIs",
                      "Git & GitHub",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-2xl
                    border border-white/10
                    bg-white/5
                    px-5
                    py-2.5
                    text-sm
                    text-gray-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/10
                    hover:text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="h-4" />

            <motion.button
              whileHover={{
                x: 5,
              }}
              className="mt-12 flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-7 py-4 text-white transition-all hover:bg-cyan-400/20"
            >
              Keep Learning
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* ================= RIGHT CARDS ================= */}

          <div className="ml-auto flex w-full max-w-[760px] flex-col gap-6">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className="group relative overflow-hidden rounded-[10px]
    border border-white/10
    bg-gradient-to-br
    from-slate-900/95
    via-slate-900/80
    to-slate-800/70
    p-20
    shadow-[0_25px_80px_rgba(0,0,0,.45)]
    backdrop-blur-2xl
    transition-all duration-500
    hover:border-cyan-400/30
    hover:shadow-[0_25px_90px_rgba(34,211,238,.15)]"
              >
                {/* Glow */}

                <div
                  className="absolute right-0 top-0 h-52 w-52 rounded-full opacity-0 blur-[120px] transition-all duration-700 group-hover:opacity-30"
                  style={{
                    background: item.color,
                  }}
                />

                {/* Accent Line */}

                <div
                  className="absolute left-0 top-0 h-[3px] w-full"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  }}
                />

                {/* Header */}
                <div className="h-2" />

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-6">
                    <div
                      className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] border border-white/10"
                      style={{
                        background: `${item.color}18`,
                      }}
                    >
                      <GraduationCap size={42} color={item.color} />
                    </div>

                    <div>
                      <div className="inline-flex rounded-full bg-white/5 px-4 py-2 text-sm text-cyan-300">
                        {item.short}
                      </div>

                      <h3 className="mt-4 text-3xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <p
                        className="mt-2 text-lg font-medium"
                        style={{
                          color: item.color,
                        }}
                      >
                        {item.stream}
                      </p>
                    </div>
                  </div>

                  <div
                    className="rounded-2xl px-5 py-3 text-sm font-semibold"
                    style={{
                      background: `${item.color}18`,
                      color: item.color,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />

                      {item.year}
                    </div>
                  </div>
                </div>
                <div className="h-1" />

                {/* University */}

                <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
                  <Building2 size={18} className="text-gray-400" />

                  <span className="text-gray-300">{item.institute}</span>
                </div>

                {/* Description */}

                <p className="mt-8 text-[15px] leading-8 tracking-wide text-gray-300">
                  {item.description}
                </p>

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Content */}

                <div className="grid gap-10 lg:grid-cols-2">
                  {/* Highlights */}

                  <div>
                    <h4 className="mb-5 text-lg font-semibold text-white">
                      Academic Highlights
                    </h4>

                    <div className="space-y-4">
                      {item.highlights.map((point) => (
                        <div key={point} className="flex items-center gap-3">
                          <CheckCircle2 size={18} color={item.color} />

                          <span className="text-gray-300">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}

                  <div>
                    <h4 className="mb-5 text-lg font-semibold text-white">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}

                <div className="mt-10 border-t border-white/10 pt-7">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[3px] text-gray-500">
                        Degree
                      </p>

                      <p className="mt-2 text-lg font-semibold text-white">
                        {item.short}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[3px] text-gray-500">
                        Completed
                      </p>

                      <p className="mt-2 text-lg font-semibold text-white">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-6" />
      </div>
    </section>
  );
}
