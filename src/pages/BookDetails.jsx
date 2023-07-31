import React from "react"
import { useLocation, useParams, Link } from "react-router-dom"
import { getBooks } from "../server.jsx";

export default function BookDetails() {
    const [book, setBook] = React.useState([]);
    const location = useLocation()
    const { id } = useParams()
  

    React.useEffect(() => {
        async function loadBooks() {
          let data = await getBooks();
          let book = data.filter(book => book.id === id)
          setBook(book[0])
        }
        loadBooks();
      }, [id]);
      console.log(location.state.search)
    return (
      <>
        <Link className="bookdetails-backlink" to={`/books/${location.state.search}`}>← Zurück</Link>
        <div className="bookdetails-container">
        <img src={book.imageURL} className="bookdetails-image"/>
        <div className="bookdetails-information">
          <h1 className="bookdetails-title">{book.title}</h1>
          <h2 className="bookdetails-author">{book.author}</h2>
          <h2 className="bookdetails-price">Preis: {book.price} €</h2>
          <p className="bookdetails-genre">Genre: {book.genre}</p>
          <p className="bookdetails-pages">Seitenanzahl: {book.pages}</p>
          <p className="bookdetails-releaseDate">Erscheinungsdatum: {book.releaseDate}</p>
          <p className="bookdetails-ISBN">ISBN: {book.ISBN}</p>
          <p className="bookdetails-description">Beschreibung: <br/><br/> {book.description}</p>
        </div>
        </div>
      </>
    )
}