import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ShoppingCartSVG from "../images/shoppingCart.svg";
import { ThemeContext } from "../App.jsx";

export default function Header() {
  const { shoppingCart } = React.useContext(ThemeContext);
  const shoppingCartCounter = shoppingCart != 0 && shoppingCart.reduce((a,b) => a + b.amount, 0)
  let { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header>
      <Link className="page-logo" to="/bookstore">
        BookNook
        <p>LIES DICH GLÜCKLICH</p>
        <div className="shoppingCart-wrapper">
          <NavLink to="/bookstore/shoppingcart">
          <img className="shoppingCart-icon" src={ShoppingCartSVG} />
          <p className="cart-counter">{shoppingCartCounter}</p>
          </NavLink>
        </div>
      </Link>
      <nav className="header-menu">
        <NavLink to="/bookstore/books?page=1">Bücher</NavLink>
        <NavLink to="/bookstore/about">Über uns</NavLink>
        <NavLink to="/bookstore/contact">Kontakt</NavLink>
      </nav>
    </header>
  );
}
