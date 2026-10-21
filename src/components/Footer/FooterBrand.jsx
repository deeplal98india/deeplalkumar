import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Mail, MapPin, Briefcase } from "lucide-react";

import { footerInfo } from "./footerData";
import dkLogo from "../../assets/company/dkLogo.webp";

export default function FooterBrand() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              x: -50,
            }
      }
      whileInView={
        shouldReduceMotion
          ? {}
          : {
              opacity: 1,
              x: 0,
            }
      }
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      {/* Logo */}
      <div className="flex items-center gap-5">
        <div
          className="
            group relative h-20 w-20 shrink-0 overflow-hidden rounded-full
            border-2 border-cyan-500/30 bg-white
            shadow-[0_0_35px_rgba(34,211,238,.15)]
            dark:border-cyan-400/20 dark:bg-[#111111]
            dark:shadow-[0_0_35px_rgba(34,211,238,.18)]
          "
        >
          <img
            src={dkLogo}
            alt="Deeplal Kumar"
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            {footerInfo.name}
            <span className="text-cyan-600 dark:text-cyan-400">.</span>
          </h2>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-600 sm:text-sm sm:tracking-[0.25em] dark:text-slate-400">
            {footerInfo.role}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-8 max-w-md leading-8 text-slate-600 dark:text-slate-400">
        {footerInfo.description}
      </p>

      {/* Contact Information */}
      <div className="mt-8 space-y-5">
        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-700/10 bg-cyan-50 text-cyan-700 dark:border-cyan-400/10 dark:bg-cyan-500/10 dark:text-cyan-400">
            <Mail size={18} />
          </div>

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[2px] text-slate-500">
              Email
            </p>

            <p className="break-words text-sm text-slate-800 sm:text-base dark:text-white">
              {footerInfo.email}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-700/10 bg-cyan-50 text-cyan-700 dark:border-cyan-400/10 dark:bg-cyan-500/10 dark:text-cyan-400">
            <MapPin size={18} />
          </div>

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[2px] text-slate-500">
              Location
            </p>

            <p className="break-words text-sm text-slate-800 sm:text-base dark:text-white">
              {footerInfo.location}
            </p>
          </div>
        </div>

        {/* Current Role */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-700/10 bg-cyan-50 text-cyan-700 dark:border-cyan-400/10 dark:bg-cyan-500/10 dark:text-cyan-400">
            <Briefcase size={18} />
          </div>

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[2px] text-slate-500">
              Current Role
            </p>

            <p className="break-words text-sm text-slate-800 sm:text-base dark:text-white">
              {footerInfo.currentRole}
            </p>
          </div>
        </div>
      </div>

      {/* Availability Badge */}
      {footerInfo.available && (
        <div
          className="
            mt-8 inline-flex items-center gap-2 rounded-full
            border border-emerald-600/30 bg-emerald-50
            px-5 py-2 text-sm font-semibold text-emerald-700
            dark:border-emerald-500/30 dark:bg-emerald-500/10
            dark:text-emerald-400
          "
        >
          <BadgeCheck size={16} />
          Available For Work
        </div>
      )}

      {/* Bottom Accent */}
      <div className="mt-8 h-[3px] w-36 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 dark:from-cyan-400" />
    </motion.div>
  );
}
