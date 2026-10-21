export default function SectionDivider() {
  return (
    <div className="relative my-24 flex justify-center">
      {/* Gradient Divider */}
      <div
        className="
          h-px w-full
          bg-gradient-to-r from-transparent
          via-cyan-500/40 to-transparent
          dark:via-cyan-400/30
        "
      />

      {/* Center Dot */}
      <div
        className="
          absolute -top-2 h-4 w-4 rounded-full
          bg-cyan-500
          shadow-[0_0_25px_rgba(6,182,212,0.45)]
          dark:bg-cyan-400
          dark:shadow-[0_0_25px_#22d3ee]
        "
      />
    </div>
  );
}
