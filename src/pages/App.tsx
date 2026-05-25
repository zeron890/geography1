// Page: App — root component composing all sections

import React, { useState, useEffect } from 'react';
import Header from '../components/organisms/Header';
import HeroSection from '../components/organisms/HeroSection';
import MapSection from '../components/organisms/MapSection';
import ResourcesSection from '../components/organisms/ResourcesSection';
import StatsSection from '../components/organisms/StatsSection';
import Footer from '../components/organisms/Footer';

const App: React.FC = () => {
  // Persist dark mode preference in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <Header darkMode={darkMode} onToggleDark={() => setDarkMode((d) => !d)} />

      <main>
        <HeroSection />
        <MapSection />
        <ResourcesSection />
        <StatsSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
