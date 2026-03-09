
import React, { useEffect } from 'react';
import { Box, Layout, Shield, Droplets, Zap, Ruler, CheckCircle2, Minus, Dog } from 'lucide-react';

interface TechPageProps {
  scrollTarget?: string | null;
}

const TechPage: React.FC<TechPageProps> = ({ scrollTarget }) => {
  useEffect(() => {
    if (scrollTarget === 'lavado-mascotas') {
      const element = document.getElementById('lavado-mascotas');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [scrollTarget]);

  const salasTecnicas = [
    {
      title: "Contenedor Compacto",
      subtitle: "Para 2 a 3 boxes",
      desc: "Solución optimizada para espacios reducidos o instalaciones de pequeño formato. Este contenedor autoportante alberga toda la maquinaria necesaria (bombas, dosificadores, caldera) facilitando una instalación rápida y un mantenimiento sencillo.",
      specs: ["Dimensiones reducidas", "Instalación Plug & Play", "Sin ampliaciones"],
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sala Técnica PVC Gran Formato",
      subtitle: "Para 2 a 6 boxes",
      desc: "Instalación con cerramiento de PVC de alta resistencia sobre suelo de hormigón existente. Ofrece un espacio interior amplio para una gestión cómoda de múltiples pistas de lavado con tratamiento de aguas.",
      specs: ["Cerramiento PVC duradero", "Fácil limpieza y acceso", "Máxima amplitud interior"],
      img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Contenedor de acero + Panel Sándwich",
      subtitle: "PARA 2 A 6 BOXES",
      desc: "Amplia sala técnica robusta de máxima seguridad tipo contenedor autoportante con cerramiento integral en panel de sándwich ignífugo. Proporciona el mejor aislamiento térmico y acústico, protegiendo los equipos en climas extremos y reduciendo el ruido operativo.",
      specs: ["Aislamiento térmico", "Aislamiento acústico", "Núcleo ignífugo"],
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const estructurasBoxes = [
    {
      title: "Estructura Aneto",
      desc: "Diseño funcional fabricado íntegramente en acero galvanizado en caliente para prevenir la corrosión. Equipada con mamparas separadoras de PVC de alta densidad, combinando resistencia estructural con un coste competitivo.",
      features: ["Acero Galvanizado", "Mamparas PVC", "Montaje modular"],
      img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Estructura Box",
      desc: "Nuestra opción más elegante y duradera. Pilares de acero inoxidable, mamparas de PVC de alta resistencia y techo fabricado en panel sándwich aislante. Ideal para centros que buscan una imagen de alta gama.",
      features: ["Pilares Inox", "Techo Panel Sándwich", "Estética minimalista"],
      img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Estructura Arcus",
      desc: "Vanguardia arquitectónica en el lavado. Formada por semicírculos de acero galvanizado con cerramientos en policarbonato reforzado. El techo de policarunato translúcido permite el paso de luz natural, creando un ambiente de lavado agradable y luminoso.",
      features: ["Diseño Semicircular", "Policarbonato Translúcido", "Máxima luminosidad"],
      img: "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const equiposEspeciales = [
    {
      title: "Lavamascotas Can Rentat",
      desc: "Bañera ergonómica diseñada específicamente para el confort animal y la facilidad de uso del propietario. Fabricada totalmente en acero inoxidable, garantiza una higiene total. Al finalizar cada lavado se desparasita automáticamente.",
      programs: ["Lavado con Champú", "Desparasitado Activo", "Aclarado Suave", "Secado de Alta Eficiencia"],
      img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-gray-50">
      {/* Header Minimalista */}
      <header className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 animate-fade-in-up tracking-tighter uppercase leading-[1.1]">
            Nuestros <br className="hidden md:block"/><span className="text-blue-400">Equipos</span>
          </h1>
          <p className="text-blue-300 font-bold uppercase tracking-widest text-xs md:text-sm">Tecnología de vanguardia para su inversión</p>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
          <Box size={500} className="text-blue-500" />
        </div>
      </header>

      {/* Sección 1: Salas Técnicas */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20">
          <div className="flex items-center space-x-3 text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3">
            <Layout size={18} />
            <span>El corazón del centro</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase leading-none">Salas Técnicas</h2>
          <p className="text-lg md:text-xl text-gray-500 mt-3 max-w-3xl font-medium">Potencia y control absoluto en cada instalación.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {salasTecnicas.map((sala, idx) => (
            <div key={idx} className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col group">
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img src={sala.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={sala.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-blue-600 px-3 py-1 rounded-full">{sala.subtitle}</span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1">
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase tracking-tight text-gray-900">{sala.title}</h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6 md:mb-8">{sala.desc}</p>
                <ul className="space-y-2 md:space-y-3">
                  {sala.specs.map((spec, sidx) => {
                    const isNeutral = spec === "Sin ampliaciones";
                    return (
                      <li key={sidx} className="flex items-center space-x-3 text-xs md:text-sm font-bold text-gray-700">
                        {isNeutral ? (
                          <Minus size={14} className="text-gray-400" />
                        ) : (
                          <CheckCircle2 size={14} className="text-blue-500" />
                        )}
                        <span className={isNeutral ? 'text-gray-400 font-normal' : ''}>{spec}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divisor */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-gray-200" />
      </div>

      {/* Sección 2: Estructuras */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20 text-left md:text-right">
          <div className="flex items-center md:justify-end space-x-3 text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3">
            <span className="hidden md:inline">Protección y diseño</span>
            <Shield size={18} />
            <span className="md:hidden">Protección y diseño</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase leading-none">Estructuras Boxes</h2>
          <p className="text-lg md:text-xl text-gray-500 mt-3 md:ml-auto max-w-3xl font-medium">Modularidad que garantiza visibilidad y durabilidad.</p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {estructurasBoxes.map((est, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-3/5 relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden group h-[300px] md:h-[400px]">
                <img src={est.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={est.title} />
              </div>
              <div className="lg:w-2/5 bg-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[3rem] shadow-xl flex flex-col justify-center border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-tighter text-blue-600 leading-tight">{est.title}</h3>
                <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 md:mb-8">{est.desc}</p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {est.features.map((feat, fidx) => (
                    <span key={fidx} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-black uppercase tracking-widest">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divisor */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-gray-200" />
      </div>

      {/* Sección 3: Equipos Especiales (Lavamascotas) */}
      <section id="lavado-mascotas" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-20">
          <div className="flex items-center space-x-3 text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3">
            <Dog size={18} />
            <span>Bienestar animal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase leading-none">Lavado Mascotas</h2>
          <p className="text-lg md:text-xl text-gray-500 mt-3 max-w-3xl font-medium">Diversifique su negocio con valor añadido.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {equiposEspeciales.map((equipo, idx) => (
            <div key={idx} className="bg-white rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row group min-h-[auto] md:min-h-[500px]">
              <div className="lg:w-1/2 relative overflow-hidden h-[300px] md:h-auto">
                <img src={equipo.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={equipo.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
              </div>
              <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 uppercase tracking-tighter text-gray-900 leading-tight">{equipo.title}</h3>
                <p className="text-base md:text-xl text-gray-500 leading-relaxed mb-8 md:mb-10">{equipo.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-8">
                  {equipo.programs.map((program, pidx) => (
                    <div key={pidx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        {/* Fix: use responsive tailwind classes instead of invalid md:size prop */}
                        <Droplets className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="font-black uppercase text-[10px] md:text-sm tracking-wider text-gray-700">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechPage;
