import Header from "@/features/landing/components/Header";
import Hero from "@/features/landing/components/Hero";
import Stats from "@/features/landing/components/Stats";
import TestimonialsSection from "./components/TestimonialsSection";
import CTA from "@/features/landing/components/CTA";
import Footer from "@/features/landing/components/Footer";
import FeatureSection from "./components/FeatureSection";

export default function LandingPage() {
  return (
    <div className="relative font-geist-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeatureSection />
        <TestimonialsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
