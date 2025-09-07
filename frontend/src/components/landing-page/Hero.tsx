import { HeroBackground } from "./hero-background";
import { HeroText } from "./HeroText";

const Hero = () => {
  return (
    <section>
      <HeroBackground>
        <div className="z-20 flex flex-col items-center justify-center w-full">
          <HeroText />
          <p className="max-w-prose text-xl lg:text-2xl text-center mb-8 text-gray-500 ">
            Say goodbye to inventory headaches! 👋 Our intelligent platform
            makes managing products, suppliers, and stock levels as easy as
            pressing a button.{" "}
            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent dark:from-indigo-500 dark:to-purple-500 font-semibold text-shadow-2xs">
              Ready to transform your business?
            </span>
          </p>
        </div>
      </HeroBackground>
    </section>
  );
};

export default Hero;
