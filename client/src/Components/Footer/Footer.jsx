import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import './Footer.css'; 

function Footer() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        setMessage("Thank you for subscribing!");
        setEmail("");
    };

    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between max-w-[90%]">
                <div className="footer-section">
                    <h2 className="text-lg font-bold mb-4">ABOUT</h2>
                    <ul className="footer-list">
                        <li><Link to="/contactus" className="hover:text-yellow-300 text-lg">Contact us</Link></li>
                        <li><Link to="/about" className="hover:text-yellow-300 text-lg">About us</Link></li>
                        <li><Link to="/" className="hover:text-yellow-300 text-lg">Careers</Link></li>
                        <li><Link to="/" className="hover:text-yellow-300 text-lg">Gift Cards</Link></li>
                        <li><Link to="/contributors" className="hover:text-yellow-300 text-lg">Our Contributors</Link></li>

                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-bold mb-4">HELP</h2>
                    <ul className="footer-list">
                        <li><Link to="/" className="hover:text-yellow-300 text-lg">Payments</Link></li>
                        <li><Link to="/" className="hover:text-yellow-300 text-lg">Shipping</Link></li>
                        <li><Link to="/" className="hover:text-yellow-300 text-lg">Cancellation & Returns</Link></li>
                        <li><Link to="/faqs" className="hover:text-yellow-300 text-lg">FAQs</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-bold mb-4">Legal</h2>
                    <ul className="footer-list">
                        <li><Link to="/privacy" className="hover:text-yellow-300 text-lg">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-yellow-300 text-lg">Terms and Conditions</Link></li>
                        <li><Link to="/licensing" className="hover:text-yellow-300 text-lg">Licensing</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-bold mb-4 text-center">SOCIALS</h2>
                    <ul className="footer-list flex">
                        <li><a href="https://www.linkedin.com/in/trisha-sahu-171623193/" className="hover:text-yellow-300"><LinkedIn sx={{ fontSize: '2rem' }} /></a></li>
                        <li><a href="https://github.com/Trisha-tech/OnlineBookSales" className="hover:text-yellow-300"><GitHub sx={{ fontSize: '2rem' }} /></a></li>
                        <li><a href="/" className="hover:text-yellow-300"><XIcon sx={{ fontSize: '2rem' }} /></a></li>
                        <li><a href="/" className="hover:text-yellow-300"><Instagram sx={{ fontSize: '2rem' }} /></a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-bold mb-4 text-center">NEWSLETTER</h2>
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-button">Subscribe</button>
                    </form>
                    {message && <p className="newsletter-message">{message}</p>}
                </div>
            </div>
            <div className="copyright-section text-center mt-8">
                <p>&copy; {new Date().getFullYear()} Online Book Sales - Books4U. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
