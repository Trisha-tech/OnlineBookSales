import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { fetchCartData, addItemToCart, removeItemFromCart } from "../api/api.js";
import "./Cart.css";

function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

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

  const handleRetry = () => {
    setRetryCount(retryCount + 1); // Trigger useEffect to retry fetching data
  };

  const renderCartItems = () => {
    if (!data || !data.items || data.items.length === 0) {
      return (
        <tr>
          <td colSpan="5">Your cart is empty.</td>
        </tr>
      );
    }

    return data.items.map((item) => (
      <tr key={item.id}>
        <td>
          <img
            src={item.image || "https://via.placeholder.com/150"}
            alt={item.name}
            className="item-image"
          />
        </td>
        <td>{item.name}</td>
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
            className="remove-button"
          >
            Remove
          </button>
        </td>
      </tr>
    ));
  };

  const renderSuggestedProducts = () => {
    // Replace with actual suggested products logic
    return (
      <div className="suggested-products">
        <h2>Suggested Products</h2>
        <ul>
          <li>Suggested Product 1</li>
          <li>Suggested Product 2</li>
          <li>Suggested Product 3</li>
        </ul>
      </div>
    );
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="cart-container">
        <h1 className="cart-header">Shopping Cart</h1>
        <p className="error-message">{error}</p>
        <button onClick={handleRetry} className="retry-button">
          Retry
        </button>
        <hr />
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
          <tbody>
            {renderCartItems()}
          </tbody>
        </table>
        <div className="cart-summary">
          <div className="cart-total">Total: ${data ? data.total.toFixed(2) : "0.00"}</div>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
        <hr />
        {renderSuggestedProducts()}
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-header">Shopping Cart</h1>
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
        <tbody>
          {renderCartItems()}
        </tbody>
      </table>
      <div className="cart-summary">
        <div className="cart-total">Total: ${data ? data.total.toFixed(2) : "0.00"}</div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
      <hr />
      {renderSuggestedProducts()}
    </div>
  );
}

export default Cart;
