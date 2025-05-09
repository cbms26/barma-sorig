import React from "react";
import { Link } from "react-router-dom";

import "../styles/Landing.css";

import logoWithName from "../assets/images/logo-with-name.png"; // Adjust the path as necessary

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage-content">
        <h1>
          Embrace <span className="font-serif text-[80px]">Harmony</span> and{" "}
          <span>Healing</span> at
        </h1>
        <img src={logoWithName} alt="Barma Sorig" className="logo" />
        <p>
          “Traditional Ku-Nye (massage) Treatment & more, for Health &
          Well-being”
        </p>
        <div className="landingPage-buttons">
          <Link to="/booking" className="btn btn-primary">
            <i className="fas fa-calendar-alt"></i> Book Appointment
          </Link>
          <p>or</p>
          <Link to="/contact" className="btn btn-secondary">
            <i className="fas fa-phone-alt"></i> Call Us Now
          </Link>
        </div>
        {/* Add the "View All Our Services" link */}
        <div className="view-services">
          <Link to="/servicesPage" className="btn btn-link">
            View All Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
