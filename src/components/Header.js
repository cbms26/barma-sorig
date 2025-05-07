import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/About"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/Services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/Gallery"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Gallery
              </NavLink>
            </li>
          </ul>

          {/* Book an appointment CTA btn */}
          <div className="header-cta">
            <Link to="/booking" className="btn btn-primary">
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
