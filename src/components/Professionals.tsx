import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Clock } from "lucide-react";

const Professionals = () => {
  const professionals = [
    {
      name: "Ana Carolina Silva",
      role: "Terapeuta Sênior",
      experience: "8 anos",
      specialties: ["Massagem Sueca", "Aromaterapia", "Reflexologia"],
      description: "Especialista em técnicas de relaxamento profundo e alívio de tensões musculares.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Rafael Martins",
      role: "Massagista Terapêutico",
      experience: "6 anos",
      specialties: ["Massagem Desportiva", "Quiropraxia", "Terapia Manual"],
      description: "Focado em recuperação muscular e tratamento de lesões através da massagem terapêutica.",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mariana Santos",
      role: "Especialista em Bem-Estar",
      experience: "10 anos",
      specialties: ["Hot Stones", "Massagem Ayurvédica", "Reiki"],
      description: "Mestre em técnicas holísticas e terapias energéticas para equilíbrio completo.",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1594824804732-ca8db2ac2015?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Gabriel Costa",
      role: "Terapeuta Holístico",
      experience: "5 anos",
      specialties: ["Massagem Relaxante", "Auriculoterapia", "Shiatsu"],
      description: "Especializado em harmonizar corpo e mente através de terapias orientais.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="profissionais" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
            Nossos Profissionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa equipe de terapeutas altamente qualificados, 
            dedicados a proporcionar a melhor experiência de bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionals.map((professional, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 bg-gradient-card border-spa-stone/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-soft group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-spa-sage text-white rounded-full p-2">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <CardTitle className="text-lg font-serif text-primary">
                  {professional.name}
                </CardTitle>
                <CardDescription className="text-spa-sage font-medium">
                  {professional.role}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {professional.experience} de experiência
                </div>

                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(professional.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    {professional.rating}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {professional.description}
                </p>

                <div className="flex flex-wrap gap-1 justify-center">
                  {professional.specialties.map((specialty, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-spa-cream text-primary border-spa-stone/30"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;