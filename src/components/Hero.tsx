import { Button } from "@/components/ui/button";
import heroImage from "@/assets/spa-hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 animate-fade-in">
          Jasper Spa
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up">
          Desperte seus sentidos em um oásis de tranquilidade e bem-estar. 
          Experiências únicas de relaxamento e renovação.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Button size="lg" className="bg-white text-primary hover:bg-spa-cream px-8 py-4 text-lg">
            Agendar Agora
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
          >
            Nossos Serviços
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;