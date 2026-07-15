import { motion } from "framer-motion";
import { ArrowRight, Download, Eye } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "../../assets/resume/resume.pdf";
import useVisitorCount from "../../hooks/useVisitorCount";

const HeroContent = () => {
  const visitorCount = useVisitorCount();
  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/deeplal98india",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/deeplal-kumar-b47548229/?skipRedirect=true",
    },
    {
      icon: FaEnvelope,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=deeplalkumar1400036@gmail.com",
    },
  ];

  const stats = [
    {
      value: "6+",
      label: "Projects",
    },
    {
      value: "1+",
      label: "Years Experience",
    },
    {
      value: "100%",
      label: "Dedication",
    },
    {
      value: visitorCount || 0,
      label: "Visitors",
      icon: Eye,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
  flex
  w-full
  flex-col
  items-center
  text-center
  lg:items-start
  lg:text-left
"
    >
<motion.div
  initial={{ opacity: 0, y: -15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15 }}
  className="mb-8 inline-flex items-center rounded-full border border-emerald-400/20 bg-white/[0.05] px-5 py-2.5 backdrop-blur-xl shadow-[0_8px_25px_rgba(16,185,129,.12)]"
>
  {/* Online Indicator */}
  <span className="relative flex h-3.5 w-3.5 flex-shrink-0">
    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
    <span className="relative h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(74,222,128,.95)]" />
  </span>

  {/* Text */}
  <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-sm font-semibold tracking-wide text-transparent">
    Open to Full-Time Opportunities
  </span>
</motion.div>

      {/* Greeting */}

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-2 text-xl font-semibold tracking-wide text-cyan-400"
      >
        Hello, I'm
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="text-5xl font-black leading-tight text-white sm:text-6xl xl:text-7xl"
      >
        Deeplal Kumar
      </motion.h1>

      {/* Role */}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-5 text-3xl font-semibold text-slate-300"
      >
        Full Stack Developer
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-7 max-w-[1000px] text-lg leading-9 text-slate-400"
      >
        Passionate Full Stack Developer specializing in architecting and
        developing modern, scalable, secure, and high-performance web
        applications using
        <span className="font-medium text-slate-300">
          {" "}
          React.js, Tailwind CSS, Node.js, Express.js,
        </span>{" "}
        and <span className="font-medium text-slate-300">MongoDB.</span> I build
        responsive, accessible, and intuitive user interfaces backed by robust
        backend systems, secure RESTful APIs, and efficient database
        architectures. With a strong emphasis on
        <span className="font-medium text-slate-300">
          {" "}
          clean architecture, maintainable code, performance optimization,
        </span>{" "}
        and industry best practices, I deliver production-ready solutions that
        are reliable, scalable, and designed to provide seamless user
        experiences across all devices. I am committed to continuously learning
        emerging technologies and transforming complex business requirements
        into elegant, user-centric digital products that create real-world
        impact.
      </motion.p>

      {/* Space between Buttons & Stats */}
      <div className="h-6" />

      {/* ================= Stats ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-14 grid w-full max-w-2xl grid-cols-2 gap-5 sm:grid-cols-4"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
group
relative
overflow-hidden
rounded-2xl
border
border-slate-700/50
bg-gradient-to-br
from-slate-900
via-slate-900
to-slate-950
px-5
py-6
text-center
transition-all
duration-300
hover:-translate-y-1
hover:border-cyan-400
hover:shadow-[0_15px_40px_rgba(34,211,238,.18)]
"
          >
            {/* Value */}

            <div className="flex items-center justify-center gap-2">
              {item.icon && <item.icon size={22} className="text-cyan-400" />}

              <h3 className="text-3xl font-extrabold text-white">
                {item.value}
              </h3>
            </div>

            {/* Label */}

            <p className="mt-3 text-sm font-medium tracking-wide text-slate-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <div className="h-6" />

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
      >
        {/* ================= View Projects ================= */}

        <a
          href="#projects"
          className="
            group
            relative
            inline-flex
            items-center
            overflow-hidden
            rounded-[10px]
            bg-gradient-to-r
            from-cyan-500
            via-sky-500
            to-cyan-600
            px-7
            py-6
            font-semibold
            text-white
            shadow-[0_15px_40px_rgba(6,182,212,.35)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:scale-[1]
            hover:shadow-[0_25px_55px_rgba(6,182,212,.55)]
          "
        >
          {/* Shine */}
          <span className="absolute -left-32 top-0 h-full w-20 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[130%]" />

          <span className="relative z-20 flex items-center gap-4">
            View Projects
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-white/20
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:rotate-6
                group-hover:scale-110
                group-hover:bg-white/30
                group-hover:shadow-[0_0_25px_rgba(255,255,255,.35)]
              "
            >
              <ArrowRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-0.5"
              />
            </span>
          </span>
        </a>

        {/* ================= Download Resume ================= */}

        <a
          href={resume}
          download
          className="
            group
            relative
            inline-flex
            items-center
            overflow-hidden
            rounded-[10px]
            border
            border-white/10
            bg-white/[0.05]
            px-7
            py-6
            font-semibold
            text-white
            backdrop-blur-2xl
            shadow-[0_10px_30px_rgba(0,0,0,.25)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:scale-[1]
            hover:border-cyan-400/50
            hover:shadow-[0_20px_45px_rgba(34,211,238,.20)]
          "
        >
          {/* Shine */}
          <span className="absolute -left-32 top-0 h-full w-20 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[130%]" />

          <span className="relative z-20 flex items-center gap-4">
            Download Resume
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:border-cyan-400/60
                group-hover:bg-cyan-500/20
                group-hover:shadow-[0_0_25px_rgba(34,211,238,.35)]
              "
            >
              <Download
                size={18}
                className="transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
              />
            </span>
          </span>
        </a>
      </motion.div>

      <div className="h-6" />

      {/* ================= Premium Social ================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex items-center justify-center gap-5 lg:justify-start"
      >
        {socialLinks.map(({ icon: Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -8,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 18,
            }}
            className="
        group
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        overflow-hidden
        rounded-3xl
      "
          >
            {/* Animated Border */}

            <div
              className="
          absolute
          inset-0
          rounded-3xl
          bg-[conic-gradient(from_0deg,#06b6d4,transparent,#22d3ee,transparent,#06b6d4)]
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:animate-spin
        "
            />

            {/* Glass Card */}

            <div
              className="
          absolute
          inset-[2px]
          rounded-[22px]
          border
          border-white/10
          bg-[#09111f]/95
          backdrop-blur-2xl
          transition-all
          duration-500
          group-hover:border-cyan-400/50
          group-hover:shadow-[0_0_35px_rgba(34,211,238,.30)]
        "
            />

            {/* Glow */}

            <div
              className="
          absolute
          h-16
          w-16
          rounded-full
          bg-cyan-400/20
          blur-2xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
            />

            {/* Shine */}

            <div
              className="
          absolute
          -left-16
          top-0
          h-full
          w-10
          rotate-12
          bg-white/20
          blur-lg
          opacity-0
          transition-all
          duration-700
          group-hover:left-[140%]
          group-hover:opacity-100
        "
            />

            {/* Icon */}

            <Icon
              className="
          relative
          z-20
          text-[26px]
          text-slate-300
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:text-cyan-400
        "
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
