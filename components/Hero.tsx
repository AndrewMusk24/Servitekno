
import React from 'react';
import { ChevronDown, Dog, Car } from 'lucide-react';
import { Page } from '../App.tsx';

interface HeroProps {
  onNavigate: (page: Page, section?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-blue-900">
      {/* Fondo de pantalla completa con la nueva imagen solicitada */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        role="img"
        aria-label="Fondo principal Servitekno"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1657655914656-453ce9ee519d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        {/* Overlay protector: Oscurecemos los extremos para que el texto blanco destaque */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-blue-900/80" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h1 className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-8 leading-[1.1] md:leading-tight animate-fade-in-up tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] uppercase">
          Especialistas en <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Centros de Lavado</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] font-semibold drop-shadow-md px-2">
          Diseñamos, fabricamos e instalamos los centros de lavado en autoservicio más rentables y ecológicos del mercado. 
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          <button 
            onClick={() => onNavigate('ventajas')}
            className="group w-full sm:w-80 bg-blue-600 hover:bg-blue-500 text-white text-base md:text-lg font-black px-8 py-4 md:py-5 rounded-2xl transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-blue-500/50 flex items-center justify-center space-x-3"
          >
            <Car size={24} className="group-hover:scale-110 transition-transform shrink-0" />
            <span className="whitespace-nowrap uppercase tracking-wider">BOXES DE LAVADO</span>
          </button>
          
          <button 
            onClick={() => onNavigate('ventajas', 'lavado-mascotas')}
            className="group w-full sm:w-80 bg-blue-600 hover:bg-blue-500 text-white text-base md:text-lg font-black px-8 py-4 md:py-5 rounded-2xl transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-blue-500/50 flex items-center justify-center space-x-3"
          >
            <Dog size={24} className="group-hover:scale-110 transition-transform shrink-0" />
            <span className="whitespace-nowrap uppercase tracking-wider">LAVADO DE MASCOTAS</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
