import React from "react";
import "./Productcard.css";

interface Item {
    id: number;
    imageUrl: string;
    itemName: string;
    price: string;
    description: string;
}

interface ProductCardProps {
    item: Item;
}

const Productcard: React.FC<ProductCardProps> = ({ item }) => (
    <div className="product-card">
        <img
            src={`http://localhost:8080/${item.imageUrl}`}
            width={200}
            height={200}
            alt="productImg"
            className="product-image"
        />
        <div className="product-details">
            <h3 className="product-name">{item.itemName}</h3>
            <p className="product-price">Price: Rs.{item.price}</p>
            <p className="product-details">Description {item.description}</p>
            <div className="button-container">
                <a href="/addtocart">
                    <button className="add-to-cart-button">Add to Cart</button>
                </a>
            </div>
        </div>
    </div>
);

export default Productcard
