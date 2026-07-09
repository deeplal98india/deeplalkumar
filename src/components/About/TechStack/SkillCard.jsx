import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";

export default function SkillCard({
  name,
  icon: Icon,
  percentage,
  level,
  category,
  color,
  index,
}) {
  return (
    <motion.div
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
      className="group relative overflow-hidden rounded-lg border-2 border-[#1f1f1f] bg-[#0b0b0b] p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
    >
      {/* Background Glow */}

      <div
        className="absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-10 transition-all duration-500 group-hover:opacity-30"
        style={{
          background: color,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}

        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${color}15`,
            borderColor: `${color}40`,
            color,
          }}
        >
          <Icon size={30} />
        </div>

        {/* Title */}

        <h3 className="text-center text-xl font-semibold text-white">{name}</h3>

        {/* Category */}

        <p className="mt-2 text-center text-sm text-slate-400">{category}</p>

        {/* Progress */}

        <div className="my-7 flex justify-center">
          <CircularProgress percentage={percentage} color={color} />
        </div>

        {/* Footer */}

        <div className="border-t border-[#1f1f1f] pt-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Skill Level</span>

            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: `${color}20`,
                color,
              }}
            >
              {level}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
