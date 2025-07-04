import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Ticket, Star, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ReservationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ticketType: string;
  quantity: number;
}

const Reservation = () => {
  const [selectedTicket, setSelectedTicket] = useState("");
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<ReservationForm>();
  const { toast } = useToast();

  const tickets = [
    {
      id: "standard",
      name: "Billet Standard",
      price: 25000,
      icon: Ticket,
      features: [
        "Accès à tous les stands de dégustation",
        "Spectacles et animations",
        "Accès aux espaces communs",
        "Parking inclus"
      ]
    },
    {
      id: "vip",
      name: "Pass VIP",
      price: 45000,
      icon: Star,
      popular: true,
      features: [
        "Tous les avantages du billet standard",
        "Accès prioritaire à tous les événements",
        "Zone VIP avec service premium",
        "Rencontre exclusive avec les chefs",
        "Ateliers de cuisine prioritaires",
        "Cadeau souvenir"
      ]
    },
    {
      id: "family",
      name: "Forfait Famille",
      price: 60000,
      icon: Users,
      features: [
        "Accès pour 2 adultes + 2 enfants",
        "Activités spéciales pour enfants",
        "Ateliers familiaux",
        "Parking prioritaire",
        "10% de réduction sur les achats"
      ]
    }
  ];

  const onSubmit = (data: ReservationForm) => {
    console.log("Données de réservation:", data);
    toast({
      title: "Réservation confirmée !",
      description: "Votre demande de réservation a été envoyée avec succès. Vous recevrez une confirmation par email.",
    });
  };

  const selectedTicketData = tickets.find(t => t.id === selectedTicket);
  const quantity = watch("quantity") || 1;
  const totalPrice = selectedTicketData ? selectedTicketData.price * quantity : 0;

  return (
    <div className="min-h-screen bg-festival-bg">
      {/* Header */}
      <header className="bg-white border-b border-festival-grey-light">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-festival-green hover:text-festival-green-dark transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour au festival</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Réservation de Billets
            </h1>
            <p className="text-lg text-festival-grey">
              Festival des Pâtes d'Abidjan • 29-30 Novembre 2025
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sélection des billets */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Choisissez votre billet</h2>
              
              {tickets.map((ticket) => (
                <Card 
                  key={ticket.id} 
                  className={`cursor-pointer border-2 transition-all duration-200 hover:-translate-y-1 ${
                    selectedTicket === ticket.id 
                      ? 'border-festival-green bg-festival-green-light' 
                      : 'border-festival-grey-light hover:border-festival-green'
                  }`}
                  onClick={() => {
                    setSelectedTicket(ticket.id);
                    setValue("ticketType", ticket.id);
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                          <ticket.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground flex items-center gap-2">
                            {ticket.name}
                            {ticket.popular && (
                              <Badge className="bg-festival-green text-white">Populaire</Badge>
                            )}
                          </CardTitle>
                          <p className="text-2xl font-bold text-festival-green">
                            {ticket.price.toLocaleString()} FCFA
                          </p>
                        </div>
                      </div>
                      {selectedTicket === ticket.id && (
                        <div className="w-6 h-6 bg-festival-green rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2">
                      {ticket.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-festival-grey">
                          <Check className="w-4 h-4 text-festival-green mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Formulaire de réservation */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Vos informations</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          {...register("firstName", { required: "Le prénom est requis" })}
                          className={errors.firstName ? "border-red-500" : ""}
                        />
                        {errors.firstName && (
                          <p className="text-sm text-red-500">{errors.firstName.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          {...register("lastName", { required: "Le nom est requis" })}
                          className={errors.lastName ? "border-red-500" : ""}
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-500">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "L'email est requis",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Adresse email invalide"
                          }
                        })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+225 XX XX XX XX XX"
                        {...register("phone", { required: "Le téléphone est requis" })}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">Nombre de billets</Label>
                      <Select onValueChange={(value) => setValue("quantity", parseInt(value))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner le nombre" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} billet{num > 1 ? 's' : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Récapitulatif */}
                    {selectedTicketData && (
                      <div className="border-t border-festival-grey-light pt-6">
                        <h3 className="font-semibold text-foreground mb-3">Récapitulatif</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-festival-grey">Billet:</span>
                            <span className="text-foreground">{selectedTicketData.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-festival-grey">Quantité:</span>
                            <span className="text-foreground">{quantity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-festival-grey">Prix unitaire:</span>
                            <span className="text-foreground">{selectedTicketData.price.toLocaleString()} FCFA</span>
                          </div>
                          <div className="flex justify-between font-bold text-lg pt-2 border-t">
                            <span className="text-foreground">Total:</span>
                            <span className="text-festival-green">{totalPrice.toLocaleString()} FCFA</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="festival" 
                      size="lg" 
                      className="w-full"
                      disabled={!selectedTicket}
                    >
                      Confirmer la réservation
                    </Button>

                    <p className="text-xs text-festival-grey text-center">
                      En confirmant votre réservation, vous acceptez nos conditions générales de vente.
                      Un email de confirmation vous sera envoyé avec les détails de paiement.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;