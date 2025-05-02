import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-container container">
        <h1>About Barma-Sorig</h1>
        <p className="intro-text">
          Barma-Sorig is a center of traditional healing that blends
          centuries-old Bhutanese wisdom with the power of natural herbs and
          holistic therapies. We are committed to restoring balance, health, and
          peace through mindful care, herbal remedies, and ancient massage
          techniques rooted in Sowa-Rigpa.
        </p>

        {/* Section: Mission */}
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To promote natural healing and inner harmony by offering therapeutic
            experiences grounded in traditional Bhutanese medicine. We strive to
            provide a nurturing space where individuals can find relief,
            rejuvenation, and spiritual clarity.
          </p>
        </div>

        {/* Section: Healing Tradition */}
        <div className="about-section">
          <h2>The Healing Tradition</h2>
          <p>
            Inspired by the Sowa-Rigpa tradition, our treatments use wildcrafted
            herbs, oils, and techniques passed down through generations. Every
            therapy is personalized, aiming to cleanse, relax, and realign the
            body’s natural energy.
          </p>
        </div>

        {/* Section: Core Values */}
        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="value-list">
            <li>🌿 Respect for ancient wisdom and nature</li>
            <li>🤝 Compassionate and personalized care</li>
            <li>🧘‍♂️ Mind-body-spirit balance</li>
            <li>✨ Authenticity and trust</li>
          </ul>
        </div>

        {/* Optional: Quote or Callout */}
        <div className="about-quote">
          <blockquote>
            “Healing doesn’t mean the damage never existed. It means the damage
            no longer controls your life.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default About;
