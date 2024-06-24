import { Facebook, Instagram } from "lucide-react";

const contact = {
  title: "Get in Touch",
  description:
    "Whether you're looking to donate, offer help, or become an agent, we're here to assist you. Reach out to us for any inquiries or to start a conversation. Let's make a difference together!",
  image: {
    src: "/images/sherpa-kids.jpg",
    alt: "Sherpa kids smiling at the camera. Designed By FreePik.",
  },
  address: {
    tole: "Tarahara Chowk",
    city: "Itahari",
    ward: 24,
    district: "Sunsari",
    province: 1,
    postal: 56705,
  },
  info: {
    phone: "+9779856478568",
    email: "devnin@gmail.com",
  },
  socials: [
    { id: 1, icon: Facebook },
    { id: 2, icon: Instagram },
  ],
};

export default contact;
