import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#030712]">
      <div
        className="relative z-10 mx-auto w-full max-w-[1920px]
pl-2
pr-4
sm:pl-4 sm:pr-6
md:pl-6 md:pr-8
lg:pl-8 lg:pr-12
xl:pl-10 xl:pr-16
2xl:pl-12 2xl:pr-20"
      >
        <div className="flex min-h-[82vh] flex-col-reverse justify-center pt-[72px] pb-2 lg:flex-row lg:items-start lg:pt-[88px]">
          {/* Left */}
          <div className="flex w-full justify-start pt-6 lg:w-[55%] lg:pt-0">
            <HeroContent />
          </div>

          {/* Right */}
          <div className="flex w-full justify-center pt-4 lg:w-[45%] lg:justify-end lg:pt-0">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
