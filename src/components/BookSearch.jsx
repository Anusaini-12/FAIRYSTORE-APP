import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSearch } from "../js/search";

export default function SearchBook(){

    let API = "https://openlibrary.org/search.json";

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    // const [books, setBooks] = useState([]);
    
    
  const handleInputChange = (e) => setSearchQuery(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery, navigate, setSearchQuery);
    }
  };


    return(
        <>
           <div className="search-box">
                <input 
                 type="text" 
                 placeholder="Search for books, publishers..." 
                 value={searchQuery}    
                 onChange={handleInputChange}
                 onKeyDown={handleKeyDown}
                 />
                 <button 
                 id="search-btn"
                  onClick={() => handleSearch(searchQuery, navigate, setSearchQuery)}
                 >
                 <i className="fa-solid fa-magnifying-glass"></i>
                 </button>
          </div>
          {/* <SearchResults bookDetail={books}/> */}
        </>
    )
}