import React from "react";
import AddressSVG from "../images/address.svg";
import MailSVG from "../images/mail.svg";
import TelephoneSVG from "../images/telephone.svg";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <p className="contact-message">
        wir würden gerne mehr von dir hören. Kontaktiere uns per E-Mail
      </p>
      <div className="contact-display">
        <div className="contact-display-forms">
          <h1 className="contact-header">Kontaktformular</h1>
          <form className="contact-forms">
            <div className="contact-forms-container">
              <label>Name</label>
              <input></input>
            </div>
            <div className="contact-forms-container">
              <label>E-Mail</label>
              <input></input>
            </div>
            <div className="contact-forms-container">
              <label>Telefonnummer</label>
              <input></input>
            </div>
            <div className="contact-forms-container">
              <label>Nachricht</label>
              <input></input>
            </div>
            <button className="contact-forms-button">Senden</button>
          </form>
        </div>
        <div className="contact-display-info">
          <div>
            <img src={AddressSVG} style={{ width: "40px" }}></img>
            <h3>Adresse</h3>
            <p>
              12345 Musterstadt <br /> BookNook GmbH <br /> 12345
            </p>
          </div>
          <div>
            <img src={TelephoneSVG} style={{ width: "40px" }}></img>
            <h3>Ruf uns an</h3>
            <p>+49 123 45678</p>
          </div>
          <div>
            <img src={MailSVG} style={{ width: "40px" }}></img>
            <h3>Schreib uns</h3>
            <p>book@nook.de</p>
          </div>
        </div>
      </div>
    </div>
  );
}
