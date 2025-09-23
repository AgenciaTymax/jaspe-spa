import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Space from "@/components/Space";
import Professionals from "@/components/Professionals";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Space />
      <Professionals />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;