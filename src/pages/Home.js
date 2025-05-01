import "../App.css"; // Import the main CSS file for styling

import React from "react";

import heroImage from "../assets/images/hero-bg.webp"; // Import the hero image
import "../styles/Home.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
// This is the Home component that will be displayed on the home page

function Home() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content container">
          <h1>Barma-Sorig Traditional Healing Center</h1>
          <p>
            Welcome to Barma-Sorig, where ancient wisdom meets modern healing.
            Our center is dedicated to providing holistic care that nurtures the
            mind, body, and spirit. Experience the transformative power of
            traditional healing practices in a serene and supportive
            environment.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Call Us Now{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
