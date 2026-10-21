import { motion } from "framer-motion";

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
  React: <FaReact className="text-sky-400" />,
  "React.js": <FaReact className="text-sky-400" />,

  Node: <FaNodeJs className="text-green-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,

  Express: (
    <SiExpress className="text-gray-500 dark:text-gray-300" />
  ),
  "Express.js": (
    <SiExpress className="text-gray-500 dark:text-gray-300" />
  ),

  MongoDB: (
    <SiMongodb className="text-green-500 dark:text-green-400" />
  ),
  Mongoose: <SiMongoose className="text-red-400" />,

  JavaScript: <FaJsSquare className="text-yellow-400" />,

  HTML: <FaHtml5 className="text-orange-500" />,
  HTML5: <FaHtml5 className="text-orange-500" />,

  CSS: <FaCss3Alt className="text-blue-500" />,
  CSS3: <FaCss3Alt className="text-blue-500" />,

  Tailwind: (
    <SiTailwindcss className="text-cyan-500 dark:text-cyan-400" />
  ),
  "Tailwind CSS": (
    <SiTailwindcss className="text-cyan-500 dark:text-cyan-400" />
  ),

  Git: <FaGitAlt className="text-orange-500" />,
  GitHub: <FaGithub className="text-slate-800 dark:text-white" />,

  Axios: (
    <SiAxios className="text-violet-500 dark:text-violet-400" />
  ),

  JWT: <FaKey className="text-pink-500 dark:text-pink-400" />,

  "REST API": (
    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
      API
    </span>
  ),

  Postman: <SiPostman className="text-orange-500" />,

  "VS Code": <SiVisualstudiocode className="text-blue-500" />,
};

const ExperienceBadge = ({ tech }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group flex min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] dark:border-[#2a2a2a] dark:bg-[#111111]/90 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10 dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
    >
      <span className="shrink-0 text-lg">
        {iconMap[tech] || "💻"}
      </span>

      <span className="break-words">{tech}</span>
    </motion.div>
  );
};

export default ExperienceBadge;
