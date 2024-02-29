import "./Account.css";
import Navbar from "../../Components/Navbar.tsx";
import Footer from "../../Components/Footer.tsx";


function Account() {

    return (
        <>
            <Navbar/>

            <div className="Accounttypes">
                <button className="Accbuttons">
                    <a href="/admin-log-in" className="connect">Add Product</a>
                </button>

                <button className="Accbuttons">
                    <a href="#" className="connect">My Products</a>
                </button>

                <button className="Accbuttons">
                    <a href="/sign-in" className="connect">Log-Out</a>
                </button>


            </div>

            <Footer/>
        </>
    );
}

export default Account