import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';

export function renderHeader(containerId = 'partao-header') {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<Header />);
  }
}
