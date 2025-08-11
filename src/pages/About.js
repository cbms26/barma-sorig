import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import ceo from "../assets/images/CEO.jpeg";
import adsThumbnail from "../assets/images/barma-sorig-ads-thumbnail.png";
import generalSupervisor from "../assets/images/General Supervisor.jpeg";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="about-page bg-gray-50">
        {/* Hero Section */}
        <section className="hero bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
              Discover our mission, values, and the passionate team behind our
              success.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section: Image */}
            <div className="ads-content ">
              <video
                className="ads-video rounded-lg"
                controls
                width="100%"
                poster={adsThumbnail}
                preload="metadata"
              >
                <source
                  src="../assets/videos/barma-sorig-ads.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video.
              </video>
            </div>
            {/* Right Section: Content */}
            <div className="about-content">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Barma Sorig Healing Center, Bhutan, in collaboration with Pure
                Vision Sorig Healing & Research Center, Nepal, offers a variety
                of wellness treatments for guests of all ages. Our main
                treatments include traditional therapeutic gentle external
                therapy (Jyamtse Ku-Nye) and Five Nectar (Amritas) Steam.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Experience the benefits of ancient traditional practices that
                promote relaxation, general health, and well-being. Our
                therapists are highly trained and dedicated to providing the
                best care for our guests.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mission-section bg-gradient-to-r from-blue-100 to-blue-200 py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 text-center relative">
            {/* Left Section: Mission content */}
            <div className="mission-content">
              <h2 className="text-4xl font-bold text-blue-600 mb-8">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
                To promote & preserve our traditional Sowa-Rigpa Ku Nye tradtion
                and its practices.
              </p>
            </div>
            {/* Vertical Separator - visible only on md and larger screen */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-400 transform -translate-x-1/2"></div>

            {/* Right SEction: Vision content */}
            <div className="vision-content">
              <h2 className="text-4xl font-bold text-blue-600 mb-8">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
                To provide necessary traditional Health Care Service, and to
                improve the mental, emotional &amp; physical well-being of all,
                while strengthening the traditional Health Care System of Our
                Country, Bhutan.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
              {/* Team Member */}
              {[
                { name: "Sangay Dorji", role: "CEO / Proprietor", img: ceo },
                {
                  name: "Dechen Pelden",
                  role: "General Supervisor / Senior Ku Nye Therapist",
                  img: generalSupervisor,
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="team-member text-center bg-white shadow-lg rounded-lg p-8"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-full mx-auto mb-6 w-32 h-32 object-cover border-4 border-blue-600"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
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
