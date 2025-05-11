import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import servicesData from "../data/servicesData.js";

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const openModal = (index) => {
    setActiveService(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setActiveService(null);
    setShowModal(false);
  };

  const handleBookNow = (serviceTitle, subServiceTitle, subServicePrice) => {
    navigate(
      `/bookingPage?service=${encodeURIComponent(
        serviceTitle
      )}&subService=${encodeURIComponent(
        subServiceTitle
      )}&price=${encodeURIComponent(subServicePrice)}`
    );
  };

  return (
    <>
      <Header />
      <div className="services-page bg-gray-50">
        {/* Hero Section */}
        <section className="hero bg-amber-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg">
              Discover a wide range of services tailored to meet your needs.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Explore Our Offerings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                  onClick={() => openModal(index)}
                >
                  <div className="service-image h-48 bg-gray-200">
                    {/* Placeholder for service image */}
                    <img
                      src="https://via.placeholder.com/400x300"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.subServices.length} Sub-services available
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for Sub-services */}
        {showModal && activeService !== null && (
          <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="modal-content bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-hidden">
              <button
                className="close-button text-gray-500 hover:text-gray-800 float-right text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h3 className="modal-title text-3xl font-bold text-blue-600 mb-6 text-center">
                {servicesData[activeService].title}
              </h3>
              <div className="sub-services space-y-6 overflow-y-auto max-h-[70vh] pr-4">
                {servicesData[activeService].subServices.map(
                  (subService, subIndex) => (
                    <div
                      key={subIndex}
                      className="sub-service-item border-b border-gray-300 pb-4 last:border-b-0"
                    >
                      <h4 className="text-xl font-medium text-gray-800">
                        {subService.title}
                      </h4>
                      <p className="text-gray-600">{subService.description}</p>
                      <p className="text-gray-800 font-semibold">
                        Price: {subService.price}
                      </p>
                      <button
                        className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition-all"
                        onClick={() =>
                          handleBookNow(
                            servicesData[activeService].title,
                            subService.title,
                            subService.price
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
