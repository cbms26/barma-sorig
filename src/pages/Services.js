import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchBTNtoUSDRate, convertBTNtoUSD } from "../utils/currencyUtils.js";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import servicesData from "../data/servicesData.js";

import spaServiceImage from "../assets/images/spa-service.jpg";
import salonServiceImage from "../assets/images/salon-service.png";

function ServicesPage() {
  const location = useLocation();
  const [activeService, setActiveService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const categoryRefs = useRef({}); // Store refs for each category

  const [usdPrices, setUsdPrices] = useState({});

  useEffect(() => {
    // Parse query parameters
    const params = new URLSearchParams(location.search);
    const service = params.get("service"); // Service name (e.g., "SPA Treatments")
    const category = params.get("category"); // Category name (e.g., "Whole Body Ku Nye Massage")

    if (service) {
      // Find the service (category) by its name
      const serviceIndex = servicesData.findIndex(
        (s) => s.title.toLowerCase() === service.toLowerCase()
      );
      if (serviceIndex !== -1) {
        setActiveService(serviceIndex); // Set the active service (category)
        setShowModal(true); // Open the modal

        // Scroll to the category section after the modal opens
        setTimeout(() => {
          const categoryRef = categoryRefs.current[category];
          if (categoryRef) {
            categoryRef.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300); // Delay to ensure modal is rendered
      }
    }
  }, [location.search]);

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

  // Handler for Convert to USD
  const handleConvertToUSD = async (usdKey, btnAmount) => {
    // Extract the lowest numeric value from the price string
    let numericBTN = 0;
    if (typeof btnAmount === "number") {
      numericBTN = btnAmount;
    } else if (typeof btnAmount === "string") {
      // Remove commas, split on '-', and get the first number
      const cleaned = btnAmount.replace(/,/g, "");
      const match = cleaned.match(/\d+(\.\d+)?/g); // Get all numbers
      if (match && match.length > 0) {
        numericBTN = parseFloat(match[0]);
      }
    }

    if (!numericBTN || isNaN(numericBTN)) {
      setUsdPrices((prev) => ({
        ...prev,
        [usdKey]: { usd: null, loading: false, error: "Invalid price" },
      }));
      return;
    }

    setUsdPrices((prev) => ({
      ...prev,
      [usdKey]: { usd: null, loading: true, error: null },
    }));

    try {
      const rate = await fetchBTNtoUSDRate();
      const usd = convertBTNtoUSD(numericBTN, rate);
      setUsdPrices((prev) => ({
        ...prev,
        [usdKey]: { usd, loading: false, error: null },
      }));
    } catch (error) {
      setUsdPrices((prev) => ({
        ...prev,
        [usdKey]: {
          usd: null,
          loading: false,
          error: "Conversion failed",
        },
      }));
    }
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
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Explore Our Offerings
            </h2>
            <div className="flex flex-wrap gap-8 justify-center items-center">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-80"
                  onClick={() => openModal(index)}
                >
                  <div className="service-image h-48 bg-gray-200 cursor-pointer">
                    <img
                      src={
                        service.title === "SPA Treatments"
                          ? spaServiceImage
                          : salonServiceImage
                      }
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    {/* <p className="text-gray-600">
                      {service.subServices.length} Sub-services available
                    </p> */}
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
                {/* Group sub-services by category */}
                {Object.entries(
                  servicesData[activeService].subServices.reduce(
                    (categories, subService) => {
                      const category = subService.category || "Other"; // Default to "Other" if no category
                      if (!categories[category]) {
                        categories[category] = [];
                      }
                      categories[category].push(subService);
                      return categories;
                    },
                    {}
                  )
                ).map(([category, subServices]) => (
                  <div
                    key={category}
                    ref={(el) => (categoryRefs.current[category] = el)} // Store ref for each category
                    className="category-section mb-6"
                  >
                    {/* Render category heading */}
                    <div className="category-heading bg-amber-100 text-amber-900 px-4 py-2 rounded-md shadow-md mb-4">
                      <h4 className="text-2xl font-bold">{category}</h4>
                    </div>

                    {/* Render sub-services under the category */}
                    {subServices.map((subService, subIndex) => {
                      const usdKey = `${category}-${subIndex}`;
                      return (
                        <div
                          key={usdKey}
                          className="sub-service-item border-b border-gray-300 pb-4 last:border-b-0"
                        >
                          <h5 className="text-xl font-medium text-gray-800">
                            {subService.title}
                          </h5>
                          {subService.benefits && (
                            <p className="text-gray-600">
                              <strong>Benefits:</strong> {subService.benefits}
                            </p>
                          )}
                          {subService.duration && (
                            <p className="text-gray-600">
                              <strong>Duration:</strong> {subService.duration}
                            </p>
                          )}
                          <p className="text-gray-800 font-semibold">
                            <strong>Price:</strong> {subService.price}
                          </p>
                          {/* Show USD value if available */}
                          <div className="px-10 mt-0">
                            {usdPrices[usdKey]?.loading && (
                              <p className="text-blue-500 text-sm mt-2">
                                Converting...
                              </p>
                            )}
                            {usdPrices[usdKey]?.usd && (
                              <p className="text-green-600 text-sm mt-2">
                                ≈ ${usdPrices[usdKey].usd} USD
                                {typeof subService.price === "string" &&
                                  subService.price.includes("-") && (
                                    <span className="ml-2 text-xs text-gray-500">
                                      (minimum)
                                    </span>
                                  )}
                              </p>
                            )}
                            {usdPrices[usdKey]?.error && (
                              <p className="text-red-600 text-sm mt-2">
                                {usdPrices[usdKey].error}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-4 mt-4">
                            <button
                              className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-sm font-semibold text-sm hover:bg-blue-700 transition"
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
                            <span className="h-6 border-l border-gray-300 mx-2"></span>
                            <button
                              className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 bg-white font-semibold text-xs shadow-sm hover:bg-blue-50 transition"
                              onClick={() =>
                                handleConvertToUSD(usdKey, subService.price)
                              }
                            >
                              Convert to USD
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
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
