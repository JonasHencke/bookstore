import React from "react";
import { getBooks } from "../server.jsx";
import { Link, useSearchParams } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    async function loadBooks() {
      let data = await getBooks();
      setBooks(data);
    }
    loadBooks();
  }, []);

  const typeFilter = searchParams.get("type");
  const filteredBooks = typeFilter
    ? books.filter((book) => book.genre.toLowerCase() === typeFilter)
    : books;

  const displayedBooks = filteredBooks.map((book) => (
    <div key={book.id} className="book-card">
      <img src={book.imageURL} style={{ width: "200px" }}></img>
      <div className="book-info">
        <p style={{ fontWeight: "300" }}>{book.author}</p>
        <p style={{ fontWeight: "500" }}>{book.title}</p>
        <p style={{ fontWeight: "500" }}>{book.price} €</p>
        <button className="warenkorb-Btn">In den Warenkorb</button>
      </div>
    </div>
  ));
  console.log(books);
  return (
    <>
      <div className="search-buttons">
        <Link to="?type=fantasy">Fantasy</Link>
        <Link to="?type=klassiker">Klassiker</Link>
        <Link to="?type=sachbuch">Sachbuch</Link>
        <Link to="?type=kinder und jugend">Kinder und Jugend</Link>
        <Link to="?type=roman">Roman</Link>
        <Link to="?type=krimi">Krimi</Link>
      </div>
      <div className="shop-display">
        <div className="book-display">{displayedBooks}</div>
      </div>
    </>
  );
}
