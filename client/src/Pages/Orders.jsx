import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function Orders() {
  const [isLoading, setIsLoading] = useState(true);
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Simulate a fetch call to backend to check initial loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleTrackOrder = () => {
    setIsLoading(true);
    // Simulate a fetch call to backend to get order status
    setTimeout(() => {
      // Simulate order data
      const mockOrderData = {
        id: orderId,
        status: "Shipped",
        expectedDelivery: "2024-07-10"
      };
      setOrderData(mockOrderData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Tracking</h2>
      
      <div className="mb-4">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID"
          className="appearance-none bg-transparent border border-gray-300 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleTrackOrder}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Track Order
        </button>
      </div>

      {isLoading && <Spinner />}

      {!isLoading && orderData && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Order ID: {orderData.id}</h3>
          <p className="text-gray-600">Status: {orderData.status}</p>
          <p className="text-gray-600">Expected Delivery: {orderData.expectedDelivery}</p>
        </div>
      )}
      
      {!isLoading && !orderData && (
        <p className="text-gray-600">Please enter an Order ID to track your order.</p>
      )}
    </div>
  );
}

export default Orders;
