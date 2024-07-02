import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/product/admin/products');
        setProducts(response.data.products);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

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

        // Extract product IDs from wishlist items
        const wishlistItems = response.data.wishlistItems;
        const wishlistProductIds = wishlistItems.map(item => item.product._id);
        setWishlist(wishlistProductIds);
      } catch (error) {
        console.error('Error fetching wishlist', error);
      }
    };

    fetchProducts();
    fetchWishlist();
  }, []);

  const toggleWishlist = async (product) => {
    try {
      const authToken = localStorage.getItem('token');
      const productId = product._id;

      if (wishlist.includes(productId)) {
        await axios.delete(`http://localhost:8080/api/wishlist/removefromwishlist/${productId}`, {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken
          },
          withCredentials: true
        });

        setWishlist(wishlist.filter((id) => id !== productId));
      } else {
        await axios.post(`http://localhost:8080/api/wishlist/addtowishlist/${productId}`, {}, {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken
          },
          withCredentials: true
        });

        setWishlist([...wishlist, productId]);
      }
    } catch (error) {
      console.error('Error toggling wishlist', error);
    }
  };

  const renderBooks = (books) => {
    return books.map((book) => (
      <div key={book._id} className="bg-white rounded-lg shadow-lg p-6 mb-6 flex flex-col relative transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200">
        <button
          onClick={() => toggleWishlist(book)}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition duration-300"
        >
          {wishlist.includes(book._id) ? <FaHeart size={20} fill="#ff0000" /> : <FaRegHeart size={20} />}
        </button>
        <img src={book.images[0].url} alt={book.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h3 className="text-xl font-bold mb-2 text-gray-900">{book.name}</h3>
        <p className="text-gray-600 mb-1">Author: {book.author}</p>
        <p className="text-gray-600 mb-4">{book.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-gray-900 font-semibold text-lg">₹{book.price}</p>
          <button className="self-end text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out" style={{ backgroundColor: '#002147' }}>
            Add to Cart
          </button>
        </div>
      </div>
    ));
  };

  const categories = [...new Set(products.map((book) => book.category))];

  return (
    <div className="bg-gray-100 p-6">
      {isLoading ? (
        <Spinner /> // Display spinner while data is not loaded
      ) : (
        categories.map((category) => (
          <section key={category} className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {renderBooks(products.filter((book) => book.category === category))}
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default ProductItem;
