import heroBg from "../assets/images/hero-bg.webp"; // Adjust path as needed
import aboutVideo from "../assets/videos/barma-sorig-ad.mp4";

export const heroContent = {
  title: "Are you looking for a natural way to heal?",
  description:
    "Barma-Sorig is a traditional healing practice that combines ancient Tibetan medicine with modern techniques. Our expert practitioners are dedicated to restoring balance and harmony in your life.",
  buttons: [
    { text: "Learn More", link: "/about", className: "btn-primary" },
    { text: "Call Us", link: "/contact", className: "btn-secondary" },
  ],
  backgroundImage: heroBg,
};

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
