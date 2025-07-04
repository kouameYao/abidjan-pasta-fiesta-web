import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const TicketsSection = () => {
  const tickets = [
    {
      name: "Billet Standard",
      price: "25 000",
      currency: "FCFA",
      icon: Ticket,
      description: "Accès général au festival, dégustations incluses",
      features: [
        "Accès à tous les stands de dégustation",
        "Spectacles et animations",
        "Accès aux espaces communs",
        "Parking inclus"
      ],
      popular: false,
      color: "bg-gray-50"
    },
    {
      name: "Pass VIP",
      price: "45 000",
      currency: "FCFA",
      icon: Star,
      description: "Accès prioritaire, zones exclusives, et rencontre avec les chefs",
      features: [
        "Tous les avantages du billet standard",
        "Accès prioritaire à tous les événements",
        "Zone VIP avec service premium",
        "Rencontre exclusive avec les chefs",
        "Ateliers de cuisine prioritaires",
        "Cadeau souvenir"
      ],
      popular: true,
      color: "bg-festival-green-light"
    },
    {
      name: "Forfait Famille",
      price: "60 000",
      currency: "FCFA",
      icon: Users,
      description: "Tarif réduit pour les familles, activités pour enfants",
      features: [
        "Accès pour 2 adultes + 2 enfants",
        "Activités spéciales pour enfants",
        "Ateliers familiaux",
        "Parking prioritaire",
        "10% de réduction sur les achats"
      ],
      popular: false,
      color: "bg-blue-50"
    }
  ];

  return (
    <section id="tickets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Réservez Votre Place
          </h2>
          <p className="text-lg text-festival-grey max-w-2xl mx-auto">
            Ne manquez pas cette opportunité unique de plonger dans le monde des pâtes ! 
            Réservez vos billets dès aujourd'hui pour profiter des tarifs avantageux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket, index) => (
            <Card key={index} className={`relative border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${ticket.color}`}>
              {ticket.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-festival-green text-white px-4 py-1">
                  Plus Populaire
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <ticket.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{ticket.name}</CardTitle>
                <div className="text-3xl font-bold text-festival-green">
                  {ticket.price} <span className="text-lg font-normal text-festival-grey">{ticket.currency}</span>
                </div>
                <p className="text-festival-grey">{ticket.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {ticket.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-festival-green mt-0.5 flex-shrink-0" />
                      <span className="text-festival-grey text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/reservation">
                  <Button 
                    variant={ticket.popular ? "festival" : "outline"} 
                    className="w-full mt-6"
                    size="lg"
                  >
                    Réserver maintenant
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-festival-grey mb-4">
            Questions sur la billetterie ? Contactez-nous au +225 07 47 31 11 41
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-festival-grey">
            <span>✓ Paiement sécurisé</span>
            <span>✓ Billets électroniques</span>
            <span>✓ Remboursement possible</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;