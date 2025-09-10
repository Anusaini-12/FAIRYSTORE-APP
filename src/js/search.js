//search.js

export const handleSearch = async (searchQuery, navigate, setSearchQuery) => {
  try {
    let API = "https://openlibrary.org/search.json";
    let res = await fetch(`${API}?q=${searchQuery}`);
    let jsonResponse = await res.json();
    console.log(jsonResponse.docs);
    navigate("/results", { state: { books: jsonResponse.docs } });
    setSearchQuery("");
  } catch (err) {
    console.log(err);
  }
};
