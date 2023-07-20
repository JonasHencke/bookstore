import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="page-logo" to="/">
        BookNook
      </Link>
      <nav>
        <NavLink
          to="/books"
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