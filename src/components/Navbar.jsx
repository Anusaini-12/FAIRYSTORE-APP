import { useState, useEffect } from "react";
import logo from "../assets/main/logo.png";
import "./Navbar.css";
import SearchBook from "./SearchBook";
import { handleSearch } from "../js/search";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";


export default function Navbar(){

const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isSearchOpen, setIsSearchOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState("");
// const [showProfileMenu, setShowProfileMenu] = useState(false);
const navigate = useNavigate();
const [user, setUser] = useState(null);

const handleInputChange = (e) => setSearchQuery(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery, navigate);
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

  //  const toggleProfileMenu = () => {
  //   setShowProfileMenu(!showProfileMenu);
  // };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser); // saves user info if logged in
  //   });
  //   return () => unsubscribe();
  // }, []);

  // const handleLogout = async () => {
  //   await signOut(auth);
  //   setShowProfileMenu(false);
  //   navigate("/login"); // redirect after logout
  // };


    return(
        <>
        <nav className="navbar">
            <div className="nav-container">

                <div className="logo">
                  <img src={logo} alt="logo"/>
                  <span>Fairy Store</span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/categories">Categories</NavLink></li>
                    {/* <li><NavLink to="/shop">Shop</NavLink></li> */}
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

                <div className="search-again">
                  <SearchBook />
                </div>

                <div className="nav-icons">
                <button className="search-icon icon-btn" onClick={toggleSearch}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>

                <button className="menu-btn icon-btn" onClick={toggleMenu}>
                  <i className="fa-solid fa-bars"></i>
                 </button>

            {/* Profile Dropdown */}
            {/* <div className="user-profile" onClick={toggleProfileMenu}>
              <i className="fa-solid fa-user"></i>
              {showProfileMenu && (
                <div className="profile-dropdown">
                  {user ? (
                    <>
                      <p className="profile-username">
                        Hello, {user.displayName || "User"}
                      </p>
                      <p className="profile-email">{user.email}</p>
                      <a
                        style={{ color: "brown", cursor: "pointer" }}
                        onClick={handleLogout}
                      >
                        Logout
                      </a>
                    </>
                  ) : (
                    <>
                      <p className="profile-email">Not logged in</p>
                      <NavLink to="/login">Login</NavLink>
                    </>
                  )}
                 </div>
              )}
            </div> */}
            </div>
 
                {isSearchOpen && (
                <div className="mobile-search">
                <input 
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                />
                </div>
                )}

            </div>
        </nav>
        </>
    )
}