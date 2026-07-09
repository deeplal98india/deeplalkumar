import { motion, useReducedMotion } from "framer-motion";

export default function ContactHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 35,
            }
      }
      whileInView={
        shouldReduceMotion
          ? {}
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl text-center"
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-5
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[4px]
          text-cyan-400
        "
      >
        CONTACT
      </span>
      <div className="h-2" />

      {/* Heading */}

      <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
        Let's{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Build Something Amazing
        </span>
      </h2>
      <div className="h-4" />

      {/* Description */}

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        I'm always interested in building scalable web applications, enterprise
        dashboards and modern digital products. Whether it's a freelance
        project, full-time role or collaboration, I'd love to hear from you.
      </p>
      <div className="h-4" />
    </motion.div>
  );
}
