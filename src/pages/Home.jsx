import React from "react";
import banner from "../images/banner.jpeg";
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="banner-container">
        <img className="banner-img" src={banner}></img>
        <Link className="banner-button" to="/books?page=1">Einkaufen</Link>
      </div>
      <div className="text-block">
        <h2>Lorem ipsum dolor</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum
        </p>
        <h2>Lorem ipsum dolor</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum
        </p>
      </div>
    </>
  );
}
