"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-success/10 to-primary/10 animate-fade-up">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-primary">Transform</span> Your
            Business?
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of successful businesses who&apos;ve already made the
            switch.
            <span className="block text-primary font-semibold mt-2">
              Your future self will thank you! 🙌
            </span>
          </p>
          <Button
            size="lg"
            className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-success hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-glow"
            onClick={() => navigate("/login")}
          >
            <Sparkles className="mr-3 h-6 w-6" />
            Start Your Success Story Today
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
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
