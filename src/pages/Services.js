import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard"; // Reusable component
import "../styles/Services.css";

// Moved data to external file (create src/data/servicesData.js)
import { fullServices } from "../data/servicesData";

function Services() {
  return (
    <section className="services-page">
      <div className="services-container container">
        <header className="services-header">
          <h1>Our Healing Services</h1>
          <p className="services-intro">
            At Barma-Sorig, we offer time-tested treatments based on the ancient
            principles of Sowa-Rigpa — aiming to balance your body, mind, and
            spirit through natural methods.
          </p>
        </header>

        <div className="services-grid">
          {fullServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              detailedView={true} // Flag for extended content
            />
          ))}
        </div>

        <div className="cta-section">
          <h2>Ready to Begin Your Healing Journey?</h2>
          <Link to="/contact" className="btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
