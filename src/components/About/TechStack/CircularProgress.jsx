import { motion } from "framer-motion";

export default function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 10,
  color = "#22d3ee",
}) {
  const safePercentage = Math.min(100, Math.max(0, Number(percentage) || 0));

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (safePercentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        role="img"
        aria-label={`Skill level ${safePercentage}%`}
      >
        {/* Background Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-slate-200 dark:text-white/10"
        />

        {/* Animated Progress Ring */}
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
          viewport={{
            once: true,
            amount: 0.3,
          }}
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
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className="absolute text-center"
      >
        <h3
          className="text-2xl font-bold text-slate-900 transition-colors duration-300 dark:text-white"
          style={{ fontSize: size >= 120 ? "1.5rem" : "1.25rem" }}
        >
          {safePercentage}%
        </h3>

        <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 sm:text-xs">
          Skill
        </p>
      </motion.div>
    </div>
  );
}
