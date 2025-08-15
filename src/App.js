import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import ServicesPage from "./pages/Services.js";
import HomePage from "./pages/Home.js";
import AboutPage from "./pages/About.js";
import BookingPage from "./pages/Booking.js";
import GalleryPage from "./pages/Gallery.js";
import ContactPage from "./pages/Contact.js";

import KuNyeBlog from "./pages/blog/KuNye.js";
import NineBreathingExerciseBlog from "./pages/blog/NineBreathingExercise.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/servicesPage" element={<ServicesPage />} />
        <Route path="/bookingPage" element={<BookingPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/galleryPage" element={<GalleryPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/kuNyeBlog" element={<KuNyeBlog />} />
        <Route
          path="/nineBreathingExerciseBlog"
          element={<NineBreathingExerciseBlog />}
        />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
