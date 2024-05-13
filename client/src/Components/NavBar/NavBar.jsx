import React from 'react';
import { Link, useLocation } from "react-router-dom";



function Navbar() {
    const location = useLocation();

    return (
        <div className="bg-gray-800 text-white p-4 flex justify-between">
            <div className="left-topbar-container">
                <Link to="/">
                    <h2 className="text-xl font-bold">Book4u</h2>
                </Link>
                {location.pathname === "/shop" && (
                    <div className="search-bar">
                        <input 
                            className="bg-gray-700 rounded px-2 py-1"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                )}
            </div>
            <div className="right-topbar-container">
                <Link to="/login">
                    <button className="mr-4 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600">Login</button>
                </Link>
                <Link to="/shop">
                    <button className="mr-2 px-4 py-2 rounded bg-gray-600 hover:bg-gray-700">Shop</button>
                </Link>
                <Link to="/wishlist">
                    <button className="mr-2 px-4 py-2 rounded bg-gray-600 hover:bg-gray-700">Wishlist</button>
                </Link>
                <Link to="/cart">
                    <button className="mr-2 px-4 py-2 rounded bg-gray-600 hover:bg-gray-700">Cart</button>
                </Link>
                <Link to="/orders">
                    <button className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700">Orders</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
