import { Routes, Route } from "react-router-dom";
import BookStore from "./components/BookStore";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Routes>
      {/* Home page → BookStore */}
      <Route path="/" element={<BookStore />} />

      {/* Search results page */}
      <Route path="/results" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
