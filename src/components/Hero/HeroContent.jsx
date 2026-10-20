import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import resume from "../../assets/resume/resume.pdf";

const socialLinks = [
  { label: "GitHub", icon: FaGithub, link: "https://github.com/deeplal98india" },
  { label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/deeplal-kumar-b47548229/" },
  { label: "Email", icon: FaEnvelope, link: "https://mail.google.com/mail/?view=cm&fs=1&to=deeplalkumar1400036@gmail.com" },
];

const highlights = [
  { value: "6+", label: "Projects" },
  { value: "MERN", label: "Full-stack" },
  { value: "Web + Mobile", label: "Development" },
];

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-sm font-medium text-emerald-300">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Available for freelance projects
      </div>

      <p className="mb-2 text-base font-semibold text-cyan-400">Hello, I&apos;m</p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
        Deeplal Kumar
      </h1>
      <h2 className="mt-4 max-w-2xl text-xl font-semibold leading-snug text-slate-200 sm:text-2xl">
        Full-Stack Web &amp; React Native Developer
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
        I build responsive web applications, REST APIs, and mobile experiences using React.js, Node.js, Express.js, MongoDB, and React Native. I focus on clean interfaces, maintainable code, and practical solutions.
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          View projects <ArrowRight size={17} />
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-white/5"
        >
          Resume <Download size={16} />
        </a>
      </div>

      <div className="mt-7 flex items-center gap-3">
        {socialLinks.map(({ label, icon: Icon, link }) => (
          <a
            key={label}
            href={link}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
            aria-label={label}
            title={label === "Email" ? "Send me an email" : label}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
          >
            <Icon size={17} />
          </a>
        ))}
      </div>

      <div className="mt-9 grid w-full max-w-xl grid-cols-3 gap-3 border-t border-slate-800 pt-6">
        {highlights.map((item) => (
          <div key={item.label} className="text-center lg:text-left">
            <p className="text-lg font-semibold text-white sm:text-xl">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
