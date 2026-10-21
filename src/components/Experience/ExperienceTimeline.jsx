import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Sparkles } from "lucide-react";
import experienceData from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      {/* Timeline background line */}
      {experienceData.length > 1 && (
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[15px] top-8 hidden w-px bg-gradient-to-b from-sky-500/50 via-violet-500/30 to-transparent sm:block"
        />
      )}

      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
        {experienceData.map((experience, index) => (
          <motion.div
            key={experience._id}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.24),
              ease: "easeOut",
            }}
            className="relative min-w-0 sm:pl-10"
          >
            {/* Timeline marker */}
            <div
              aria-hidden="true"
              className="absolute left-[8px] top-7 z-10 hidden h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-sky-500 bg-white shadow-[0_0_0_5px_rgba(14,165,233,0.08)] dark:bg-slate-950 sm:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            </div>

            <ExperienceCard
              experience={experience}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      {/* Timeline end marker */}
      {experienceData.length > 0 && (
        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-400">
            <Sparkles className="h-3.5 w-3.5 text-sky-500" />
            <span>Continuing to grow and build</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceTimeline;
