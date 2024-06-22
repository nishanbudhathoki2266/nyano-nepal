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
    tole: "Tribhuwan Chowk",
    city: "Itahari",
    ward: 2,
    district: "Sunsari",
    province: 1,
    postal: 56705,
  },
  info: {
    phone: "+9779810479027",
    email: "nishanbudhathoki2266@gmail.com",
  },
  socials: [
    { id: 1, icon: Facebook },
    { id: 2, icon: Instagram },
  ],
};

export default contact;
