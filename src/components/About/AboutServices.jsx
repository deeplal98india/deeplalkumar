import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import { FiArrowUpRight, FiX, FiCheckCircle } from "react-icons/fi";

const services = [
  {
    title: "Web & Mobile Development",
    desc: "Modern web and mobile applications using React.js, React Native, and Tailwind CSS, with a focus on performance and user experience.",
    icon: FaLaptopCode,
    color: "#0891B2",
    number: "01",
    footer: "FRONTEND & MOBILE",
    details:
      "Building responsive web interfaces and mobile applications with reusable components, intuitive navigation and consistent user experiences.",
    technologies: ["React.js", "React Native", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Responsive web interfaces",
      "Reusable UI components",
      "Mobile-friendly layouts",
      "API integration",
    ],
  },
  {
    title: "Backend Development",
    desc: "Scalable REST APIs using Node.js, Express.js, JWT authentication, and role-based access control.",
    icon: FaServer,
    color: "#16A34A",
    number: "02",
    footer: "API DEVELOPMENT",
    details:
      "Developing backend services and REST APIs with structured controllers, service layers, authentication and authorization.",
    technologies: ["Node.js", "Express.js", "REST APIs", "JWT", "Joi"],
    highlights: [
      "REST API development",
      "JWT authentication",
      "Role-based access control",
      "Input validation and error handling",
    ],
  },
  {
    title: "Database Design",
    desc: "MongoDB data modeling with thoughtful schema design, indexing, and efficient data management.",
    icon: FaDatabase,
    color: "#059669",
    number: "03",
    footer: "DATA MODELING",
    details:
      "Organizing application data with maintainable schemas, appropriate relationships and reliable database operations.",
    technologies: ["MongoDB", "MongoDB Atlas", "Mongoose"],
    highlights: [
      "Schema and model design",
      "Data validation",
      "CRUD operations",
      "Query efficiency considerations",
    ],
  },
  {
    title: "Responsive UI",
    desc: "Pixel-conscious interfaces that adapt to desktop, tablet, and mobile while maintaining a consistent user experience.",
    icon: FaMobileAlt,
    color: "#D97706",
    number: "04",
    footer: "RESPONSIVE DESIGN",
    details:
      "Creating consistent interfaces across screen sizes with flexible layouts, clear typography and accessible interactions.",
    technologies: ["React.js", "Tailwind CSS", "CSS", "Framer Motion"],
    highlights: [
      "Mobile-first layouts",
      "Reusable components",
      "Consistent spacing and typography",
      "Accessible interaction states",
    ],
  },
  {
    title: "Performance Optimization",
    desc: "Efficient, fast-loading applications built with modern development practices and maintainable code.",
    icon: FaRocket,
    color: "#7C3AED",
    number: "05",
    footer: "PERFORMANCE",
    details:
      "Improving application responsiveness through efficient rendering, sensible asset handling and maintainable frontend architecture.",
    technologies: ["Vite", "React.js", "JavaScript", "Web Performance"],
    highlights: [
      "Production build checks",
      "Image and asset optimization",
      "Efficient component rendering",
      "Reduced unnecessary work",
    ],
  },
  {
    title: "Clean Code & Architecture",
    desc: "Reusable components and maintainable application architecture designed for clarity, reliability, and future growth.",
    icon: FaCode,
    color: "#2563EB",
    number: "06",
    footer: "SOFTWARE ARCHITECTURE",
    details:
      "Structuring applications into focused modules so that business logic, API handling and presentation remain easier to maintain.",
    technologies: ["JavaScript", "React.js", "Node.js", "Express.js"],
    highlights: [
      "Reusable components",
      "Controller-service separation",
      "Modular code organization",
      "Maintainable application structure",
    ],
  },
];

