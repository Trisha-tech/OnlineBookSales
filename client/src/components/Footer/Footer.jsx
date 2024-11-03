import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

import GoogleTranslate from "../GoogleTranslate";
function Footer({ darkMode }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  const footerStyle = {
    backgroundColor: darkMode ? "#1a1a1a" : "#003366", // Darker background in dark mode
    color: darkMode ? "#f1f1f1" : "#ffffff", // Light text color in dark mode
  };

  return (
    <footer style={footerStyle} className="py-8">
      <div className="container mx-auto flex flex-wrap justify-between max-w-[90%]">
        <div className="footer-section m-0 p-0">
          <h2 className="text-lg font-bold mb-4">ABOUT</h2>
          <ul className="footer-list m-0 p-0 list-none">
            <li>
              <Link to="/contactus" className="hover:text-yellow-300 text-lg">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 text-lg">
                About us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-300 text-lg">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/giftcards" className="hover:text-yellow-300 text-lg">
                Gift Cards
              </Link>
            </li>
            <li>
              <Link
                to="/contributors"
                className="hover:text-yellow-300 text-lg"
              >
                Our Contributors
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section m-0 p-0">
          <h2 className="text-lg font-bold mb-4">HELP</h2>
          <ul className="footer-list m-0 p-0 list-none">
            <li>
              <Link to="/" className="hover:text-yellow-300 text-lg">
                Payments
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-yellow-300 text-lg">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/cancelreturns" className="hover:text-yellow-300 text-lg">
                Cancellation & Returns
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-yellow-300 text-lg">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section m-0 p-0">
          <h2 className="text-lg font-bold mb-4">Legal</h2>
          <ul className="footer-list m-0 p-0 list-none">
            <li>
              <Link to="/privacy" className="hover:text-yellow-300 text-lg">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-yellow-300 text-lg">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/licensing" className="hover:text-yellow-300 text-lg">
                Licensing
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section m-0 p-0">
          <h2 className="text-lg font-bold mb-4 text-center">SOCIALS</h2>
          <ul className="footer-list m-0 p-0 list-none flex gap-6">
            <li className="m-0">
              <a
                href="https://www.linkedin.com/in/trisha-sahu-171623193/"
                className="hover:text-[#0077b5] hover:bg-white transition duration-200 inline-flex items-center justify-center mb-2 hover:scale-110"
              >
                <LinkedIn sx={{ fontSize: "2rem" }} />
              </a>
            </li>
            <li className="m-0">
              <a
                href="https://github.com/Trisha-tech/OnlineBookSales"
                className="hover:text-[#333] hover:bg-white transition duration-200 inline-flex items-center justify-center mb-2 hover:scale-110"
              >
                <GitHub sx={{ fontSize: "2rem" }} />
              </a>
            </li>
            <li className="m-0">
              <a
                href="/"
                className="hover:text-black hover:bg-white transition duration-200 inline-flex items-center justify-center mb-2 hover:scale-110"
              >
                <XIcon sx={{ fontSize: "2rem" }} />
              </a>
            </li>
            <li className="m-0">
              <a
                href="/"
                className="hover:text-[#E4405F] hover:bg-white transition duration-200 inline-flex items-center justify-center mb-2 hover:scale-110"
              >
                <Instagram sx={{ fontSize: "2rem" }} />
              </a>
            </li>
          </ul>
          <div
            className="translator"
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0",
              marginBottom: "4px",
              marginTop: "16px",
              color: "white",
              display: "block",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <img
              src="google.png"
              alt=""
              className="google-translate"
              style={{ display: "block", width: "45px", margin: "auto" }}
            />

            <GoogleTranslate />
          </div>
        </div>
        <div className="footer-section m-0 p-0">
          <h2 className="text-lg font-bold mb-4 text-center">NEWSLETTER</h2>
          <form className="newsletter-form mt-5" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="newsletter-input p-2 border border-[#ced4da] w-full rounded-md text-black"
              required
            />
            <button type="submit" className="newsletter-button px-[6px] py-[12px] bg-[#003366] border-none text-white rounded cursor-pointer border border-white mt-3 ml-[35%] hover:bg-[#044d95]">
              Subscribe
            </button>
          </form>
          {message && <p className="newsletter-message font-bold text-center mt-3 text-[#ffff00]">{message}</p>}
        </div>
      </div>
      <div className="copyright-section text-white text-sm text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} Online Book Sales - Books4U. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
