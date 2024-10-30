import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import {
  fetchCartData,
  addItemToCart,
  removeItemFromCart,
} from "../api/api.js";
import "./Cart.css";
import Preloader from "../components/Preloader";
import { useToast } from "../Context/ToastContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const isAuthenticated =!! localStorage.getItem('token');
  if(!isAuthenticated){
    navigate('/login')

 }

  const { userLoggedIn } = useAuth();
 
 

  useEffect(() => {
    fetchCartData()
      .then((cartData) => {
        setData(cartData);
        setIsLoading(false);
        setError(null); // Reset error state on successful data fetch
      })
      .catch((err) => {
        setError("Failed to load cart data. Please try again later.");
        setIsLoading(false);
        console.error("Error fetching cart data:", err);
      });
  }, [retryCount]); // Retry whenever retryCount changes

  useEffect(() => {
    if (!userLoggedIn) {
      showToast("error", "Please login to view your cart.", undefined, 7000);
      setTimeout(() => {
        navigate("/login");
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  // }, [userLoggedIn]);    
}, [userLoggedIn, showToast, navigate]);


  useEffect(() => {
    fetchCartData()
      .then((cartData) => {
        setData(cartData);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError("Failed to load cart data. Please try again later.");
        setIsLoading(false);
        console.error("Error fetching cart data:", err);
      });
  }, [retryCount]);

  const handleAddItem = (item) => {
    setIsLoading(true);
    addItemToCart(item)
      .then((updatedCart) => {
        setData(updatedCart);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to add item to cart. Please try again later.");
        setIsLoading(false);
        console.error("Error adding item to cart:", err);
      });
  };

  const handleRemoveItem = (itemId) => {
    setIsLoading(true);
    removeItemFromCart(itemId)
      .then((updatedCart) => {
        setData(updatedCart);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to remove item from cart. Please try again later.");
        setIsLoading(false);
        console.error("Error removing item from cart:", err);
      });
  };

  const handleRetry = () => setRetryCount(retryCount + 1);

  const renderCartItems = () => {

    return data.items.map((item) => (
      <table className="cart-table">
      <tr key={item.id}>
        <td>
          <img
            src={item.image || "https://via.placeholder.com/150"}
            alt={item.name}

          />
        </td>
        <td className="font-semibold">{item.name}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="quantity-button"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => handleAddItem(item)}
            className="quantity-button"
          >
            +
          </button>
        </td>
        <td>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="remove-btn"
          >
            Remove
          </button>
        </td>
      </tr>
      </table>
    ));
  };

  const renderSuggestedProducts = () => (
    <div className="suggested-products space-y-4">
      <h2 className="dark:text-white font-semibold font-poppins underline underline-offset-4">Suggested Products</h2>
      <ul className="flex  gap-5">
        <div className="dark:text-white border-2  pb-2  rounded-md overflow-hidden h-max shadow-lg w-[10vw]">
          <div className="font-dmsans flex flex-col items-center">
            <div className="p-4">
              <img
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg"
                width={100}
                className="h-[15vh] shadow-md"
                alt="img"
              />
            </div>
            <h1 className="text-blue-950 font-semibold text-sm">
              Hidden Pictures
            </h1>
            <p className="text-xs">Horror</p>
            <p className="font-semibold">$10.99</p>
            <button className="bg-yellow-500 text-xs px-4 py-1 rounded-md mt-2">Add to Cart</button>
          </div>
        </div>
        <div className="dark:text-white border-2  pb-2  rounded-md overflow-hidden h-max shadow-lg w-[10vw]">
          <div className="font-dmsans flex flex-col items-center">
            <div className="p-4">
              <img
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678378842i/60683957.jpg"
                width={100}
                className="h-[15vh] shadow-md"
                alt="img"
              />
            </div>
            <h1 className="text-blue-950 font-semibold text-sm">
            Check & Mate
            </h1>
            <p className="text-xs">Young Adult Fantasy</p>
            <p className="font-semibold">$11.59</p>
            <button className="bg-yellow-500 text-xs px-4 py-1 rounded-md mt-2">Add to Cart</button>

          </div>
        </div>{" "}
        <div className="dark:text-white border-2  pb-2  rounded-md overflow-hidden h-max shadow-lg w-[10vw]">
          <div className="font-dmsans flex flex-col items-center">
            <div className="p-4">
              <img
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643228739i/55196813.jpg"
                width={100}
                className="h-[15vh] shadow-md"
                alt="img"
              />
            </div>
            <h1 className="text-blue-950 font-semibold text-sm">
            The Maid
            </h1>
            <p className="text-xs">Fiction</p>
            <p className="font-semibold">$8.99</p>
            <button className="bg-yellow-500 text-xs px-4 py-1 rounded-md mt-2">Add to Cart</button>

          </div>
        </div>
      </ul>
    </div>
  );

  if (isLoading) return <Spinner />;

  if (error) {
    return (
      <>
        <Preloader />
        <div className="cart-container dark:bg-[rgb(40,40,40)]">
          <h1 className="cart-header dark:text-white">Shopping Cart</h1>
          <div className="w-full justify-center items-center flex">
            <img src="/error.png"/>
          </div>
          <p className="font-dmsans text-center text-red-400">{error}</p>
         <div className="w-full  justify-center flex mt-5">
         <button onClick={handleRetry} className="retry-button dark:text-white">
            Retry
          </button>
         </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Preloader />
      <div className="cart-container dark:bg-[rgb(40,40,40)]">
        <h1 className="cart-header dark:text-white">Shopping Cart</h1>
        {data && data.items && data.items.length > 0 ? (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{renderCartItems()}</tbody>
            </table>
            <div className="cart-summary">
      <div className="cart-total dark:text-white">
         Total: <span className="font-medium">${data ? data.total.toFixed(2) : "0.00"}</span>       </div>
       <button className="checkout-button dark:text-white">
        Proceed to Checkout
      </button>   </div>
          </>
        ) 
        : (
          <div className="flex text-3xl items-center  justify-center  font-poppins">
          
            <div>
              <img src="/cart.webp" width={200} />
            </div>
            <p className="dark:text-white text-[#4A628A] ">
              Your cart is empty.
            </p>
          </div>
        )}
        {renderSuggestedProducts()}
      </div>
    </>
  );

}

export default Cart;
