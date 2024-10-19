import React, { useState } from "react";

const CorporateRequirements = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    location: "",
    companyName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Corporate Requirement Details:", formData);
  };

  return (
    <div className="h-full bg-white w-full py-9 px-8">
      {/* Top navigation section
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-semibold">Book4U Gift Cards</h1>
        <div className="space-x-6">
          <a href="#" className="text-blue-500 hover:underline">Personal Gift Cards</a>
          <a href="#" className="text-blue-500 hover:underline">Corporate Requirements</a>
        </div>
      </div> */}

      {/* Corporate Requirements Form Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Buy Book4U Gift Cards for Businesses</h2>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="w-[22vw] mt-2">
            <input
              className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md focus:outline-gray-400"
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name (Optional) */}
          <div className="w-[22vw] mt-2">
            <input
              className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md focus:outline-gray-400"
              type="text"
              name="lastName"
              placeholder="Last Name (Optional)"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Mobile Number */}
          <div className="w-[22vw] mt-2">
            <input
              className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md focus:outline-gray-400"
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number *"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email ID */}
          <div className="w-[22vw] mt-2">
            <input
              className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md focus:outline-gray-400"
              type="email"
              name="email"
              placeholder="Email ID *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location Dropdown */}
          <div className="w-[22vw] mt-2">
            <select
              className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md focus:outline-gray-400"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Location *</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          {/* Company Name */}
          <div className="w-[22vw] mt-2">
            <input
              className="py-3 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md focus:outline-gray-400"
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-8 py-4 border-[1px] border-blue-500 hover:bg-blue-600 hover:text-white rounded-md mt-4 transition duration-300 ease-in-out"
          >
            Submit Details
          </button>
        </form>

        {/* Help Section */}
        <div className="mt-6">
          <p>Need Help?</p>
          <p>Have Book4U Gift Card related queries? <a href="#" className="text-blue-500 hover:underline">Contact Us</a></p>
          <p>
            Bulk sale enquiries can be sent to <a href="mailto:egvmarketing@Book4U.com" className="text-blue-500 hover:underline">egvmarketing@Book4U.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateRequirements;
