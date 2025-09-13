import "./NotFoundPage.css";
import sad from "../assets/main/sad-face.png"
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <>
    <div className='error-page'>
       <div className="sad-icon">
         <img src={sad} alt="sad" />
       </div>
      <h1 className="not-found">No Results Found!</h1>
      <p >We couldn't find what you searched for.</p>
      <p >Try searching again.</p>
    </div>

{/*     <Footer /> */}
    </>
  )
}

export default NotFoundPage
