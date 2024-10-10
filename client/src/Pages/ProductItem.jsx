// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Spinner from "./Spinner";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ProductItem = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/api/product/admin/products"
//         );
//         setProducts(response.data.products);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching products", error);
//       }
//     };

//     const fetchWishlist = async () => {
//       try {
//         const authToken = localStorage.getItem("token");
//         const response = await axios.get(
//           "http://localhost:8080/api/wishlist/getwishlistdata",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               "auth-token": authToken,
//             },
//             withCredentials: true,
//           }
//         );

//         // Extract product IDs from wishlist items
//         const wishlistItems = response.data.wishlistItems;
//         const wishlistProductIds = wishlistItems.map(
//           (item) => item.product._id
//         );
//         setWishlist(wishlistProductIds);
//       } catch (error) {
//         console.error("Error fetching wishlist", error);
//       }
//     };

//     fetchProducts();
//     fetchWishlist();
//   }, []);

//   const toggleWishlist = async (product) => {
//     try {
//       const authToken = localStorage.getItem("token");
//       const productId = product._id;

//       if (wishlist.includes(productId)) {
//         await axios.delete(
//           `http://localhost:8080/api/wishlist/removefromwishlist/${productId}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               "auth-token": authToken,
//             },
//             withCredentials: true,
//           }
//         );

//         setWishlist(wishlist.filter((id) => id !== productId));
//       } else {
//         await axios.post(
//           `http://localhost:8080/api/wishlist/addtowishlist/${productId}`,
//           {},
//           {
//             headers: {
//               "Content-Type": "application/json",
//               "auth-token": authToken,
//             },
//             withCredentials: true,
//           }
//         );

//         setWishlist([...wishlist, productId]);
//       }
//     } catch (error) {
//       console.error("Error toggling wishlist", error);
//     }
//   };

//   const renderBooks = (books) => {
//     return books.map((book) => (
//       <div
//         key={book._id}
//         className="bg-white rounded-lg shadow-lg p-6 mb-6 flex flex-col relative transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:bg-[rgb(40,40,40)]"
//       >
//         <button
//           onClick={() => toggleWishlist(book)}
//           className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition duration-300"
//         >
//           {wishlist.includes(book._id) ? (
//             <FaHeart size={20} fill="#ff0000" />
//           ) : (
//             <FaRegHeart size={20} />
//           )}
//         </button>
//         <img
//           src={book.images[0].url}
//           alt={book.name}
//           className="w-full h-48 object-cover mb-4 rounded-lg"
//         />
//         <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
//           {book.name}
//         </h3>
//         <p className="text-gray-600 mb-1 dark:text-white">
//           Author: {book.author}
//         </p>
//         <p className="text-gray-600 mb-4 dark:text-white">{book.description}</p>
//         <div className="flex justify-between items-center mt-auto">
//           <p className="text-gray-900 font-semibold text-lg dark:text-white">
//             ₹{book.price}
//           </p>
//           <button
//             className="self-end text-white px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out"
//             style={{ backgroundColor: "#002147" }}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     ));
//   };

//   const categories = [...new Set(products.map((book) => book.category))];

//   return (
//     <div className="bg-gray-100 p-6">
//       {isLoading ? (
//         <Spinner /> // Display spinner while data is not loaded
//       ) : (
//         categories.map((category) => (
//           <section
//             key={category}
//             className="container mx-auto my-8 dark:bg-[rgb(51,51,51)]"
//           >
//             <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2 dark:text-white">
//               {category}
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {renderBooks(
//                 products.filter((book) => book.category === category)
//               )}
//             </div>
//           </section>
//         ))
//       )}
//     </div>
//   );
// };

// export default ProductItem;

import React, { useState } from "react";

const productData = [
  {
    id: 1,
    name: "The Enchanted Forest",
    author: "Lila Woods",
    description:
      "A thrilling adventure through magical forests and forgotten kingdoms.",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZhc2NpbmF0ZXxlbnwwfHx8fDE2NDE0ODQyMjA&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 2,
    name: "Journey to the Stars",
    author: "Marcus Orion",
    description:
      "A space exploration tale that challenges the limits of human imagination.",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1534081333815-ae5019106622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGZ1dHVyaXN0aWMlMjBzcGFjZXxlbnwwfHx8fDE2NDE0ODQzNzQ&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 3,
    name: "Whispers of the Sea",
    author: "Eva Maris",
    description:
      "An inspiring story about love, loss, and the mysteries of the ocean.",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fG9jZWFufGVufDB8fHx8MTY0MTQ4NDI4Nw&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 4,
    name: "The Last Kingdom",
    author: "Henry Blackwell",
    description:
      "An epic tale of the rise and fall of a mighty kingdom in ancient times.",
    price: 400,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    name: "A Tale of Two Worlds",
    author: "Sophie Lennon",
    description:
      "A gripping story that bridges the gap between two parallel worlds.",
    price: 380,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 6,
    name: "Whispers of the Sea",
    author: "Eva Maris",
    description:
      "An inspiring story about love, loss, and the mysteries of the ocean.",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fG9jZWFufGVufDB8fHx8MTY0MTQ4NDI4Nw&ixlib=rb-1.2.1&q=80&w=400",
  },
];

// ProductShowcase component
const ProductItem = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on the search term
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8">
          CHECK OUT NEW COLLECTIONS
        </h1>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 rounded-md w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-2">FICTIONALS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-lg p-4 text-center transform transition duration-500 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-3/4 h-60 object-cover mb-4 mx-auto rounded-md"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="mb-4">{product.description}</p>
                <p className="font-bold text-lg">₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">CHILDREN'S BOOK</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-lg p-4 text-center transform transition duration-500 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-3/4 h-60 object-cover mb-4 mx-auto rounded-md"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="mb-4">{product.description}</p>
                <p className="font-bold text-lg">₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">NON-FICTION</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-lg p-4 text-center transform transition duration-500 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-3/4 h-60 object-cover mb-4 mx-auto rounded-md"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="mb-4">{product.description}</p>
                <p className="font-bold text-lg">₹{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
