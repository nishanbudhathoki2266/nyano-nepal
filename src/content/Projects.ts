import { ContainerIcon, Shirt, Sparkles, Users } from "lucide-react";

const projects = {
  title: "Featured Projects",
  description:
    "Nyano Nepal is a platform dedicated to transforming lives in Nepal by collecting and distributing surplus clothing and essentials. Our mission is to provide warmth and hope to those in need. Join us in making a meaningful impact through community donations.",
  projects: [
    {
      id: 1,
      image: {
        src: "/images/winter-donation.jpg",
        alt: "Donating winter clothes to needy people.",
      },
      title: "Project Warm Winter",
      description:
        "Distributed over 5,000 coats and blankets to families in high-altitude regions to help them endure the cold winters.",
    },
    {
      id: 2,
      image: {
        src: "/images/essentials-donation.jpg",
        alt: "Donating essential kits and blankets to village people.",
      },
      title: "Essentials for Everyday",
      description:
        "Provided hygiene kits and daily necessities to over 2,000 households, improving sanitation and daily living conditions.",
    },
    {
      id: 3,
      image: {
        src: "/images/students.jpg",
        alt: "Two student boys in a frame.",
      },
      title: "Back-to-School Drive",
      description:
        "Supplied school uniforms and stationery to 800 children, ensuring they have the necessary materials to continue their education.",
    },
    {
      id: 4,
      image: {
        src: "/images/flood-victim.jpg",
        alt: "One of the flood victims looking at the camera.",
      },
      title: "Rapid Response Aid",
      description:
        "Delivered emergency supplies to flood-affected areas, assisting over 1,200 individuals with food, water, and temporary shelter.",
    },
  ],
};

export default projects;
