import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Mail,
  MapPin,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

import { footerInfo } from "./footerData";
import dkLogo from "../../assets/company/dkLogo.webp";

export default function FooterBrand() {
  const shouldReduceMotion = useReducedMotion();

  const contactItems = [
    {
      label: "Email",
      value: footerInfo.email,
      icon: Mail,
      href: footerInfo.email
        ? `mailto:${footerInfo.email}`
        : undefined,
    },
    {
      label: "Location",
      value: footerInfo.location,
      icon: MapPin,
    },
    {
      label: "Current Role",
      value: footerInfo.currentRole,
      icon: Briefcase,
    },
  ];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className="relative min-w-0"
    >
      {/* Brand */}
      <div className="flex min-w-0 items-center gap-4 sm:gap-5">
        <div className="group relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-cyan-500/25 bg-white p-1 shadow-sm shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10 sm:h-16 sm:w-16 dark:border-white/10 dark:bg-slate-900">
          <img
            src={dkLogo}
            alt="Deeplal Kumar logo"
            loading="lazy"
            className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="min-w-0">
          <h2 className="break-words text-xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            {footerInfo.name}
            <span className="text-cyan-600 dark:text-cyan-400">.</span>
          </h2>

          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 sm:text-xs sm:tracking-[0.2em]">
            {footerInfo.role}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-7 sm:text-[15px]">
        {footerInfo.description}
      </p>

      {/* Contact details */}
      <div className="mt-7 space-y-3">
        {contactItems.map((item) => {
          const Icon = item.icon;

          const content = (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/15 bg-cyan-50 text-cyan-700 transition-colors duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-100 dark:border-cyan-400/15 dark:bg-cyan-400/[0.07] dark:text-cyan-300 dark:group-hover:bg-cyan-400/15">
                <Icon size={17} aria-hidden="true" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-500">
                  {item.label}
                </span>

                <span className="mt-1 block break-words text-sm font-medium leading-6 text-slate-800 dark:text-slate-200">
                  {item.value}
                </span>
              </span>

              {item.href && (
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
                />
              )}
            </>
          );

          return (
            <div
              key={item.label}
              className="min-w-0"
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-transparent px-2 py-2 transition-colors duration-300 hover:border-slate-200 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:hover:border-white/10 dark:hover:bg-white/[0.03]"
                >
                  {content}
                </a>
              ) : (
                <div className="group flex min-w-0 items-center gap-3 rounded-xl px-2 py-2">
                  {content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Availability */}
      {footerInfo.available && (
        <div className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/[0.07] dark:text-emerald-300 sm:text-sm">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50 motion-reduce:animate-none" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>

          <BadgeCheck size={16} aria-hidden="true" />
          <span>Available for Work</span>
        </div>
      )}

      {/* Brand accent */}
      <div
        aria-hidden="true"
        className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 sm:w-24"
      />
    </motion.div>
  );
}
