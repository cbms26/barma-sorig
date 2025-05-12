import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import HeroBG from "../assets/images/hero-bg.webp";
import BarmaSorigVideoAdvertisement from "../assets/videos/barma-sorig-ad.mp4";
import videoThumbnail from "../assets/images/video-thumbnail.jpg";

const HomePage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="hero min-h-screen flex items-center pt-20 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: `url(${HeroBG})` }}
      >
        {/* Overlay for translucency */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="container mx-auto px-4 py-6 bg-gray-900 bg-opacity-60 text-center text-white relative z-10">
          <h1 className="text-sky-500 text-4xl md:text-6xl font-bold mb-6 serif">
            Traditional Ku-Nye for Modern Life
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Experience the transformative power of traditional Barma-Sorig
            therapies to restore balance and harmony to your body and mind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/servicesPage"
              className="px-8 py-4 bg-amber-900 text-white font-medium rounded-full hover:bg-amber-800 transition btn-primary text-lg"
            >
              Explore Treatments
            </Link>
            <Link
              to="/aboutPage"
              className="px-8 py-4 bg-white text-red-600 font-medium rounded-full hover:bg-gray-300 transition text-lg"
            >
              Meet Our Healers
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Video Advertisement */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <video
                src={BarmaSorigVideoAdvertisement}
                controls
                poster={videoThumbnail}
                className="rounded-lg shadow-xl w-full h-auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sky-500 serif">
                The Barma-Sorig Tradition
              </h2>
              <p className="text-lg mb-6">
                For over a thousand years, Barma-Sorig healing has been
                practiced in the Himalayan region, combining ancient Tibetan
                medical knowledge with spiritual wisdom to promote holistic
                wellbeing.
              </p>
              <p className="text-lg mb-8">
                Our center brings these time-honored techniques to the modern
                world, offering personalized treatments that address physical
                ailments, emotional imbalances, and energetic blockages.
              </p>
              <Link
                to="/aboutPage"
                className="px-6 py-3 border-2 border-amber-900 text-red-500 font-medium rounded-full hover:bg-amber-900 hover:text-white transition inline-flex items-center"
              >
                Learn More About Our Approach
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider h-24 bg-gradient-to-br from-gray-50 to-amber-900"></div>

      {/* Treatments Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 serif">
              Our Featured Healing Treatments
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Each therapy is carefully selected and administered by our expert
              practitioners to address your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ku Nye Massage",
                description:
                  "A traditional Tibetan massage using herbal oils to stimulate circulation, release toxins, and promote deep relaxation.",
                icon: "fas fa-hand-holding-heart",
              },
              {
                title: "Moxibustion",
                description:
                  "The application of heat from burning mugwort to specific points to strengthen immunity and improve energy flow.",
                icon: "fas fa-fire",
              },
              {
                title: "Herbal Therapy",
                description:
                  "Customized herbal formulas prepared according to Tibetan medical principles to restore balance and vitality.",
                icon: "fas fa-leaf",
              },
            ].map((treatment, index) => (
              <div
                key={index}
                className="treatment-card bg-white text-gray-800 rounded-lg p-8 shadow-md transition"
              >
                <div className={`treatment-icon text-4xl mb-4 text-amber-900`}>
                  <i className={treatment.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 serif">
                  {treatment.title}
                </h3>
                <p className="mb-4">{treatment.description}</p>
                <a
                  href="#"
                  className="text-red-500 font-medium inline-flex items-center"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
