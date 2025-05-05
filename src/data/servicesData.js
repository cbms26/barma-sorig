// src/data/servicesData.js
export const featuredServices = [
  // For Home.js
  {
    id: 1,
    title: "Herbal Massage",
    description: "Traditional full-body massage...",
    icon: "🌿",
    featured: true,
  },
  {
    id: 2,
    title: "Hot Stone Therapy",
    description: "Therapeutic stones to relieve tension...",
    icon: "🪨",
    featured: true,
  },
  {
    id: 3,
    title: "Herbal Steam Bath",
    description: "Herbal steam therapy for detoxification...",
    icon: "💧",
    featured: true,
  },
];

export const fullServices = [
  // For Services.js
  ...featuredServices,
  {
    id: 4,
    title: "Cupping",
    description: "Vacuum therapy to improve energy flow...",
    icon: "🥣",
    duration: "75 mins",
    benefits: ["Pain relief", "Detoxification"],
  },
  {
    id: 5,
    title: "Herbal Consultation",
    description: "One-on-one consultation with a practitioner...",
    icon: "🧪",
    duration: "60 mins",
    benefits: ["Personalized treatment", "Holistic approach"],
  },
  {
    id: 6,
    title: "Herbal Remedies",
    description: "Natural remedies for various ailments...",
    icon: "🌱",
    duration: "30 mins",
    benefits: ["Natural healing", "Holistic approach"],
  },
  {
    id: 7,
    title: "Dietary Consultation",
    description: "Personalized dietary advice based on Sowa-Rigpa...",
    icon: "🥗",
    duration: "45 mins",
    benefits: ["Balanced diet", "Holistic approach"],
  },
  {
    id: 8,
    title: "Pulse Diagnosis",
    description: "Traditional method to assess health...",
    icon: "🩺",
    duration: "30 mins",
    benefits: ["Holistic assessment", "Personalized treatment"],
  },
  // ... all other services
];
