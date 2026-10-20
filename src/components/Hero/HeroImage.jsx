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
      <div className="absolute h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80" />
      <div className="relative h-60 w-60 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">
        <img
          src={myPic}
          alt="Deeplal Kumar, Full-Stack Developer"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </div>
    </motion.div>
  );
}
