// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Digicraft</h3>
            <p>Your vision, our code – together we create digital experiences that inspire.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/digicraft.1?igsh=dmU4YTg4Z29qNWx6&utm_source=qr" aria-label="Instagram">Instagram</a>
              <a href="https://wa.me/212778938491" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Responsive Design</li>
              <li>Brand Identity</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on web design trends</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Digicraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;