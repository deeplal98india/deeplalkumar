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
            group
            relative
            h-20
            w-20
            overflow-hidden
            rounded-full
            border-2
            border-cyan-400/20
            bg-[#111111]
            shadow-[0_0_35px_rgba(34,211,238,.18)]
          "
        >
          <img
            src={dkLogo}
            alt="Deeplal Kumar"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            {footerInfo.name}
            <span className="text-cyan-400">.</span>
          </h2>

          <p className="mt-1 uppercase tracking-[0.25em] text-sm text-slate-400">
            {footerInfo.role}
          </p>
        </div>
      </div>

      {/* Description */}

      <p className="mt-8 max-w-md leading-8 text-slate-400">
        {footerInfo.description}
      </p>

      {/* Info */}

      <div className="mt-8 space-y-5">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
            <Mail size={18} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[2px] text-slate-500">
              Email
            </p>

            <p className="text-white">{footerInfo.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
            <MapPin size={18} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[2px] text-slate-500">
              Location
            </p>

            <p className="text-white">{footerInfo.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
            <Briefcase size={18} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[2px] text-slate-500">
              Current Role
            </p>

            <p className="text-white">{footerInfo.currentRole}</p>
          </div>
        </div>
      </div>

      {/* Badge */}

      {footerInfo.available && (
        <div
          className="
      mt-8
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-emerald-500/30
      bg-emerald-500/10
      px-5
      py-2
      text-sm
      font-semibold
      text-emerald-400
    "
        >
          <BadgeCheck size={16} />
          Available For Work
        </div>
      )}

      {/* Bottom Accent */}

      <div className="mt-8 h-[3px] w-36 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500" />
    </motion.div>
  );
}
