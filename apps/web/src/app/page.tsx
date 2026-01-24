import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Architecture } from "@/components/sections/architecture";
import { TechStack } from "@/components/sections/tech-stack";
import { Roadmap } from "@/components/sections/roadmap";
import { FAQ } from "@/components/sections/faq";
import { OpenSource } from "@/components/sections/open-source";
import { Footer } from "@/components/sections/footer";
import { ParticlesBackground } from "@/components/ui/particles-background";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[hsl(var(--background))]">
      {/* Global particles network - covers entire page */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <Header />
      <main className="relative z-[1]">
        <Hero />
        <Features />
        <Architecture />
        <TechStack />
        <Roadmap />
        <FAQ />
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}
