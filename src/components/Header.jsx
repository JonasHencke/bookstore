import React from "react";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartSVG from "../images/shoppingCart.svg";
import { ThemeContext } from "../App.jsx";

export default function Header() {
  const { shoppingCart } = React.useContext(ThemeContext);

  return (
    <header>
      <Link className="page-logo" to="/">
        BookNook
        <p>LIES DICH GLÜCKLICH</p>
        <div className="shoppingCart-wrapper">
          <img className="shoppingCart-icon" src={ShoppingCartSVG} />
          <p className="cart-counter">{shoppingCart.length}</p>
        </div>
      </Link>
      <nav className="header-menu">
        <NavLink to="/books?page=1">Bücher</NavLink>
        <NavLink to="/about">Über uns</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </header>
  );
}
