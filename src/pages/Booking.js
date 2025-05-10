import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Header";

import servicesDataForBooking from "../data/servicesDataForBooking";

function BookingPage() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    service: "",
    subService: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [availableSubServices, setAvailableSubServices] = useState([]);

  useEffect(() => {
    // Pre-fill service and sub-service from query parameters
    const service = searchParams.get("service") || "";
    const subService = searchParams.get("subService") || "";
    setFormData((prevData) => ({
      ...prevData,
      service,
      subService,
    }));

    // Update available sub-services based on the pre-filled service
    const selectedService = servicesDataForBooking.find(
      (item) => item.service === service
    );
    setAvailableSubServices(selectedService ? selectedService.subServices : []);
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update sub-services dropdown when service changes
    if (name === "service") {
      const selectedService = servicesDataForBooking.find(
        (item) => item.service === value
      );
      setAvailableSubServices(
        selectedService ? selectedService.subServices : []
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        subService: "", // Reset sub-service when service changes
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Your booking has been submitted successfully!");
    // Add logic to send booking details to the server
  };

  return (
    <>
      <Header />
      <div className="booking-page bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold text-center text-gray-800 mb-8">
            Book Your Service
          </h2>
          <form
            className="booking-form bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="form-group mb-4">
              <label
                htmlFor="service"
                className="block text-gray-700 font-medium mb-2"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              >
                <option value="">Select a service</option>
                {servicesDataForBooking.map((service, index) => (
                  <option key={index} value={service.service}>
                    {service.service}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="subService"
                className="block text-gray-700 font-medium mb-2"
              >
                Sub-Service
              </label>
              <select
                id="subService"
                name="subService"
                value={formData.subService}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
                disabled={!formData.service} // Disable if no service is selected
              >
                <option value="">Select a sub-service</option>
                {availableSubServices.map((subService, index) => (
                  <option key={index} value={subService}>
                    {subService}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="date"
                className="block text-gray-700 font-medium mb-2"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label
                htmlFor="time"
                className="block text-gray-700 font-medium mb-2"
              >
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
