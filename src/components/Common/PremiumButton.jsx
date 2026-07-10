import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PremiumButton({
  href = "#",
  children,
  className = "",
}) {
  return (
    <motion.a
      href={href}
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className={`group relative inline-flex ${className}`}
    >
      {/* Outer Glow */}

      <div
        className="
          absolute
          -inset-1
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500/50
          via-sky-500/50
          to-indigo-500/50
          opacity-0
          blur-xl
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Gradient Border */}

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-r
          from-cyan-400
          via-sky-500
          to-indigo-500
          p-[1.5px]
        "
      >
        {/* Glass Body */}

        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-between
            gap-6
            rounded-[22px]
            border
            border-white/10
            bg-[#08111f]/95
            px-8
            py-4
            backdrop-blur-2xl
          "
        >
          {/* Text */}

          <span
            className="
              bg-gradient-to-r
              from-white
              via-slate-100
              to-cyan-300
              bg-clip-text
              text-[15px]
              font-semibold
              tracking-wide
              text-transparent
            "
          >
            {children}
          </span>

          {/* Icon */}

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-cyan-400
              to-sky-500
              shadow-[0_0_20px_rgba(34,211,238,.35)]
              transition-all
              duration-300
            "
          >
            <ArrowRight
              size={18}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
}