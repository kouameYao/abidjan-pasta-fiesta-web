import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import chefImage from "@/assets/chef-cooking.jpg";

const ChefsSection = () => {
  const chefs = [
    {
      name: "Marco Rossi",
      country: "Italie",
      specialty: "Pâtes Traditionnelles",
      experience: "15 ans",
      flag: "🇮🇹"
    },
    {
      name: "Adja Fatou",
      country: "Côte d'Ivoire",
      specialty: "Fusion Africaine",
      experience: "12 ans",
      flag: "🇨🇮"
    },
    {
      name: "Kemi Adebayo",
      country: "Nigeria",
      specialty: "Créations Modernes",
      experience: "10 ans",
      flag: "🇳🇬"
    },
    {
      name: "Ahmad Khalil",
      country: "Liban",
      specialty: "Pâtes Méditerranéennes",
      experience: "18 ans",
      flag: "🇱🇧"
    }
  ];

  return (
    <section id="chefs" className="py-20 bg-festival-grey-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Chefs Invités et Participants
          </h2>
          <p className="text-lg text-festival-grey max-w-3xl mx-auto">
            Découvrez les talents qui illumineront notre festival ! Cette année, nous sommes fiers 
            d'accueillir des chefs de renommée mondiale, apportant avec eux une richesse de saveurs et d'expertises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src={chefImage}
              alt="Chef préparant des pâtes"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">Chefs de renommée mondiale</span>
              </div>
              <p className="text-sm opacity-90">Démonstrations et ateliers exclusifs</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {chefs.map((chef, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{chef.flag}</div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{chef.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <MapPin className="w-4 h-4 text-festival-grey" />
                    <span className="text-festival-grey text-sm">{chef.country}</span>
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {chef.specialty}
                  </Badge>
                  <p className="text-sm text-festival-grey">{chef.experience} d'expérience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Expériences Culinaires Uniques</h3>
            <p className="text-lg text-festival-grey leading-relaxed">
              Des chefs venus d'Italie, du Nigeria, de la Côte d'Ivoire, et même du Liban, 
              partageront leurs créations uniques, fusionnant les traditions pour des expériences 
              gustatives inédites. Leurs démonstrations et ateliers promettent d'être des moments 
              culinaires inoubliables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;