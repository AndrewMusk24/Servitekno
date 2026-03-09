import React, { useState } from 'react';
import { PRODUCTS } from '../constants.tsx';
import { ChevronDown } from 'lucide-react';

const Products: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-white font-black">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="equipos" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-400 font-bold tracking-wider uppercase mb-2">Nuestras Soluciones</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold">Gama de boxes</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group relative overflow-hidden rounded-3xl bg-gray-800 border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`Modelo de centro de lavado Servitekno ${product.name}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4">{product.name}</h4>
                
                <div className={`transition-all duration-500 overflow-hidden ${expandedId === product.id ? 'max-h-96 opacity-100' : 'max-h-12 opacity-70'}`}>
                  <p className={`text-gray-400 leading-relaxed whitespace-pre-line ${expandedId === product.id ? '' : 'line-clamp-2'}`}>
                    {renderDescription(product.description)}
                  </p>
                </div>

                <div className="mt-8 flex justify-center">
                  <button 
                    onClick={() => toggleExpand(product.id)}
                    aria-label={expandedId === product.id ? "Ver menos" : "Ver descripción completa"}
                    className="group/btn flex flex-col items-center gap-2 text-blue-400 hover:text-white transition-colors"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-0 group-hover/btn:opacity-100 transition-opacity">
                      {expandedId === product.id ? 'Menos' : 'Más'}
                    </span>
                    <div className={`p-3 rounded-full bg-gray-700/50 group-hover/btn:bg-blue-600 transition-all transform ${expandedId === product.id ? 'rotate-180' : ''}`}>
                      <ChevronDown size={24} className="animate-bounce-subtle" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Products;