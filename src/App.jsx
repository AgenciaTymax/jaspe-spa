import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Professionals from '@/components/Professionals';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Jaspe Spa - Relaxamento e Bem-estar</title>
        <meta name="description" content="Descubra o Jaspe Spa, seu refúgio de tranquilidade. Oferecemos massagens terapêuticas, relaxantes e tratamentos de bem-estar com profissionais especializados." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-brand-seashell to-stone-100">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <Professionals />
        <Testimonials />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;