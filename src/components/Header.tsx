import React from "react";
import Link from 'next/link';

const Header = () => (
  <header style={{ backgroundColor: "#222", color: "#fff", padding: "1rem" }}>
    <h1>React Header</h1>
    <nav>
      <Link href="/" style={{ color: "white", marginRight: "1rem" }}>Home</Link>
    </nav>
  </header>
);

export default Header;