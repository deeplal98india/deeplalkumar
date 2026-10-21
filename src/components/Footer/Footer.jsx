import { motion, useReducedMotion } from "framer-motion";

import FooterCTA from "./FooterCTA";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      id="footer"
      className="
        relative isolate overflow-hidden border-t
        border-slate-200 bg-slate-50 pt-28 pb-10
        dark:border-white/5 dark:bg-slate-950
      "
    >
      {/* Left Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[170px]" />

      {/* Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[220px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,.15) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Dark Mode Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden opacity-[0.03] dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -18, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute left-20 top-24 h-4 w-4 rounded-full bg-cyan-500 shadow-[0_0_20px_#06b6d4] dark:bg-cyan-400 dark:shadow-[0_0_20px_#22d3ee]"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 20, 0],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute right-24 bottom-24 h-5 w-5 rounded-full bg-violet-500 shadow-[0_0_22px_#8b5cf6] dark:bg-violet-400"
      />

      {/* Main */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 md:px-8 xl:px-10">
        {/* CTA */}
        <FooterCTA />

        {/* Main Footer */}
        <div className="mt-24 grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
          <FooterBrand />

          <FooterLinks />

          <FooterSocial />
        </div>

        {/* Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
}
