import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/festival-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Festival des Pâtes d'Abidjan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Le Festival des Pâtes
          <span className="block text-festival-green">d'Abidjan</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Découvrez un monde de saveurs et de traditions au cœur d'Abidjan. 
          L'événement incontournable pour tous les amateurs de gastronomie.
        </p>

        {/* Event Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-lg">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-festival-green" />
            <span>29-30 Novembre 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-festival-green" />
            <span>15h00 - 22h00</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-festival-green" />
            <span>Canal au Bois, Treichville</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="festival" size="lg" className="text-lg px-8 py-4">
            Réserver vos billets
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
            Découvrir le programme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;