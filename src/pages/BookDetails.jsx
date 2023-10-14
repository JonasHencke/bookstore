import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { getBooks } from "../server.jsx";
import { ThemeContext } from "../App.jsx";
import turnIntoEuro from "../utils/turnIntoEuro.jsx";
import amountInCart from "../utils/amountInCart.jsx";

export default function BookDetails() {
  const [book, setBook] = React.useState([]);
  const { addItemToCart, shoppingCart } = React.useContext(ThemeContext);
  const location = useLocation();
  const { id } = useParams();

  React.useEffect(() => {
    async function loadBooks() {
      let data = await getBooks();
      let filteredBook = data.filter((book) => book.id === id);
      setBook(filteredBook[0]);
    }
    loadBooks();
  }, [id]);
  if (location.state.search === "../shoppingcart") {
    return (
      <>
        <Link className="bookdetails-backlink" to={`/shoppingcart`}>
          ← Zurück
        </Link>
        <div className="bookdetails-container">
          <img src={book.imageURL} className="bookdetails-image" />
          <div className="bookdetails-information">
            <h1 className="bookdetails-title">{book.title}</h1>
            <h2 className="bookdetails-author">{book.author}</h2>
            <h2 className="bookdetails-price">Preis: {turnIntoEuro(book.price)}</h2>
            <button
              className="warenkorb-Btn"
              style={{ alignSelf: "start", marginBottom: "1em" }}
              onClick={(e) => {
                addItemToCart(book);
                e.preventDefault();
              }}
            >
              {" "}
              {shoppingCart.find((item) => item.id === book.id)
                ? "Erneut hinzufügen"
                : "In den Warenkorb"}
            </button>
            <p>{shoppingCart.find((item) => item.id === book.id) && "Im Warenkorb: " + amountInCart(book, shoppingCart)}</p>
            <p className="bookdetails-genre">
              <span className="font-weight-800">Genre:</span> {book.genre}
            </p>
            <p className="bookdetails-pages">
              <span className="font-weight-800">Seitenanzahl:</span>{" "}
              {book.pages}
            </p>
            <p className="bookdetails-releaseDate">
              <span className="font-weight-800">Erscheinungsdatum:</span>{" "}
              {book.releaseDate}
            </p>
            <p className="bookdetails-ISBN">
              <span className="font-weight-800">ISBN:</span> {book.ISBN}
            </p>
            <p className="bookdetails-description">
              <span className="font-weight-800">Beschreibung:</span> <br />
              <br /> {book.description}
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link
          className="bookdetails-backlink"
          to={`${location.state.search}`}
        >
          ← Zurück
        </Link>
        <div className="bookdetails-container">
          <img src={book.imageURL} className="bookdetails-image" />
          <div className="bookdetails-information">
            <h1 className="bookdetails-title">{book.title}</h1>
            <h2 className="bookdetails-author">{book.author}</h2>
            <h2 className="bookdetails-price">Preis: {turnIntoEuro(book.price)}</h2>
            <button
              className="warenkorb-Btn"
              style={{ alignSelf: "start", marginBottom: "1em" }}
              onClick={(e) => {
                addItemToCart(book);
                e.preventDefault();
              }}
            >
              {shoppingCart.find((item) => item.id === book.id)
                ? "Erneut hinzufügen"
                : "In den Warenkorb"}
            </button>
            <p>{shoppingCart.find((item) => item.id === book.id) && "Im Warenkorb: " + amountInCart(book, shoppingCart)}</p>
            <p className="bookdetails-genre">
              <span className="font-weight-800">Genre:</span> {book.genre}
            </p>
            <p className="bookdetails-pages">
              <span className="font-weight-800">Seitenanzahl:</span>{" "}
              {book.pages}
            </p>
            <p className="bookdetails-releaseDate">
              <span className="font-weight-800">Erscheinungsdatum:</span>{" "}
              {book.releaseDate}
            </p>
            <p className="bookdetails-ISBN">
              <span className="font-weight-800">ISBN:</span> {book.ISBN}
            </p>
            <p className="bookdetails-description">
              <span className="font-weight-800">Beschreibung:</span> <br />
              <br /> {book.description}
            </p>
          </div>
        </div>
      </>
    );
  }
}
