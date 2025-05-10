export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-sky-500 mb-2">
              Barma Sorig Traditional Healing Center
            </h2>
            <p className="text-gray-400">
              Bringing ancient Tibetan healing to the modern world. Experience
              balance, harmony, and holistic well-being.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-6 text-center">
            <a href="/homePage" className="hover:text-sky-500 transition">
              Home
            </a>
            <a href="/servicesPage" className="hover:text-sky-500 transition">
              Services
            </a>
            <a href="/about" className="hover:text-sky-500 transition">
              About
            </a>
            <a href="/contact" className="hover:text-sky-500 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-sky-500 transition text-xl"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-sky-500 transition text-xl"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-sky-500 transition text-xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
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
