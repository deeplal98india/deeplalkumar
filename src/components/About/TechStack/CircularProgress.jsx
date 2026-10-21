import { motion, useReducedMotion } from "framer-motion";

export default function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 10,
  color = "#22d3ee",
}) {
  const reduceMotion = useReducedMotion();

  const safePercentage = Math.min(
    100,
    Math.max(0, Number(percentage) || 0)
  );

  const safeSize = Math.max(40, Number(size) || 120);
  const safeStrokeWidth = Math.min(
    safeSize / 2,
    Math.max(1, Number(strokeWidth) || 10)
  );

  const radius = (safeSize - safeStrokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (safePercentage / 100) * circumference;

  return (
    <div
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{
        width: safeSize,
        height: safeSize,
      }}
    >
      <svg
        width={safeSize}
        height={safeSize}
        viewBox={`0 0 ${safeSize} ${safeSize}`}
        className="-rotate-90 overflow-visible"
        role="img"
        aria-label={`Skill proficiency: ${safePercentage}%`}
      >
        {/* Background ring */}
        <circle
          cx={safeSize / 2}
          cy={safeSize / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={safeStrokeWidth}
          fill="none"
          className="text-slate-200 dark:text-white/10"
        />

        {/* Progress ring */}
        <motion.circle
          cx={safeSize / 2}
          cy={safeSize / 2}
          r={radius}
          stroke={color}
          strokeWidth={safeStrokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={
            reduceMotion
              ? false
              : { strokeDashoffset: circumference }
          }
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 1.4,
            ease: "easeOut",
          }}
        />

        {/* Subtle endpoint highlight */}
        {safePercentage > 0 && (
          <motion.circle
            cx={safeSize / 2}
            cy={safeSize / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={safeStrokeWidth}
            strokeLinecap="round"
            strokeDasharray={`0.5 ${circumference}`}
            strokeDashoffset={offset}
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              delay: reduceMotion ? 0 : 0.8,
            }}
            aria-hidden="true"
          />
        )}
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.span
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.85 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            delay: reduceMotion ? 0 : 0.2,
          }}
          className="font-black leading-none tracking-tight text-slate-900 dark:text-white"
          style={{
            fontSize: safeSize >= 120 ? "1.5rem" : "1.25rem",
          }}
        >
          {safePercentage}%
        </motion.span>

        <span className="mt-2 text-[9px] font-semibold uppercase tracking-[2px] text-slate-500 dark:text-slate-400 sm:text-[10px]">
          Proficiency
        </span>
      </div>
    </div>
  );
}
