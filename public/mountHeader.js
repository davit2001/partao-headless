import React from "react";
import { createRoot } from "react-dom/client";
import Header from "../src/components/Header"

const container = document.getElementById('react-header-container');
if (container) {
  const root = createRoot(container);
  root.render(<Header />);
}