import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

import Header from "../components/Header.js";

function BookingPage() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    service: "",
    subService: "",
    price: "",
    benefits: "",
    duration: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [servicesData, setServicesData] = useState([]);
  const [availableSubServices, setAvailableSubServices] = useState([]);

  // Fetch services and sub-services from Firestore
  useEffect(() => {
    const fetchServices = async () => {
      const servicesCollection = collection(db, "servicesData");
      const servicesSnapshot = await getDocs(servicesCollection);
      const servicesList = servicesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServicesData(servicesList);
    };

    fetchServices();
  }, []);

  // Pre-fill form and update available sub-services
  useEffect(() => {
    const service = searchParams.get("service") || "";
    const subService = searchParams.get("subService") || "";
    const price = searchParams.get("price") || "";

    // Find the selected service
    const selectedService = servicesData.find((item) => item.name === service);

    // Find the selected sub-service
    const selectedSubService = selectedService?.subServices.find(
      (sub) => sub.title === subService
    );

    // Update formData and availableSubServices
    setFormData((prevData) => ({
      ...prevData,
      service,
      subService,
      price,
      benefits: selectedSubService ? selectedSubService.benefits || "" : "",
      duration:
        selectedSubService && selectedSubService.duration !== "N/A"
          ? selectedSubService.duration
          : "",
    }));

    setAvailableSubServices(selectedService ? selectedService.subServices : []);
  }, [searchParams, servicesData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update sub-services dropdown when service changes
    if (name === "service") {
      const selectedService = servicesData.find((item) => item.name === value);
      setAvailableSubServices(
        selectedService ? selectedService.subServices : []
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        subService: "", // Reset sub-service when service changes
        price: "", // Reset price when service changes
        benefits: "", // Reset benefits when service changes
        duration: "", // Reset duration when service changes
      }));
    } else if (name === "subService") {
      // Update price, benefits, and duration based on selected sub-service
      const selectedSubService = availableSubServices.find(
        (sub) => sub.title === value
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        price: selectedSubService ? selectedSubService.price : "",
        benefits: selectedSubService ? selectedSubService.benefits : "",
        duration: selectedSubService ? selectedSubService.duration : "",
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate that the date and time are in the future
      const selectedDate = new Date(`${formData.date}T${formData.time}`);
      const now = new Date();

      if (selectedDate <= now) {
        alert("Please select a future date and time for your booking.");
        return;
      }

      // Format the time to include AM/PM
      const [hours, minutes] = formData.time.split(":");
      const formattedTime = `${+hours % 12 || 12}:${minutes} ${
        +hours >= 12 ? "PM" : "AM"
      }`;

      // Prepare the data to be saved
      const bookingData = {
        ...formData,
        time: formattedTime, // Use the formatted time
      };

      // Add booking data to Firestore
      const bookingsCollection = collection(db, "bookings");
      await addDoc(bookingsCollection, bookingData);

      alert("Your booking has been submitted successfully!");
      console.log("Booking Details:", bookingData);

      // Reset the form after submission
      setFormData({
        service: "",
        subService: "",
        price: "",
        benefits: "",
        duration: "",
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("There was an error submitting your booking. Please try again.");
    }
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
                {servicesData.map((service, index) => (
                  <option key={index} value={service.name}>
                    {service.name}
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
                  <option key={index} value={subService.title}>
                    {subService.title}
                  </option>
                ))}
              </select>
            </div>
            {formData.price && (
              <div className="form-group mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Price
                </label>
                <div
                  id="price"
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 text-gray-700"
                >
                  {formData.price}
                </div>
              </div>
            )}
            {formData.service === "Traditional SPA Treatments" &&
              formData.benefits && (
                <div className="form-group mb-4">
                  <label
                    htmlFor="benefits"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Benefits
                  </label>
                  <div
                    id="benefits"
                    className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 text-gray-700"
                  >
                    {formData.benefits}
                  </div>
                </div>
              )}
            {formData.duration && (
              <div className="form-group mb-4">
                <label
                  htmlFor="duration"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Duration
                </label>
                <div
                  id="duration"
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 text-gray-700"
                >
                  {formData.duration}
                </div>
              </div>
            )}
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
