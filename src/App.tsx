import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MixSection from './components/MixSection';
import EventSection from './components/EventSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen animate-gradient">
      <Navigation />
      <main className="space-y-24">
        <Hero />
        <MixSection />
        <EventSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;