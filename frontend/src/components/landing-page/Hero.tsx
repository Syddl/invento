import { Lock, Shield, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { HeroBackground } from "./hero-background";
import { HeroText } from "./HeroText";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section>
      <HeroBackground>
        <div className="z-20 flex flex-col items-center justify-center w-full">
          <Badge
            variant={"secondary"}
            className="hover:scale-105 transition-transform bg-gradient-to-r from-indigo-300 to-purple-300 text-gray-700 cursor-pointer hover:shadow-lg rounded-full"
          >
            🎉 Join 10,000+ successful businesses worldwide
          </Badge>
          <HeroText />
          <p className="max-w-prose text-xl lg:text-2xl text-center mb-8 text-gray-500 ">
            Say goodbye to inventory headaches! 👋 Our intelligent platform
            makes managing products, suppliers, and stock levels as easy as
            pressing a button.{" "}
            <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent dark:from-indigo-500 dark:to-purple-500 font-semibold text-shadow-2xs">
              Ready to transform your business?
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="rounded-md bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-white px-6 py-5 text-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl cursor-pointer">
              Start Your Free Journey
            </Button>
            <Button className="rounded-md  px-6 py-5 text-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl cursor-pointer border border-gray-300 bg-white  text-gray-700  hover:bg-gray-100 ">
              See It In Action
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <p className="flex items-center gap-2 text-gray-600 mt-6">
              <Shield className="h-5 w-5" />
              <span>No credit card required</span>
            </p>
            <p className="flex items-center gap-2 text-gray-600 mt-6">
              <Zap className="h-5 w-5" />
              <span>Instant access</span>
            </p>
            <p className="flex items-center gap-2 text-gray-600 mt-6">
              <Lock className="h-5 w-5" />
              <span>Secure & reliable</span>
            </p>
          </div>
        </div>
      </HeroBackground>
    </section>
  );
};

export default Hero;
