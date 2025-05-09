import React, { useState } from "react";

import "../styles/Services.css";

import Header from "../components/Header";

const services = [
  {
    title: "Massage Therapies",
    subServices: [
      {
        title: "Ku Nye Massage",
        description:
          "A traditional Tibetan massage using herbal oils to stimulate circulation, release toxins, and promote deep relaxation.",
      },
      {
        title: "Deep Tissue Massage",
        description:
          "A massage technique that focuses on realigning deeper layers of muscles and connective tissue.",
      },
    ],
  },
  {
    title: "Herbal Treatments",
    subServices: [
      {
        title: "Moxibustion",
        description:
          "The application of heat from burning mugwort to specific points to strengthen immunity and improve energy flow.",
      },
      {
        title: "Herbal Therapy",
        description:
          "Customized herbal formulas prepared according to Tibetan medical principles to restore balance and vitality.",
      },
    ],
  },
];

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="services-page bg-gray-50 py-10">
        {/* Services Section */}
        <section className="services">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl font-bold text-center text-gray-800 mb-8">
              Our Services
            </h2>
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`service-item bg-white shadow-md rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105 ${
                      activeService === index ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => toggleService(index)}
                  >
                    <h3 className="service-title text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  {activeService === index && (
                    <div className="sub-services col-span-1 md:col-span-2 bg-gray-100 rounded-lg p-6 mt-4">
                      {service.subServices.map((subService, subIndex) => (
                        <div
                          key={subIndex}
                          className="sub-service-item border-b border-gray-300 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0"
                        >
                          <h4 className="sub-service-title text-lg font-medium text-gray-700">
                            {subService.title}
                          </h4>
                          <p className="sub-service-description text-gray-600">
                            {subService.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default ServicesPage;
