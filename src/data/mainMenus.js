const navigation = [
  { name: "Home", to: "/homePage" },
  {
    name: "Services",
    to: "/servicesPage",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "SPA Services",
        subServices: [
          { name: "Whole Body Massage", to: "/services/ku-nye" },
          { name: "Head & Facial Massage", to: "/services/deep-tissue" },
          { name: "Foot Massage", to: "/services/hot-stone" },
          { name: "Herbal Steam", to: "/services/swedish" },
        ],
      },
      {
        name: "Salon Services",
        subServices: [
          { name: "Hair Care", to: "/services/moxibustion" },
          { name: "Face & Brows", to: "/services/herbal-therapy" },
          { name: "Waxing", to: "/services/acupressure" },
          { name: "Hans & ", to: "/services/cupping" },
        ],
      },
    ],
  },
  { name: "About", to: "/aboutPage" },
  { name: "Contact", to: "/contactPage" },
];

export default navigation;
