import React, { useState } from "react";

const Pancard = () => {
  const [formData, setFormData] = useState({
    pancardNumber: "",
    fullName: "",
    pancardFile: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="Pancard h-[100vh] bg-white w-[90%] py-9 px-8">
      <h2 className="text-xl font-semibold mb-4">PAN Card Information</h2>
      <div className="mt-2">
        <div className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="w-[22vw]">
              <input
                className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                placeholder="PAN Card Number"
                type="text"
                name="pancardNumber"
                value={formData.pancardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="w-[22vw] mt-2">
              <input
                className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="w-[22vw] relative mt-4">
              <label className="absolute top-[5px] left-3 bg-white px-1 text-[0.7rem] text-gray-500">
                Upload PAN Card (Only JPEG file is allowed)
              </label>
              <input
                className="pt-7 pb-2 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md focus:outline-gray-400 text-sm"
                type="file"
                name="pancardFile"
                accept=".jpeg"
                onChange={handleChange}
              />
            </div>
            <div className="mt-6 flex items-start pb-8">
              <input
                className="mt-1 focus:outline-gray-400"
                type="checkbox"
                id="pan-terms"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label htmlFor="pan-terms" className="ml-2 text-sm">
                I do hereby declare that PAN furnished/stated above is correct
                and belongs to me, registered as an account holder with
                www.book4U.com. I further declare that I shall solely be held
                responsible for the consequences, in case of any false PAN
                declaration.
              </label>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="px-8 py-2 border-[1px] border-blue-500 hover:bg-blue-600 hover:text-white rounded-md mt-2 transition duration-300 ease-in-out"
              >
                UPLOAD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pancard;