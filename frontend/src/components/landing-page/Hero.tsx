import { HeroBackground } from "./hero-background";

const Hero = () => {
  return (
    <section>
      <HeroBackground>
        <div className="z-20 font-bold flex items-center justify-center w-full">
          <h1 className="text-5xl">hello world</h1>
        </div>
      </HeroBackground>
    </section>
  );
};

export default Hero;
