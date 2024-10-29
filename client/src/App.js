import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Animations.css';
import { Navbar, Footer } from './Components/index.js';
// import { ProfilePage, Product } from './Components/index.js';
import { Product } from './Components/index.js';
import RomancePage from './Pages/RomancePage.jsx';
import ActionPage from './Pages/ActionPage.jsx';
import ThrillerPage from './Pages/ThrillerPage.jsx';
import FictionPage from './Pages/FictionPage.jsx';
import TechPage from './Pages/TechPage.jsx';
import PhilosophyPage from './Pages/PhilosophyPage.jsx';
import MangaPage from './Pages/MangaPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import Cart from './Pages/Cart.jsx';
// import Orders from './Pages/Orders.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import HomePage from './Pages/Home.jsx';
import Shop from "./Pages/Shop.jsx";
import Contact from "./Pages/Contact.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./Pages/Terms.jsx";
import FAQ from "./Pages/Faq.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import { OrderList } from "./Pages/Orders.jsx";
import Contributors from "./Pages/Contributors.jsx";
import Preloader from "./Components/Preloader.jsx";
import { Toast } from "./Toast/Toast.js";
import GoToTop from "./Components/GoToTop.jsx";
import License from "./Pages/Licensing.jsx";
import CustomerProfile from "./Pages/CustomerProfile.jsx";
import GiftCards from "./Pages/GiftCards.jsx";
import Careers from "./Pages/Careers.jsx";
import NotFound from "./Pages/NotFound.jsx";
import CancelReturns from './Pages/CancelReturns.jsx'
import ChatBotEmbed from "./chatbot.jsx";

import ResetPassword from "./Pages/ResetPassword.jsx";
import Book from './Pages/Book.jsx';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const appStyle = {
    backgroundColor: darkMode ? "#333" : "#f4f4f4",
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/romance" element={<RomancePage />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/thriller" element={<ThrillerPage />} />
          <Route path="/fiction" element={<FictionPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/manga" element={<MangaPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<CustomerProfile />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cancelreturns" element={<CancelReturns />} />
          <Route path="/licensing" element={<License />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/giftcards" element={<GiftCards />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        <Toast position="bottom-right" />
        <Footer darkMode={darkMode} /> {/* Pass darkMode prop here */}
        <Preloader /> {/* Ensure Preloader is correctly styled */}
        <GoToTop /> {/* Added GoToTop component */}
        <ChatBotEmbed />

      </div>
    </Router>
  );
}

export default App;
