import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-slate-950 pt-24 sm:pt-28"
    >
      <div
        className="relative z-10 mx-auto grid min-h-[calc(88vh-72px)] w-full max-w-none grid-cols-1 items-center gap-10 px-5 pb-16 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:pb-20 lg:px-12 xl:px-16 2xl:px-20"
      >
        <div className="order-2 min-w-0 md:order-1">
          <HeroContent />
        </div>

        <div className="order-1 flex min-w-0 items-center justify-center md:order-2">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}