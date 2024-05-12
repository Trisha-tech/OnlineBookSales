import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="footer-section">
                    <h2 className="text-lg font-bold mb-4">ABOUT</h2>
                    <ul className="footer-list">
                        <li><Link to="/" className="hover:text-gray-200">Contact us</Link></li>
                        <li><Link to="/" className="hover:text-gray-200">About us</Link></li>
                        <li><Link to="/" className="hover:text-gray-200">Careers</Link></li>
                        <li><Link to="/" className="hover:text-gray-200">Gift Cards</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-bold mb-4">HELP</h2>
                    <ul className="footer-list">
                        <li><Link to="/" className="hover:text-gray-200">Payments</Link></li>
                        <li><Link to="/" className="hover:text-gray-200">Shipping</Link></li>
                        <li><Link to="/" className="hover:text-gray-200">Cancellation & Returns</Link></li>
                        <li><Link to="/" className="hover:text-gray-200">FAQs</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="text-lg font-bold mb-4">SOCIALS</h2>
                    <ul className="footer-list">
                        <li><a href="/" className="hover:text-gray-200">Linkedin</a></li>
                        <li><a href="/" className="hover:text-gray-200">Github</a></li>
                        <li><a href="/" className="hover:text-gray-200">Twitter</a></li>
                        <li><a href="/" className="hover:text-gray-200">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
