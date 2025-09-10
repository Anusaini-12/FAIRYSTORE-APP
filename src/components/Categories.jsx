import CategoryCard from "./CategoryCard";
import "./CategoryCard.css";
import fiction from "../assets/books_category/Fiction.png";
import nonFiction from "../assets/books_category/Non-Fiction.png";
import educational from "../assets/books_category/education.png";
import kids from "../assets/books_category/kids.jpeg";
import religious from "../assets/books_category/religious.jpg";


export default function Categories(){

    let content = [
      { title: "Fiction", image: fiction },
      { title: "Non-Fiction", image: nonFiction},
      { title: "Educational", image: educational},
      { title: "Kids", image: kids },
      { title: "Religious", image: religious },
    ];
    

    return(
        <>
        <h2 className="heading-name">Featured Categories</h2>
        <div className="cards-track">
           <div className="categories">
           {content.map((item, idx) => (
             <CategoryCard key={idx} title={item.title} image={item.image} />
           ))}
        </div>
        </div>
        </>
    )
}