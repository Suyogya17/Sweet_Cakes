import Footer from "../../Components/Footer.tsx";
import Navbar from "../../Components/Navbar.tsx";
import './Dashboard.css'
import Slideshow from "../../Components/Slideshow.tsx";
import Productcard from "../../Components/Productcard.tsx";

function Dashboard(){
    return(
        <>
            <div className="Top">
                <Navbar/>
            </div>

            <div className="bodyheight">
                <Slideshow/>

                <div className="bodytoaddproduct">

                    <Productcard/>


                </div>

            </div>

            <div className="Bottom">
                <Footer/>
            </div>

        </>
    );
}

export default Dashboard