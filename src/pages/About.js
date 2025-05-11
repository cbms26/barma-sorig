import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="about-page bg-gray-50">
        {/* Hero Section */}
        <section className="hero bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
              Learn more about our mission, values, and the team behind our
              success.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section: Image */}
            <div className="about-image">
              <img
                src="https://via.placeholder.com/600x400"
                alt="About Us"
                className="rounded-lg shadow-lg w-full border-4 border-blue-600"
              />
            </div>

            {/* Right Section: Content */}
            <div className="about-content">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member */}
              {["John Doe", "Jane Smith", "Alex Johnson"].map((name, index) => (
                <div
                  key={index}
                  className="team-member text-center bg-white shadow-lg rounded-lg p-6"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt={name}
                    className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-blue-600"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {name}
                  </h3>
                  <p className="text-gray-600">
                    {index === 0
                      ? "Founder & CEO"
                      : index === 1
                      ? "Operations Manager"
                      : "Marketing Head"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
