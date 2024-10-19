import React from "react";

const Sidebar = ({setActiveSection}) => {
  return (
    <div className="sidebar ml-10 mt-5">
      <div className="w-[25vw] h-16 border-b-gray-400 border-2 px-2 py-1 flex shadow-lg bg-white ">
        <div
          className="profile-pic rounded-full bg-slate-400 w-10 h-10 "
          style={{
            backgroundImage:
              "url(https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp3_d7855f9562.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-full flex flex-col px-3">
          <span className="text-sm font-light leading-tight">Hello,</span>
          <span className="text-lg font-semibold leading-tight">
            Raunak Madan
          </span>
        </div>
      </div>

      <div className="sidebar-box border-b-gray-400 border-2 shadow-lg mt-5">
        <div onClick={() => setActiveSection('orders')} className="w-[25vw] h-16 border-b-gray-400 border-2 px-2 py-1 flex shadow-lg bg-white">
          <div className="w-10 h-10 flex items-center pt-3 justify-center">
            
            <div className="w-7">
              {" "}
              <img
                className="w-full cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhXXdiRp6DGbB38bgso1xNXRpvelkk6uUJw&s"
                alt="myorders_icon"
              ></img>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center px-3">
            <span className="text-lg font-[500] cursor-pointer text-[#494545] leading-tight">
              MY ORDERS
            </span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* --------------------- */}

        <div className="w-[25vw] border-2 py-1 shadow-lg bg-white border-b-gray-400">
          <div className="flex px-2 ">
            <div className="w-10 h-10 flex items-center justify-center">
              <div className="w-6">
                {" "}
                <img
                  className="w-full cursor-pointer"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4="
                  alt="settings_icon"
                ></img>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center px-3">
              <span className="text-lg font-[500] text-[#494545] leading-tight">
                ACCOUNT SETTINGS
              </span>
            </div>
          </div>
          <div onClick={() => setActiveSection('profile')} className="w-full bg-white  focus-within:border-blue-500 focus-within:outline-none cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out px-11 py-3 mt-2">
            <span className="text-center px-2" >Profile information</span>{" "}
          </div>
          <div onClick={() => setActiveSection('delivery-location')} className="w-full bg-white focus-within:border-blue-500 focus-within:outline-none cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out px-11 py-3 mt-2">
            <span className="text-center px-2" >Manage Addresses</span>{" "}
          </div>
          <div onClick={() => setActiveSection('pan-card')} className="w-full bg-white focus-within:border-blue-500 focus-within:outline-none cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out px-11 py-3 mt-2">
            <span className="text-center px-2">PAN Card information</span>{" "}
          </div>
        </div>

        {/* ----------------------- */}

        <div className="w-[25vw] border-2 py-1 shadow-lg bg-white border-b-gray-400">
          <div className="flex px-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <div className="w-7">
                {" "}
                <img
                  className="w-full cursor-pointer"
                  src="https://icons.veryicon.com/png/o/leisure/tourism-icon/wallet-53.png"
                  alt="payments_icon"
                ></img>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center px-3">
              <span className="text-lg font-[500] text-[#494545] leading-tight">
                PAYMENTS
              </span>
            </div>
          </div>
          <div onClick={() => setActiveSection('gift-card')} className="w-full bg-white focus-within:border-blue-500 focus-within:outline-none cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out px-11 py-3 mt-2">
            <span className="text-center">Gift Cards</span>{" "}
          </div>
          <div className="w-full bg-white  px-11 py-3 mt-2">
            <span className="text-center">Saved UPI</span>{" "}
          </div>
          <div className="w-full bg-white  px-11 py-3 mt-2">
            <span className="text-center">Saved Cards</span>{" "}
          </div>
        </div>

        <div className="w-[25vw] border-2 px-2 py-1 shadow-lg bg-white border-b-gray-400">
          <div className="flex">
            <div className="w-10 h-10 flex items-center justify-center">
              <div className="w-6">
                {" "}
                <img
                  className="w-full cursor-pointer"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4="
                  alt="account_settings_icon"
                ></img>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center px-3">
              <span className="text-lg font-[500]  text-[#494545] leading-tight">
                MY STUFF
              </span>
            </div>
          </div>
          <div className="w-full bg-white  px-11 py-3 mt-2">
            <span className="text-center">My Coupons</span>{" "}
          </div>
          <div className="w-full bg-white  px-11 py-3 mt-2">
            <span className="text-center">My Wishlist</span>{" "}
          </div>
          <div className="w-full bg-white  px-11 py-3 mt-2">
            <span className="text-center">My Reviews &amp; Ratings</span>{" "}
          </div>
        </div>

        {/* -------------- */}
        <div className="w-[25vw] h-16 border-b-gray-400 border-2 px-2 py-1 flex shadow-lg bg-white">
          <div className="w-10 h-10 flex items-center pt-3 justify-center">
            <div className="w-7">
              <svg
                width="24"
                height="24"
                class=""
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#2874F0"
                  stroke-width="0.3"
                  stroke="#2874F0"
                  d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center px-3">
            <span className="text-lg font-[500] cursor-pointer text-[#494545] leading-tight">
              LOGOUT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
