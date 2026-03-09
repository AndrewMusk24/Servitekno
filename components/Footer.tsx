
import React from 'react';
import { Droplet, Mail, ArrowRight } from 'lucide-react';
import { Page } from '../App.tsx';

interface FooterProps {
  onNavigate: (page: Page, section?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contacto" className="bg-white border-t border-gray-100 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Columna 1: Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div 
              className="flex items-center space-x-2 mb-4 cursor-pointer group" 
              onClick={() => onNavigate('inicio')}
            >
              <Droplet className="w-8 h-8 text-blue-600 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-extrabold text-gray-900">
                SERVI<span className="text-blue-500">TEKNO</span>
              </span>
            </div>
          </div>

          {/* Columna 2: Navegación Principal */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Navegación</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onNavigate('inicio')} className="text-gray-500 hover:text-blue-600 transition-colors flex items-center md:justify-start justify-center group text-sm font-medium">
                  <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ventajas')} className="text-gray-500 hover:text-blue-600 transition-colors flex items-center md:justify-start justify-center group text-sm font-medium">
                  <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Tecnología
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('equipos')} className="text-gray-500 hover:text-blue-600 transition-colors flex items-center md:justify-start justify-center group text-sm font-medium">
                  <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Modelos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rentabilidad')} className="text-gray-500 hover:text-blue-600 transition-colors flex items-center md:justify-start justify-center group text-sm font-medium">
                  <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Rentabilidad
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-5">
              <li className="flex items-start md:justify-start justify-center space-x-3">
                <Mail size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 uppercase">Consultas Generales</span>
                  <a href="mailto:info@servitekno.com" className="text-gray-600 hover:text-blue-600 font-medium text-sm">info@servitekno.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Servitekno S.L. Fabricación nacional con tecnología propia.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="text-gray-400 hover:text-blue-600 text-xs font-semibold transition-colors uppercase tracking-widest">Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-blue-600 text-xs font-semibold transition-colors uppercase tracking-widest">Legal</a>
            <a href="#" className="text-gray-400 hover:text-blue-600 text-xs font-semibold transition-colors uppercase tracking-widest">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
