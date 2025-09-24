import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Leaf } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleContact = (type, link = null) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      toast({
        title: "🚧 Esta funcionalidade ainda não foi implementada",
        description: "Mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀"
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-brand-orange-light" />
              <span className="font-serif text-2xl font-bold text-white">
                Jasper Spa
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Seu refúgio de tranquilidade e bem-estar. Oferecemos tratamentos personalizados para renovar corpo e mente.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleContact('instagram', 'https://www.instagram.com/jaspespa_/')}
                className="w-10 h-10 bg-brand-orange-strong rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleContact('facebook')}
                className="w-10 h-10 bg-brand-orange-strong rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Localização */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-serif text-xl font-semibold text-brand-orange-light">
              Localização
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">
                    Rua Frei Bernardino, 483 - Joaquim Távora (Fortaleza)<br />
                    Fortaleza - CE, 60130-220
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleContact('maps', 'https://maps.app.goo.gl/bmVek2JHChwjcnwq8')}
                className="text-brand-orange-light hover:text-brand-orange transition-colors text-sm"
              >
                Ver no Google Maps →
              </button>
            </div>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-serif text-xl font-semibold text-brand-orange-light">
              Contato
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => handleContact('whatsapp', 'https://wa.me/5585999280640')}
                className="flex items-center space-x-3 text-slate-300 hover:text-brand-orange-light transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(85) 99928-0640</span>
              </button>
              <button
                onClick={() => handleContact('email')}
                className="flex items-center space-x-3 text-slate-300 hover:text-brand-orange-light transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contato@jasperspa.com.br</span>
              </button>
            </div>
          </motion.div>

          {/* Horário de Funcionamento */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-serif text-xl font-semibold text-brand-orange-light">
              Funcionamento
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-brand-orange-light" />
                <div className="text-slate-300">
                  <p>Segunda a Sexta: 9h às 20h</p>
                  <p>Sábado: 9h às 18h</p>
                  <p>Domingo: 10h às 16h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Linha divisória e créditos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-slate-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 Jasper Spa. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Desenvolvido por</span>
              <button
                onClick={() => handleContact('tymax')}
                className="text-brand-orange-light hover:text-brand-orange transition-colors font-medium"
              >
                TYMAX
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;