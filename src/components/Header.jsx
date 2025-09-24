import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
      <nav className="container-max">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{
          scale: 1.05
        }} className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="font-serif text-2xl font-bold gradient-text">Jaspe Spa</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['home', 'servicos', 'espaco', 'profissionais', 'recomendacoes'].map(item => <motion.button key={item} whileHover={{
            scale: 1.05
          }} onClick={() => scrollToSection(item)} className="text-slate-700 hover:text-brand-orange-strong font-medium transition-colors duration-200 capitalize">
                {item === 'servicos' ? 'Serviços' : item === 'espaco' ? 'Espaço' : item === 'recomendacoes' ? 'Recomendações' : item}
              </motion.button>)}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden glass-effect rounded-lg mt-2 p-4">
            {['home', 'servicos', 'espaco', 'profissionais', 'recomendacoes'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left py-2 text-slate-700 hover:text-brand-orange-strong font-medium transition-colors duration-200 capitalize">
                {item === 'servicos' ? 'Serviços' : item === 'espaco' ? 'Espaço' : item === 'recomendacoes' ? 'Recomendações' : item}
              </button>)}
          </motion.div>}
      </nav>
    </motion.header>;
};
export default Header;