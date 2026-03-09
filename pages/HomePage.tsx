
import React from 'react';
import Hero from '../components/Hero.tsx';
import Features from '../components/Features.tsx';
import Products from '../components/Products.tsx';
import { Page } from '../App.tsx';
import { MessageSquare } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page, section?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Capa de fondo global fija con la nueva imagen (opacidad baja para textura) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.06] z-0">
        <img 
          src="https://images.unsplash.com/photo-1657655914656-453ce9ee519d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className="w-full h-full object-cover" 
          alt="" 
          aria-hidden="true"
        />
      </div>

      <Hero onNavigate={onNavigate} />
      
      {/* Franja de estadísticas con fondo de centro de lavado profesional */}
      <section className="relative bg-blue-900 overflow-hidden py-24">
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=1920" 
             className="w-full h-full object-cover mix-blend-overlay"
             alt="Centro de lavado Servitekno en funcionamiento"
           />
           <div className="absolute inset-0 bg-blue-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white relative z-10">
          <div className="group">
            <p className="text-5xl md:text-6xl font-black mb-1 animate-fade-in-up group-hover:scale-110 transition-transform tracking-tighter">+300</p>
            <p className="text-blue-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Instalaciones</p>
          </div>
          <div className="group">
            <p className="text-5xl md:text-6xl font-black mb-1 animate-fade-in-up group-hover:scale-110 transition-transform tracking-tighter" style={{ animationDelay: '0.1s' }}>365</p>
            <p className="text-blue-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Días/Año Soporte Técnico</p>
          </div>
          <div className="group">
            <p className="text-5xl md:text-6xl font-black mb-1 animate-fade-in-up group-hover:scale-110 transition-transform tracking-tighter" style={{ animationDelay: '0.2s' }}>14m</p>
            <p className="text-blue-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">ROI Promedio</p>
          </div>
          <div className="group">
            <p className="text-5xl md:text-6xl font-black mb-1 animate-fade-in-up group-hover:scale-110 transition-transform tracking-tighter" style={{ animationDelay: '0.3s' }}>-80%</p>
            <p className="text-blue-300 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Ahorro Agua</p>
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <Features />
      </div>
      
      {/* Sección Call to Action con fondo de centro de lavado tecnológico y resultado impecable */}
      <section className="relative py-44 overflow-hidden">
         <div 
           className="absolute inset-0 bg-cover bg-fixed bg-center"
           role="img"
           aria-label="Coche impecable saliendo de un box de lavado profesional Servitekno"
           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1632733711679-5292d6863670?auto=format&fit=crop&q=80&w=1920')` }}
         >
           {/* Overlay oscuro uniforme para destacar el texto centrado */}
           <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-5xl md:text-7xl font-black text-white mb-8 animate-fade-in-up tracking-tighter uppercase leading-none drop-shadow-2xl">
                TU ÉXITO,<br/><span className="text-blue-400">NUESTRO OBJETIVO</span>
              </h3>
              <p className="text-xl md:text-2xl text-white mb-12 font-medium leading-relaxed drop-shadow-lg opacity-90">
                Servitekno te entrega el centro listo para facturar.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => onNavigate('rentabilidad')}
                  className="group relative w-full sm:w-auto bg-blue-600 text-white text-lg font-black px-12 py-5 rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 uppercase tracking-wider">CALCULAR RENTABILIDAD</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </div>
            </div>
         </div>
      </section>

      <div className="relative z-10">
        <Products />
      </div>

      {/* Invitación a Contacto - Reemplaza a la Newsletter */}
      <section className="bg-white py-32 relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <div className="inline-block p-4 bg-blue-50 rounded-3xl mb-8 shadow-sm">
             <MessageSquare className="w-10 h-10 text-blue-600" />
           </div>
           <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">HABLEMOS DE SU PRÓXIMO CENTRO</h3>
           <p className="text-xl text-gray-500 mb-12 leading-relaxed">
             Estamos listos para asesorarle.
           </p>
           
           <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => onNavigate('contacto')}
                className="group w-full sm:w-auto bg-gray-900 text-white text-xl font-black px-16 py-6 rounded-2xl transition-all shadow-2xl hover:bg-blue-600 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <span>SOLICITAR INFORMACIÓN</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-ping"></div>
              </button>
              
              <div className="flex items-center gap-4 text-gray-400 font-bold uppercase tracking-widest text-xs">
                <span className="w-8 h-px bg-gray-200"></span>
                <span>Atención personalizada</span>
                <span className="w-8 h-px bg-gray-200"></span>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
