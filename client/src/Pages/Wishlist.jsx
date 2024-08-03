import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaTrash, FaTable, FaRegHeart } from "react-icons/fa";
import Spinner from "./Spinner";
import "./Wishlist.css"; // Import CSS file for wishlist component styling

function Wishlist() {
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const authToken = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/wishlist/getwishlistdata', {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken
          },
          withCredentials: true
        });
        setWishlistItems(response.data.wishlistItems);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch wishlist. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const removeFromWishlist = async (productId) => {
    try {
      const authToken = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/wishlist/removefromwishlist/${productId}`, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken
        },
        withCredentials: true
      });

      setWishlistItems(prevItems => prevItems.filter(item => item.product._id !== productId));
    } catch (error) {
      setError("Failed to remove item from wishlist. Please try again later.");
    }
  };

  const addToCart = async (productId) => {
    try {
      const authToken = localStorage.getItem('token');
      await axios.post('http://localhost:8080/api/cart/addtocart', { productId }, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken
        },
        withCredentials: true
      });

      removeFromWishlist(productId);
    } catch (error) {
      setError("Failed to add item to cart. Please try again later.");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="wishlist-container">
      <h2>
        <FaTable /> Your Wishlist
      </h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between relative wishlist-item">
              <button
                onClick={() => removeFromWishlist(item.product._id)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition duration-300"
              >
                <FaTrash size={20} />
              </button>
              <div>
                <img src={item.product.images[0].url} alt={item.product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.product.name}</h3>
                <p className="text-gray-600 mb-1">Author: {item.product.author}</p>
                <p className="text-gray-600 mb-4">{item.product.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-900 font-semibold text-lg">₹{item.product.price}</p>
                <button onClick={() => addToCart(item.product._id)} className="text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out" style={{ backgroundColor: '#002147' }}>
                  <FaHeart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
