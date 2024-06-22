import Image from "next/image";
import React from "react";

interface PartnersCardProps {
  src: string;
  alt: string;
}

const PartnersCard = ({ src, alt }: PartnersCardProps) => {
  return (
    <div className="relative cursor-crosshair transition-colors duration-200 ease-in-out grayscale hover:grayscale-0 aspect-square col-span-2 sm:col-span-1 lg:col-span-3 xl:col-span-2">
      <Image src={src} alt={alt} fill objectFit="cover" />
    </div>
  );
};

export default PartnersCard;
