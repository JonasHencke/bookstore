import React from "react";
import EarthSVG from "../images/earth.svg";
import CustomerSVG from "../images/customer.svg";
import BooksSVG from "../images/books.svg";

export default function About() {
  return (
    <div className="about">
      <div className="about-banner">
        <h1>Über BookNook</h1>
        <p className="about-quote">
          Von allen Welten, die der Mensch erschaffen hat, ist die der Bücher
          die Gewaltigste.
        </p>
        <p className="about-author">Heinrich Heine</p>
      </div>
      <div className="about-display">
        <h2>Unsere Versprechen</h2>
        <div className="promises-display">
          <div className="promise-card">
            <img src={CustomerSVG} className="about-SVG"></img>
            <p className="promise-card-head">Rücksicht auf die Kunden</p>
            <p className="promise-card-text">
              zuvorkommend, verständisvoll, freundlich
            </p>
          </div>
          <div className="promise-card">
            <img src={EarthSVG} className="about-SVG"></img>
            <p className="promise-card-head">Rücksicht auf die Umwelt</p>
            <p className="promise-card-text">
              nachhaltiger Versand,
              <br /> Abholung in der Filliale möglich
            </p>
          </div>
          <div className="promise-card">
            <img src={BooksSVG} className="about-SVG"></img>
            <p className="promise-card-head">Rücksicht auf die Literatur</p>
            <p className="promise-card-text">
              vielfältiges Sortiment,
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="about-description">
        <div className="about-description-left">
          <h2>lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata. labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et
          </p>
        </div>
        <div className="about-description-right">
          <p className="about-description-bold">lorem ipsum dolor</p>
          <p>At vero eos et accusam et justo</p>
          <br/>
          <p className="about-description-bold">lorem ipsum dolor</p>
          <p>At vero eos et accusam et justo</p>
        </div>
      </div>
    </div>
  );
}
