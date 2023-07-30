import React from "react"
import { useLocation, useParams } from "react-router-dom"
import { getBooks } from "../server.jsx";

export default function BookDetails() {
    const [books, setBooks] = React.useState([]);
    const location = useLocation()
    const { id } = useParams()
  

    React.useEffect(() => {
        async function loadBooks() {
          let data = await getBooks();
          let book = data.filter(book => book.id === id)
          setBooks(book[0])
        }
        loadBooks();
      }, [id]);
      console.log(location.pathname)
    return (
        <div>
        {books.title}
        </div>
    )
}