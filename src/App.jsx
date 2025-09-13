import { Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/Profile";
import CategoryPage from "./pages/CategoryPage";


function App() {
  
  return (
      <>
      <Routes>
       <Route index element={<Home /> } />
       <Route path="/home" element={<Home />} />
       <Route path="/results" element={<SearchResults />} />
       <Route path="/categories" element={<CategoryPage />} />
       {/* <Route path="/shop" element={<ShopPage />} /> */}
       <Route path="/contact" element={<Contact />} />
       <Route path="/profile" element={<Profile />} />
       {/* <Route path="/login" element={<Login />} /> */}
       <Route path="*" element={<NotFoundPage />} />
      </Routes>
     </>  
  );
}

export default App;