import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';

(window as Window & typeof globalThis & {
  mountReactHeader: (el: HTMLElement) => void;
}).mountReactHeader = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<Header />);
};

(window as Window & typeof globalThis & {
  mountReactFooter: (el: HTMLElement) => void;
}).mountReactFooter = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<Footer />);
};
