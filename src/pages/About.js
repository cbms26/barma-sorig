import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="about-page bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
            About Us
          </h1>

          {/* About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mission-section mt-16 bg-blue-50 py-10 px-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          {/* Team Section */}
          <div className="team-section mt-16">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="team-member text-center bg-white shadow-lg rounded-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-blue-600"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  John Doe
                </h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>

              {/* Team Member 2 */}
              <div className="team-member text-center bg-white shadow-lg rounded-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-blue-600"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Jane Smith
                </h3>
                <p className="text-gray-600">Operations Manager</p>
              </div>

              {/* Team Member 3 */}
              <div className="team-member text-center bg-white shadow-lg rounded-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-blue-600"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Alex Johnson
                </h3>
                <p className="text-gray-600">Marketing Head</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
