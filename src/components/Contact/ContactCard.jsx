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
      className="group relative isolate overflow-hidden rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.15)] dark:border-[#1f1f1f] dark:bg-[#111111] dark:hover:border-cyan-400 dark:hover:shadow-[0_0_25px_rgba(34,211,238,.15)]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_45%)]" />

      <div className="relative flex flex-col items-center text-center">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-700/20 bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-500/10 dark:text-cyan-300 dark:group-hover:bg-cyan-500/15">
          {Icon && <Icon size={24} />}
        </div>

        {/* Title */}
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[3px] text-slate-500 dark:text-slate-400">
          {title}
        </p>

        {/* Value */}
        <h3 className="mt-2 break-words text-base font-semibold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
          {value}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 text-[13px] leading-6 text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-all duration-500 group-hover:w-full dark:from-cyan-400" />

      {/* Shine */}
      <div className="pointer-events-none absolute -left-24 top-0 h-full w-12 -skew-x-12 bg-slate-900/5 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100 dark:bg-white/10" />
    </motion.div>
  );

  if (!href) return card;

  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-950"
    >
      {card}
    </a>
  );
}
