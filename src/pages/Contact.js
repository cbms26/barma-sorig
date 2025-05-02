import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container container">
        <h1>Get in Touch</h1>
        <p className="contact-intro">
          We're here to help you begin your journey toward healing and balance.
          Reach out to book a consultation or ask any questions you may have.
        </p>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form">
            <form>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Your name" />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="you@example.com" />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
              />

              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="contact-info">
            <h2>Visit Us</h2>
            <p>📍 Thimphu, Bhutan</p>
            <p>📞 +975 17 123 456</p>
            <p>✉️ contact@barma-sorig.com</p>

            <div className="map-container">
              {/* Map Location using embedded Google Map */}
              <iframe
                title="Barma Sorig Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8418.890258182719!2d89.6382258314798!3d27.478369808442125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1938f16a623b3%3A0xdc9f6897422512d3!2sBarma%20Sorig%20Healing%20Center!5e0!3m2!1sen!2sbt!4v1746156700825!5m2!1sen!2sbt"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
