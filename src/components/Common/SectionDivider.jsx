export default function SectionDivider() {
  return (
    <div className="relative my-24 flex justify-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="absolute -top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />
    </div>
  );
}
