import React from "react";

export default function Footer() {
  return (
    <>
      <div className="newsletter-wrapper">
        <h3>LOREM IPSUM DOLOR SIT AMET CONSETETUR</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
        <form>
            <input></input>
            <button className="newsletter-button">SUBSCRIBE</button>
        </form>
      </div>
      <div className="imprint">
      <div className="imprint-flex">
        <div className="imprint-container">
            <h3>Lorem ipsum</h3>
            <p>vero eos et accusam</p>
            <p>vero eos et accusam</p>
            <p>vero eos et accusam</p>
            <p>vero eos et accusam</p>
        </div>
        <div className="imprint-container">
            <h3>Lorem ipsum</h3>
            <p>vero eos et accusam</p>
            <p>vero eos et accusam</p>
            <p>vero eos et accusam</p>
            <p>vero eos et accusam</p>
        </div>
        <div className="imprint-container">
            <h3>Lorem ipsum</h3>
            <p>vero eos et accusam</p>
            <p>vero eos et accusam</p>
            <p>vero eos et accusam</p>
            <p>vero eos et accusam</p>
        </div>
        </div>
      </div>
      <footer>&#169; 2023 BookNooK</footer>
    </>
  );
}
