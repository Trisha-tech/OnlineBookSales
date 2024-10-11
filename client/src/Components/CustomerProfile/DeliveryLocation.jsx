import React, { useState } from "react";

const DeliveryLocation = () => {
  const [location, setLocation] = useState({
    address: "",
    city: "",
    postalCode: "",
  });

  const handleLocationChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Delivery location added:", location);
  };

  return (
    <div className="delivery-location h-[100vh] bg-white w-[90%] py-9 px-8">
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>
      <form onSubmit={handleSubmit}>
        <div className="block mb-4">
          <div className="flex items-center mt-2 py-2 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md focus-within:border-blue-500 focus-within:outline-none cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out">
            <button
              type="button"
              className=" p-2 text-b rounded-md text-blue-500 "
              onClick={() => console.log("Add new address")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <span className="text-blue-500">ADD NEW ADDRESS</span>
          </div>
        </div>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">
            Address:
          </span>
          <input
            className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:border-blue-500 focus:outline-none"
            type="text"
            name="address"
            value={location.address}
            onChange={handleLocationChange}
            placeholder="Enter your address"
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">City:</span>
          <input
            className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:border-blue-500 focus:outline-none"
            type="text"
            name="city"
            value={location.city}
            onChange={handleLocationChange}
            placeholder="Enter your city"
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">
            Postal Code:
          </span>
          <input
            className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:border-blue-500 focus:outline-none"
            type="text"
            name="postalCode"
            value={location.postalCode}
            onChange={handleLocationChange}
            placeholder="Enter your postal code"
          />
        </label>
        <button
          type="submit"
          className="px-8 py-4 border-[1px] border-blue-500 hover:bg-blue-600 hover:text-white rounded-md mt-2 transition duration-300 ease-in-out"
        >
          Save Location
        </button>
      </form>
    </div>
  );
};

export default DeliveryLocation;
