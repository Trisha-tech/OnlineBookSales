
import "./App.css";
// import {Outlet} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './Components/index.js';
import { ProfilePage, Product } from './Components/index';
import LoginPage from './Pages/LoginPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import Cart from './Pages/Cart.jsx';
import Orders from './Pages/Orders.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import HomePage from './Pages/Home.jsx';
import Shop from "./Pages/Shop.jsx";
import { Toast } from "./Toast/Toast.js";
import Contact from "./Pages/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Animations.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [darkMode]);

  const appStyle = {
    backgroundColor: darkMode ? '#333' : '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <>
      <Router>
        <div className="App" style={appStyle}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" exact element={<HomePage darkMode={darkMode} />} />
            <Route path="/shop" exact element={<Shop />} />
            <Route path="/shop/:id" element={<Product />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/contactus" element={<Contact />} />
          </Routes>
          <Toast position="bottom-right" />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;