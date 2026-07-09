import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaRocket,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend",
    desc: "Modern React applications with React.js, Tailwind CSS and responsive UI focused on performance and user experience.",
    icon: FaLaptopCode,
    color: "#22D3EE",
  },
  {
    title: "Backend",
    desc: "Scalable REST APIs using Node.js, Express.js, JWT Authentication and Role-Based Access Control.",
    icon: FaServer,
    color: "#22C55E",
  },
  {
    title: "Database",
    desc: "MongoDB database design with optimized schemas, indexing and efficient data management.",
    icon: FaDatabase,
    color: "#10B981",
  },
  {
    title: "Responsive UI",
    desc: "Pixel-perfect responsive interfaces that work seamlessly across desktop, tablet and mobile.",
    icon: FaMobileAlt,
    color: "#F59E0B",
  },
  {
    title: "Performance",
    desc: "Fast loading, optimized and scalable web applications built with modern best practices.",
    icon: FaRocket,
    color: "#8B5CF6",
  },
  {
    title: "Clean Code",
    desc: "Maintainable, reusable and production-ready architecture following industry standards.",
    icon: FaCode,
    color: "#3B82F6",
  },
];

export default function AboutServices() {
  return (
    <section className="mt-24">
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
          SERVICES
        </span>
        <div className="h-2" />

        <h3 className="mt-6 text-4xl font-bold text-white">What I Do</h3>
        <div className="h-2" />

        <p className="mt-6 text-center text-lg text-slate-400">
          I build scalable, secure and high-performance MERN Stack applications
          with modern UI, optimized backend architecture and clean code
          practices.
        </p>
      </motion.div>
      <div className="h-4" />

      {/* Cards */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-lg border-2 border-[#1f1f1f] bg-[#0b0b0b] p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              {/* Background Glow */}

              <div
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-10 transition-all duration-500 group-hover:opacity-30"
                style={{
                  background: item.color,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}

                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg border transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}40`,
                    color: item.color,
                  }}
                >
                  <Icon size={30} />
                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
