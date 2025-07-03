import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Festival Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-festival-green">Festival des Pâtes</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              L'événement culinaire incontournable d'Abidjan célébrant la diversité 
              et l'excellence des pâtes du monde entier.
            </p>
            <div className="flex items-center gap-2 text-festival-green">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">29-30 Novembre 2025</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-festival-green transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#program" className="text-gray-300 hover:text-festival-green transition-colors">
                  Programme
                </a>
              </li>
              <li>
                <a href="#chefs" className="text-gray-300 hover:text-festival-green transition-colors">
                  Chefs Invités
                </a>
              </li>
              <li>
                <a href="#tickets" className="text-gray-300 hover:text-festival-green transition-colors">
                  Billetterie
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-festival-green mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">+225 07 47 31 11 41</p>
                  <p className="text-gray-300 text-sm">+225 05 76 72 30 34</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-festival-green mt-0.5" />
                <p className="text-gray-300 text-sm">info@festivaldespatesabidjan.ci</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-festival-green mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Canal au Bois, Treichville</p>
                  <p className="text-gray-300 text-sm">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Partenaires</h4>
            <p className="text-gray-300 text-sm mb-4">
              Nous remercions chaleureusement tous nos partenaires et sponsors 
              qui rendent possible ce festival.
            </p>
            <a 
              href="#contact" 
              className="text-festival-green hover:text-festival-green-light transition-colors text-sm"
            >
              Devenir partenaire →
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Festival des Pâtes d'Abidjan. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-festival-green transition-colors text-sm">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-400 hover:text-festival-green transition-colors text-sm">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;