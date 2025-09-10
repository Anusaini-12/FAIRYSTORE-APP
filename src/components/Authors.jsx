import AuthorCard from "./AuthorCard";
import jk from "../assets/authors/JK.jpg";
import martin from "../assets/authors/martin.jpg";
import sudha from "../assets/authors/sudha.jpg";
import tagore from "../assets/authors/tagore.jpeg";
import william from "../assets/authors/william.jpeg";
import "./AuthorCard.css";

export default function Authors(){

    let authorDetails = [
        { name: "J.K Rowling", author: jk },
        { name: "Rabindranath Tagore", author: tagore },
        { name: "George Martin", author: martin },
        { name: "Sudha Murthy", author: sudha },
        { name: "William Shakespeare", author: william},
    ];

    return(
        <>
        <h2 className="heading-name">Top Authors</h2>
         <div className="authors">
            {authorDetails.map((person, idx) => (
                <AuthorCard key={idx} author={person.author} author_name={person.name} />
            ))}
         </div>
        </>
    )
}