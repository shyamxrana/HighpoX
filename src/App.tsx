import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { WhatWeCreate } from './components/WhatWeCreate';
import { FeaturedConcept } from './components/FeaturedConcept';
import { OurProcess } from './components/OurProcess';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { CtaBanner } from './components/CtaBanner';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { WorkItem } from './data/content';

export function App() {
  const [activeModalItem, setActiveModalItem] = useState<WorkItem | null>(null);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');

  const handleSelectPlan = (planName: string) => {
    setSelectedServicePreset(planName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryTitle: string) => {
    setSelectedServicePreset(categoryTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070907] text-[#f3f4f6] selection:bg-[#B9FD23] selection:text-black font-sans relative selection-lime">
      {/* Top Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Selected Work Section */}
        <SelectedWork onOpenModal={(item) => setActiveModalItem(item)} />

        {/* What We Create Section */}
        <WhatWeCreate onSelectCategory={handleSelectCategory} />

        {/* Featured Creative / Spec Concept */}
        <FeaturedConcept onOpenModal={(item) => setActiveModalItem(item)} />

        {/* Our Process */}
        <OurProcess />

        {/* Pricing */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* About Section */}
        <About />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Banner */}
        <CtaBanner />

        {/* Contact Form Section */}
        <ContactForm selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Video / Creative Preview Lightbox Modal */}
      <VideoModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </div>
  );
}

export default App;
