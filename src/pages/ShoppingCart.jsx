import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App.jsx";
import sad from "../images/sad.svg";

export default function shoppingCart(props) {
  const { shoppingCart, setShoppingCart, removeItemFromCart, addItemToCart } =
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
          <div className="shoppingCart-Btn-container">
            <button
              className="shoppingCart-Btn"
              onClick={(e) => {
                removeItemFromCart(book);
                e.preventDefault();
              }}
            >-</button>
            <div>{book.amount}</div>
            <button
              className="shoppingCart-Btn"
              onClick={(e) => {
                addItemToCart(book);
                e.preventDefault();
              }}
            >
              +
            </button>
          </div>
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
          <h1 className="cart-header">Dein Einkaufswagen ist leider leer..</h1>
          {displayShoppingCart}
        </div>
        <img src={sad} style={{ width: "15%", alignSelf: "center" }}></img>
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
