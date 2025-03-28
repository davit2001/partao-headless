import { createRoot } from 'react-dom/client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

(window as Window & typeof globalThis & {
  mountReactHeader: (el: HTMLElement) => void;
}).mountReactHeader = (el) => {
  const root = createRoot(el);
  root.render(<Header />);
};

(window as Window & typeof globalThis & {
  mountReactHeader: (el: HTMLElement) => void;
}).mountReactHeader = (el) => {
  const root = createRoot(el);
  root.render(<Footer />);
};