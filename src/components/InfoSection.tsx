import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Calendar, Car, Bus, Phone } from "lucide-react";

const InfoSection = () => {
  const infoCards = [
    {
      icon: MapPin,
      title: "Lieu du Festival",
      content: [
        "CANAL AU BOIS à TREICHVILLE",
        "Boulevard GISCARD D'Estaing",
        "Face à SOLIBRA, Abidjan",
        "Côte d'Ivoire"
      ]
    },
    {
      icon: Calendar,
      title: "Dates",
      content: [
        "Du 29 au 30 Novembre 2025",
        "Deux jours de festivités",
        "Événement annuel",
        "Réservez vos dates !"
      ]
    },
    {
      icon: Clock,
      title: "Horaires",
      content: [
        "15h00 à 22h00",
        "Tous les jours du festival",
        "7 heures d'activités",
        "Dernière entrée à 21h30"
      ]
    },
    {
      icon: Car,
      title: "Transport",
      content: [
        "Deux parkings sécurisés",
        "Accès facilité",
        "Transport en commun",
        "Zone accessible à pied"
      ]
    }
  ];

  return (
    <section id="info" className="py-20 bg-festival-grey-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Informations Pratiques
          </h2>
          <p className="text-lg text-festival-grey max-w-2xl mx-auto">
            Toutes les informations essentielles pour préparer votre visite au Festival des Pâtes d'Abidjan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {infoCards.map((info, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2">
                  {info.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-festival-grey">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-card bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Comment s'y rendre</CardTitle>
              <p className="text-festival-grey">Le festival se déroule dans un lieu facilement accessible</p>
            </CardHeader>
            <CardContent>
              <div className="bg-festival-grey-light rounded-lg p-8 text-center">
                <MapPin className="w-12 h-12 text-festival-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">CANAL AU BOIS, TREICHVILLE</h3>
                <p className="text-festival-grey mb-6">
                  Boulevard GISCARD D'Estaing, face à SOLIBRA<br />
                  Abidjan, Côte d'Ivoire
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <Car className="w-6 h-6 text-festival-green" />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">En voiture</h4>
                      <p className="text-sm text-festival-grey">Parking sécurisé disponible</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bus className="w-6 h-6 text-festival-green" />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">Transport public</h4>
                      <p className="text-sm text-festival-grey">Arrêts de bus à proximité</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;