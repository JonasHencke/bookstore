import React from "react";
import { getBooks } from '../server.jsx'

export default function Books() {
    const [books, setBooks] = React.useState([])
    
    React.useEffect(() => {
        async function loadBooks() {
            let data = await getBooks();
            setBooks(data)
        }
        loadBooks()
    }, [])

    const displayedBooks = books.map(book => (
        <div key={book.id}>
            <img src={book.imageURL} style={{width: "200px"}}></img>
        </div>
    ))
    console.log(books)
    return(
        <p>{displayedBooks}</p>
    )
}