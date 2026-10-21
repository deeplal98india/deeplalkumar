import { motion, useReducedMotion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaKey,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiAxios,
  SiMongoose,
  SiVisualstudiocode,
} from "react-icons/si";

const iconMap = {
  React: { Icon: FaReact, color: "text-sky-500 dark:text-sky-400" },
  "React.js": { Icon: FaReact, color: "text-sky-500 dark:text-sky-400" },

  Node: { Icon: FaNodeJs, color: "text-green-600 dark:text-green-400" },
  "Node.js": { Icon: FaNodeJs, color: "text-green-600 dark:text-green-400" },

  Express: { Icon: SiExpress, color: "text-slate-600 dark:text-slate-300" },
  "Express.js": { Icon: SiExpress, color: "text-slate-600 dark:text-slate-300" },

  MongoDB: { Icon: SiMongodb, color: "text-green-600 dark:text-green-400" },
  Mongoose: { Icon: SiMongoose, color: "text-red-500 dark:text-red-400" },

  JavaScript: { Icon: FaJsSquare, color: "text-yellow-500 dark:text-yellow-400" },

  HTML: { Icon: FaHtml5, color: "text-orange-600 dark:text-orange-400" },
  HTML5: { Icon: FaHtml5, color: "text-orange-600 dark:text-orange-400" },

  CSS: { Icon: FaCss3Alt, color: "text-blue-600 dark:text-blue-400" },
  CSS3: { Icon: FaCss3Alt, color: "text-blue-600 dark:text-blue-400" },

  Tailwind: { Icon: SiTailwindcss, color: "text-cyan-600 dark:text-cyan-400" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "text-cyan-600 dark:text-cyan-400" },

  Git: { Icon: FaGitAlt, color: "text-orange-600 dark:text-orange-400" },
  GitHub: { Icon: FaGithub, color: "text-slate-800 dark:text-white" },

  Axios: { Icon: SiAxios, color: "text-violet-600 dark:text-violet-400" },
  JWT: { Icon: FaKey, color: "text-pink-600 dark:text-pink-400" },

  Postman: { Icon: SiPostman, color: "text-orange-600 dark:text-orange-400" },
  "VS Code": { Icon: SiVisualstudiocode, color: "text-blue-600 dark:text-blue-400" },
};

const ExperienceBadge = ({ tech }) => {
  const shouldReduceMotion = useReducedMotion();
  const technology = iconMap[tech];
  const Icon = technology?.Icon;
  const iconColor = technology?.color;

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: "easeOut",
      }}
      className="group inline-flex min-w-0 max-w-full items-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 px-3 py-2 shadow-sm transition-[border-color,background-color,box-shadow] duration-200 hover:border-cyan-500/40 hover:bg-cyan-50/80 hover:shadow-[0_4px_16px_rgba(8,145,178,0.10)] motion-reduce:transform-none motion-reduce:transition-none dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-400/30 dark:hover:bg-cyan-400/[0.06] dark:hover:shadow-[0_4px_16px_rgba(34,211,238,0.10)]"
    >
      {/* Technology icon */}
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        {Icon ? (
          <Icon
            aria-hidden="true"
            className={`text-lg ${iconColor}`}
          />
        ) : (
          <span aria-hidden="true" className="text-base">
            💻
          </span>
        )}
      </span>

      {/* Technology name */}
      <span className="min-w-0 break-words text-xs font-semibold leading-5 text-slate-700 transition-colors group-hover:text-cyan-800 dark:text-slate-200 dark:group-hover:text-cyan-300 sm:text-sm">
        {tech}
      </span>
    </motion.div>
  );
};

export default ExperienceBadge;
