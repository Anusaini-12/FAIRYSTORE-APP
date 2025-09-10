import "./BookCard.css";

export default function BookCard({ bookname, book, price }){
    return(
        <div className="book-card">
            <img src={book} alt="book" />
            <h3>{bookname}</h3>
            <p>&#8377; {price}</p>
            <a href="#" className="card-btn">Buy now</a>
        </div>
    )
}