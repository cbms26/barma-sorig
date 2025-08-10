import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add feedback data to Firestore
      const feedbackCollection = collection(db, "feedbackData");
      await addDoc(feedbackCollection, formData);

      alert("Thank you for your feedback!");
      console.log("Feedback submitted:", formData);

      // Reset the form after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("There was an error submitting your feedback. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="contact-page bg-gray-50">
        {/* Hero Section */}
        <section className="hero bg-teal-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">
              We'd love to hear from you! Reach out to us with your questions,
              feedback, or inquiries.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Feedback Form */}
            <div className="feedback-form bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-3xl font-bold text-teal-600 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
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
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
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
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    placeholder="Enter your message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map and Contact Info */}
            <div className="contact-info">
              <h2 className="text-3xl font-bold text-teal-600 mb-6">
                Visit Us
              </h2>
              <div className="map mb-6">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.660813101938!2d89.63403127531538!3d27.479817176313816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1938f16a623b3%3A0xdc9f6897422512d3!2sBarma%20Sorig%20Healing%20Center!5e0!3m2!1sen!2sau!4v1747217117839!5m2!1sen!2sau"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="contact-details text-gray-700">
                <p className="mb-2">
                  <strong>Address:</strong> Chubachu, Thimphu 11001, Bhutan
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> +(975) 17248226
                </p>
                <p className="mb-2">
                  <strong>Email: </strong>
                  <a
                    href="mailto:barmasorig2018@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    barmasorig2018@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Hours:</strong> Mon - Sun, 9:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
