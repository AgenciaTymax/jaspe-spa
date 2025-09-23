import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower, Waves, Heart, Sparkles, Leaf, Sun } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Massagem Relaxante",
      description: "Massagem completa para alívio do estresse e tensões musculares",
      duration: "60 min",
      price: "R$ 180"
    },
    {
      icon: <Flower className="w-8 h-8" />,
      title: "Massagem Aromaterápica",
      description: "Combinação de técnicas de massagem com óleos essenciais terapêuticos",
      duration: "75 min",
      price: "R$ 220"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Massagem para Casais",
      description: "Experiência romântica e relaxante em ambiente exclusivo",
      duration: "90 min",
      price: "R$ 350"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Ritual de Renovação",
      description: "Tratamento completo com esfoliação, hidratação e massagem",
      duration: "120 min",
      price: "R$ 290"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Massagem Terapêutica",
      description: "Focada no alívio de dores específicas e recuperação muscular",
      duration: "60 min",
      price: "R$ 200"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Day Spa Completo",
      description: "Dia inteiro de relaxamento com múltiplos tratamentos",
      duration: "6 horas",
      price: "R$ 450"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra uma variedade de tratamentos pensados para restaurar seu equilíbrio 
            e renovar suas energias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 bg-gradient-card border-spa-stone/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-spa-sage-light rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {service.duration}
                  </span>
                  <span className="text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;