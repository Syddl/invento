"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-indigo-500">Transform</span> Your
            Business?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-500 mb-8 leading-relaxed">
            Join thousands of successful businesses who&apos;ve already made the
            switch.
            <span className="block text-indigo-500 font-semibold mt-2">
              Your future self will thank you! 🙌
            </span>
          </p>
          <Button
            size="lg"
            className="text-xl cursor-pointer text-white px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-glow"
            onClick={() => navigate("/login")}
          >
            <Sparkles className="mr-3 h-6 w-6" />
            Start Your Success Story Today
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <p className="text-sm text-gray-500 mt-6">
            🎯 <strong>Setup in 5 minutes</strong> • 🔒{" "}
            <strong>Bank-level security</strong> • 💝{" "}
            <strong>Cancel anytime</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
