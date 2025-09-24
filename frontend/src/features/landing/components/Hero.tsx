import { Lock, Shield, Zap } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { HeroBackground } from "./hero-background";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <HeroBackground>
        <div className="z-20 flex flex-col items-center justify-center w-full">
          <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance">
                  Precision Inventory Management
                  <span className="text-primary block">
                    for Small Businesses
                  </span>
                </h1>
                <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto text-pretty">
                  Take control of your inventory with Invento&apos;s
                  professional-grade system. Real-time tracking, automated
                  alerts, and actionable insights designed for growing
                  businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 bg-gray-900 text-white"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 bg-white border-gray-200"
                  >
                    Watch Demo
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroBackground>
    </section>
  );
};

export default Hero;
