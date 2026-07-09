import { motion, useReducedMotion } from "framer-motion";

export default function ContactCard({
  icon: Icon,
  title,
  value,
  subtitle,
  href,
}) {
  const shouldReduceMotion = useReducedMotion();

  const card = (
    <motion.div
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -5,
              scale: 1.02,
            }
      }
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-lg
        border-2
        border-[#1f1f1f]
        bg-[#111111]
        p-5
        transition-all
        duration-500
        hover:border-cyan-400
        hover:shadow-[0_0_25px_rgba(34,211,238,.15)]
      "
    >
      {/* Glow */}

      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Spotlight */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_45%)]" />

      <div className="relative flex flex-col items-center text-center">
        {/* Icon */}

        <div
          className="
  flex
  h-14
  w-14
  items-center
  justify-center
  rounded-lg
  border
  border-cyan-400/20
  bg-cyan-500/10
  text-cyan-300
  transition-all
  duration-300
"
        >
          <Icon size={24} />
        </div>

        {/* Title */}

        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[3px] text-slate-500">
          {title}
        </p>

        {/* Value */}

        <h3 className="mt-2 break-words text-base font-semibold text-white transition group-hover:text-cyan-300">
          {value}
        </h3>

        {/* Subtitle */}

        {subtitle && (
          <p className="mt-2 text-[13px] leading-6 text-slate-400">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Border */}

      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 transition-all duration-500 group-hover:w-full" />

      {/* Shine */}

      <div className="absolute -left-24 top-0 h-full w-12 -skew-x-12 bg-white/10 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
    </motion.div>
  );

  if (!href) return card;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="
        block
        rounded-lg
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-cyan-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#050816]
      "
    >
      {card}
    </a>
  );
}
