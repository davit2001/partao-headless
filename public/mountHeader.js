import React from "react";
import { createRoot } from "react-dom/client";
import Header from "../src/components/Header"

export function mountHeader(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<Header />);
  }
}

if (typeof window !== 'undefined') {
  window.mountHeader = mountHeader;
}