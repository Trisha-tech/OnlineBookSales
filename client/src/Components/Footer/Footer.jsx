import React from 'react';
import { Link } from "react-router-dom";
import { GitHub, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between max-w-[90%]">
                <div className="footer-section">
                    <h2 className="text-lg font-bold mb-4">ABOUT</h2>
                    <ul className="footer-list">
                        <li><Link to="/contactus" className="hover:text-yellow-300 text-lg">Contact us</Link></li>
                        <li><Link to="/" className="hover:text-yellow-300 text-lg">About us</Link></li>
                        <li><Link to="/" className="hover:text-yellow-300 text-lg">Careers</Link></li>
                        <li><Link to="/" className="hover:text-yellow-300 text-lg">Gift Cards</Link></li>
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
                    <h2 className="text-lg font-bold mb-4 text-center">SOCIALS</h2>
                    <ul className="footer-list flex gap-16">
                        <li><a href="/" className="hover:text-yellow-300"><LinkedIn sx={{ fontSize: '2rem' }} /></a></li>
                        <li><a href="/" className="hover:text-yellow-300"><GitHub sx={{ fontSize: '2rem' }} /></a></li>
                        <li><a href="/" className="hover:text-yellow-300"><Twitter sx={{ fontSize: '2rem' }} /></a></li>
                        <li><a href="/" className="hover:text-yellow-300"><Instagram sx={{ fontSize: '2rem' }} /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
