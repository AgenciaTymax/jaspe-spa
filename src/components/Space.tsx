import massageRoom from "@/assets/massage-room.jpg";
import relaxationArea from "@/assets/relaxation-area.jpg";
import spaReception from "@/assets/spa-reception.jpg";

const Space = () => {
  const spaces = [
    {
      image: massageRoom,
      title: "Salas de Massagem",
      description: "Ambientes aconchegantes e privados, cuidadosamente preparados para proporcionar máximo conforto e relaxamento durante seus tratamentos."
    },
    {
      image: relaxationArea,
      title: "Área de Relaxamento",
      description: "Espaço zen para momentos de contemplação antes e após os tratamentos, com decoração harmoniosa e atmosfera tranquila."
    },
    {
      image: spaReception,
      title: "Recepção Acolhedora",
      description: "Nossa recepção oferece um ambiente caloroso e acolhedor, onde você é recebido com todo cuidado e atenção que merece."
    }
  ];

  return (
    <section id="espaco" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
            Nosso Espaço
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada ambiente foi projetado para criar uma experiência única de bem-estar e tranquilidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-light mb-4 text-primary">
                Ambiente Pensado para Você
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                No Jasper Spa, cada detalhe foi cuidadosamente planejado para criar 
                uma atmosfera de paz e serenidade. Desde a iluminação suave até os 
                aromas naturais, tudo contribui para uma experiência transformadora.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossos espaços combinam elementos naturais com design moderno, 
                proporcionando o ambiente perfeito para desconectar-se do mundo 
                exterior e reconectar-se consigo mesmo.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={massageRoom}
              alt="Sala de massagem principal"
              className="w-full h-96 object-cover rounded-2xl shadow-elegant"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <div 
              key={index} 
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-serif font-light mb-3 text-primary">
                {space.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {space.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Space;