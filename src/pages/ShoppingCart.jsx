import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App.jsx";

export default function shoppingCart(props) {
  const { shoppingCart, setShoppingCart, removeItemFromCart } =
    React.useContext(ThemeContext);
  const totalPrice = shoppingCart.reduce((a, b) => a + b.price * b.amount, 0);
  const displayShoppingCart = shoppingCart.map((book) => (
    <div key={book.id} className="book-card">
      <Link
        to={`../books/${book.id}`}
        state={{
          search: "../shoppingcart",
        }}
      >
        <img src={book.imageURL} style={{ width: "200px" }}></img>
        <div className="book-info">
          <p style={{ fontWeight: "300" }}>{book.author}</p>
          <p style={{ fontWeight: "500" }}>{book.title}</p>
          <p style={{ fontWeight: "500" }}>{book.price} €</p>
          <p style={{ fontWeight: "500" }}>Anzahl: {book.amount}</p>
          <button
            style={{ backgroundColor: "rgba(255,0,0,0.8)" }}
            className="warenkorb-Btn"
            onClick={(e) => {
              removeItemFromCart(book);
              e.preventDefault();
            }}
          >
            &#10005; Entfernen
          </button>
        </div>
      </Link>
    </div>
  ));

  function OrderSuccess() {
    props.setSnackbarMessage("Vielen Dank für deine Bestellung!");
    props.showSnackbarMessage();
    setShoppingCart([]);
  }

  if (shoppingCart.length === 0) {
    return (
      <div className="shop-display">
        <div className="book-display">
          <h1 className="cart-header">Dein Einkaufswagen ist leer</h1>
          {displayShoppingCart}
        </div>
        <Link
          to={`/books?page=1`}
          className="contact-forms-button"
          style={{ marginBottom: "5em", marginTop: "5em" }}
        >
          Zurück zum Shop
        </Link>
      </div>
    );
  } else {
    return (
      <div className="shop-display">
        <div className="book-display">
          <h1 className="cart-header">Dein Einkaufswagen :</h1>
          {displayShoppingCart}
          <div className="cart-checkout">
            <div>Summe: {totalPrice} €</div>
            <button
              className="contact-forms-button"
              style={{ marginBottom: "2em" }}
              onClick={() => OrderSuccess()}
            >
              Einkauf abschließen
            </button>
          </div>
        </div>
      </div>
    );
  }
}
