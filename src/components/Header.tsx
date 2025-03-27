import React from "react";

const Header = () => (
  <header style={{ backgroundColor: "#222", color: "#fff", padding: "1rem" }}>
    <h1>React Header</h1>
    <nav>
      <a href="/" style={{ color: "white", marginRight: "1rem" }}>Home</a>
      <a href="/products" style={{ color: "white" }}>Products</a>
    </nav>
  </header>
);

export default Header;