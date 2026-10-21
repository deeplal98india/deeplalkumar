
import { motion, useReducedMotion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    title: "Web & Mobile Development",
    desc: "Modern web and mobile applications using React.js, React Native, and Tailwind CSS, with a focus on performance and user experience.",
    icon: FaLaptopCode,
    color: "#0891B2",
    number: "01",
  },
  {
    title: "Backend Development",
    desc: "Scalable REST APIs using Node.js, Express.js, JWT authentication, and role-based access control.",
    icon: FaServer,
    color: "#16A34A",
    number: "02",
  },
  {
    title: "Database Design",
    desc: "MongoDB data modeling with thoughtful schema design, indexing, and efficient data management.",
    icon: FaDatabase,
    color: "#059669",
    number: "03",
  },
  {
    title: "Responsive UI",
    desc: "Pixel-conscious interfaces that adapt to desktop, tablet, and mobile while maintaining a consistent user experience.",
    icon: FaMobileAlt,
    color: "#D97706",
    number: "04",
  },
  {
    title: "Performance Optimization",
    desc: "Efficient, fast-loading applications built with modern development practices and maintainable code.",
    icon: FaRocket,
    color: "#7C3AED",
    number: "05",
  },
  {
    title: "Clean Code & Architecture",
    desc: "Reusable components and maintainable application architecture designed for clarity, reliability, and future growth.",
    icon: FaCode,
    color: "#2563EB",
    number: "06",
  },
];

export default function AboutServices() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="services-heading"
      className="relative min-w-0"
    >
      {/* Section heading */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        className="relative mb-10 text-center sm:mb-14 lg:mb-16"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/[0.05] dark:text-cyan-300 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
          What I Offer
        </span>

        <h3
          id="services-heading"
          className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
        >
          Services &{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
            Expertise
          </span>
        </h3>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 dark:from-cyan-400 sm:w-24" />

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
          From intuitive interfaces to dependable backend systems,
          I focus on building practical digital products with
          thoughtful design and maintainable code.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 18 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : (index % 3) * 0.07,
                ease: "easeOut",
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -4, transition: { duration: 0.2 } }
              }
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-900/[0.025] transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/[0.05] dark:border-slate-700/70 dark:bg-slate-900/65 dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-500/[0.05] sm:p-6 lg:p-7"
            >
              {/* Brand color glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.06] blur-3xl transition-opacity duration-300 group-hover:opacity-20 dark:opacity-[0.08] dark:group-hover:opacity-20"
                style={{ backgroundColor: item.color }}
              />

              {/* Top border accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                }}
              />

              {/* Card header */}
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl"
                  style={{
                    color: item.color,
                    borderColor: `${item.color}35`,
                    backgroundColor: `${item.color}12`,
                  }}
                >
                  <Icon size={25} aria-hidden="true" />
                </div>

                <span className="pt-1 text-xs font-semibold tabular-nums tracking-wider text-slate-400 dark:text-slate-500">
                  {item.number}
                </span>
              </div>

              {/* Card content */}
              <h4 className="relative z-10 mt-6 text-lg font-bold leading-snug tracking-tight text-slate-900 dark:text-white sm:text-xl">
                {item.title}
              </h4>

              <p className="relative z-10 mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>

              {/* Footer accent */}
              <div className="relative z-10 mt-6 flex items-center justify-between border-t border-slate-200/80 pt-4 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  My expertise
                </span>

                <FiArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-700 dark:group-hover:text-cyan-300"
                />
              </div>

              {/* Bottom accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: item.color }}
              />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
