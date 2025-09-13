import Authors from "../components/Authors";
import Books from "../components/Books";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";

export default function Home(){
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