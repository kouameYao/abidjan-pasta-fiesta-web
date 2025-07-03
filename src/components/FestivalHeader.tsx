import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FestivalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "À Propos", href: "#about" },
    { label: "Programme", href: "#program" },
    { label: "Chefs", href: "#chefs" },
    { label: "Billetterie", href: "#tickets" },
    { label: "Infos Pratiques", href: "#info" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-card z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-festival-green">
            Festival des Pâtes
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-festival-grey hover:text-festival-green transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button variant="festival" size="sm">
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-festival-grey-light">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-festival-grey hover:text-festival-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="festival" size="sm" className="w-full">
                Réserver
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default FestivalHeader;