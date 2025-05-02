import React from "react";
import "../styles/Services.css";

import "../App.css";

function Services() {
  const serviceData = [
    {
      title: "Herbal Massage",
      description:
        "Traditional full-body massage using natural herbal oils to detoxify and rejuvenate the body.",
      icon: "🌿",
    },
    {
      title: "Hot Stone Therapy",
      description:
        "Warm healing stones placed on vital energy points to improve circulation and release tension.",
      icon: "🔥",
    },
    {
      title: "Moxibustion",
      description:
        "A gentle warming therapy using herbal incense to stimulate healing energy and reduce pain.",
      icon: "🌀",
    },
    {
      title: "Tibetan Cupping",
      description:
        "A vacuum-based therapy to remove stagnation and improve energy flow in the body.",
      icon: "🥣",
    },
    {
      title: "Herbal Consultation",
      description:
        "One-on-one consultation with traditional medicine practitioner for personalized herbal treatment.",
      icon: "🧪",
    },
  ];

  return (
    <section className="services-page">
      <div className="services-container container">
        <h1>Our Services</h1>
        <p className="services-intro">
          At Barma-Sorig, we offer time-tested treatments based on the ancient
          principles of Sowa-Rigpa — aiming to balance your body, mind, and
          spirit through natural methods.
        </p>

        <div className="services-grid">
          {serviceData.map(function (service, index) {
            return (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
