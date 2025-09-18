import Header from "@/features/landing/components/Header";
import Hero from "@/features/landing/components/Hero";
import FeatureSection from "./components/FeatureSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function LandingPage() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
