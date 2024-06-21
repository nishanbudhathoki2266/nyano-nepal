import { ContainerIcon, Shirt, Sparkles, Users } from "lucide-react";

const services = {
  title: "Featured Services",
  description:
    "Nyano Nepal is a platform dedicated to transforming lives in Nepal by collecting and distributing surplus clothing and essentials. Our mission is to provide warmth and hope to those in need. Join us in making a meaningful impact through community donations.",
  services: [
    {
      id: 1,
      icon: Shirt,
      title: "Clothing Donations",
      description:
        "We collect and distribute warm clothing to those in need, ensuring comfort during harsh weather.",
    },
    {
      id: 2,
      icon: ContainerIcon,
      title: "Essential Supplies",
      description:
        "Providing crucial daily necessities like hygiene products and blankets to support vulnerable communities.",
    },
    {
      id: 3,
      icon: Users,
      title: "Community Support",
      description:
        "Assisting underserved communities by addressing specific needs and providing essential resources.",
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Efficient Distribution",
      description:
        "Ensuring timely and effective delivery of donated items to remote and hard-to-reach areas across Nepal.",
    },
  ],
};

export default services;
