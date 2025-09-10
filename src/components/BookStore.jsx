import Authors from "./Authors";
import Books from "./Books";
import Categories from "./Categories";
import Footer from "./Footer";
import HeroPage from "./HeroPage";
import Navbar from "./Navbar";

export default function BookStore(){
    return(
        <>
        <Navbar/>
        <HeroPage />
        <Categories />
        <Authors />
        <Books />
        <Footer />
        </>
    )
}