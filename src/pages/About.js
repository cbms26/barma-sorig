import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import ceo from "../assets/images/CEO.jpeg";
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
            <div className="about-image">
              <img
                src="https://via.placeholder.com/600x400"
                alt="About Us"
                className="rounded-lg shadow-lg w-full border-4 border-blue-600"
              />
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

        {/* Ku Nye Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Ku Nye</h2>
              <p className="text-gray-700 text-lg mb-4">
                Ku Nye is a traditional Tibetan massage therapy that uses oils,
                gentle pressure, and specialized techniques to balance the
                body’s energies, promote healing, and restore well-being. It is
                a core part of Sowa-Rigpa, the ancient science of healing.
              </p>
              <p className="text-gray-700 text-lg">
                This therapy is known for its ability to relieve stress, improve
                circulation, and support the body’s natural healing processes...
              </p>
              <Link
                to="/kuNyeBlog"
                className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
              >
                Learn more
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-4627e3834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Ku Nye Massage"
                className="rounded-lg shadow-lg w-full border-4 border-blue-600"
              />
            </div>
          </div>
        </section>

        {/* Nine Breathing Exercise Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
                alt="Nine Breathing Exercise"
                className="rounded-lg shadow-lg w-full border-4 border-blue-600"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                Nine Breathing Exercise
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                The Nine Breathing Exercise is a powerful ancient technique used
                to cleanse the body’s channels and calm the mind. Practiced
                regularly, it helps reduce stress, increase focus, and promote
                overall health.
              </p>
              <p className="text-gray-700 text-lg">
                At Barma Sorig, we guide our guests through these breathing
                exercises as part of our holistic approach to wellness, helping
                you achieve balance and tranquility...
              </p>
              <Link
                to="/nineBreathingExerciseBlog"
                className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* Course Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Course</h2>
              <p className="text-gray-700 text-lg mb-4">
                We offer a range of courses on Sowa-Rigpa, Ku Nye massage, and
                holistic wellness. Our courses are designed for both beginners
                and practitioners who wish to deepen their knowledge and skills
                in traditional healing arts.
              </p>
              <p className="text-gray-700 text-lg">
                <span className="italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, nisi eu consectetur consectetur, nisl
                  nisi consectetur nisi, euismod euismod nisi nisi euismod.
                </span>
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
                alt="Course"
                className="rounded-lg shadow-lg w-full border-4 border-blue-600"
              />
            </div>
          </div>
        </section>

        {/* Staff Organogram Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Staff Organogram
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=300&q=80"
                alt="Staff Organogram"
                className="rounded-lg border-4 border-blue-600 w-60 h-60 object-cover"
              />
              <div>
                <p className="text-gray-700 text-lg mb-2">
                  Our team is structured to provide the best care and service to
                  our guests. Each member plays a vital role in ensuring a
                  holistic and healing experience at Barma Sorig.
                </p>
                <p className="text-gray-700 text-lg">
                  <span className="italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam euismod, urna eu tincidunt consectetur, nisi nisl
                    aliquam nunc, eget aliquam nisl nunc euismod nunc.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section bg-gradient-to-r from-blue-100 to-blue-200 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-blue-600 mb-8">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              Our mission is to bring the ancient healing practices of
              Sowa-Rigpa to the modern world, promoting health, balance, and
              well-being for all. We aim to provide exceptional care and create
              a space where guests can rejuvenate their body, mind, and spirit.
            </p>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="heritage-section py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section: Content */}
            <div className="heritage-content">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Heritage
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Sowa-Rigpa, one of the oldest forms of healing, has been
                practiced for over 2,500 years in the Tibet and Himalayan
                regions. It focuses on balancing lifestyle and diet according to
                individual body constitutions, treating not just symptoms but
                the root causes of disorders.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Our treatments are rooted in this ancient tradition, offering a
                unique healing system that promotes long and happy lives free
                from disease.
              </p>
            </div>
            {/* Right Section: Image */}
            <div className="heritage-image">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Our Heritage"
                className="rounded-lg shadow-lg w-full border-4 border-blue-600"
              />
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
