import { motion } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  size: Math.floor(Math.random() * 5) + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 12 + 10,
  delay: Math.random() * 5,
}));

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Radial Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-40, 30, -40],
          y: [-20, 20, -20],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-44 top-24 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-600/15 blur-[120px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          y: [-40, 40, -40],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[110px]"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(3,7,18,0.9)_100%)]" />

      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [-120, -260],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          className="absolute rounded-full bg-cyan-300/70"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
