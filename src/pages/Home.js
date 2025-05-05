import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { heroContent, testimonials, aboutContent } from "../data/HomeData";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import { featuredServices } from "../data/servicesData";
import VideoPlayer from "../components/VideoPlayer";
import "../styles/Home.css"; // Assuming you have a CSS file for styles

const Home = () => {
  return (
    <>
      <HeroSection {...heroContent} />

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Featured Services</h2>
            <p>Discover our most sought-after traditional healing treatments</p>
          </div>
          <div className="services-grid">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                detailedView={false} // Simpler cards for home page
              />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <VideoPlayer src={aboutContent.video} />
        <div className="about-content">
          <h2>{aboutContent.title}</h2>
          {aboutContent.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          <Link to="/about" className="btn">
            Read More
          </Link>
        </div>
      </section>

      {/* Testimonials Slider */}
      <div className="testimonials">
        <Slider autoplay dots infinite>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-slide">
              <blockquote>{testimonial.quote}</blockquote>
              <cite>— {testimonial.author}</cite>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Home;
