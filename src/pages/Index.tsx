import FestivalHeader from "@/components/FestivalHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import ChefsSection from "@/components/ChefsSection";
import TicketsSection from "@/components/TicketsSection";
import InfoSection from "@/components/InfoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FestivalHeader />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <ChefsSection />
      <TicketsSection />
      <InfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
