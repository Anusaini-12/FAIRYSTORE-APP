import "./CategoryCard.css";

export default function CategoryCard({ title, image }){
    return(
        <div className="card">
            <div className="card-image">
                <img src={image} alt="image" />
            </div>
            <h3 className="card-title">{title}</h3>
            <a href="#" className="card-btn">Explore</a>
        </div>
    )
}