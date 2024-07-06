import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaTrash, FaTable } from "react-icons/fa";
import Spinner from "./Spinner";
import "./Wishlist.css"; // Import CSS file for wishlist component styling

function Wishlist() {
    const [isLoading, setIsLoading] = useState(true);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulated data for demonstration
        const dummyData = [
            { id: 1, name: "Product A", description: "Lorem ipsum dolor sit amet." },
            { id: 2, name: "Product B", description: "Consectetur adipiscing elit." },
            { id: 3, name: "Product C", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
        ];

        // Simulate loading delay
        setTimeout(() => {
            setWishlistItems(dummyData);
            setIsLoading(false);
        }, 1500); // Adjust timing as per your preference or replace with actual API call

        // Example: Fetch wishlist items from backend
        // axios.get("/api/wishlist")
        //     .then(response => {
        //         setWishlistItems(response.data);
        //         setIsLoading(false);
        //     })
        //     .catch(error => {
        //         console.error("Error fetching wishlist:", error);
        //         setError("Failed to fetch wishlist. Please try again later.");
        //         setIsLoading(false);
        //     });
    }, []);

    const removeFromWishlist = (itemId) => {
        // Simulated removal for demonstration
        setWishlistItems(wishlistItems.filter(item => item.id !== itemId));

        // Example: Remove item from wishlist via API
        // axios.delete(`/api/wishlist/${itemId}`)
        //     .then(() => {
        //         setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
        //     })
        //     .catch(error => {
        //         console.error("Error removing item from wishlist:", error);
        //         // Display error message or handle error as needed
        //     });
    };

    return (
        <div className="wishlist-container">
            <h2>
                <FaTable /> Your Wishlist
            </h2>
            {isLoading ? (
                <Spinner />
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : (
                <div>
                    {wishlistItems.length === 0 ? (
                        <p>Your wishlist is empty.</p>
                    ) : (
                        <table className="wishlist-table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistItems.map(item => (
                                    <tr key={item.id} className="wishlist-item">
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button className="wishlist-action" onClick={() => removeFromWishlist(item.id)}>
                                                <FaTrash /> Remove
                                            </button>
                                            <button className="wishlist-action">
                                                <FaHeart /> Add to Cart
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
}

export default Wishlist;
