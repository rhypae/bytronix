import { useCursor } from "@/hooks/use-cursor";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import { Navigation } from "@/components/landing/Navigation";
import { MobileNavigation } from "@/components/ui/MobileNavigation";
import { Hero } from "@/components/landing/Hero";
import { Portfolio } from "@/components/landing/Portfolio";
import { ProjectTransition } from "@/components/landing/ProjectTransition";
import { Pricing } from "@/components/landing/Pricing";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  useCursor();
  const { isMobile } = useMobileDetection();

  return (
    <div className="min-h-screen">
      {/* Navigation adaptative */}
      {isMobile ? <MobileNavigation /> : <Navigation />}
      
      <Hero />
      <Portfolio />
      <ProjectTransition />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
