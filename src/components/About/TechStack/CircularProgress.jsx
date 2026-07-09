import { motion } from "framer-motion";

export default function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 10,
  color = "#22d3ee",
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* Background Ring */}

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Animated Ring */}

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          whileInView={{
            strokeDashoffset: offset,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
        />
      </svg>

      {/* Percentage */}

      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="absolute text-center"
      >
        <h3 className="text-2xl font-bold text-white">{percentage}%</h3>

        <p className="text-xs uppercase tracking-widest text-slate-400">
          Skill
        </p>
      </motion.div>
    </div>
  );
}
