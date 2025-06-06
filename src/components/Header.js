import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoWithName from "../assets/images/logo-with-name.png";
import navigation from "../data/mainMenus.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={classNames(
        "sticky top-0 z-50 bg-gray-800 transition-all duration-200",
        isScrolled ? "py-6 shadow-lg bg-opacity-95" : "py-3"
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to={"/"}>
                <img
                  alt="Barma Sorig"
                  src={LogoWithName}
                  className={classNames(
                    "transition-all duration-300",
                    isScrolled ? "px-6 h-28 w-auto" : "h-20 w-auto"
                  )}
                />
              </Link>
            </div>
            <div
              className={classNames(
                "hidden sm:ml-6 sm:block",
                isScrolled ? "text-lg" : "text-base"
              )}
            >
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.name} className="relative group">
                      {/* Dropdown Tab */}
                      <Link
                        to={item.to}
                        className={classNames(
                          location.pathname === item.to ||
                            (item.hasDropdown &&
                              location.pathname.startsWith(item.to) &&
                              item.to !== "/aboutPage")
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium flex items-center"
                        )}
                      >
                        {item.name}
                      </Link>
                      {/* Dropdown Menus */}
                      <div className="absolute left-0 top-full hidden w-96 origin-top-left rounded-md bg-white py-4 px-6 shadow-lg ring-1 ring-black/5 group-hover:block z-10">
                        <div
                          className={
                            item.name === "About"
                              ? "flex flex-col gap-2"
                              : "grid grid-cols-2 gap-4"
                          }
                        >
                          {item.name === "About"
                            ? item.dropdownItems.map((mainService) => (
                                <Link
                                  key={mainService.name}
                                  to={mainService.to}
                                  className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-l-4 hover:border-blue-600 rounded transition-all duration-75"
                                >
                                  {mainService.name}
                                </Link>
                              ))
                            : item.dropdownItems.map((mainService) => (
                                <div key={mainService.name}>
                                  <h3 className="text-gray-700 font-semibold text-sm mb-2">
                                    {mainService.name}
                                  </h3>
                                  {mainService.subServices ? (
                                    <div className="space-y-1">
                                      {mainService.subServices.map(
                                        (subService) => (
                                          <Link
                                            key={subService.name}
                                            to={subService.to}
                                            className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-l-4 hover:border-blue-600 rounded transition-all duration-75"
                                          >
                                            {subService.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  ) : (
                                    <Link
                                      to={mainService.to}
                                      className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-700 hover:text-white rounded-md"
                                    >
                                      {mainService.name}
                                    </Link>
                                  )}
                                </div>
                              ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        location.pathname === item.to
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
          {/* Book Appointment btn */}
          <div className="absolute inset-y-0 right-0 flex text-center items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/bookingPage"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name
                      )
                    }
                    className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4">
                      {item.name === "About"
                        ? item.dropdownItems.map((mainService) => (
                            <Link
                              key={mainService.name}
                              to={mainService.to}
                              className="block px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                            >
                              {mainService.name}
                            </Link>
                          ))
                        : item.dropdownItems.map((mainService) => (
                            <div key={mainService.name}>
                              <h3 className="text-gray-400 font-semibold text-sm mb-2">
                                {mainService.name}
                              </h3>
                              <div className="space-y-1">
                                {mainService.subServices &&
                                  mainService.subServices.map((subService) => (
                                    <Link
                                      key={subService.name}
                                      to={subService.to}
                                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
                                    >
                                      {subService.name}
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
