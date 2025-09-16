import Header from "@/features/landing/components/Header";
import Hero from "@/features/landing/components/Hero";

export default function LandingPage() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
