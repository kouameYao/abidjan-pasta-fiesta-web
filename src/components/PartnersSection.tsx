const PartnersSection = () => {
  const partners = [
    {
      name: "Air Côte d'Ivoire",
      logo: "ACI"
    },
    {
      name: "BCEAO",
      logo: "BCEAO"
    },
    {
      name: "Orange CI",
      logo: "Orange"
    },
    {
      name: "SODECI",
      logo: "SODECI"
    },
    {
      name: "Groupe CFAO",
      logo: "CFAO"
    },
    {
      name: "Nestlé CI",
      logo: "Nestlé"
    },
    {
      name: "Jumia Food",
      logo: "Jumia"
    },
    {
      name: "Total Energies CI",
      logo: "Total"
    }
  ];

  return (
    <section className="py-20 bg-white">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="text-3xl font-bold text-festival-green">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
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