export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />

      {/* Right Cyan Glow */}
      <div
        className="
          absolute -right-40 -top-40 h-[28rem] w-[28rem]
          rounded-full bg-cyan-500/[0.09] blur-3xl
          dark:bg-cyan-500/[0.07]
        "
      />

      {/* Left Blue Glow */}
      <div
        className="
          absolute -left-48 top-[38rem] h-[24rem] w-[24rem]
          rounded-full bg-blue-500/[0.07] blur-3xl
          dark:bg-blue-500/[0.05]
        "
      />
    </div>
  );
}
