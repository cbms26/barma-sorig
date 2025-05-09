import { Link, useLocation } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import "../styles/Header.css";

const navigation = [
  { name: "Home", to: "/homePage" },
  {
    name: "Services",
    to: "/servicesPage",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Massage Therapies",
        subServices: [
          { name: "Ku Nye Massage", to: "/services/ku-nye" },
          { name: "Deep Tissue Massage", to: "/services/deep-tissue" },
          { name: "Hot Stone Therapy", to: "/services/hot-stone" },
          { name: "Swedish Massage", to: "/services/swedish" },
          { name: "Aromatherapy", to: "/services/aromatherapy" },
        ],
      },
      {
        name: "Herbal Treatments",
        subServices: [
          { name: "Moxibustion", to: "/services/moxibustion" },
          { name: "Herbal Therapy", to: "/services/herbal-therapy" },
          { name: "Acupressure", to: "/services/acupressure" },
          { name: "Cupping Therapy", to: "/services/cupping" },
        ],
      },
    ],
  },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const location = useLocation();

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <Bars3Icon className="block h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.name} className="relative group">
                      {/* Services Tab */}
                      <Link
                        to={item.to}
                        className={classNames(
                          location.pathname.startsWith("/services")
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium flex items-center"
                        )}
                      >
                        {item.name}
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 top-full hidden w-96 origin-top-left rounded-md bg-white py-4 px-6 shadow-lg ring-1 ring-black/5 group-hover:block z-10">
                        <div className="grid grid-cols-2 gap-4">
                          {item.dropdownItems.map((mainService) => (
                            <div key={mainService.name}>
                              <h3 className="text-gray-700 font-semibold text-sm mb-2">
                                {mainService.name}
                              </h3>
                              <div className="space-y-1">
                                {mainService.subServices.map((subService) => (
                                  <Link
                                    key={subService.name}
                                    to={subService.to}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                                  >
                                    {subService.name}
                                  </Link>
                                ))}
                              </div>
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