export default function AboutServices() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedService, setSelectedService] = useState(null);

  // Lock background scrolling while the modal is open. Restore it on close.
  useEffect(() => {
    if (!selectedService) return undefined;

    const body = document.body;
    const html = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  const modal = (
    <AnimatePresence>
      {selectedService && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden overscroll-none bg-slate-950/75 p-3 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedService(null);
          }}
          onTouchMove={(event) => {
            if (event.target === event.currentTarget) event.preventDefault();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            className="relative my-auto max-h-[calc(100vh-1.5rem)] max-h-[calc(100dvh-1.5rem)] w-full max-w-xl overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_80px_-20px_rgba(0,0,0,0.45)] dark:border-slate-700 dark:bg-slate-900 sm:max-h-[calc(100vh-3rem)] sm:max-h-[calc(100dvh-3rem)]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 h-1 w-full" style={{ backgroundColor: selectedService.color }} />
            <div className="p-5 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                  style={{
                    color: selectedService.color,
                    borderColor: `${selectedService.color}35`,
                    backgroundColor: `${selectedService.color}12`,
                  }}
                >
                  {(() => {
                    const SelectedIcon = selectedService.icon;
                    return <SelectedIcon size={27} aria-hidden="true" />;
                  })()}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  aria-label="Close service details"
                  className="rounded-xl border border-slate-200 p-2 text-slate-500 transition-colors hover:border-cyan-500/40 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:text-slate-400 dark:hover:text-cyan-300"
                >
                  <FiX size={20} />
                </button>
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                Service {selectedService.number}
              </p>
              <h3
                id="service-modal-title"
                className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-3xl"
              >
                {selectedService.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {selectedService.details}
              </p>

              <div className="mt-7">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">What I focus on</h4>
                <ul className="mt-3 space-y-3">
                  {selectedService.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <FiCheckCircle className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Technologies</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedService.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
              >
                Close Details <FiX size={16} aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section aria-labelledby="services-heading" className="relative min-w-0">
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
          Services {" "}
          <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
            &amp; Expertise
          </span>
        </h3>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 dark:from-cyan-400 sm:w-24" />
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
          From intuitive interfaces to dependable backend systems, I focus on building practical digital products with thoughtful design and maintainable code.
        </p>
      </motion.div>

      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : (index % 3) * 0.07, ease: "easeOut" }}
              whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm shadow-slate-900/[0.025] transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-900/[0.05] dark:border-slate-700/70 dark:bg-slate-900/65 dark:hover:border-cyan-400/40 dark:hover:shadow-cyan-500/[0.05] sm:p-6 lg:p-7"
            >
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.06] blur-3xl transition-opacity duration-300 group-hover:opacity-20 dark:opacity-[0.08] dark:group-hover:opacity-20" style={{ backgroundColor: item.color }} />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px opacity-40 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />

              <div className="relative z-10 flex items-start justify-between gap-3">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl"
                  style={{ color: item.color, borderColor: `${item.color}35`, backgroundColor: `${item.color}12` }}
                >
                  <Icon size={25} aria-hidden="true" />
                </div>
                <span className="pt-1 text-xs font-semibold tabular-nums tracking-wider text-slate-400 dark:text-slate-500">{item.number}</span>
              </div>

              <h4 className="relative z-10 mt-6 text-lg font-bold leading-snug tracking-tight text-slate-900 dark:text-white sm:text-xl">{item.title}</h4>
              <p className="relative z-10 mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.desc}</p>

              <button
                type="button"
                onClick={() => setSelectedService(item)}
                aria-label={`View details for ${item.title}`}
                className="relative z-10 mt-6 flex w-full items-center justify-between gap-3 border-t border-slate-200/80 pt-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-4 dark:border-slate-800 dark:focus-visible:ring-offset-slate-900"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 transition-colors group-hover:text-cyan-700 dark:text-slate-400 dark:group-hover:text-cyan-300">{item.footer}</span>
                <FiArrowUpRight size={18} aria-hidden="true" className="shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-700 dark:group-hover:text-cyan-300" />
              </button>

              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ backgroundColor: item.color }} />
            </motion.article>
          );
        })}
      </div>

      {/* Portal keeps the modal above other sections and outside parent stacking contexts. */}
      {typeof document !== "undefined" && createPortal(modal, document.body)}
    </section>
  );
}
