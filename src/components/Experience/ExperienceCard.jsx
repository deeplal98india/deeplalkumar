import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Building2,
  BriefcaseBusiness,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

import ExperienceBadge from "./ExperienceBadge";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative"
    >
      {/* Glow Border */}
      <div
        className="
          absolute
          -inset-[1px]
          rounded-lg
          bg-gradient-to-r
          from-cyan-500/40
          via-blue-500/20
          to-cyan-500/40
          opacity-0
          blur-xl
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Card */}
      <div
        className="
relative
overflow-visible
rounded-lg
border-2
border-[#1f1f1f]
bg-[#111111]
shadow-[0_8px_30px_rgba(0,0,0,0.35)]
p-6
md:p-7
transition-all
duration-500
group-hover:border-cyan-400
group-hover:shadow-[0_0_25px_rgba(34,211,238,.18)]
"
      >
        {/* Decorative Blur */}
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Spotlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.08),transparent_45%)]" />

        {/* ================= Header ================= */}

        <div className="relative flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Left */}
          <div className="flex gap-5">
            {/* Logo */}
            <div
              className="
                flex
                h-16
w-16
                items-center
                justify-center
                rounded-lg
                border
                border-cyan-400/20
                bg-cyan-500/10
                shadow-lg
                shadow-cyan-500/10
              "
            >
              {experience.logo ? (
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <Building2 size={24} className="text-cyan-400" />

                  <span className="mt-1 text-[11px] font-bold tracking-widest text-cyan-300">
                    {experience.company
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              {experience.current && (
                <div
                  className="
                    mb-3
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-500/30
                    bg-emerald-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-emerald-400
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Current Position
                </div>
              )}

              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                {experience.position}
              </h3>

              <p className="mt-2 text-base font-semibold tracking-wide text-cyan-400">
                {experience.company}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-3 text-[15px] text-slate-400">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              {experience.duration}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {experience.location}
            </div>

            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={16} />
              {experience.type}
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        {/* Description */}

        <p className="mt-2 text-base leading-7 text-slate-300">
          {experience.description}
        </p>
        {/* ================= Achievements ================= */}

        <div className="mt-8">
          <div className="mb-5 flex items-center gap-2">
            <Sparkles size={20} className="text-yellow-400" />

            <h4 className="text-lg font-semibold text-white">
              Key Contributions
            </h4>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {experience.achievements.map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  scale: 1.02,
                  x: 6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-lg
                  border
                  border-[#1f1f1f]
                  bg-[#111111]
                  p-4
                  transition-all
                  duration-300
                  hover:border-cyan-400
hover:shadow-[0_0_18px_rgba(34,211,238,.15)]
                  hover:bg-cyan-500/5
                "
              >
                <BadgeCheck size={18} className="mt-1 shrink-0 text-cyan-400" />

                <span className="leading-7 text-slate-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= Tech Stack ================= */}

        <div className="mt-8">
          <h4 className="mb-5 text-lg font-semibold text-white">Tech Stack</h4>

          <div className="flex flex-wrap gap-3">
            {experience.technologies.map((tech) => (
              <ExperienceBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
