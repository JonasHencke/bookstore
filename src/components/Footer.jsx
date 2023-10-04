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
          <label htmlFor="newsletter">E-Mail:</label>
          <div>
          <input required id="newsletter" className="newsletter-input" type="email"></input>
          <button className="newsletter-button">ANMELDEN</button>
          </div>
        </form>
      </div>
      <div className="imprint">
        <div className="imprint-flex">
          <div className="imprint-container">
            <h3>Über BookNook</h3>
            <NavLink to="/support">Das Unternehmen</NavLink>
            <NavLink to="/support">Karriere</NavLink>
            <NavLink to="/support">Impressum</NavLink>
            <NavLink to="/support">AGB</NavLink>
          </div>
          <div className="imprint-container">
            <h3>Kundenservice</h3>
            <NavLink to="/support">Hilfe</NavLink>
            <NavLink to="/support">Kontakt</NavLink>
            <NavLink to="/support">Rücknahmen</NavLink>
            <NavLink to="/support">Downloadcode einlösen</NavLink>
          </div>
          <div className="imprint-container">
            <h3>Rund um den Einkauf</h3>
            <NavLink to="/support">Benutzerdaten</NavLink>
            <NavLink to="/support">Fragen zur Bestellung</NavLink>
            <NavLink to="/support">Kaufen</NavLink>
            <NavLink to="/support">Versand und Lieferung</NavLink>
          </div>
        </div>
      </div>
      <footer>&#169; 2023 BookNooK</footer>
    </>
  );
}
