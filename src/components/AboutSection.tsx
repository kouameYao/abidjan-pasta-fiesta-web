import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Une passion commune pour les pâtes et la culture culinaire ivoirienne"
    },
    {
      icon: Users,
      title: "Échanges",
      description: "Promouvoir les échanges culturels à travers la gastronomie"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Soutenir les producteurs locaux et célébrer l'excellence culinaire"
    }
  ];

  return (
    <section id="about" className="py-20 bg-festival-grey-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Notre Histoire et Mission
          </h2>
          <p className="text-lg text-festival-grey leading-relaxed">
            Né d'une passion commune pour les pâtes et la culture culinaire ivoirienne, 
            le Festival des Pâtes d'Abidjan a été créé pour célébrer la diversité de ce plat universel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-festival-grey">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Notre Engagement</h3>
            <p className="text-lg text-festival-grey leading-relaxed mb-6">
              Chaque année, nous nous efforçons d'offrir une expérience inoubliable, 
              où tradition et innovation se rencontrent pour le plaisir des papilles. 
              Nous mettons en lumière des recettes ancestrales et des créations audacieuses.
            </p>
            <p className="text-lg text-festival-grey leading-relaxed">
              Notre mission est de promouvoir les échanges culturels à travers la gastronomie 
              et de soutenir les producteurs locaux, tout en créant un événement qui rassemble 
              les communautés autour de leur amour partagé pour la bonne cuisine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;