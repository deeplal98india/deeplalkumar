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

const learningAreas = [
  "Full Stack Development",
  "Software Engineering",
  "Database Management",
  "Problem Solving",
  "Modern Web Technologies",
];

const technologies = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "React Native",
  "REST APIs",
  "Git & GitHub",
];

export default function AboutTimeline() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background glows are clipped to avoid horizontal overflow on phones. */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] sm:-left-40 sm:h-[450px] sm:w-[450px] sm:blur-[180px]" />
        <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px] sm:-right-40 sm:h-[450px] sm:w-[450px] sm:blur-[180px]" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px] sm:h-[650px] sm:w-[650px] sm:blur-[220px]" />
      </div>

      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <span className="font-semibold uppercase tracking-[3px] text-cyan-400 sm:tracking-[6px] lg:tracking-[8px]">
            EDUCATION
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Academic Background
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
            My academic journey has provided a solid foundation in software
            engineering, full-stack development, database management and modern
            web technologies that continue to shape my professional growth.
          </p>
        </motion.div>

        {/* Main layout: single column on mobile, two columns on large screens */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:sticky lg:top-28"
          >
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 sm:gap-3 sm:px-5">
              <GraduationCap size={18} className="shrink-0 text-cyan-400" />
              <span className="text-xs font-semibold tracking-[2px] text-cyan-300 sm:text-sm sm:tracking-[3px]">
                MY EDUCATION
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-bold leading-tight text-white sm:mt-8 sm:text-4xl">
              Learning Never Stops.
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
              Throughout my academic journey, I focused on building strong
              technical fundamentals while continuously improving my practical
              development skills through real-world projects and applications.
            </p>

            <div className="mt-7 space-y-4 sm:mt-10 sm:space-y-5">
              {learningAreas.map((item) => (
                <div key={item} className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 sm:h-10 sm:w-10">
                    <CheckCircle2 size={20} className="text-cyan-400" />
                  </div>
                  <span className="min-w-0 break-words text-base text-gray-300 sm:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Continuous learning banner */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 sm:mt-14 lg:mt-16"
            >
              <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900/90 to-violet-500/10 px-5 py-8 backdrop-blur-3xl sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
                <div className="pointer-events-none absolute -right-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

                <div className="relative text-center">
                  <span className="inline-flex max-w-full rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-semibold tracking-[2px] text-cyan-300 sm:px-5 sm:text-sm sm:tracking-[3px]">
                    CONTINUOUS LEARNING
                  </span>
                  <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:mt-6 sm:text-3xl lg:text-4xl">
                    Always Learning.
                    <br />
                    Always Building.
                  </h3>
                  <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
                    I believe great software is built through continuous
                    learning, consistency and real-world experience. Every
                    project strengthens my technical knowledge and helps me
                    deliver scalable, user-focused applications.
                  </p>

                  <div className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 sm:px-4 sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="#projects"
              whileHover={{ x: 4 }}
              className="mt-7 inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-400/20 sm:mt-8 sm:px-7 sm:py-4 sm:text-base"
            >
              Keep Learning
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Education cards */}
          <div className="flex w-full min-w-0 flex-col gap-5 sm:gap-6">
            {education.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-800/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,.28)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-400/30 sm:p-7 lg:p-8 xl:p-10"
              >
                {/* Card glow and accent */}
                <div
                  className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-30 sm:h-52 sm:w-52 sm:blur-[120px]"
                  style={{ background: item.color }}
                />
                <div
                  className="absolute left-0 top-0 h-[3px] w-full"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  }}
                />

                {/* Card header */}
                <div className="relative flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                  <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                      style={{ background: `${item.color}18` }}
                    >
                      <GraduationCap size={32} color={item.color} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="inline-flex rounded-full bg-white/5 px-3 py-1.5 text-xs text-cyan-300 sm:px-4 sm:py-2 sm:text-sm">
                        {item.short}
                      </span>
                      <h3 className="mt-3 break-words text-xl font-bold leading-snug text-white sm:mt-4 sm:text-2xl lg:text-3xl">
                        {item.degree}
                      </h3>
                      <p
                        className="mt-2 break-words text-base font-medium sm:text-lg"
                        style={{ color: item.color }}
                      >
                        {item.stream}
                      </p>
                    </div>
                  </div>

                  <div
                    className="inline-flex w-fit shrink-0 items-center rounded-xl px-4 py-2 text-sm font-semibold sm:px-5 sm:py-3"
                    style={{
                      background: `${item.color}18`,
                      color: item.color,
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* University */}
                <div className="mt-6 flex min-w-0 items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:mt-8 sm:items-center sm:px-5">
                  <Building2 size={18} className="mt-1 shrink-0 text-gray-400 sm:mt-0" />
                  <span className="min-w-0 break-words text-sm leading-6 text-gray-300 sm:text-base">
                    {item.institute}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 break-words text-sm leading-7 text-gray-300 sm:mt-7 sm:text-[15px] sm:leading-8">
                  {item.description}
                </p>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-8" />

                {/* Highlights and technologies */}
                <div className="grid min-w-0 grid-cols-1 gap-7 sm:gap-8 lg:grid-cols-2">
                  <div className="min-w-0">
                    <h4 className="mb-4 text-base font-semibold text-white sm:mb-5 sm:text-lg">
                      Academic Highlights
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {item.highlights.map((point) => (
                        <div key={point} className="flex min-w-0 items-start gap-3">
                          <CheckCircle2
                            size={18}
                            color={item.color}
                            className="mt-0.5 shrink-0"
                          />
                          <span className="min-w-0 break-words text-sm leading-6 text-gray-300 sm:text-base">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h4 className="mb-4 text-base font-semibold text-white sm:mb-5 sm:text-lg">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="max-w-full break-words rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-300 sm:px-4 sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-7 border-t border-white/10 pt-5 sm:mt-10 sm:pt-7">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[2px] text-gray-500 sm:text-xs sm:tracking-[3px]">
                        Degree
                      </p>
                      <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                        {item.short}
                      </p>
                    </div>
                    <div className="min-w-0 text-right">
                      <p className="text-[10px] uppercase tracking-[2px] text-gray-500 sm:text-xs sm:tracking-[3px]">
                        Completed
                      </p>
                      <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
