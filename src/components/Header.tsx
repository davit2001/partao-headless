import React from "react";
import Link from 'next/link';

const Header = () => (
  <header>
    <h1>React Header</h1>
    <nav>
      <Link href="/" style={{ color: "white", marginRight: "1rem" }}>Home</Link>
    </nav>
  </header>
);

export default Header;