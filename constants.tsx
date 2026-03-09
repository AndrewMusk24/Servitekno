import React from 'react';
import { ShieldCheck, Droplets, Workflow, Gem, Headset, Settings } from 'lucide-react';
import { Feature, Product } from './types.ts';

export const FEATURES: Feature[] = [
  {
    title: 'Eficiencia Hídrica',
    description: 'Sistemas de reciclaje de agua de última generación que reducen el consumo hasta en un 80%.',
    icon: <Droplets className="w-8 h-8 text-blue-500" />
  },
  {
    title: 'Independencia de Boxes',
    description: 'Cada box de lavado funciona de forma totalmente autónoma, asegurando la operatividad continua y la rentabilidad ininterrumpida de su centro.',
    icon: <Workflow className="w-8 h-8 text-blue-500" />
  },
  {
    title: 'Máxima Calidad',
    description: 'Fabricados con materiales de alta resistencia and componentes industriales premium para garantizar la máxima durabilidad.',
    icon: <Gem className="w-8 h-8 text-blue-500" />
  },
  {
    title: 'Soporte 365 Días',
    description: 'Soporte telefónico los 365 días del año gratuito para todos nuestros clientes. Tu tranquilidad es nuestra prioridad.',
    icon: <Headset className="w-8 h-8 text-blue-500" />
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Modelo Power',
    description: 'Equipo con tres programas de lavado estándar:\n**LAVADO**\n**ACLARADO**\n**ABRILLANTADO**\n\n* Opción extra de abrillantado con cera.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800',
    price: ''
  },
  {
    id: '2',
    name: 'Modelo Power Plus',
    description: 'Equipo de gama alta con elementos de alta potencia para trabajos sin descanso. Incluye programas estándar, más dos a escoger:\n**ESPUMA ACTIVA**\n**CEPILLO**\n**TEFLÓN**\n**LLANTAS**\n**ASPIRADO**\n\n* Opción extra de abrillantado con cera.',
    image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=800',
    price: ''
  },
  {
    id: '3',
    name: 'Modelo Power Energy',
    description: 'Modelo idéntico al Power Plus con hasta 10 programas de lavado de gama alta:\n**ESPUMA ACTIVA**\n**CEPILLO**\n**TEFLÓN**\n**LLANTAS**\n**ASPIRADO**\n**SECADO**\n**JABÓN EN POLVO**\n\n* Opción extra de abrillantado con cera.',
    image: 'https://images.unsplash.com/photo-1552933529-e359b2477262?auto=format&fit=crop&q=80&w=800',
    price: ''
  }
];