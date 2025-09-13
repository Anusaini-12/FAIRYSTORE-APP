import Navbar from '../components/Navbar'
import BookCard from '../components/BookCard'
import categories from '../data/categoryData'   
import Footer from '../components/Footer'

const CategoryPage = () => {
  return (
    <>
      <Navbar />
      <h1 style={{marginTop:"10rem", marginLeft:"5rem", color: "#547792"}}>Categories</h1>
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="heading-name" style={{marginTop:"4rem"}}>{category.name}</h2>
          <div className="books">
            {category.books.map((book, idx) => (
              <BookCard 
                key={idx} 
                book={book.image}
                bookname={book.bookname} 
                price={book.price} 
              />
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </>
  )
}

export default CategoryPage;
