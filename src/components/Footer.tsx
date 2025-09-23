import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Jasper Spa Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-6">Jasper Spa</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Seu refúgio de tranquilidade e bem-estar. Oferecemos experiências 
              únicas de relaxamento em um ambiente acolhedor e sofisticado.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Localização */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Localização
            </h4>
            <div className="space-y-4 text-primary-foreground/80">
              <div>
                <p className="font-medium mb-2">Endereço:</p>
                <p>Rua das Flores, 123</p>
                <p>Jardim Botânico</p>
                <p>São Paulo - SP, 04567-890</p>
              </div>
              <div>
                <p className="font-medium mb-2">Como chegar:</p>
                <p>Próximo ao Parque Ibirapuera</p>
                <p>Estacionamento próprio disponível</p>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contato
            </h4>
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <div>
                  <p>(11) 9 9999-9999</p>
                  <p className="text-sm">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <div>
                  <p>contato@jasperspa.com.br</p>
                  <p className="text-sm">Respondemos em até 2h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p className="font-medium mb-1">Horários:</p>
                  <p>Seg - Sex: 9h às 20h</p>
                  <p>Sáb: 9h às 18h</p>
                  <p>Dom: 10h às 16h</p>
                </div>
              </div>
            </div>
          </div>

          {/* TYMAX */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">TYMAX</h4>
            <div className="space-y-4 text-primary-foreground/80">
              <div>
                <p className="font-medium mb-2">Desenvolvido por:</p>
                <p className="text-lg font-semibold">TYMAX Solutions</p>
              </div>
              <div>
                <p className="font-medium mb-2">Tecnologia & Inovação:</p>
                <p>Soluções digitais para o seu negócio</p>
              </div>
              <div>
                <p className="font-medium mb-2">Contato TYMAX:</p>
                <p>contato@tymax.com.br</p>
                <p>(11) 9 8888-8888</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Jasper Spa. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Cancelamentos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;