import React, { useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", userData);
  };

  return (
    <div className="profile h-[100vh] bg-white w-[90%] py-9 px-8">
      <h2 className="text-xl font-semibold">Personal Information</h2>
      <div className="mt-2">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <div className="w-[22vw]">
              <input
                className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                placeholder="Name"
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-[22vw]">
              <input
                className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="px-8 py-2  border-[1px] border-blue-500 hover:bg-blue-600 hover:text-white rounded-md mt-2 transition duration-300 ease-in-out"
              >
                SAVE
              </button>{" "}
            </div>
          </div>

          <div className="gender mt-4">
            <h2 className="font-semibold">Your Gender</h2>

            <div className="mt-2">
              <div className="flex">
                <div>
                  <label className="mr-8">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={userData.gender === "male"}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    Male
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={userData.gender === "female"}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* ------------------------ */}
      <div className="mt-5">
        <h2 className="text-xl font-semibold"> Phone Number</h2>
        <div className="mt-2">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div>
                <input
                  className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={userData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center ml-5">
                <button
                  type="submit"
                  className="px-8 py-2  border-[1px] border-blue-500 hover:bg-blue-600 hover:text-white rounded-md mt-2 transition duration-300 ease-in-out"
                >
                  SAVE
                </button>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* -------------------------------------------- */}

      <div className="mt-5">
        <h2 className="text-xl font-semibold"> Change Password</h2>
        <div className="mt-2">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <div className="w-[22vw]">
                <input
                  className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                  type="tel"
                  name="oldPassword"
                  placeholder="Old Password"
                  value={userData.oldPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="w-[22vw]">
                <input
                  className="py-4 px-5 w-full border-[1px] border-[#e0e0e0] rounded-md mt-2 focus:outline-gray-400"
                  type="tel"
                  name="newPassword"
                  placeholder="New Password"
                  value={userData.newPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center ml-5">
                <button
                  type="submit"
                  className="px-8 py-2  border-[1px] border-blue-500 hover:bg-blue-600 hover:text-white rounded-md mt-2 transition duration-300 ease-in-out"
                >
                  SAVE
                </button>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
