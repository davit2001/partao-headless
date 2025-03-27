import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';

(window as any).mountReactHeader = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<Header />);
};

(window as any).mountReactFooter = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<Footer />);
};
