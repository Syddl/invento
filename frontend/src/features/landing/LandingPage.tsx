import Header from "@/features/landing/components/Header";
import Hero from "@/features/landing/components/Hero";
import FeatureSection from "./components/FeatureSection";

export default function LandingPage() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <FeatureSection />
      </main>
    </div>
  );
}
