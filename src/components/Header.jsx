import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="page-logo" to="/">
        BookNook
        <p>LIES DICH GLÜCKLICH</p>
      </Link>
      <nav className="header-menu">
        <NavLink
          to="/books?page=1"
        >
          Bücher
        </NavLink>
        <NavLink
          to="/about"
        >
          Über uns
        </NavLink>
        <NavLink
          to="/contact"
        >
          Kontakt
        </NavLink>
      </nav>
    </header>
  );
}
