import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { QuoteFormSection } from './components/QuoteFormSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleSelectServiceForForm = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const formSection = document.getElementById('orcamento');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Header / Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Sobre a Empresa (Quem Somos) */}
        <AboutSection />

        {/* 4. Nossos Serviços */}
        <ServicesSection onSelectServiceForForm={handleSelectServiceForForm} />

        {/* 5. Diferenciais */}
        <DifferentialsSection />

        {/* 6. Chamada para Ação / Formulário de Orçamento */}
        <QuoteFormSection preselectedService={preselectedService} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* 7. Rodapé (Footer) */}
      <Footer />

      {/* Floating 24h WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
