
import React, { useState, useEffect } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import { Page } from '../App.tsx';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, section?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || currentPage !== 'inicio');
    };
    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Inicio', value: 'inicio' },
    { label: 'Tecnología', value: 'ventajas' },
    { label: 'Modelos', value: 'equipos' },
    { label: 'Rentabilidad', value: 'rentabilidad' },
  ];

  const handleNavClick = (value: Page) => {
    onNavigate(value);
    setIsMobileMenuOpen(false);
  };

  const navClass = isScrolled 
    ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
    : 'bg-transparent py-6';

  const textClass = isScrolled ? 'text-gray-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group" 
          onClick={() => handleNavClick('inicio')}
        >
          <Droplet className={`w-8 h-8 transition-transform group-hover:rotate-12 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`} />
          <span className={`text-2xl font-extrabold tracking-tight ${textClass}`}>
            SERVI<span className="text-blue-500">TEKNO</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`font-semibold transition-all hover:text-blue-500 relative py-1 ${
                currentPage === item.value 
                  ? 'text-blue-600' 
                  : isScrolled ? 'text-gray-600' : 'text-gray-100'
              }`}
            >
              {item.label}
              {currentPage === item.value && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-fade-in"></span>
              )}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contacto')}
            className={`px-8 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg ${
              currentPage === 'contacto'
                ? 'bg-blue-700 text-white shadow-blue-500/40 ring-2 ring-blue-300 ring-offset-2'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
            }`}
          >
            Contacto
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={textClass}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 text-2xl animate-fade-in">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-gray-900"><X size={32}/></button>
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`font-bold ${currentPage === item.value ? 'text-blue-600' : 'text-gray-800'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contacto')}
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl"
          >
            Contacto
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
