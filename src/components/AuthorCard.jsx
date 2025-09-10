import "./AuthorCard.css";
export default function AuthorCard({ author, author_name }){
    return(
        <div className="author-card">
            <img src={author} />
            <h3>{author_name}</h3>
        </div>
    )
}