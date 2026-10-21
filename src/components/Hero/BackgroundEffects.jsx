
export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-slate-50 transition-colors duration-300 dark:bg-slate-950" />

      {/* Subtle dotted texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,116,139,0.13)_1px,transparent_0)] [background-size:26px_26px] opacity-40 dark:opacity-20" />

      {/* Top-right cyan glow */}
      <div
        className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-cyan-400/[0.12] blur-3xl dark:bg-cyan-500/[0.08]"
      />

      {/* Left blue glow */}
      <div
        className="absolute -left-48 top-[38rem] h-[24rem] w-[24rem] rounded-full bg-blue-500/[0.08] blur-3xl dark:bg-blue-500/[0.05]"
      />

      {/* Center ambient glow */}
      <div
        className="absolute left-1/2 top-[22rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-sky-400/[0.05] blur-3xl dark:bg-sky-500/[0.035]"
      />

      {/* Bottom gradient separator */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-slate-700/70" />
    </div>
  );
}
