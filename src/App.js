import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/Landing";
import ServicesPage from "./pages/Services";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import BookingPage from "./pages/Booking";

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
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
