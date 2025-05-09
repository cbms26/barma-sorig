import React from "react";

import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center pt-20 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1547981609-4f6affc3b4f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 serif">
            Ancient Tibetan Healing for Modern Life
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Experience the transformative power of traditional Barma-Sorig
            therapies to restore balance and harmony to your body and mind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 bg-amber-900 text-white font-medium rounded-full hover:bg-amber-800 transition btn-primary text-lg"
            >
              Explore Treatments
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white text-amber-900 font-medium rounded-full hover:bg-gray-100 transition text-lg"
            >
              Meet Our Healers
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <img
                src="https://images.unsplash.com/photo-1589998059171-988d322b23dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Tibetan healer"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900 serif">
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
              <a
                href="#"
                className="px-6 py-3 border-2 border-amber-900 text-amber-900 font-medium rounded-full hover:bg-amber-900 hover:text-white transition inline-flex items-center"
              >
                Learn More About Our Approach
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
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
              Our Healing Treatments
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
                className="treatment-card bg-white text-gray-800 rounded-lg p-8 shadow-md transition cursor-pointer"
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
                  className="text-amber-900 font-medium inline-flex items-center"
                >
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
