import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
import homeImage from "../assets/hero.webp";

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
                src={homeImage}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/60"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
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
                  <button onClick={scrollToServices} className="px-6 py-3 rounded-lg bg-brand-orange-strong text-brand-seashell hover:bg-brand-orange transition">
                    Descobrir Serviços
                  </button>

                  <button className="px-6 py-3 rounded-lg bg-brand-orange-light text-brand-seashell hover:bg-brand-orange transition">
                    Agendar Consulta
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </section>;
};

export default Hero;