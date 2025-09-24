import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Clock } from 'lucide-react';

const Professionals = () => {
  const professionals = [
    {
      name: 'Ana Silva',
      specialty: 'Massagem Terapêutica',
      experience: '8 anos',
      description: 'Especialista em técnicas de alívio de dores musculares e reabilitação. Formada em Fisioterapia com especialização em massoterapia.',
      certifications: ['Massagem Sueca', 'Deep Tissue', 'Trigger Points']
    },
    {
      name: 'Carlos Mendes',
      specialty: 'Aromaterapia',
      experience: '6 anos',
      description: 'Expert em óleos essenciais e suas propriedades terapêuticas. Certificado internacional em aromaterapia clínica.',
      certifications: ['Aromaterapia Clínica', 'Reflexologia', 'Massagem Ayurvédica']
    },
    {
      name: 'Marina Costa',
      specialty: 'Relaxamento & Bem-estar',
      experience: '10 anos',
      description: 'Pioneira em técnicas de relaxamento profundo e meditação guiada. Especialista em redução de estresse e ansiedade.',
      certifications: ['Hot Stone', 'Massagem Relaxante', 'Meditação Mindfulness']
    },
    {
      name: 'Roberto Lima',
      specialty: 'Massagem Esportiva',
      experience: '12 anos',
      description: 'Especialista em recuperação muscular para atletas. Trabalhou com equipes profissionais de futebol e vôlei.',
      certifications: ['Massagem Esportiva', 'Liberação Miofascial', 'Bandagem Funcional']
    }
  ];

  return (
    <section id="profissionais" className="section-padding bg-brand-seashell">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold gradient-text mb-6">
            Nossos Profissionais
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça nossa equipe de especialistas dedicados ao seu bem-estar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionals.map((professional, index) => (
            <motion.div
              key={professional.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-brand-seashell to-brand-orange-light/10 rounded-2xl p-8 card-hover border border-brand-orange-light/20"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    className="w-24 h-24 rounded-full object-cover border-4 border-brand-orange-light" 
                    alt={`${professional.name} - ${professional.specialty}`}
                   src="https://images.unsplash.com/photo-1605614329878-5604c47a59d6" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-800 mb-1">
                      {professional.name}
                    </h3>
                    <p className="text-brand-orange-strong font-medium text-lg">
                      {professional.specialty}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{professional.experience} de experiência</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>5.0</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {professional.description}
                  </p>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-brand-orange-strong" />
                      <span className="font-medium text-slate-700">Certificações:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {professional.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="bg-brand-orange-light/20 text-brand-orange-strong px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {cert}
                        </span>
                      ))}
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

export default Professionals;