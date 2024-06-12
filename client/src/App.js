
import "./App.css";
// import {Outlet} from "react-router-dom";
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
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './Animations.css';



function App() {
  return (
    <>
    
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/"         exact element={<HomePage/>} />
          <Route path="/shop"     exact element={<Shop/>} />
          <Route path="/shop/:id"       element={<Product/>} />
          <Route path="/login"          element={<LoginPage/>} />
          <Route path="/signup"         element={<SignUpPage/>} />
          <Route path="/wishlist"       element={<Wishlist/>} />
          <Route path="/cart"           element={<Cart/>} />
          <Route path="/orders"         element={<Orders/>} />
          <Route path="/contactus"      element={<Contact/>}/>
        </Routes>
        <Toast position="bottom-right"/>
        <Footer/>
      </div>
    </Router>
    
    </>
  );
}

export default App;
