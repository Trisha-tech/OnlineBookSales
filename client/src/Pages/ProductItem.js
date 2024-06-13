import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/product/admin/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to render individual book items
  const renderBooks = (books) => {
    return books.map((book) => (
      <div key={book._id} className="bg-white rounded-lg shadow-lg p-6 mb-6 flex flex-col relative">
      <img src={book.images[0].url} alt={book.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h3 className="text-xl font-bold mb-2">{book.name}</h3>
      <p className="text-gray-600 mb-1">Author: {book.author}</p>
      <p className="text-gray-600 mb-4">{book.description}</p>
      <p className="text-gray-600 mb-0">Price: ₹ {book.price}</p>
      <button className="absolute bottom-3 right-2 bg-blue-700 text-white px-5 py-4 rounded-md" style={{ backgroundColor: "#002147", color: "#ffffff", padding: "5px" }}>Add to Cart</button>
    </div>
    ));
  };

 
  const categories = [...new Set(products.map((book) => book.category))];

  return (
    <div className="bg-gray-100 p-6">
      {categories.map((category) => (
        <section key={category} className="container mx-auto my-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {renderBooks(products.filter((book) => book.category === category))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductItem;
