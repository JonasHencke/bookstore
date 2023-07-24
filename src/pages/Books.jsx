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
        <div key={book.id} className="book-card">
            <img src={book.imageURL} style={{width: "200px"}}></img>
            <div className="book-info">
                <p style={{fontWeight: "300"}}>{book.author}</p>
                <p style={{fontWeight: "500"}}>{book.title}</p>
                <p style={{fontWeight: "500"}}>{book.price} €</p>
                <button className="warenkorb-Btn">In den Warenkorb</button>
            </div>
        </div>
    ))
    console.log(books)
    return(
        <div className="shop-display">
            <div className="book-display">{displayedBooks}</div>
        </div>
    )
}