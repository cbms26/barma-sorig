import React, { useState } from "react";
import { FiInstagram, FiZoomIn, FiHeart, FiShare2 } from "react-icons/fi";
import "../styles/Gallery.css";

// Move to src/data/galleryData.js
import galleryContent from "../data/galleryData";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-page">
      <div className="gallery-container container">
        <header className="gallery-header">
          <h1>Healing in Motion</h1>
          <p className="gallery-intro">
            Discover glimpses of our healing practices, traditional herbs, and
            the tranquil environment of Barma-Sorig.
          </p>
          <div className="social-connect">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram /> Follow us @BarmaSorig
            </a>
          </div>
        </header>

        <div className="gallery-grid">
          {galleryContent.map((item) => (
            <div
              className={`gallery-item ${item.isSocial ? "social-post" : ""}`}
              key={item.id}
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.alt} />

              <div className="item-overlay">
                {item.isSocial && <FiInstagram className="social-icon" />}
                <FiZoomIn className="zoom-icon" />
              </div>

              {item.isSocial && (
                <div className="social-stats">
                  <span>
                    <FiHeart /> {item.likes}
                  </span>
                  <FiShare2 />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.alt} />
            <div className="image-meta">
              <h3>{selectedImage.caption}</h3>
              <div className="tags">
                {selectedImage.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              {selectedImage.isSocial && (
                <a
                  href={selectedImage.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FiInstagram /> View on Instagram
                </a>
              )}
            </div>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
