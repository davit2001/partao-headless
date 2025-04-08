"use client";
import React from "react";
import Link from 'next/link';
import CheckoutCount from '@/components/CheckoutCount';

const Header = () => (
  <header>
    <h1>React Header</h1>
    <nav>
      <Link href="/" style={{ color: "white", marginRight: "1rem" }}>Home</Link>
      <CheckoutCount />
    </nav>
  </header>
);

export default Header;