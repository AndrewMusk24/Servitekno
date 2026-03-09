
import React from 'react';
import { PRODUCTS } from '../constants.tsx';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const CatalogPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="mb-16">
          <h1 className="text-5xl font-black mb-4">Catálogo de Equipos Servitekno</h1>
          <p className="text-xl text-gray-600">Soluciones modulares de lavado que crecen con tu negocio.</p>
        </header>

        <div className="space-y-32">
          {PRODUCTS.map((product, idx) => (
            <section key={product.id} className={`flex flex-col lg:flex-row gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl">
                  <img 
                    src={product.image} 
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={`Maquinaria profesional de lavado de coches ${product.name} de Servitekno`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                     <span className="text-white text-3xl font-bold">{product.price}</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
                  <p className="text-xl text-gray-500 leading-relaxed">{product.description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Estructura de Acero Inox', 'Pantallas Táctiles 10"', 'Sistemas de Pago NFC', 'Control por App IoT', 'Iluminación LED RGB', 'Lanzas de Alta Presión'].map(feature => (
                    <div key={feature} className="flex items-center space-x-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-blue-500 shrink-0" size={20} aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
                    <span>Solicitar Ficha Técnica</span>
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                  <button className="flex-1 border-2 border-gray-200 text-gray-900 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-all">
                    Galería de Fotos
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
