import Header from "@/features/landing/components/Header";
import Hero from "@/features/landing/components/Hero";
import FeatureSection from "./components/FeatureSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTA from "@/features/landing/components/CTA";
import Footer from "@/features/landing/components/Footer";

export default function LandingPage() {
  return (
    <div className="relative font-geist-sans">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <TestimonialsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
