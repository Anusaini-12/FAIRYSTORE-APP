import alchemist from "../assets/books/alchemist.jpg";
import secret from "../assets/books/secret.jpg";
import book_theif from "../assets/books/Book_theif.jpg";
import kite_runners from "../assets/books/Kite_runner.jpg";
import fairy_wings from "../assets/books/fairy_wings.jpg";
import BookCard from "./BookCard";
import "./BookCard.css";

export default function Books(){

    let allBooks = [
            {bookname: "The Alchemist", book: alchemist, price: 558},
            {bookname: "The Secret", book: secret, price: 749},
            {bookname: "The Book Theif", book: book_theif, price: 722},
            {bookname: "The Kite Runners", book: kite_runners, price: 899},
            {bookname: "The Fairy Wings", book: fairy_wings, price: 399},
        ];

    return(
        <>
        <h2 className="heading-name">Popular Books</h2>
        <div className="books">
           {allBooks.map((book, idx) => (
             <BookCard 
             key={idx} 
             bookname={book.bookname} 
             book={book.book} 
             price={book.price}/>
           ))}
        </div>
        </>
    )
}