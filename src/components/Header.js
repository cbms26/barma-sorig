import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline";
import LogoWithName from "../assets/images/logo-with-name.png";
import navigation from "../data/mainMenus.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open (mobile)
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null); // Track which dropdown is open (desktop)
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

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
              <div className="flex space-x-6">
                {navigation.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.name} className="relative">
                      {/* Dropdown Tab */}
                      <div className="flex items-center">
                        <Link
                          to={item.to}
                          className={classNames(
                            location.pathname === item.to ||
                              (item.hasDropdown &&
                                location.pathname.startsWith(item.to) &&
                                item.to !== "/aboutPage")
                              ? "text-white"
                              : "text-gray-300",
                            "relative py-2 text-sm font-medium transition-colors duration-200 hover:text-white group"
                          )}
                          // Toggle dropdown on menu name click
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDesktopDropdown(
                              openDesktopDropdown === item.name
                                ? null
                                : item.name
                            );
                          }}
                        >
                          {item.name}
                          {/* Animated underline */}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                          {/* Active underline */}
                          {(location.pathname === item.to ||
                            (item.hasDropdown &&
                              location.pathname.startsWith(item.to) &&
                              item.to !== "/aboutPage")) && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                          )}
                          {/* Arrow icon (visual only) */}
                          {item.hasDropdown && (
                            <ChevronDoubleDownIcon
                              className={classNames(
                                "ml-1 h-4 w-4 transition-transform duration-200 inline",
                                openDesktopDropdown === item.name
                                  ? "rotate-180"
                                  : ""
                              )}
                            />
                          )}
                        </Link>
                      </div>

                      {/* Drop Down Menus - Show when clicked */}
                      {openDesktopDropdown === item.name && (
                        <div className="absolute left-0 top-full w-96 origin-top-left rounded-md bg-white py-4 px-6 shadow-lg ring-1 ring-black/5 z-10">
                          {/* Content Container */}
                          <div
                            className={
                              item.name === "About Us"
                                ? "flex flex-col gap-2"
                                : "grid grid-cols-2 gap-4"
                            }
                          >
                            {/* Menu Items */}
                            {item.name === "About Us"
                              ? item.dropdownItems.map((mainService) => (
                                  <Link
                                    key={mainService.name}
                                    to={mainService.to}
                                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-l-4 hover:border-blue-600 rounded transition-all duration-75 flex items-center justify-between"
                                    onClick={() => setOpenDesktopDropdown(null)}
                                  >
                                    <span>{mainService.name}</span>
                                    <ChevronRightIcon className="h-4 w-4 opacity-0 hover:opacity-100 transition-opacity" />
                                  </Link>
                                ))
                              : item.dropdownItems.map((mainService) => (
                                  <div key={mainService.name}>
                                    <h3 className="text-gray-700 font-semibold text-sm mb-2">
                                      {mainService.name}
                                    </h3>
                                    {/* Check if this service has sub-items */}
                                    {mainService.subServices ? (
                                      <div className="space-y-1">
                                        {mainService.subServices.map(
                                          (subService) => (
                                            <Link
                                              key={subService.name}
                                              to={subService.to}
                                              className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-l-4 hover:border-blue-600 rounded transition-all duration-75 flex items-center justify-between"
                                              onClick={() =>
                                                setOpenDesktopDropdown(null)
                                              }
                                            >
                                              <span>{subService.name}</span>
                                              <ChevronRightIcon className="h-4 w-4 opacity-0 hover:opacity-100 transition-opacity" />
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    ) : (
                                      <Link
                                        to={mainService.to}
                                        className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-700 hover:text-white rounded-md"
                                        onClick={() =>
                                          setOpenDesktopDropdown(null)
                                        }
                                      >
                                        {mainService.name}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        location.pathname === item.to
                          ? "text-white"
                          : "text-gray-300",
                        "relative py-2 text-sm font-medium transition-colors duration-200 hover:text-white group"
                      )}
                    >
                      {item.name}
                      {/* Animated underline */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                      {/* Active underline */}
                      {location.pathname === item.to && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                      )}
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
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
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
                  {/* Mobile menu item with arrow */}
                  <div className="flex items-center w-fit">
                    <button
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      <ChevronDoubleDownIcon
                        className={classNames(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          openDropdown === item.name ? "rotate-180" : ""
                        )}
                      />
                    </button>
                  </div>

                  {/* Mobile dropdown content */}
                  {openDropdown === item.name && (
                    <div className="pl-4 mt-2">
                      {item.name === "About Us"
                        ? item.dropdownItems.map((mainService) => (
                            <Link
                              key={mainService.name}
                              to={mainService.to}
                              className="block px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {mainService.name}
                            </Link>
                          ))
                        : item.dropdownItems.map((mainService) => (
                            <div key={mainService.name}>
                              <h3 className="text-gray-400 font-semibold text-sm mb-2 px-4">
                                {mainService.name}
                              </h3>
                              <div className="space-y-1">
                                {mainService.subServices &&
                                  mainService.subServices.map((subService) => (
                                    <Link
                                      key={subService.name}
                                      to={subService.to}
                                      className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-200"
                                      onClick={() => setIsMobileMenuOpen(false)}
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
                  className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
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
