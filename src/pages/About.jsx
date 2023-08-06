import React from "react";
import EarthSVG from "../images/earth.svg"
import CustomerSVG from "../images/customer.svg"
import BooksSVG from "../images/books.svg"

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
        <div>
          <div>
            <img src={CustomerSVG} className="about-SVG"></img>
            <p>Rücksicht auf die Kunden</p>
            <p>zuvorkommend, verständisvoll, freundlich</p>
          </div>
          <div>
            <img src={EarthSVG} className="about-SVG"></img>
            <p>Rücksicht auf die Umwelt</p>
            <p>
              nachhaltiger Versand,
              <br /> Abholung in der Filliale möglich
            </p>
          </div>
          <div>
            <img src={BooksSVG} className="about-SVG"></img>
            <p>Rücksicht auf die Literatur</p>
            <p>
              vielfältiges Sortiment,
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="staff-banner">
        <img></img>
        <div>
          <h2></h2>
          <p></p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
