
import React from 'react';
import { FEATURES } from '../constants.tsx';

const Features: React.FC = () => {
  return (
    <section id="ventajas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-2">Por qué elegirnos</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">
            Calidad <span className="font-light text-gray-300">|</span> Rentabilidad <span className="font-light text-gray-300">|</span> Servicio
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros centros no solo lavan coches y mascotas, están diseñados para maximizar sus beneficios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="mb-4 bg-white p-3 inline-block rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
