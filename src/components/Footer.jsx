import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App.jsx";

export default function Footer() {
  const { showSnackbarMessage, setSnackbarMessage } =
    React.useContext(ThemeContext);

  function registerSuccess() {
    setSnackbarMessage("Du hast dich erfolgreich angemeldet!");
    showSnackbarMessage();
  }

  return (
    <>
      <div className="newsletter-wrapper">
        <h3>Erhalte regelmäßig Neuigkeiten über BookNooks</h3>
        <p>
          Melde dich für unseren Newsletter an und erhalte bei deiner nächsten
          Bestellung 10% Rabatt
        </p>
        <form
          className="newsletter-forms"
          id="form"
          onSubmit={(e) => {
            registerSuccess();
            document.getElementById("form").reset();
            e.preventDefault();
          }}
        >
          <input required className="newsletter-input" type="email"></input>
          <button className="newsletter-button">ANMELDEN</button>
        </form>
      </div>
      <div className="imprint">
        <div className="imprint-flex">
          <div className="imprint-container">
            <h3>Über BookNook</h3>
            <NavLink to="/bookstore/support">Das Unternehmen</NavLink>
            <NavLink to="/bookstore/support">Karriere</NavLink>
            <NavLink to="/bookstore/support">Impressum</NavLink>
            <NavLink to="/bookstore/support">AGB</NavLink>
          </div>
          <div className="imprint-container">
            <h3>Kundenservice</h3>
            <NavLink to="/bookstore/support">Hilfe</NavLink>
            <NavLink to="/bookstore/support">Kontakt</NavLink>
            <NavLink to="/bookstore/support">Rücknahmen</NavLink>
            <NavLink to="/bookstore/support">Downloadcode einlösen</NavLink>
          </div>
          <div className="imprint-container">
            <h3>Rund um den Einkauf</h3>
            <NavLink to="/bookstore/support">Benutzerdaten</NavLink>
            <NavLink to="/bookstore/support">Fragen zur Bestellung</NavLink>
            <NavLink to="/bookstore/support">Kaufen</NavLink>
            <NavLink to="/bookstore/support">Versand und Lieferung</NavLink>
          </div>
        </div>
      </div>
      <footer>&#169; 2023 BookNooK</footer>
    </>
  );
}
