import React from "react";
import "../styles/Home.css"; // Assuming you have a CSS file for styles

const ServiceCard = ({ title, description, image }) => (
  <div className="service-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
