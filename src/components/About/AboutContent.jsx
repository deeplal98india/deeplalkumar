import { motion } from "framer-motion";
import { FiSend, FiCode, FiLayers, FiDatabase, FiShield } from "react-icons/fi";

const features = [
  {
    icon: <FiCode />,
    title: "Full Stack Development",
    desc: "Building scalable frontend and backend applications using modern technologies.",
  },
  {
    icon: <FiLayers />,
    title: "Responsive UI Design",
    desc: "Creating beautiful, fast and fully responsive user experiences.",
  },
  {
    icon: <FiDatabase />,
    title: "REST API & Database",
    desc: "Developing secure REST APIs with MongoDB and Express.js.",
  },
  {
    icon: <FiShield />,
    title: "Scalable Architecture",
    desc: "Writing clean, maintainable and production-ready application architecture.",
  },
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
w-full
max-w-none
xl:pr-8
"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-5 py-2 backdrop-blur-xl">
        <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />

        <span className="text-sm font-semibold uppercase tracking-[4px] text-cyan-300">
          WHO I AM
        </span>
      </div>

      {/* Heading */}

      <h2 className="mt-8 text-5xl lg:text-5xl font-black leading-[1.05] tracking-tight text-white">
        Crafting Modern
        <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">
          Digital Experiences
        </span>
      </h2>

      {/* Description */}

      <p className="mt-10 max-w-[720px] text-[18px] leading-10 text-slate-300">
        I'm <span className="font-semibold text-white">Deeplal Kumar</span>, an{" "}
        <span className="font-semibold text-cyan-400">MCA Graduate</span> and
        passionate{" "}
        <span className="font-semibold text-cyan-400">
          Full Stack Developer
        </span>{" "}
        specializing in building scalable web applications with
        <span className="font-semibold text-white">
          {" "}
          React.js, Tailwind CSS, Node.js,
        </span>
        <span className="font-semibold text-white"> Express.js</span>
        and
        <span className="font-semibold text-white"> MongoDB.</span>I enjoy
        developing premium user interfaces, secure REST APIs, optimized backend
        systems and production-ready applications following clean architecture,
        performance optimization, accessibility and modern development
        standards.
      </p>
      <div className="h-6" />

      {/* Feature Cards */}

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {features.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -6,
            }}
            className="
group
relative
overflow-visible
flex
min-h-[190px]
flex-col
justify-start
rounded-2xl
border-2
border-[#1f1f1f]
bg-slate-900/80
backdrop-blur-xl
p-6
transition-all
duration-300
hover:-translate-y-0.5
hover:border-cyan-400
hover:shadow-[0_0_25px_rgba(34,211,238,.35)]
"
          >
            {/* Icon */}

            <div
              className="
mb-5
flex
h-14
w-14
items-center
justify-center
rounded-2xl
border
border-cyan-400/20
bg-cyan-400/10
text-2xl
text-cyan-400
transition-colors
duration-300
group-hover:bg-cyan-400
group-hover:text-white
"
            >
              {item.icon}
            </div>

            {/* Title */}

            <h3 className="text-2xl font-bold text-white">{item.title}</h3>

            {/* Description */}

            <p className="mt-4 text-base leading-8 text-slate-400">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="h-6" />

      {/* CTA Section */}

      <div className="mt-16">
        <p className="mb-5 text-sm text-slate-400">
          Ready to build something amazing together?
        </p>

        <div className="h-4" />
        <div className="flex flex-wrap items-center gap-6">
          {/* CTA Button */}

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(34,211,238,.25)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-400/20
          bg-gradient-to-r
          from-cyan-500
          via-sky-500
          to-blue-500
          px-9
          py-5
          text-lg
          font-semibold
          text-white
          transition-all
          duration-500
          hover:border-cyan-300
          "
          >
            <FiSend
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
            Let's Talk
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
