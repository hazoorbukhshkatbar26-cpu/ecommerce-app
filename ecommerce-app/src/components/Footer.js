
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ShopEase</h3>
          <p>Your one-stop shopping destination</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/categories">Categories</a>
          <a href="/about">About Us</a>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email:hazoorbakhsh12@.com</p>
          <p>Phone: +923192766618</p>
          <p>Address: Quetta, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;