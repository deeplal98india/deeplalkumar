import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  CheckCircle2,
  Building2,
  CalendarDays,
  ArrowRight,
  BookOpen,
  Code2,
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
      "Specialized in Full Stack Development, Database Management Systems, Data Structures, Software Engineering and modern web technologies with practical implementation.",
    highlights: [
      "Full Stack Development",
      "Database Management System",
      "Data Structures & Algorithms",
      "Software Engineering",
    ],
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Git",
      "REST APIs",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    stream: "Computer Applications",
    institute: "Mahatma Gandhi Kashi Vidyapeeth University, Varanasi",
    year: "2021",
    color: "#D97706",
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

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-600/20 bg-cyan-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[2px] text-cyan-800 dark:border-cyan-400/20 dark:text-cyan-300 sm:px-4 sm:tracking-[3px]">
      <span className="h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
      {children}
    </span>
  );
}

export default function AboutTimeline() {
  const reduceMotion = useReducedMotion();

  const reveal = (direction = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20, x: direction },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      ease: "easeOut",
    },
  });

  return (
    <section
      aria-labelledby="education-heading"
      className="relative isolate w-full min-w-0 overflow-hidden bg-slate-50 py-16 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-500/[0.08] blur-[100px] sm:h-[420px] sm:w-[420px]" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-violet-500/[0.08] blur-[100px] sm:h-[420px] sm:w-[420px]" />
      </div>

      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          {...reveal()}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <SectionLabel>Education</SectionLabel>

          <h2
            id="education-heading"
            className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Academic{" "}
            <span className="bg-gradient-to-r from-cyan-700 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
              Background
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            My academic journey has provided a strong foundation in software
            engineering, full-stack development, database management and modern
            web technologies.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 sm:w-28" />
        </motion.div>

        {/* Main layout */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">
          {/* Left column */}
          <motion.div
            {...reveal(-18)}
            className="min-w-0 lg:sticky lg:top-28"
          >
            <SectionLabel>
              <GraduationCap size={16} aria-hidden="true" />
              My Education
            </SectionLabel>

            <h3 className="mt-6 text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-4xl">
              Learning Today.
              <span className="mt-1 block text-cyan-700 dark:text-cyan-400">
                Building Tomorrow.
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
              I focus on strengthening my technical fundamentals and applying
              them to practical development challenges. Every project is an
              opportunity to improve my problem-solving and engineering skills.
            </p>

            {/* Learning areas */}
            <div className="mt-7 space-y-4 sm:mt-9">
              {learningAreas.map((item, index) => (
                <motion.div
                  key={item}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                  className="flex min-w-0 items-center gap-3 sm:gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-600/10 bg-cyan-100 dark:border-cyan-400/10 dark:bg-cyan-400/10 sm:h-10 sm:w-10">
                    <CheckCircle2
                      size={19}
                      className="text-cyan-700 dark:text-cyan-400"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="min-w-0 text-sm font-medium text-slate-700 dark:text-slate-300 sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Continuous learning */}
            <div className="relative mt-9 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/60 sm:mt-12 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl"
              />

              <div className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <BookOpen size={21} aria-hidden="true" />
                </span>

                <h4 className="mt-4 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  Continuous Learning
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  I believe consistent learning, hands-on practice and
                  thoughtful problem-solving are essential to building
                  reliable, user-focused software.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-500/40 hover:text-cyan-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-cyan-300 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <motion.a
              href="#projects"
              whileHover={reduceMotion ? undefined : { x: 4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-xl border border-cyan-600/20 bg-cyan-50 px-5 py-3 text-sm font-semibold text-cyan-900 transition-colors hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200 dark:hover:bg-cyan-400/20 dark:focus-visible:ring-offset-slate-950 sm:mt-7 sm:text-base"
            >
              Explore My Projects
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Right column: Education cards */}
          <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
            {education.map((item, index) => (
              <motion.article
                key={item.id}
                {...reveal(index % 2 === 0 ? 16 : 0)}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-lg shadow-slate-900/[0.04] transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-900/[0.06] dark:border-white/10 dark:bg-slate-900/75 dark:shadow-black/20 dark:hover:border-cyan-400/30 sm:p-7 lg:p-8"
              >
                {/* Card accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, transparent 90%)`,
                  }}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  style={{ backgroundColor: item.color }}
                />

                {/* Card header */}
                <div className="relative flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border sm:h-14 sm:w-14 sm:rounded-2xl"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}14`,
                        borderColor: `${item.color}35`,
                      }}
                    >
                      <GraduationCap size={26} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span
                        className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                        style={{
                          color: item.color,
                          backgroundColor: `${item.color}14`,
                        }}
                      >
                        {item.short} · {item.stream}
                      </span>

                      <h3 className="mt-3 break-words text-lg font-bold leading-snug text-slate-900 dark:text-white sm:text-xl lg:text-2xl">
                        {item.degree}
                      </h3>
                    </div>
                  </div>

                  <span
                    className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold"
                    style={{
                      color: item.color,
                      backgroundColor: `${item.color}14`,
                    }}
                  >
                    <CalendarDays size={15} aria-hidden="true" />
                    {item.year}
                  </span>
                </div>

                {/* Institution */}
                <div className="relative mt-5 flex min-w-0 items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03] sm:mt-6">
                  <Building2
                    size={18}
                    className="mt-0.5 shrink-0 text-slate-500 dark:text-slate-400"
                    aria-hidden="true"
                  />
                  <p className="min-w-0 break-words text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-base">
                    {item.institute}
                  </p>
                </div>

                {/* Description */}
                <p className="relative mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-[15px] sm:leading-8">
                  {item.description}
                </p>

                <div className="my-5 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10 sm:my-6" />

                {/* Highlights and skills */}
                <div className="grid min-w-0 grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2">
                  <div className="min-w-0">
                    <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                      <CheckCircle2
                        size={17}
                        className="text-cyan-700 dark:text-cyan-400"
                        aria-hidden="true"
                      />
                      Academic Highlights
                    </h4>

                    <ul className="space-y-3">
                      {item.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex min-w-0 items-start gap-2.5"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="min-w-0 break-words text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="min-w-0">
                    <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                      <Code2
                        size={17}
                        className="text-cyan-700 dark:text-cyan-400"
                        aria-hidden="true"
                      />
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="max-w-full break-words rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-500/40 hover:text-cyan-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300 sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5 dark:border-white/10">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[2px] text-slate-500 dark:text-slate-500">
                      Qualification
                    </p>
                    <p className="mt-1.5 text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                      {item.short}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] font-semibold uppercase tracking-[2px] text-slate-500 dark:text-slate-500">
                      Completed
                    </p>
                    <p className="mt-1.5 text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                      {item.year}
                    </p>
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
