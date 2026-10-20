import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiAxios,
  SiJsonwebtokens,
  SiMongoose,
  SiVisualstudiocode,
} from "react-icons/si";

const iconMap = {
  React: <FaReact className="text-sky-400" />,
  "React.js": <FaReact className="text-sky-400" />,

  Node: <FaNodeJs className="text-green-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,

  Express: <SiExpress className="text-gray-300" />,
  "Express.js": <SiExpress className="text-gray-300" />,

  MongoDB: <SiMongodb className="text-green-400" />,
  Mongoose: <SiMongoose className="text-red-400" />,

  JavaScript: <FaJsSquare className="text-yellow-400" />,

  HTML: <FaHtml5 className="text-orange-500" />,
  HTML5: <FaHtml5 className="text-orange-500" />,

  CSS: <FaCss3Alt className="text-blue-500" />,
  CSS3: <FaCss3Alt className="text-blue-500" />,

  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,

  Git: <FaGitAlt className="text-orange-500" />,
  GitHub: <FaGithub className="text-white" />,

  Axios: <SiAxios className="text-violet-400" />,

  JWT: <SiJsonwebtokens className="text-pink-400" />,

  "REST API": <span className="font-bold text-cyan-400 text-xs">API</span>,

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
      className="
        group
        flex
        items-center
        gap-2
        rounded-lg
        border
        border-[#2a2a2a]
        bg-[#111111]
        backdrop-blur-xl
        px-3
        py-2
        text-sm
        font-medium
        text-slate-200
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-500/10
        hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
      "
    >
      <span className="text-lg">{iconMap[tech] || "💻"}</span>

      <span>{tech}</span>
    </motion.div>
  );
};

export default ExperienceBadge;
