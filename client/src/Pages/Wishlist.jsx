import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  FaHeart, 
  FaTrash, 
  FaTable, 
} from "react-icons/fa";
//import "./Wishlist.css"; // Import CSS file for wishlist component styling
import Preloader from "../Components/Preloader";
import { useAuth } from "../Context/AuthContext";
import { useToast } from "../Context/ToastContext";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [error, setError] = useState(null);
  const { userLoggedIn } = useAuth();
  const { showToast } = useToast();

  const navigate = useNavigate();

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
        // setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch wishlist. Please try again later.");
        // setIsLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  useEffect(() => {
    if (!userLoggedIn) {
      showToast("error", "Please login to view your wishlist.", undefined, 7000);
      setTimeout(() => {
        navigate("/login");
      }, 5000); // 5000 milliseconds = 5 seconds
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [userLoggedIn, navigate]);


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


  if (error) {
    return <div className="h-[60vh] md:h-[80vh]">
      <div className="error-message text-[#ff6347] text-lg text-center mt-5">{error}</div>
    </div>;
  }

  return (
    <>
    <Preloader/>
    <div className="wishlist-container m-5 p-5 border border-[#ccc] rounded-md shadow-md">
      <h2 className="dark:text-white flex items-center text-2xl text-[#333] mb-5">
        <FaTable /> Your Wishlist
      </h2>
      {wishlistItems.length === 0 ? (
        <p className="dark:text-white">Your wishlist is empty.</p>
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
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.product.name}</h3>
                <p className="text-gray-600 mb-1 dark:text-white">Author: {item.product.author}</p>
                <p className="text-gray-600 mb-4 dark:text-white">{item.product.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-900 font-semibold text-lg dark:text-white">₹{item.product.price}</p>
                <button onClick={() => addToCart(item.product._id)} className="text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out" style={{ backgroundColor: '#002147' }}>
                  <FaHeart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default Wishlist;
