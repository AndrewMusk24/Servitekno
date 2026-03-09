
import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Navigation } from 'lucide-react';
import L from 'leaflet';

const ContactPage: React.FC = () => {
  const [ubicacion, setUbicacion] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Inicializar el mapa
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Madrid por defecto
      const initialPos: [number, number] = [40.4168, -3.7038];
      
      mapRef.current = L.map(mapContainerRef.current, {
        scrollWheelZoom: false
      }).setView(initialPos, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Icono personalizado para Servitekno
      const customIcon = L.divIcon({
        html: `<div class="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-xl transform -translate-x-1/2 -translate-y-full">
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [0, 0]
      });

      // Evento de clic en el mapa
      mapRef.current.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        actualizarMarcador(lat, lng, customIcon);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const actualizarMarcador = async (lat: number, lng: number, icon: L.DivIcon) => {
    if (!mapRef.current) return;

    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lng]);
    } else {
      markerRef.current = L.marker([lat, lng], { icon }).addTo(mapRef.current);
    }

    mapRef.current.panTo([lat, lng]);

    // Intentar obtener la dirección legible (Reverse Geocoding)
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
      const data = await response.json();
      if (data.display_name) {
        setUbicacion(data.display_name);
      } else {
        setUbicacion(`${lat.toFixed(5)}, ${lng.toFixed(5)}`);
      }
    } catch (error) {
      setUbicacion(`${lat.toFixed(5)}, ${lng.toFixed(5)}`);
    }
  };

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Su navegador no soporta geolocalización.");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const customIcon = L.divIcon({
          html: `<div class="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-xl transform -translate-x-1/2 -translate-y-full">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>`,
          className: '',
          iconSize: [32, 32],
          iconAnchor: [0, 0]
        });
        actualizarMarcador(latitude, longitude, customIcon);
        setIsLocating(false);
      },
      () => {
        alert("No se pudo obtener su ubicación. Por favor, marque el punto manualmente en el mapa.");
        setIsLocating(false);
      }
    );
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        <div className="space-y-8 md:space-y-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">Hablemos de su Proyecto</h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              Estamos listos para asesorarle en su próximo centro de lavado. Utilice el mapa inferior para situar su terreno.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all hover:bg-blue-50">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm text-blue-600 shrink-0">
                 {/* Fix: use tailwind width/height classes instead of md:size prop which doesn't exist on LucideProps */}
                 <Mail className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Email Corporativo</h4>
                  <p className="text-gray-500 text-sm md:text-base">proyectos@ecowashpro.com</p>
               </div>
            </div>
            
            <div className="p-6 md:p-8 bg-blue-600 rounded-[1.5rem] md:rounded-[2.5rem] text-white shadow-xl">
               <h4 className="font-bold text-lg md:text-xl mb-4 leading-tight uppercase tracking-tight">Pasos a seguir:</h4>
               <ul className="space-y-3 md:space-y-4 text-blue-100 text-sm md:text-base">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                    <span>Sitúe el marcador azul en su terreno.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                    <span>La dirección se autocompletará.</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                    <span>Envíe el formulario de contacto.</span>
                  </li>
               </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl border border-gray-100">
           <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 ml-1 uppercase tracking-wider">Nombre Completo</label>
                  <input type="text" className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white" placeholder="Su nombre" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 ml-1 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white" placeholder="email@empresa.com" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 ml-1 uppercase tracking-wider">Ubicación del Proyecto</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    className="w-full pl-5 pr-12 py-3.5 md:pl-6 md:pr-14 md:py-4 rounded-xl md:rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white" 
                    placeholder="Escriba o use el mapa..." 
                  />
                  <button 
                    type="button"
                    onClick={handleLocateMe}
                    disabled={isLocating}
                    className={`absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all ${isLocating ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
                    title="Usar mi ubicación actual"
                  >
                    <Navigation size={18} className={isLocating ? 'animate-pulse' : ''} />
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 ml-1 uppercase tracking-wider">Mensaje</label>
                <textarea rows={4} className="w-full px-5 py-3.5 md:px-6 md:py-4 rounded-xl md:rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none bg-white" placeholder="Detalles de su inversión..."></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl shadow-xl hover:bg-blue-700 hover:scale-[1.01] transition-all flex items-center justify-center space-x-3 uppercase tracking-wider">
                 <span>Enviar Solicitud</span>
                 <Send size={18} />
              </button>
           </form>
        </div>
      </div>

      <div className="relative h-[350px] md:h-[500px] w-full bg-gray-100 border-t border-gray-200">
         <div ref={mapContainerRef} className="w-full h-full z-10" />
         <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-[90%] md:w-auto">
            <div className="bg-white/95 backdrop-blur px-4 py-2.5 md:px-6 md:py-3 rounded-full shadow-2xl border border-blue-100 flex items-center justify-center space-x-2 md:space-x-3 text-center">
               {/* Fix: use responsive tailwind classes instead of invalid md:size prop */}
               <MapPin className="text-blue-600 animate-bounce shrink-0 w-4 h-4 md:w-5 md:h-5" />
               <span className="text-[10px] md:text-sm font-black text-gray-800 uppercase tracking-tight">Haga clic para situar su proyecto</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ContactPage;
