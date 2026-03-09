
// Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}
