import { motion } from "framer-motion";

export default function SoftSkillCard({
  title,
  description,
  icon: Icon,
  color,
  level,
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

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{ duration: 0.3 }}
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg border transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${color}15`,
            borderColor: `${color}40`,
            color,
          }}
        >
          <Icon size={30} />
        </motion.div>

        {/* Content */}

        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-[#1f1f1f] pt-5">
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
    </motion.div>
  );
}
