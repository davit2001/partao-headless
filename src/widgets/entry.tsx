import { createRoot } from 'react-dom/client';
import React from 'react';

(window as Window & typeof globalThis & {
  mountReactHeader: (el: HTMLElement) => void;
}).mountReactHeader = (el) => {
  const root = createRoot(el);
  root.render(<p>Header</p>);
};

(window as Window & typeof globalThis & {
  mountReactHeader: (el: HTMLElement) => void;
}).mountReactHeader = (el) => {
  const root = createRoot(el);
  root.render(<p>Footer</p>);
};