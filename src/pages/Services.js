import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Services.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import servicesDataForServices from "../data/servicesDataForServices";

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const openModal = (index) => {
    setActiveService(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setActiveService(null);
    setShowModal(false);
  };

  const handleBookNow = (serviceTitle, subServiceTitle) => {
    // Navigate to the booking page with pre-filled service details
    navigate(
      `/booking?service=${encodeURIComponent(
        serviceTitle
      )}&subService=${encodeURIComponent(subServiceTitle)}`
    );
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
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
              {servicesDataForServices.map((service, index) => (
                <div
                  key={index}
                  className="service-card bg-white shadow-lg rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => openModal(index)}
                >
                  <h3 className="service-title text-xl font-semibold text-gray-800 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="service-description text-gray-600 text-center">
                    {service.subServices.length} Sub-services available
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for Sub-services */}
        {showModal && activeService !== null && (
          <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="modal-content bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
              <button
                className="close-button text-gray-500 hover:text-gray-800 float-right text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h3 className="modal-title text-2xl font-bold text-gray-800 mb-4">
                {servicesDataForServices[activeService].title}
              </h3>
              <div className="sub-services">
                {servicesDataForServices[activeService].subServices.map(
                  (subService, subIndex) => (
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
                      <p className="sub-service-price text-gray-800 font-semibold">
                        Price: {subService.price}
                      </p>
                      <button
                        className="book-now-btn bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
                        onClick={() =>
                          handleBookNow(
                            servicesDataForServices[activeService].title,
                            subService.title
                          )
                        }
                      >
                        Book Now
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ServicesPage;
