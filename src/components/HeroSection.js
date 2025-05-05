import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Assuming you have a CSS file for styles

const HeroSection = ({ title, description, buttons, backgroundImage }) => (
  <section
    className="hero-section"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="hero-overlay">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-buttons">
          {buttons.map((btn, i) => (
            <Link key={i} to={btn.link} className={`btn ${btn.className}`}>
              {btn.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
