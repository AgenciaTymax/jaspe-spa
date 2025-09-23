import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Fernanda",
      rating: 5,
      comment: "Experiência incrível! O atendimento foi excepcional desde a recepção até o final do tratamento. Saí renovada e completamente relaxada.",
      treatment: "Ritual de Renovação",
      date: "Setembro 2024"
    },
    {
      name: "Carlos Eduardo",
      rating: 5,
      comment: "Ambiente maravilhoso e profissionais altamente qualificados. A massagem terapêutica resolveu minhas dores nas costas. Recomendo muito!",
      treatment: "Massagem Terapêutica",
      date: "Agosto 2024"
    },
    {
      name: "Ana Beatriz",
      rating: 5,
      comment: "O Day Spa foi perfeito para comemorar meu aniversário. Cada detalhe foi pensado com carinho. Uma experiência única de bem-estar.",
      treatment: "Day Spa Completo",
      date: "Setembro 2024"
    },
    {
      name: "Roberto Silva",
      rating: 5,
      comment: "Profissionais excelentes e ambiente muito aconchegante. A massagem aromaterápica superou todas as minhas expectativas.",
      treatment: "Massagem Aromaterápica",
      date: "Julho 2024"
    },
    {
      name: "Juliana Costa",
      rating: 5,
      comment: "Lugar perfeito para desconectar da rotina. O atendimento personalizado e a qualidade dos tratamentos são incomparáveis.",
      treatment: "Massagem Relaxante",
      date: "Agosto 2024"
    },
    {
      name: "Pedro Henrique",
      rating: 5,
      comment: "Fizemos a massagem para casais e foi uma experiência romântica e relaxante. Ambiente privativo e atendimento impecável.",
      treatment: "Massagem para Casais",
      date: "Setembro 2024"
    }
  ];

  return (
    <section id="recomendacoes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
            Recomendações dos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra o que nossos clientes dizem sobre suas experiências no Jasper Spa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 bg-gradient-card border-spa-stone/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-spa-sage opacity-50" />
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  "{testimonial.comment}"
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="border-t border-spa-stone/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-spa-sage">
                        {testimonial.treatment}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-spa-cream p-6 rounded-2xl">
            <div className="text-3xl font-bold text-primary">4.9</div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Baseado em 150+ avaliações
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;