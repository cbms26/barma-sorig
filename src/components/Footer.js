import React from "react";
import { Link } from "react-router-dom";

import "../styles/Footer.css"; // Import your CSS file for styling
import logo from "../logo.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container container">
        {/* Logo + Name */}
        <div className="footer-branding">
          <Link to="/">
            <img src={logo} alt="Barma Sorig" />
          </Link>
          <h3>Barma-Sorig</h3>
          <p>Traditional Healing & Herbal Therapy</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Location: Thimphu, Bhutan</p>
          <p>Ph: +975 17 123 456</p>
          <p>
            Email: <br /> contact@barma-sorig.com
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Barma-Sorig. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
