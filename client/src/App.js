import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Animations.css';
import { Navbar, Footer } from './Components/index.js';
import { ProfilePage, Product } from './Components/index';
import LoginPage from './Pages/LoginPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import Cart from './Pages/Cart.jsx';
import Orders from './Pages/Orders.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import HomePage from './Pages/Home.jsx';
import Shop from "./Pages/Shop.jsx";
import Contact from "./Pages/Contact.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./Pages/Terms.jsx";
import FAQ from "./Pages/Faq.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import { OrderList } from './Pages/Orders.jsx';
import Contributors from "./Pages/Contributors.jsx"; 
import Preloader from "./Components/Preloader.jsx";
import { Toast } from "./Toast/Toast.js";
import GoToTop from "./Components/GoToTop.jsx";
import License from "./Pages/Licensing.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const appStyle = {
    backgroundColor: darkMode ? '#333' : '#f4f4f4',
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/licensing" element={<License />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
        </Routes>
        <Toast position="bottom-right" />
        <Footer />
        <Preloader /> {/* Ensure Preloader is correctly styled */}
        <GoToTop /> {/* Added GoToTop component */}
      </div>
    </Router>
  );
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
