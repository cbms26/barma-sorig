import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../styles/Header.css";
import "../App.css";

function Header() {
  // State to manage the menu open/close status
  // This state is used to toggle the mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="header">
      <div className="container">
        {/* Left Section of the Header */}
        <div className="header-left ">
          <Link to="/">
            <img src={logo} alt="company logo"></img>
          </Link>
          <div className="header-title">
            Barma Sorig <br /> Healing Center
            {/* Company Name in Dzongkha - །། །བར་མ་གསོ་རིག་ལྟེ་བ།། */}
          </div>
        </div>

        {/* Hamburger Icon */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Right section of the Header */}
        {/* Use backticks `` in JS to embeb variables inside a string like f-string in Python */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/About">About Us</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Services">Services</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Gallery">Gallery</Link>
            </li>
          </ul>

          {/* Book an appointment CTA btn */}
          <div className="header-cta">
            <Link to="/Contact" className="btn-appointment">
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
