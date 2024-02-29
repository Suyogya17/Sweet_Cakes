import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
    id: number;
    image: string;
    itemName: string;
    price: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <>
        <div className='productcardbox'>
            <img
                src={`http://localhost:8080/${product.image}`}
                width={100} height={100}
                alt="productImg"
            />
            <h3 className="productheadername">{product.itemName}</h3>
            <p className="priceofproduct">Price: Rs.{product.price}</p>
            <div className="buttntobuy">
                <a href="/addtocart">
                    <button className="addcartbttn">Add to Cart</button>
                </a>
            </div>
        </div>
    </>
);

function Productcard() {
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState(""); // State to store the authentication token

    useEffect(() => {
        // Simulate user authentication and obtain a token
        const authenticateUser = async () => {
            try {
                const response = await axios.post("http://localhost:8080/authenticate", {
                    email: "your_email",
                    password: "your_password",
                });

                // Assuming the server responds with a token in the "token" property
                const newToken = response.data.token;
                setToken(newToken);

                // Store the token securely (e.g., in browser cookies, local storage)
                localStorage.setItem("authToken", newToken);

                console.log("Authentication successful. Token:", newToken);
            } catch (error) {
                console.error("Authentication failed:", error);
            }
        };

        authenticateUser();
    }, []);

    useEffect(() => {
        // Fetch products using the authentication token
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/Item/data", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    return (
        <>
            <div className="containeroftheproduct">
                {products && products.length > 0 ? (
                    products?.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <h1>No Data found</h1>
                )}
            </div>
        </>
    );
}

export default Productcard
