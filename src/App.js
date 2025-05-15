import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/Landing.js";
import ServicesPage from "./pages/Services.js";
import HomePage from "./pages/Home.js";
import AboutPage from "./pages/About.js";
import BookingPage from "./pages/Booking.js";
import ContactPage from "./pages/Contact.js";

import KuNyeBlog from "./pages/blog/KuNye.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/servicesPage" element={<ServicesPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/bookingPage" element={<BookingPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/kuNyeBlog" element={<KuNyeBlog />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
