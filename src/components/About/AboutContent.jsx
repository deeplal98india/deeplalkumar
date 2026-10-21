
import { motion } from "framer-motion";
import {
  FiSend,
  FiCode,
  FiLayers,
  FiDatabase,
  FiSmartphone,
} from "react-icons/fi";

const features = [
  {
    icon: <FiCode />,
    title: "Full Stack Development",
    desc: "Building scalable frontend and backend applications using modern technologies.",
  },
  {
    icon: <FiSmartphone />,
    title: "Web & Mobile Development",
    desc: "Creating beautiful, fast and responsive web and mobile experiences using React.js and React Native.",
  },
  {
    icon: <FiDatabase />,
    title: "REST API & Database",
    desc: "Developing secure REST APIs with Node.js, Express.js and MongoDB.",
  },
  {
    icon: <FiLayers />,
    title: "Scalable Architecture",
    desc: "Writing clean, maintainable and production-ready application architecture for web and mobile platforms.",
  },
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="w-full min-w-0 xl:pr-8"
    >
      {/* Badge */}
      <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-700/20 bg-cyan-50 px-4 py-2 backdrop-blur-xl dark:border-cyan-400/20 dark:bg-cyan-500/5 sm:px-5">
        <div className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-cyan-600 dark:bg-cyan-400" />

        <span className="text-xs font-semibold uppercase tracking-[3px] text-cyan-800 dark:text-cyan-300 sm:text-sm sm:tracking-[4px]">
          Who I Am
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:mt-8 sm:text-4xl lg:text-5xl">
        Crafting Modern
        <span className="mt-2 block bg-gradient-to-r from-cyan-700 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-500">
          Digital Experiences
        </span>
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-[720px] text-base leading-8 text-slate-600 dark:text-slate-300 sm:mt-8 sm:text-lg sm:leading-9">
        I'm{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          Deeplal Kumar
        </span>
        , an{" "}
        <span className="font-semibold text-cyan-800 dark:text-cyan-400">
          MCA Graduate
        </span>{" "}
        and passionate{" "}
        <span className="font-semibold text-cyan-800 dark:text-cyan-400">
          Full Stack Developer
        </span>{" "}
        specializing in building scalable web and mobile applications with{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          React.js, React Native, Tailwind CSS, Node.js, Express.js
        </span>{" "}
        and{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          MongoDB.
        </span>{" "}
        I enjoy developing premium user interfaces, secure REST APIs, optimized
        backend systems and production-ready applications following clean
        architecture, performance optimization, accessibility and modern
        development standards.
      </p>

      {/* Feature cards */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:gap-6">
        {features.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            whileHover={{ y: -5 }}
            className="group relative flex min-h-[190px] min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-black/10 dark:hover:border-cyan-400 dark:hover:shadow-cyan-400/10 sm:p-6"
          >
            {/* Subtle decorative glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl transition-opacity duration-300 group-hover:bg-cyan-500/10 dark:bg-cyan-400/5 dark:group-hover:bg-cyan-400/10" />

            {/* Icon */}
            <div className="relative z-10 mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-700/20 bg-cyan-50 text-xl text-cyan-800 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 break-words text-lg font-bold leading-snug text-slate-900 dark:text-white sm:text-xl">
              {item.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 mt-3 break-words text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-base">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA section */}
      <div className="mt-10 sm:mt-12 lg:mt-16">
        <p className="mb-5 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
          Ready to build something amazing together?
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.03,
              y: -3,
              boxShadow: "0 16px 35px rgba(8,145,178,0.22)",
            }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex max-w-full items-center justify-center gap-3 rounded-full border border-cyan-600/20 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-cyan-900/10 transition-all duration-300 hover:border-cyan-500 sm:px-8 sm:py-4 sm:text-lg dark:from-cyan-500 dark:via-sky-500 dark:to-blue-500"
          >
            <FiSend
              size={20}
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
            Let's Talk
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
