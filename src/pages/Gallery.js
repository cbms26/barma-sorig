import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function GalleryPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      </main>
      <Footer />
    </>
  );
}

export default GalleryPage;
