import React, { useState } from "react";
import "../styles/Booking.css";

import { collection, addDoc } from "firebase/firestore";
import db from "../firebaseConfig";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    mainService: "",
    subService: "",
    message: "",
  });

  const subServices = {
    SPA: ["Facial Therapy", "Massage Therapy", "Aromatherapy"],
    "Beauty Salon": ["Hair Styling", "Manicure", "Pedicure"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset subService if mainService changes
    if (name === "mainService") {
      setFormData({ ...formData, mainService: value, subService: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
    const currentDateTime = new Date();
    const oneHourFromNow = new Date(currentDateTime.getTime() + 60 * 60 * 1000);

    if (selectedDateTime < oneHourFromNow) {
      alert("Please select a date and time at least one hour from now.");
      return;
    }

    try {
      // Add booking data to Firestore
      await addDoc(collection(db, "bookings"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        mainService: formData.mainService,
        subService: formData.subService,
        message: formData.message,
        createdAt: new Date().toISOString(), // Timestamp
      });

      alert("Your appointment has been booked!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        mainService: "",
        subService: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to book the appointment. Please try again.");
    }
  };

  return (
    <section className="booking-page">
      <div className="container">
        <h1>Book an Appointment</h1>
        <p>Fill out the form below to schedule your healing session.</p>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Select Date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input
              type="time"
              id="time"
              name="time"
              placeholder="Select Time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mainService">Select Main Service</label>
            <select
              id="mainService"
              name="mainService"
              value={formData.mainService}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Main Service --</option>
              <option value="SPA">SPA</option>
              <option value="Beauty Salon">Beauty Salon</option>
            </select>
          </div>
          {formData.mainService && (
            <div className="form-group">
              <label htmlFor="subService">Select Sub-Service</label>
              <select
                id="subService"
                name="subService"
                value={formData.subService}
                onChange={handleChange}
                required
              >
                <option value="">-- Select a Sub-Service --</option>
                {subServices[formData.mainService].map((subService, index) => (
                  <option key={index} value={subService}>
                    {subService}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="message">Additional Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
