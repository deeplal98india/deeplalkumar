import { motion, useReducedMotion } from "framer-motion";

import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import AvailabilityCard from "./AvailabilityCard";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Left Glow */}

      <div className="absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Right Glow */}

      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[180px]" />

      {/* Center Glow */}

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[180px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 md:px-8 xl:px-10">
        <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col items-center px-4 md:px-8 xl:px-10">
          {/* Heading */}

          <ContactHeader />
        </div>

        {/* Contact Cards */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 40,
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
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16"
        >
          <ContactInfo />
        </motion.div>

        {/* Social */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 40,
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <SocialLinks />
        </motion.div>

        {/* Availability */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 40,
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <AvailabilityCard />
        </motion.div>
      </div>
    </section>
  );
}
