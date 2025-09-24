import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Santos',
      rating: 5,
      comment: 'Experiência incrível! A massagem relaxante me ajudou muito com o estresse do trabalho. O ambiente é perfeito e os profissionais são excepcionais.',
      service: 'Massagem Relaxante'
    },
    {
      name: 'João Oliveira',
      rating: 5,
      comment: 'Sofria com dores nas costas há meses. Após algumas sessões de massagem terapêutica, sinto uma melhora significativa. Recomendo muito!',
      service: 'Massagem Terapêutica'
    },
    {
      name: 'Ana Paula',
      rating: 5,
      comment: 'A aromaterapia é simplesmente divina! Os óleos essenciais e o ambiente tranquilo proporcionam um relaxamento único. Voltarei sempre!',
      service: 'Aromaterapia'
    },
    {
      name: 'Carlos Eduardo',
      rating: 5,
      comment: 'Como atleta, preciso cuidar bem dos músculos. A massagem esportiva aqui é excepcional, me ajuda muito na recuperação pós-treino.',
      service: 'Massagem Esportiva'
    },
    {
      name: 'Fernanda Lima',
      rating: 5,
      comment: 'O tratamento com pedras quentes foi uma experiência transformadora. Saí renovada e com uma sensação de bem-estar indescritível.',
      service: 'Pedras Quentes'
    },
    {
      name: 'Ricardo Souza',
      rating: 5,
      comment: 'Atendimento impecável desde a recepção até o final do tratamento. O Jasper Spa se tornou meu refúgio de tranquilidade na cidade.',
      service: 'Experiência Geral'
    }
  ];

  return (
    <section id="recomendacoes" className="section-padding bg-gradient-to-br from-brand-seashell to-brand-orange-light/10">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold gradient-text mb-6">
            Recomendações dos Clientes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre suas experiências no Jasper Spa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 card-hover shadow-lg border border-brand-orange-light/20 relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-brand-orange-strong to-brand-orange rounded-full flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t border-brand-orange-light/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-brand-orange-strong">
                        {testimonial.service}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-orange-light/20 to-brand-orange/20 rounded-full flex items-center justify-center">
                      <span className="text-brand-orange-strong font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;