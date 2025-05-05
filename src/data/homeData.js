import heroBg from "../assets/images/hero-bg.webp"; // Adjust path as needed
import service1 from "../assets/images/service-item-1.webp";
import service2 from "../assets/images/service-item-2.jpg";
import service3 from "../assets/images/service-item-3.jpg";
import aboutVideo from "../assets/videos/barma-sorig-ad.mp4";

export const heroContent = {
  title: "Barma-Sorig Traditional Healing Center",
  description:
    "Welcome to Barma-Sorig, where ancient wisdom meets modern healing...",
  buttons: [
    { text: "Learn More", link: "/about", className: "btn-primary" },
    { text: "Call Us", link: "/contact", className: "btn-secondary" },
  ],
  backgroundImage: heroBg,
};

export const services = [
  {
    id: 1,
    title: "Traditional Medicine",
    description: "Healing with ancient herbal remedies.",
    image: service1,
  },
  {
    id: 2,
    title: "Acupuncture",
    description: "Restoring balance through needle therapy.",
    image: service2,
  },
  {
    id: 3,
    title: "Massage Therapy",
    description: "Relaxation and healing through touch.",
    image: service3,
  },
  // Add 2 more services...
];

export const testimonials = [
  { quote: "Life-changing experience!", author: "Metho Selden" },
  { quote: "Highly recommend Barma-Sorig!", author: "Jenna Smith" },
  { quote: "A sanctuary for healing.", author: "Liam Johnson" },
  {
    quote: "Expert practitioners and serene environment.",
    author: "Emma Brown",
  },
  { quote: "Transformative journey to wellness.", author: "Noah Davis" },
  // Add more testimonials...
];

export const aboutContent = {
  title: "About Barma-Sorig",
  paragraphs: ["Rooted in ancient wisdom...", "We restore balance using..."],
  video: aboutVideo,
};
