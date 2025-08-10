import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo-with-name.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Link to="/">
              <img
                className="h-28"
                src={logoImage}
                alt="Barma Sorig Logo"
              ></img>
            </Link>
            <p className="text-gray-400">
              Bringing ancient Traditional healing to the modern world. <br />
              Experience balance, harmony, and holistic well-being.
            </p>
          </div>

          {/* Opening Hours */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-sky-500 mb-2">
              Opening Hours
            </h3>
            <p className="text-gray-400">Monday - Sunday: 9:00 AM- 08:00 PM</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-6 text-center">
            <Link to="/homePage" className="hover:text-sky-500 transition">
              Home
            </Link>
            <Link to="/servicesPage" className="hover:text-sky-500 transition">
              Services
            </Link>
            <Link to="/aboutPage" className="hover:text-sky-500 transition">
              About
            </Link>
            <Link to="/contactPage" className="hover:text-sky-500 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/barmasorighealingcenter"
              className="text-gray-400 hover:text-sky-500 transition text-xl"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-sky-500 transition text-xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-sky-500 transition text-xl"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Barma Sorig. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
