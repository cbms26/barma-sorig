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
          {
            name: "Whole Body Massage",
            to: "/servicesPage?service=SPA Treatments&category=Whole Body Ku Nye Massage",
          },
          {
            name: "Head & Facial Massage",
            to: "/servicesPage?service=SPA Treatments&category=Head, Face and Foot Massage",
          },
          {
            name: "Herbal Steam",
            to: "/servicesPage?service=SPA Treatments&category=Herbal Steam (Amrita's)",
          },
        ],
      },
      {
        name: "Salon Services",
        subServices: [
          {
            name: "Hair Care",
            to: "/servicesPage?service=Salon Services&category=Hair Care",
          },
          {
            name: "Face & Brows",
            to: "/servicesPage?service=Salon Services&category=Face and Brows",
          },
          {
            name: "Waxing",
            to: "/servicesPage?service=Salon Services&category=Waxing",
          },
          {
            name: "Hands & Feet",
            to: "/servicesPage?service=Salon Services&category=Hands and Feet",
          },
        ],
      },
    ],
  },
  {
    name: "About",
    to: "/aboutPage",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Ku Nye",
        to: "/kuNyeBlog",
      },
      {
        name: "Nine Breathing Exercise",
        to: "/nineBreathingExerciseBlog",
      },
      {
        name: "Course",
        to: "/",
      },
      {
        name: "Staff Organogram",
        to: "/",
      },
    ],
  },
  { name: "Contact", to: "/contactPage" },
];

export default navigation;
