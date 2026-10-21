
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    title: "Web & Mobile Development",
    desc: "Modern web and mobile applications using React.js, React Native, Tailwind CSS and responsive UI focused on performance and user experience.",
    icon: FaLaptopCode,
    color: "#0891B2",
  },
  {
    title: "Backend",
    desc: "Scalable REST APIs using Node.js, Express.js, JWT Authentication and Role-Based Access Control.",
    icon: FaServer,
    color: "#16A34A",
  },
  {
    title: "Database",
    desc: "MongoDB database design with optimized schemas, indexing and efficient data management.",
    icon: FaDatabase,
    color: "#059669",
  },
  {
    title: "Responsive UI",
    desc: "Pixel-perfect interfaces that work seamlessly across desktop, tablet and mobile devices with a consistent user experience.",
    icon: FaMobileAlt,
    color: "#D97706",
  },
  {
    title: "Performance",
    desc: "Fast loading, optimized and scalable web and mobile applications built with modern development best practices.",
    icon: FaRocket,
    color: "#7C3AED",
  },
  {
    title: "Clean Code",
    desc: "Maintainable, reusable and production-ready architecture following clean coding principles and industry standards.",
    icon: FaCode,
    color: "#2563EB",
  },
];

export default function AboutServices() {
  return (
    <section className="min-w-0">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center sm:mb-14"
      >
        <span className="inline-flex max-w-full rounded-full border border-cyan-700/20 bg-cyan-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[3px] text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300 sm:px-5 sm:text-xs sm:tracking-[4px]">
          Services
        </span>

        <h3 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white sm:mt-6 sm:text-4xl lg:text-5xl">
          What I Do
        </h3>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 dark:from-cyan-400 sm:w-28" />

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
          I build scalable, secure and high-performance web and mobile
          applications using modern technologies, optimized backend
          architecture and clean code practices.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-700/70 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:shadow-black/10 dark:hover:border-cyan-400/60 dark:hover:shadow-cyan-400/10 sm:rounded-2xl sm:p-6 lg:p-7"
            >
              {/* Background glow */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-20 dark:opacity-10 dark:group-hover:opacity-30"
                style={{ backgroundColor: item.color }}
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* Icon */}
                <div
                  className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}40`,
                    color: item.color,
                  }}
                >
                  <Icon size={28} aria-hidden="true" />
                </div>

                {/* Title */}
                <h4 className="break-words text-lg font-bold leading-snug text-slate-900 dark:text-white sm:text-xl">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-3 flex-1 break-words text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-4">
                  {item.desc}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-5 h-0.5 w-10 rounded-full opacity-60 transition-all duration-300 group-hover:w-16 group-hover:opacity-100"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
