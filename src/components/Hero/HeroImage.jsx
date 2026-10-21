import { motion } from "framer-motion";
import myPic from "../../assets/images/my_pic.webp";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative flex w-full items-center justify-center lg:justify-end"
    >
      {/* Background Glow */}
      <div
        className="
          absolute h-64 w-64 rounded-full
          bg-cyan-500/15 blur-3xl
          sm:h-80 sm:w-80
          dark:bg-cyan-500/10
        "
      />

      {/* Image Container */}
      <div
        className="
          relative h-60 w-60 overflow-hidden rounded-2xl
          border border-slate-200 bg-white
          shadow-xl shadow-slate-900/10
          sm:h-72 sm:w-72 lg:h-80 lg:w-80
          dark:border-slate-700 dark:bg-slate-900
          dark:shadow-2xl dark:shadow-black/30
        "
      >
        <img
          src={myPic}
          alt="Deeplal Kumar, Full-Stack Developer"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </motion.div>
  );
}
