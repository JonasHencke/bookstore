import React from "react";
import ReactPaginate from "react-paginate";
import { getBooks } from "../server.jsx";
import { Link, useSearchParams} from "react-router-dom";
import { ThemeContext } from "../App.jsx";

export default function Books() {
  const { addItemToCart } = React.useContext(ThemeContext)
  const [books, setBooks] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = React.useState(
    searchParams.get("page") - 1
  );

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

  const booksPerPage = 8;
  const pagesVisited = pageNumber * booksPerPage;
  let pageCount = Math.ceil(filteredBooks.length / booksPerPage);
  const changePage = ({ selected }) => {
    setSearchParams(
      typeFilter
        ? { type: typeFilter, page: selected + 1 }
        : { page: selected + 1 }
    );
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  const displayBooks = filteredBooks
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((book) => (
      <div key={book.id} className="book-card">
        <Link
          to={book.id}
          state={{
            search: `/books?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <img src={book.imageURL} style={{ width: "200px" }}></img>
          <div className="book-info">
            <p style={{ fontWeight: "300" }}>{book.author}</p>
            <p style={{ fontWeight: "500" }}>{book.title}</p>
            <p style={{ fontWeight: "500" }}>{book.price} €</p>
            <button className="warenkorb-Btn" onClick={(e) => {
              addItemToCart(book);
              e.preventDefault()
            }}>In den Warenkorb</button>
          </div>
        </Link>
      </div>
    ));

  return (
    <>
      <div className="search-buttons">
        <Link
          to="?type=fantasy&page=1"
          className={typeFilter === "fantasy" ? "link-active" : ""}
          onClick={() => setPageNumber(0)}
        >
          Fantasy
        </Link>
        <Link
          to="?type=klassiker&page=1"
          className={typeFilter === "klassiker" ? "link-active" : ""}
          onClick={() => setPageNumber(0)}
        >
          Klassiker
        </Link>
        <Link
          to="?type=sachbuch&page=1"
          className={typeFilter === "sachbuch" ? "link-active" : ""}
          onClick={() => setPageNumber(0)}
        >
          Sachbuch
        </Link>
        <Link
          to="?type=kinder und jugend&page=1"
          className={typeFilter === "kinder und jugend" ? "link-active" : ""}
          onClick={() => setPageNumber(0)}
        >
          Kinder und Jugend
        </Link>
        <Link
          to="?type=roman&page=1"
          className={typeFilter === "roman" ? "link-active" : ""}
          onClick={() => setPageNumber(0)}
        >
          Roman
        </Link>
        <Link
          to="?type=krimi&page=1"
          className={typeFilter === "krimi" ? "link-active" : ""}
          onClick={() => setPageNumber(0)}
        >
          Krimi
        </Link>
        {typeFilter != null && (
          <Link to="?page=1" className="link-remove" onClick={() => setPageNumber(0)}>
            Filter entfernen
          </Link>
        )}
      </div>
      <div className="shop-display">
        <div className="book-display">{displayBooks}</div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousClassName={"pagination-item"}
          nextLinkClassName={"pagination-item"}
          disabledClassName={"pagination-disabled"}
          activeLinkClassName={"pagination-active"}
          pageLinkClassName={"pagination-item"}
          forcePage={pageNumber}
        />
      </div>
    </>
  );
}
