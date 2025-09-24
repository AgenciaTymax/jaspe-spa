import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-seashell"
          >
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-30"
                alt="Spa relaxante com ambiente zen"
                src="https://horizons-cdn.hostinger.com/cb5cdca2-7f45-4314-9aed-71d3211a625a/img_0105-M0dhY.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/60 to-brand-orange/40"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex justify-center"
                >
                  {/* Ícone agora em laranja claro */}
                  <Sparkles className="h-16 w-16 text-brand-orange-light" />
                </motion.div>

                <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-seashell leading-tight">
                  Jaspe <span className="bg-gradient-to-r from-brand-orange-strong to-brand-orange-light bg-clip-text text-transparent">Spa</span>
                </h1>

                <p className="text-xl md:text-2xl text-brand-seashell/90 max-w-3xl mx-auto leading-relaxed">
                  Seu refúgio de tranquilidade e bem-estar. Descubra a harmonia perfeita
                  entre corpo e mente.
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                >
                  {/* Botão primário em laranja forte */}
                  <button onClick={scrollToServices} className="px-6 py-3 rounded-lg bg-brand-orange-strong text-brand-seashell hover:bg-brand-orange transition">
                    Descobrir Serviços
                  </button>

                  {/* Botão secundário em laranja claro */}
                  <button className="px-6 py-3 rounded-lg bg-brand-orange-light text-brand-seashell hover:bg-brand-orange transition">
                    Agendar Consulta
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <motion.button
                  onClick={scrollToServices}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-brand-seashell/70 hover:text-brand-seashell transition-colors"
                >
                  <ArrowDown className="h-8 w-8" />
                </motion.button>
              </motion.div>
            </div>
          </section>;
};

export default Hero;