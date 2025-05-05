// import "../App.css"; // Import the main CSS file for styling

// import React from "react";

// import Slider from "react-slick"; // Import the slider component for testimonials

// import heroImage from "../assets/images/hero-bg.webp"; // Import the hero image
// import serviceImage1 from "../assets/images/service-item-1.webp"; // Import the service image 1
// import serviceImage2 from "../assets/images/service-item-2.jpg"; // Import the service image 2
// import serviceImage3 from "../assets/images/service-item-3.jpg"; // Import the service image 3

// import aboutUsVideo from "../assets/videos/barma-sorig-ad.mp4"; // Import the about us video

// import "../styles/Home.css"; // Import the CSS file for styling
// import { Link } from "react-router-dom";
// // This is the Home component that will be displayed on the home page

// function Home() {
//   return (
//     <>
//       {/* Hero section with a background image and overlay */}
//       {/* The hero section contains a title, description, and two buttons */}
//       <section
//         className="hero-section"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="hero-overlay">
//           <div className="hero-content container">
//             <h1>
//               Barma-Sorig <br /> Traditional Healing Center
//             </h1>
//             <p>
//               Welcome to Barma-Sorig, where ancient wisdom meets modern healing.
//               Our center is dedicated to providing holistic care that nurtures
//               the mind, body, and spirit. Experience the transformative power of
//               traditional healing practices in a serene and supportive
//               environment.
//             </p>
//             <div className="hero-buttons">
//               <Link to="/about" className="btn btn-primary">
//                 Learn More About Us
//               </Link>
//               <Link to="/services" className="btn btn-secondary">
//                 Call Us Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services section with a title and description */}
//       {/* The services section contains a list of services offered by the center */}
//       <section className="services-section">
//         <div className="container">
//           <div className="services-header">
//             <h2>Our Services</h2>
//             <p>
//               Discover a range of traditional healing services designed to
//               restore balance and promote well-being.
//             </p>
//           </div>
//           {/* Service Items */}
//           <div className="service-cards">
//             <div className="card item-1">
//               <img src={serviceImage1} alt="Traditional Medicine picture" />
//               <h3>Traditional Medicine</h3>
//               <p>
//                 Experience the healing power of traditional herbal remedies and
//                 therapies.
//               </p>
//             </div>
//             <div className="card item-2">
//               <img src={serviceImage2} alt="Massage Therapy picture" />
//               <h3>Massage Therapy</h3>
//               <p>
//                 Relax and rejuvenate with our expert massage therapy sessions.
//               </p>
//             </div>
//             <div className="card item-3">
//               <img src={serviceImage3} alt="Wellness Programs picture" />
//               <h3>Wellness Programs</h3>
//               <p>
//                 Join our wellness programs for a holistic approach to health and
//                 well-being.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section*/}
//       <section className="about-section">
//         <div className="about-container container">
//           {/* AutoPlay video with mute setting */}
//           <div className="about-video">
//             <video
//               id="aboutVideo"
//               src={aboutUsVideo}
//               playsInline
//               loop
//               style={{ width: "100%", cursor: "pointer" }}
//               onClick={(e) => {
//                 const video = e.target;
//                 if (video.paused) {
//                   video.muted = false; // 🔊 Turn sound on when playing
//                   video.play();
//                 } else {
//                   video.pause();
//                 }
//               }}
//             ></video>
//             <p className="video-caption">🎥 Click to play or pause</p>
//           </div>

//           {/* Switch to Click To Watch Setting for the Video
//           <div className="about-video">
//             <video src={aboutVideo} controls poster={videoThumbnail}></video>
//             <p className="video-caption">
//               ▶ Click to watch how Barma-Sorig heals with nature
//             </p>
//           </div> */}

//           <div className="about-content">
//             <h2>About Barma-Sorig</h2>
//             <p>
//               Barma-Sorig is a traditional healing center rooted in ancient
//               wisdom and herbal medicine. Our mission is to restore balance and
//               harmony in the body using time-tested practices, natural herbs,
//               and holistic therapies.
//             </p>
//             <p>
//               With a deep respect for Bhutanese Sowa-Rigpa traditions, we offer
//               treatments that support physical, emotional, and spiritual
//               well-being in a serene and caring environment.
//             </p>
//             <Link to="/about" className="btn">
//               Read More
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Testimonial & Contact Section */}
//       {/* Contact Section */}
//       <section className="contact-testimonial-section">
//         <div className="contact-testimonial-container container">
//           {/* Contact CTA */}
//           <div className="contact-content">
//             <h2>Start Your Healing Journey</h2>
//             <p>
//               Whether you're curious about treatments or ready to book, we're
//               just a message away.
//             </p>
//             <Link to="/contact" className="btn">
//               Contact Us
//             </Link>
//           </div>

//           {/* Testimonial */}
//           <div className="testimonial-content testimonial-slider">
//             <Slider
//               dots={true}
//               infinite={true}
//               autoplay={true}
//               autoplaySpeed={4000}
//               speed={800}
//               slidesToShow={1}
//               slidesToScroll={1}
//             >
//               <div className="testimonial-slide">
//                 <blockquote>
//                   “I felt a deep sense of calm and relief after just one
//                   session. The herbs, the energy, and the kindness — it's all
//                   real.”
//                 </blockquote>
//                 <cite>- Metho Selden</cite>
//               </div>
//               <div className="testimonial-slide">
//                 <blockquote>
//                   “Truly a healing experience. The herbal massage is magical.”
//                 </blockquote>
//                 <cite>- Ngawang Tenzin</cite>
//               </div>
//               <div className="testimonial-slide">
//                 <blockquote>
//                   “Barma-Sorig brings ancient wisdom into modern lives.”
//                 </blockquote>
//                 <cite>- Sonam Choden</cite>
//               </div>
//             </Slider>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  heroContent,
  services,
  testimonials,
  aboutContent,
} from "../data/homeData";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import VideoPlayer from "../components/VideoPlayer";
import "../styles/Home.css"; // Assuming you have a CSS file for styles

const Home = () => {
  return (
    <>
      <HeroSection {...heroContent} />

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
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
