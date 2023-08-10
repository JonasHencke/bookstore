import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App.jsx";

export default function shoppingCart() {
  const { shoppingCart } = React.useContext(ThemeContext);
  const displayShoppingCart = shoppingCart.map((book) => (
    <div key={book.id} className="book-card">
      <Link
        to={`../books/${book.id}`}
        state={{
            search: "../shoppingcart"
          }}
        
      >
        <img src={book.imageURL} style={{ width: "200px" }}></img>
        <div className="book-info">
          <p style={{ fontWeight: "300" }}>{book.author}</p>
          <p style={{ fontWeight: "500" }}>{book.title}</p>
          <p style={{ fontWeight: "500" }}>{book.price} €</p>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="shop-display">
      <div className="book-display">
        <h1 className="cart-header">Dein Einkaufswagen :</h1>
        {displayShoppingCart}
      </div>
      <button className="contact-forms-button" style={{ marginBottom: "2em" }}>
        Einkauf abschließen
      </button>
    </div>
  );
}
