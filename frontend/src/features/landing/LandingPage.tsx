import Header from "@/features/landing/components/Header";
import Hero from "@/features/landing/components/Hero";
import Stats from "@/features/landing/components/Stats";
import TestimonialsSection from "./components/TestimonialsSection";
import CTA from "@/features/landing/components/CTA";
import Footer from "@/features/landing/components/Footer";

export default function LandingPage() {
  return (
    <div className="relative font-geist-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <TestimonialsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
