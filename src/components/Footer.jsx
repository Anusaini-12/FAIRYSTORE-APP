import "./Footer.css";
export default function Footer(){

    return(
       <div className="footer">
        <p>&copy; 2025, The Fairy Book Store </p>
        <div className="footer-links">
            &middot;<a href="#">Refund policy</a>
            &middot;<a href="#">Privacy policy</a>
            &middot;<a href="#">Terms of service</a>
            &middot;<a href="#">Shipping policy</a>
            &middot;<a href="#">Contact Information</a>
        </div>
       </div>
    )
}