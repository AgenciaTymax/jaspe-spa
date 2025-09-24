import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Heart, Flower, Zap } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: 'Massagem Relaxante',
      description: 'Técnicas suaves para aliviar o estresse e promover relaxamento profundo.',
      duration: '60 min',
      price: 'R$ 180'
    },
    {
      icon: Heart,
      title: 'Massagem Terapêutica',
      description: 'Tratamento especializado para alívio de dores musculares e tensões.',
      duration: '90 min',
      price: 'R$ 250'
    },
    {
      icon: Flower,
      title: 'Aromaterapia',
      description: 'Massagem com óleos essenciais para equilibrar corpo e mente.',
      duration: '75 min',
      price: 'R$ 220'
    },
    {
      icon: Zap,
      title: 'Pedras Quentes',
      description: 'Terapia com pedras vulcânicas aquecidas para relaxamento profundo.',
      duration: '80 min',
      price: 'R$ 280'
    }
  ];

  const handleBooking = (serviceName) => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀"
    });
  };

  return (
    <section id="servicos" className="section-padding bg-brand-seashell">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold gradient-text mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos uma variedade de tratamentos personalizados para atender suas necessidades de bem-estar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-brand-seashell to-brand-orange-light/10 rounded-2xl p-6 card-hover border border-brand-orange-light/20"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-orange-strong to-brand-orange rounded-full">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-slate-800">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Duração:</span>
                    <span className="font-medium text-slate-700">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Preço:</span>
                    <span className="font-bold text-brand-orange-strong text-lg">{service.price}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleBooking(service.title)}
                  className="w-full bg-gradient-to-r from-brand-orange-strong to-brand-orange text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:from-brand-orange-strong hover:to-brand-orange-light hover:shadow-md"
                >
                  Agendar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;