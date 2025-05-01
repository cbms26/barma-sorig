import "../App.css"; // Import the main CSS file for styling

import React from "react";

import heroImage from "../assets/images/hero-bg.webp"; // Import the hero image
import serviceImage1 from "../assets/images/service-item-1.webp"; // Import the service image 1
import serviceImage2 from "../assets/images/service-item-2.jpg"; // Import the service image 2
import serviceImage3 from "../assets/images/service-item-3.jpg"; // Import the service image 3

import "../styles/Home.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
// This is the Home component that will be displayed on the home page

function Home() {
  return (
    <>
      {/* Hero section with a background image and overlay */}
      {/* The hero section contains a title, description, and two buttons */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content container">
            <h1>
              Barma-Sorig <br /> Traditional Healing Center
            </h1>
            <p>
              Welcome to Barma-Sorig, where ancient wisdom meets modern healing.
              Our center is dedicated to providing holistic care that nurtures
              the mind, body, and spirit. Experience the transformative power of
              traditional healing practices in a serene and supportive
              environment.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services section with a title and description */}
      {/* The services section contains a list of services offered by the center */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <h2>Our Services</h2>
            <p>
              Discover a range of traditional healing services designed to
              restore balance and promote well-being.
            </p>
          </div>
          {/* Service Items */}
          <div className="service-cards">
            <div className="card item-1">
              <img src={serviceImage1} alt="Traditional Medicine picture" />
              <h3>Traditional Medicine</h3>
              <p>
                Experience the healing power of traditional herbal remedies and
                therapies.
              </p>
            </div>
            <div className="card item-2">
              <img src={serviceImage2} alt="Massage Therapy picture" />
              <h3>Massage Therapy</h3>
              <p>
                Relax and rejuvenate with our expert massage therapy sessions.
              </p>
            </div>
            <div className="card item-3">
              <img src={serviceImage3} alt="Wellness Programs picture" />
              <h3>Wellness Programs</h3>
              <p>
                Join our wellness programs for a holistic approach to health and
                well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section*/}
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <h2>About Us</h2>
            <p>
              At Barma-Sorig, we are committed to providing exceptional care
              that honors the rich traditions of healing. Our experienced
              practitioners are dedicated to guiding you on your wellness
              journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
