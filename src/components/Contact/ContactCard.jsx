import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactCard({
  icon: Icon,
  title,
  value,
  subtitle,
  href,
}) {
  const shouldReduceMotion = useReducedMotion();

  const isExternal = /^https?:\/\//i.test(href || "");

  const card = (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.25,
        ease: "easeOut",
      }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm transition-[border-color,box-shadow,background-color] duration-300 hover:border-cyan-500/40 hover:shadow-[0_12px_35px_rgba(8,145,178,0.10)] motion-reduce:transform-none motion-reduce:transition-none dark:border-white/10 dark:bg-[#111318] dark:hover:border-cyan-400/30 dark:hover:shadow-[0_12px_35px_rgba(34,211,238,0.08)] sm:p-6"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/[0.10] blur-3xl transition-colors duration-300 group-hover:bg-cyan-400/[0.18] dark:bg-cyan-400/[0.08] dark:group-hover:bg-cyan-400/[0.14]"
      />

      {/* Subtle background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.05),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.07),transparent_55%)]"
      />

      {/* Card content */}
      <div className="relative flex flex-1 flex-col items-center text-center">
        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-700/15 bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-400/[0.08] dark:text-cyan-300 dark:group-hover:bg-cyan-400/[0.14]">
          {Icon && <Icon size={24} aria-hidden="true" />}
        </div>

        {/* Title */}
        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-xs">
          {title}
        </p>

        {/* Value */}
        <h3 className="mt-2 max-w-full break-words [overflow-wrap:anywhere] text-base font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300 sm:text-lg">
          {value}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 max-w-xs break-words text-sm leading-6 text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        )}

        {/* External link indicator */}
        {isExternal && (
          <span
            aria-hidden="true"
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 opacity-80 transition-all duration-200 group-hover:gap-1.5 group-hover:opacity-100 dark:text-cyan-300"
          >
            Visit profile
            <ArrowUpRight size={14} />
          </span>
        )}
      </div>

      {/* Bottom gradient accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none dark:from-cyan-400"
      />
    </motion.div>
  );

  if (!href) {
    return card;
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={
        isExternal
          ? `${title}: ${value} (opens in a new tab)`
          : `${title}: ${value}`
      }
      className="block h-full min-w-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-950"
    >
      {card}
    </a>
  );
}
