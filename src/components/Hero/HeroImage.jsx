import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import my_pic from "../../assets/images/my_pic.webp";

const HeroImage = () => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 180,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 180,
    damping: 18,
  });

  const handleMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMove = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative flex w-full items-start justify-center lg:justify-end lg:pt-4">
      {/* Glow */}
      <div className="absolute top-10 h-[340px] w-[340px] rounded-full bg-cyan-500/20 blur-[90px]" />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={resetMove}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-20 flex h-[290px] w-[290px] items-center justify-center sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]"
      >
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[260px] w-[260px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 p-[3px] sm:h-[310px] sm:w-[310px] lg:h-[380px] lg:w-[380px]"
        >
          <div className="h-full w-full rounded-full bg-[#030712]" />
        </motion.div>

        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[230px] w-[230px] rounded-full border border-cyan-400/20 sm:h-[280px] sm:w-[280px] lg:h-[330px] lg:w-[330px]"
        />

        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative z-20 flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-[0_0_70px_rgba(6,182,212,.35)] sm:h-[240px] sm:w-[240px] lg:h-[290px] lg:w-[290px]"
        >
          <img
            src={my_pic}
            alt="Deeplal Kumar"
            className="h-full w-full rounded-full object-cover"
          />
        </motion.div>

        {/* Shine */}
        <motion.div
          animate={{ x: [-250, 250] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute h-[500px] w-16 rotate-12 bg-white/10 blur-xl"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;
