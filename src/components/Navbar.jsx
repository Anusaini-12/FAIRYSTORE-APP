import { useState } from "react";
import logo from "../assets/main/logo.png";
import "./Navbar.css";
import SearchBook from "./BookSearch";
import { handleSearch } from "../js/search";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isSearchOpen, setIsSearchOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate();


const handleInputChange = (e) => setSearchQuery(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery, navigate, setSearchQuery);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false); 
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false); 
  };

    return(
        <>
        <nav className="navbar">
            <div className="nav-container">

                <div className="logo">
                  <img src={logo} alt="logo"/>
                  <span>Fairy Store</span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                    {/* <li><a href="#">Blog</a></li> */}
                </ul>

               <SearchBook />

                <div className="nav-icons">
                <button className="search-icon icon-btn" onClick={toggleSearch}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                <button className="menu-btn icon-btn" onClick={toggleMenu}>
                  <i className="fa-solid fa-bars"></i>
                 </button>
                </div>

                {isSearchOpen && (
                <div className="mobile-search">
                <input 
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                 onChange={(e) => handleInputChange(e, setSearchQuery)}
                 onKeyDown={(e) => handleKeyDown(e, () => handleSearch(searchQuery, navigate, setSearchQuery))}

                />
                {/* <button id="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button> */}
                </div>
                )}

            </div>
        </nav>
        </>
    )
}