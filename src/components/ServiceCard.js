import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, icon, detailedView, image }) => {
  return (
    <div className={`service-card ${detailedView ? "detailed" : ""}`}>
      {image && <img src={image} alt={title} className="service-image" />}
      <h3>{title}</h3>
      <p>{description}</p>

      {detailedView && (
        <>
          <div className="service-details">
            <p>
              <strong>Duration:</strong> 60-90 mins
            </p>
            <p>
              <strong>Best for:</strong> Stress relief, detoxification
            </p>
          </div>
          <Link
            to={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="btn btn-outline"
          >
            Learn More
          </Link>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
