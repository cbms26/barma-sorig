// src/data/servicesData.js

import facialTherapyImage from "../assets/images/facial-therapy-image.jpg";
import herbalSteamImage from "../assets/images/herbal-steam-image.jpg";
import footTherapyImage from "../assets/images/foot-therapy-image.jpg";
import headScalpTherapyImage from "../assets/images/head&scalp-therapy-image.jpg";
//import images id of 5-6-7
import stoneMassageImage from "../assets/images/stone-massage-image.jpg";
import therapeuticMassageImage from "../assets/images/therapeutic-massage-image.png";
import tsampaDetoxificationImage from "../assets/images/tsampa-detoxification-image.png";

export const featuredServices = [
  // For Home.js
  {
    id: 1,
    title: "Facial Therapy",
    description: "Revitalizing facial treatment with herbal products...",
    image: facialTherapyImage,
    featured: true,
  },
  {
    id: 2,
    title: "Herbal Steam",
    description:
      "The five nectars herbal steam rejuvenates the body, stimulates blood circulation, and many more...",
    image: herbalSteamImage,
    featured: true,
  },
  {
    id: 3,
    title: "Foot Therapy",
    description:
      "A regular foot massage along with reflexology helps in promoting physiological as well as physical health...",
    image: footTherapyImage,
    featured: true,
  },
];

export const fullServices = [
  // For Services.js
  ...featuredServices,
  {
    id: 4,
    title: "Head & Scalp Therapy",
    description: "Therapeutic head and scalp massage...",
    image: headScalpTherapyImage,
    duration: "75 mins",
    benefits: ["Pain relief", "Detoxification"],
  },
  {
    id: 5,
    title: "Moxibustion Treatment",
    description: "Traditional heat therapy using mugwort...(content: unsure)",
    image: "🧪",
    duration: "60 mins",
    benefits: ["Personalized treatment", "Holistic approach"],
  },
  {
    id: 6,
    title: "Whole Body Therapy",
    description: "Comprehensive body treatment...(content: unsure)",
    image: "🌱",
    duration: "30 mins",
    benefits: ["Natural healing", "Holistic approach"],
  },
  {
    id: 7,
    title: "rLung Treatment",
    description: "Balancing the rLung energy...(content: unsure)",
    image: "🥗",
    duration: "45 mins",
    benefits: ["Balanced diet", "Holistic approach"],
  },
  {
    id: 8,
    title: "Stone Massage",
    description: "Therapeutic stone massage...(content: unsure)",
    image: stoneMassageImage,
    duration: "30 mins",
    benefits: ["Holistic assessment", "Personalized treatment"],
  },
  {
    id: 9,
    title: "Therapeutic Massage",
    description: "Relaxing and therapeutic massage...(content: unsure)",
    image: therapeuticMassageImage,
    duration: "30 mins",
    benefits: ["Relaxation", "Holistic approach"],
  },
  {
    id: 10,
    title: "Tsampa Detoxification",
    description: "Detoxification using traditional methods...(content: unsure)",
    image: tsampaDetoxificationImage,
    duration: "60 mins",
    benefits: ["Detoxification", "Holistic approach"],
  },
  // ... all other services
];
