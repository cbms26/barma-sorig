import React from "react";
import "../styles/Gallery.css";

function Gallery() {
  const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <section className="gallery-page">
      <div className="gallery-container container">
        <h1>Healing in Motion</h1>
        <p className="gallery-intro">
          Discover glimpses of our healing practices, traditional herbs, and the
          tranquil environment of Barma-Sorig.
        </p>

        <div className="gallery-grid">
          {galleryImages.map(function (img, index) {
            return (
              <div className="gallery-item" key={index}>
                <img src={img} alt={`Barma-Sorig ${index + 1}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
