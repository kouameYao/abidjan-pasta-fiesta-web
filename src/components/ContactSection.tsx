import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Users, Trophy, Send } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      title: "Informations Générales",
      details: [
        "info@festivaldespatesabidjan.ci",
        "Questions sur le festival",
        "Informations billetterie"
      ]
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: [
        "+225 07 47 31 11 41",
        "+225 05 76 72 30 34",
        "Lun-Ven: 9h-18h"
      ]
    },
    {
      icon: Users,
      title: "Partenariats",
      details: [
        "partenariats@festivaldespatesabidjan.ci",
        "Opportunités de collaboration",
        "Sponsoring"
      ]
    },
    {
      icon: Trophy,
      title: "Jeu-concours",
      details: [
        "Participez à notre grand jeu",
        "Paniers gourmands à gagner",
        "Billets VIP en jeu"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contactez-Nous
          </h2>
          <p className="text-lg text-festival-grey max-w-2xl mx-auto">
            Questions, collaboration ou participation ? Notre équipe est à votre disposition 
            pour vous fournir toutes les informations nécessaires.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Nos Coordonnées</h3>
            
            {contacts.map((contact, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{contact.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {contact.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className={`${detailIndex === 0 ? 'font-semibold text-festival-green' : 'text-festival-grey'} text-sm`}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Envoyez-nous un message</h3>
            
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom complet
                      </label>
                      <Input placeholder="Votre nom" className="border-festival-grey-light" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="votre@email.com" className="border-festival-grey-light" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sujet
                    </label>
                    <Input placeholder="Objet de votre message" className="border-festival-grey-light" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Votre message..." 
                      rows={5}
                      className="border-festival-grey-light resize-none"
                    />
                  </div>
                  
                  <Button variant="festival" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contest Section */}
        <div className="mt-20">
          <Card className="border-0 shadow-card bg-gradient-hero text-white">
            <CardContent className="p-12 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-6">Grand Jeu-Concours Exclusif</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Tentez votre chance et participez à notre grand jeu-concours ! De nombreux prix fantastiques 
                sont à gagner, incluant des paniers gourmands, des cours de cuisine avec nos chefs invités, 
                et des billets VIP pour la prochaine édition.
              </p>
              <Button variant="outline" size="lg" className="bg-white text-festival-green border-white hover:bg-festival-green-light">
                Participer au concours
              </Button>
              <p className="text-sm mt-4 opacity-75">
                Tirage au sort le dernier jour du festival
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;