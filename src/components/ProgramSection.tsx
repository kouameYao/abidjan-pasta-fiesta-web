import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, ChefHat, Trophy, Clock } from "lucide-react";
import pastaImage from "@/assets/pasta-dishes.jpg";

const ProgramSection = () => {
  const activities = [
    {
      icon: UtensilsCrossed,
      title: "Dégustations Exclusives",
      time: "15h00 - 22h00",
      description: "Savourez une multitude de plats de pâtes, des classiques italiens aux fusions audacieuses avec des saveurs africaines. Des stands dédiés offriront des portions généreuses.",
      highlight: "Inclus dans tous les billets"
    },
    {
      icon: ChefHat,
      title: "Ateliers de Cuisine",
      time: "16h00 - 18h00",
      description: "Apprenez les secrets de la fabrication des pâtes fraîches et des sauces authentiques avec des chefs renommés. Des sessions interactives pour tous les niveaux.",
      highlight: "Places limitées"
    },
    {
      icon: Trophy,
      title: "Compétitions Amicales",
      time: "19h00 - 21h00",
      description: "Assistez à des défis culinaires passionnants où des chefs s'affronteront pour le titre de Maître des Pâtes. Vous pourrez même voter pour votre favori !",
      highlight: "Spectacle gratuit"
    }
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Programme des Activités
          </h2>
          <p className="text-lg text-festival-grey max-w-2xl mx-auto">
            Dégustations, ateliers et compétitions vous attendent pour une expérience culinaire complète
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{activity.title}</CardTitle>
                      <div className="flex items-center gap-2 text-festival-green font-medium">
                        <Clock className="w-4 h-4" />
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-festival-grey mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="inline-block bg-festival-green-light text-festival-green px-3 py-1 rounded-full text-sm font-medium">
                    {activity.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img
              src={pastaImage}
              alt="Plats de pâtes"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="festival" size="lg" className="text-lg px-8 py-4">
            Voir le programme complet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;