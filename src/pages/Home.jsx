import React from "react";
import banner from "../images/banner.jpeg";

export default function Home() {
  return (
    <>
      <div className="banner-container">
        <img className="banner-img" src={banner}></img>
        <button className="banner-button">Shop</button>
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
      </div>
    </>
  );
}
