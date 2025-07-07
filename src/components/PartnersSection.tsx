const PartnersSection = () => {
  const partners = [
    {
      name: "Air Côte d'Ivoire",
      category: "Transport Officiel"
    },
    {
      name: "BCEAO",
      category: "Partenaire Bancaire"
    },
    {
      name: "Orange CI",
      category: "Partenaire Télécom"
    },
    {
      name: "SODECI",
      category: "Partenaire Logistique"
    },
    {
      name: "Groupe CFAO",
      category: "Partenaire Distribution"
    },
    {
      name: "Nestlé CI",
      category: "Partenaire Alimentaire"
    },
    {
      name: "Jumia Food",
      category: "Partenaire Digital"
    },
    {
      name: "Total Energies CI",
      category: "Partenaire Énergie"
    }
  ];

  return (
    <section className="py-20 bg-festival-grey-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-lg text-festival-grey max-w-3xl mx-auto">
            Des entreprises leaders en Côte d'Ivoire et en Afrique de l'Ouest nous font confiance 
            pour des événements d'exception. Si vous n'êtes pas encore partenaire, 
            vos concurrents le sont probablement déjà.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-full h-16 bg-festival-grey-light rounded-lg flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-festival-grey">
                  {partner.name.split(' ').map(word => word[0]).join('')}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-center text-sm mb-1">
                {partner.name}
              </h3>
              <p className="text-xs text-festival-grey text-center">
                {partner.category}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-festival-grey mb-4">
            Vous souhaitez devenir partenaire du Festival des Pâtes d'Abidjan ?
          </p>
          <a 
            href="#contact" 
            className="text-festival-green hover:text-festival-green font-semibold"
          >
            Contactez-nous pour un partenariat →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;