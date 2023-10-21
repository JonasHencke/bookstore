import emptyBook from "../images/old-book.png"

export default function About() {
    return (
        <div className="empty-page-wrapper">
        <img src={emptyBook}></img>
        <h2>Es tut uns leid, aber dieses Buch wurde noch nicht geschrieben..</h2>
        </div>
    )
}