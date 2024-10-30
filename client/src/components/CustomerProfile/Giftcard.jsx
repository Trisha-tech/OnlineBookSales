import React, { useState } from "react";
import CorporateRequirements from "./CorporateRequirements"; // Assuming you have a CorporateRequirements component

const Giftcard = () => {
  const [activeTab, setActiveTab] = useState("personal"); // state to control active tab

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardValue: 0,
    noOfCards: 1,
    gifterName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gift card details:", formData);
  };

  return (
    <div className="h-full bg-white w-full py-9 px-8">
      {/* Top navigation section */}
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-semibold">Book4U Gift Card</h1>
        <div className="space-x-6">
          <a href="#" className="text-blue-500 hover:underline">
            Buy a Gift Card
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            Check Gift Card Balance
          </a>
        </div>
      </div>

      {/* Add Gift Card Section */}
      <div className="mt-4">
        <button className="px-6 py-3 border rounded-md text-blue-500 border-blue-500 hover:bg-blue-100">
          + Add a Gift Card
        </button>
      </div>

      {/* Tabs section */}
      <div className="mt-6">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "personal"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            PERSONAL GIFT CARDS
          </button>
          <button
            className={`px-4 py-2 font-semibold ${
              activeTab === "corporate"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab("corporate")}
          >
            CORPORATE REQUIREMENTS
          </button>
        </div>
      </div>

      {/* Conditional Rendering */}
      {activeTab === "personal" && (
        <div className="flex mt-6">
          {/* Left form section */}
          <div className="w-[50%]">
            <h2 className="text-xl font-semibold mb-4">
              Buy a Book4U Gift Card
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Receiver's Email */}
              <div className="w-[22vw] mt-2">
                <input
                  className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                  type="email"
                  name="email"
                  placeholder="Receiver's Email ID *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Receiver's Name */}
              <div className="w-[22vw] mt-2">
                <input
                  className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                  type="text"
                  name="name"
                  placeholder="Receiver's Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Card Value */}
              <div className="flex space-x-2 mt-2">
                <select
                  className="py-3 px-5 w-[50%] border-[1px] border-[#e0e0e0] rounded-md focus:outline-gray-400"
                  name="cardValue"
                  value={formData.cardValue}
                  onChange={handleChange}
                  required
                >
                  <option value={0}>Card Value in ₹</option>
                  <option value={500}>₹500</option>
                  <option value={1000}>₹1000</option>
                  <option value={2000}>₹2000</option>
                  <option value={5000}>₹5000</option>
                </select>

                {/* No of Cards */}
                <input
                  className="py-3 px-5 w-[50%] border-[1px] border-[#e0e0e0] rounded-md focus:outline-gray-400"
                  type="number"
                  name="noOfCards"
                  value={formData.noOfCards}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>

              {/* Gifter's Name */}
              <div className="w-[22vw] mt-2">
                <input
                  className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                  type="text"
                  name="gifterName"
                  placeholder="Gifter's Name (Optional)"
                  value={formData.gifterName}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="w-[22vw] mt-2">
                <textarea
                  className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                  name="message"
                  placeholder="Write a message (Optional, 100 characters)"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength="100"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-4 border-[1px] border-blue-500 hover:bg-blue-600 hover:text-white rounded-md mt-4 transition duration-300 ease-in-out"
              >
                Submit Gift Card
              </button>
            </form>
          </div>

          {/* Right section - Gift card preview */}
          <div className="w-[50%] flex justify-center items-center">
            <div className="border-[1px] border-[#e0e0e0] rounded-md p-5">
              <div className="relative w-[300px] h-[200px] rounded-md overflow-hidden">
                {/* Image fits the container */}
                <img
                  src="https://i.ibb.co/Xjc1Ghp/Giftcard.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                  alt="Gift Card"
                />
                {/* Price overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  ₹{formData.cardValue}
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm mt-2 text-gray-500">Book4U Gift Card</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Corporate Requirements Form */}
      {activeTab === "corporate" && (
        <div className>
          <CorporateRequirements />
        </div>
      )}
    </div>
  );
};

export default Giftcard;
