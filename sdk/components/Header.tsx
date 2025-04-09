import React from "react";
import CheckoutCount from './CheckoutCount';
import AuthActions from './AuthActions';

const Header = () => (
  <header>
    <h1>React Header</h1>
    <nav>
      <a href="/public" style={{ color: "white", marginRight: "1rem" }}>Home</a>
      <CheckoutCount />
      <AuthActions />
    </nav>
  </header>
);

export default Header;