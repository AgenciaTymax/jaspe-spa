import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      title: 'Sala de Massagem Principal',
      description: 'Ambiente tranquilo e aconchegante'
    },
    {
      title: 'Área de Relaxamento',
      description: 'Espaço para meditação e descanso'
    },
    {
      title: 'Sala de Aromaterapia',
      description: 'Tratamentos com óleos essenciais'
    },
    {
      title: 'Recepção',
      description: 'Ambiente acolhedor de boas-vindas'
    },
    {
      title: 'Jardim Zen',
      description: 'Espaço externo para contemplação'
    },
    {
      title: 'Sala VIP',
      description: 'Tratamentos exclusivos para casais'
    }
  ];

  return (
    <section id="espaco" className="section-padding bg-gradient-to-br from-brand-seashell to-brand-orange-light/10">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold gradient-text mb-6">
            Nosso Espaço
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça nossos ambientes cuidadosamente projetados para proporcionar máximo conforto e tranquilidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl card-hover"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={image.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;