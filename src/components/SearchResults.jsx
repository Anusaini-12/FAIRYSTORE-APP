import { useNavigate, useLocation } from "react-router-dom";
import "./SearchResults.css";
import { getRandomPrice } from "../../src/js/getPrice";
import Footer from "./Footer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./BookCard.css";
import SearchBook from "./SearchBook";
import NotFoundPage from "../pages/NotFoundPage";


export default function SearchResults(){
      
      const navigate = useNavigate();
      const location = useLocation();
      const books = location.state?.books || [];
    return(
        <>
           <button
            onClick={() => navigate("/")}
            className="back-btn"
            >
            <ArrowBackIcon />
            Back
            </button>

          <div className="SearchResults">
            <div className="search-again">
               <SearchBook/>
            </div>
          
          <h2 style={{textAlign: "center", margin: "3rem"}}>Search Results</h2>

          <div className="results">

            {( books.length === 0 ? ( 
            <NotFoundPage />
            )
            : (books.map((book, idx) => (
             
            <div className="book" key={idx}>
              <div className="book-img">
                 {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            ) : (
              <div className="no-image">No Image</div>
            )}
              </div>
             <div className="book-info">
               <h5 className="book-title">{book.title}</h5>
               <p className="book-author">
               {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
               </p>
               <p className="book-price"> &#8377; {getRandomPrice()}</p>
               <a href="#" className="card-btn buy-btn">Buy now</a>
             </div>
            </div>
            ))
            ))}
          </div>
             <Footer className="foot" />
          </div>
        </>
    )
}