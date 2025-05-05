// import React from "react";
// import "../styles/Services.css";

// import "../App.css";

// function Services() {
//   const serviceData = [
//     {
//       title: "Herbal Massage",
//       description:
//         "Traditional full-body massage using natural herbal oils to detoxify and rejuvenate the body.",
//       icon: "🌿",
//     },
//     {
//       title: "Hot Stone Therapy",
//       description:
//         "Warm healing stones placed on vital energy points to improve circulation and release tension.",
//       icon: "🔥",
//     },
//     {
//       title: "Moxibustion",
//       description:
//         "A gentle warming therapy using herbal incense to stimulate healing energy and reduce pain.",
//       icon: "🌀",
//     },
//     {
//       title: "Tibetan Cupping",
//       description:
//         "A vacuum-based therapy to remove stagnation and improve energy flow in the body.",
//       icon: "🥣",
//     },
//     {
//       title: "Herbal Consultation",
//       description:
//         "One-on-one consultation with traditional medicine practitioner for personalized herbal treatment.",
//       icon: "🧪",
//     },
//   ];

//   return (
//     <section className="services-page">
//       <div className="services-container container">
//         <h1>Our Services</h1>
//         <p className="services-intro">
//           At Barma-Sorig, we offer time-tested treatments based on the ancient
//           principles of Sowa-Rigpa — aiming to balance your body, mind, and
//           spirit through natural methods.
//         </p>

//         <div className="services-grid">
//           {serviceData.map(function (service, index) {
//             return (
//               <div className="service-card" key={index}>
//                 <div className="service-icon">{service.icon}</div>
//                 <h3>{service.title}</h3>
//                 <p>{service.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;

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
              icon={service.icon}
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
