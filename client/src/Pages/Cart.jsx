import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import {
  fetchCartData,
  addItemToCart,
  removeItemFromCart,
} from "../api/api.js";
// import "./Cart.css";
import Preloader from "../Components/Preloader";
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
      <table className="cart-table w-full border-collapse mt-5">
      <tr key={item.id} className="mb-[10px] border-b border-[#e0e0e0]">
        <td className=" border border-[#ddd] p-2 text-left">
          <img
            src={item.image || "https://via.placeholder.com/150"}
            alt={item.name}
            className="rounded-lg block w-[10vw] h-[20vh]"
          />
        </td>
        <td className="font-semibold border border-[#ddd] p-2 text-left">{item.name}</td>
        <td className=" border border-[#ddd] p-2 text-left">${item.price.toFixed(2)}</td>
        <td className=" border border-[#ddd] p-2 text-left">
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="quantity-button bg-[#007bff] text-white border-none py-[5px] px-[10px] text-sm cursor-pointer ml-[5px] rounded-md"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => handleAddItem(item)}
            className="quantity-button bg-[#007bff] text-white border-none py-[5px] px-[10px] text-sm cursor-pointer ml-[5px] rounded-md"
          >
            +
          </button>
        </td>
        <td className=" border border-[#ddd] p-2 text-left">
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="remove-btn bg-[#F95454] text-white border-none py-[10px] px-5 text-xs cursor-pointer rounded-md transition-none delay-[400ms] ease-in hover:bg-[#C62E2E] hover:scale-105"
          >
            Remove
          </button>
        </td>
      </tr>
      </table>
    ));
  };

  const renderSuggestedProducts = () => (
    <div className="suggested-products mt-5 space-y-4">
      <h2 className="dark:text-white text-xl font-semibold font-poppins underline underline-offset-4">Suggested Products</h2>
      <ul className="flex list-none p-0 gap-5">
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
        <div className="cart-container max-w-[800px] my-5 mx-auto p-5 border border-[#ddd] rounded-lg shadow-sm dark:bg-[rgb(40,40,40)]">
          <h1 className="cart-header text-2xl mb-3 font-bold dark:text-white">Shopping Cart</h1>
          <div className="w-full justify-center items-center flex">
            <img src="/error.png"/>
          </div>
          <p className="font-dmsans text-center text-red-400">{error}</p>
         <div className="w-full  justify-center flex mt-5">
         <button onClick={handleRetry} className="retry-button dark:text-white bg-[#002147] text-white border-none p-8 text-base cursor-pointer mt-3 rounded-md text-center border-2 border-[#002147] hover:text-[#002147] hover:bg-[#F4F4F4] hover:font-semibold">
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
      <div className="cart-container max-w-[800px] my-5 mx-auto p-5 border border-[#ddd] rounded-lg shadow-sm dark:bg-[rgb(40,40,40)]">
        <h1 className="cart-header text-2xl mb-3 font-bold dark:text-white">Shopping Cart</h1>
        {data && data.items && data.items.length > 0 ? (
          <>
            <table className="cart-table w-full border-collapse mt-5">
              <thead>
                <tr>
                  <th className="border-none p-4 text-center font-bold bg-[#dde8f9]">Image</th>
                  <th className="border-none p-4 text-center font-bold bg-[#dde8f9]">Name</th>
                  <th className="border-none p-4 text-center font-bold bg-[#dde8f9]">Price</th>
                  <th className="border-none p-4 text-center font-bold bg-[#dde8f9]">Quantity</th>
                  <th className="border-none p-4 text-center font-bold bg-[#dde8f9]">Action</th>
                </tr>
              </thead>
              <tbody>{renderCartItems()}</tbody>
            </table>
            <div className="cart-summary mt-5 flex justify-between items-center">
      <div className="cart-total text-lg dark:text-white">
         Total: <span className="font-medium">${data ? data.total.toFixed(2) : "0.00"}</span>       </div>
       <button className="checkout-button bg-[#28a745] text-white border-none py-[10px] px-5 text-base cursor-pointer rounded-md transition delay-[400ms] ease-in dark:text-white hover:bg-[#218838] hover:scale-105">
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
