
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import ChatBot from './components/ChatBot.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import TechPage from './pages/TechPage.tsx';
import CatalogPage from './pages/CatalogPage.tsx';
import ROIPage from './pages/ROIPage.tsx';
import ContactPage from './pages/ContactPage.tsx';

export type Page = 'inicio' | 'ventajas' | 'equipos' | 'rentabilidad' | 'contacto';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('inicio');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  const handleNavigate = (page: Page, section?: string) => {
    setCurrentPage(page);
    setScrollTarget(section || null);
  };

  // Scroll to top on page change if no specific section target is set
  useEffect(() => {
    if (!scrollTarget) {
      window.scrollTo(0, 0);
    }
  }, [currentPage, scrollTarget]);

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio': return <HomePage onNavigate={handleNavigate} />;
      case 'ventajas': return <TechPage scrollTarget={scrollTarget} />;
      case 'equipos': return <CatalogPage />;
      case 'rentabilidad': return <ROIPage />;
      case 'contacto': return <ContactPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-blue-100 selection:text-blue-700 font-['Inter']">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="animate-fade-in">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
      <ChatBot />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
