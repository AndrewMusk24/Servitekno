
import React, { useState } from 'react';
import { TrendingUp, DollarSign, Users, Award } from 'lucide-react';

const ROIPage: React.FC = () => {
  const [pistas, setPistas] = useState(4);
  const [lavadosDia, setLavadosDia] = useState(15);
  const ticketMedio = 4.0; // Actualizado a 4€ de media por lavado según solicitud

  const ingresosMes = pistas * lavadosDia * ticketMedio * 30;
  const gastosMes = ingresosMes * 0.45; // Estimación 45% gastos (agua, luz, químicos, mantenimiento)
  const beneficioMes = ingresosMes - gastosMes;
  const inversionEstimada = pistas * 12500 + 15000;
  const roiMeses = beneficioMes > 0 ? Math.round(inversionEstimada / beneficioMes) : 0;

  return (
    <div className="pt-20 md:pt-24 bg-gray-50 min-h-screen pb-16 md:pb-24">
      <div className="bg-blue-900 text-white py-16 md:py-24 mb-8 md:mb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 leading-tight">Inversión Inteligente</h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl leading-relaxed">
            Los boxes de lavado Servitekno son de alta calidad y eficacia en la limpieza de vehículos con precios ajustados y muy grandes márgenes de beneficio.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 hidden md:block">
           <TrendingUp size={400} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-1 bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100">
           <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-900">Simulador de Beneficio</h2>
           
           <div className="space-y-6 md:space-y-8">
              <div>
                <label className="block text-gray-500 font-bold mb-3 uppercase tracking-wider text-[10px] md:text-xs">Número de Pistas</label>
                <input 
                  type="range" min="2" max="8" 
                  value={pistas} 
                  onChange={(e) => setPistas(parseInt(e.target.value))}
                  className="w-full h-3 md:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="text-center font-black text-2xl md:text-3xl mt-2 text-blue-600">{pistas} Pistas</div>
              </div>

              <div>
                <label className="block text-gray-500 font-bold mb-3 uppercase tracking-wider text-[10px] md:text-xs">Vehículos por Pista / Día</label>
                <input 
                  type="range" min="10" max="65" 
                  value={lavadosDia} 
                  onChange={(e) => setLavadosDia(parseInt(e.target.value))}
                  className="w-full h-3 md:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="text-center font-black text-2xl md:text-3xl mt-2 text-blue-600">{lavadosDia} vehículos</div>
              </div>

              <div className="p-5 md:p-6 bg-blue-50 rounded-2xl border border-blue-100">
                 <p className="text-xs md:text-sm text-blue-600 mb-1 md:mb-2 font-bold uppercase tracking-tight">Inversión Estimada</p>
                 <p className="text-2xl md:text-3xl font-black text-blue-900">~ {inversionEstimada.toLocaleString()}€</p>
              </div>
           </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           {/* Card resaltada: Facturación Mensual */}
           <div className="bg-blue-600 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl text-white flex flex-col justify-between">
              <div>
                <DollarSign className="text-blue-200 mb-4 hidden md:block" size={40} />
                <h3 className="text-lg md:text-xl font-bold text-blue-100 uppercase tracking-tighter">Facturación Mensual</h3>
                <p className="text-4xl md:text-5xl font-black mt-2">{ingresosMes.toLocaleString()}€</p>
              </div>
              <p className="text-blue-200 mt-6 text-xs md:text-sm italic opacity-80">* Estimación basada en un ticket medio de 4€</p>
           </div>

           {/* Card estándar: Beneficio Neto Estimado */}
           <div className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between">
              <div>
                <TrendingUp className="text-blue-600 mb-4 hidden md:block" size={40} />
                <h3 className="text-lg md:text-xl font-bold text-gray-400 uppercase tracking-tighter">Beneficio Neto</h3>
                <p className="text-4xl md:text-5xl font-black text-gray-900 mt-2">{beneficioMes.toLocaleString()}€<span className="text-lg md:text-2xl ml-1 text-gray-400">/mes</span></p>
              </div>
              <p className="text-blue-600 mt-6 text-xs md:text-sm font-black uppercase tracking-widest">Retorno: ~{roiMeses} meses</p>
           </div>

           <div className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-900 uppercase tracking-tight">¿Por qué invertir en Servitekno?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-0">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center sm:mx-auto sm:mb-4 shrink-0"><Users className="text-blue-600" size={24} /></div>
                  <div>
                    <p className="font-bold text-gray-900">Mínimo Personal</p>
                    <p className="text-sm text-gray-500">Gestión automatizada 24/7.</p>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-0">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center sm:mx-auto sm:mb-4 shrink-0"><DollarSign className="text-blue-600" size={24} /></div>
                  <div>
                    <p className="font-bold text-gray-900">Pago al Contado</p>
                    <p className="text-sm text-gray-500">Sin facturas pendientes.</p>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-0">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center sm:mx-auto sm:mb-4 shrink-0"><Award className="text-blue-600" size={24} /></div>
                  <div>
                    <p className="font-bold text-gray-900">Alta Fidelización</p>
                    <p className="text-sm text-gray-500">Lavado recurrente semanal.</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ROIPage;
