
import { motion, useReducedMotion } from "framer-motion";
import {
  FiSend,
  FiCode,
  FiLayers,
  FiDatabase,
  FiSmartphone,
  FiArrowUpRight,
} from "react-icons/fi";

const features = [
  {
    icon: FiCode,
    title: "Full Stack Development",
    description:
      "Building scalable frontend and backend applications with modern JavaScript technologies.",
  },
  {
    icon: FiSmartphone,
    title: "Web & Mobile Development",
    description:
      "Creating responsive web interfaces and intuitive mobile experiences with React and React Native.",
  },
  {
    icon: FiDatabase,
    title: "REST APIs & Databases",
    description:
      "Developing maintainable REST APIs and data-driven applications using Node.js, Express, and MongoDB.",
  },
  {
    icon: FiLayers,
    title: "Scalable Architecture",
    description:
      "Structuring clean, reusable, and maintainable application code with a focus on reliability.",
  },
];

export default function AboutContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full min-w-0">
      {/* Intro label */}
      <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-cyan-700/20 bg-cyan-50/80 px-3.5 py-2 dark:border-cyan-400/20 dark:bg-cyan-400/[0.06] sm:px-4">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500/50 motion-reduce:animate-none" />
          <span className="relative h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
        </span>

        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-800 dark:text-cyan-300 sm:text-xs">
          Who I Am
        </span>
      </div>

      {/* Heading */}
      <h3 className="mt-6 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 dark:text-white sm:mt-7 sm:text-4xl xl:text-[2.65rem]">
        Full-stack development,
        <span className="mt-1 block bg-gradient-to-r from-cyan-700 via-sky-600 to-violet-600 bg-clip-text pb-1 text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
          built with purpose.
        </span>
      </h3>

      {/* Biography */}
      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-7 sm:text-base sm:leading-8">
        <p>
          I'm{" "}
          <span className="font-bold text-slate-900 dark:text-white">
            Deeplal Kumar
          </span>
          , an{" "}
          <span className="font-semibold text-cyan-800 dark:text-cyan-400">
            MCA graduate
          </span>{" "}
          and full-stack developer focused on building modern web
          applications and mobile experiences. I work with{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-100">
            React.js, React Native, Tailwind CSS, Node.js, Express.js,
            and MongoDB.
          </span>
        </p>

        <p>
          I enjoy turning ideas into polished user interfaces,
          dependable APIs, and maintainable applications. My approach
          emphasizes clean code, thoughtful architecture, responsive
          design, and a consistent user experience across devices.
        </p>
      </div>

      {/* Feature cards */}
      <div className="mt-9 grid min-w-0 grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-4">
        {features.map(({ icon: Icon, title, description }, index) => (
          <motion.article
            key={title}
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 16 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : index * 0.08,
              ease: "easeOut",
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -4, transition: { duration: 0.2 } }
            }
            className="group relative flex min-h-[190px] min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/80 p-5 shadow-sm shadow-slate-900/[0.025] transition-[border-color,box-shadow,background-color] duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/[0.06] dark:border-slate-700/80 dark:bg-slate-950/40 dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-500/[0.06] sm:p-5 lg:p-6"
          >
            {/* Decorative accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/[0.07] blur-2xl transition-colors duration-300 group-hover:bg-cyan-500/[0.13] dark:bg-cyan-400/[0.05] dark:group-hover:bg-cyan-400/[0.1]"
            />

            {/* Icon */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-700/15 bg-cyan-50 text-cyan-800 transition-colors duration-300 group-hover:border-cyan-600 group-hover:bg-cyan-600 group-hover:text-white dark:border-cyan-400/15 dark:bg-cyan-400/[0.08] dark:text-cyan-300 dark:group-hover:border-cyan-400 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 sm:h-12 sm:w-12">
                <Icon size={21} aria-hidden="true" />
              </div>

              <span className="text-xs font-semibold tabular-nums text-slate-400/80 dark:text-slate-500">
                0{index + 1}
              </span>
            </div>

            {/* Text */}
            <h4 className="relative z-10 mt-5 text-base font-bold leading-snug text-slate-900 dark:text-white sm:text-lg">
              {title}
            </h4>

            <p className="relative z-10 mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {description}
            </p>

            {/* Bottom accent */}
            <div
              aria-hidden="true"
              className="mt-auto h-px w-10 bg-gradient-to-r from-cyan-600 to-blue-600 pt-0 opacity-60 transition-all duration-300 group-hover:w-16 group-hover:opacity-100 dark:from-cyan-400 dark:to-blue-400"
            />
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-9 border-t border-slate-200/80 pt-7 dark:border-slate-800 sm:mt-10 sm:pt-8">
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
          Have an idea in mind? Let's build something meaningful
          together.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <motion.a
            href="#contact"
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -2, transition: { duration: 0.2 } }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-cyan-900/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-700/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:from-cyan-500 dark:via-sky-500 dark:to-blue-500 dark:text-slate-950 dark:focus-visible:ring-offset-slate-950 sm:px-6"
          >
            <FiSend size={17} aria-hidden="true" />
            Let's Talk
            <FiArrowUpRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          <span className="text-xs text-slate-500 dark:text-slate-500 sm:text-sm">
            Open to meaningful collaborations
          </span>
        </div>
      </div>
    </div>
  );
}
