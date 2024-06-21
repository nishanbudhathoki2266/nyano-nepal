import React from "react";
import Description from "./Description";

interface ServicesCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ServicesCard = ({ icon, title, description }: ServicesCardProps) => {
  return (
    <div className="bg-gray-200 xl:aspect-square cursor-crosshair hover:scale-[1.02] transition-transform duration-200 ease-in-out text-center col-span-full md:col-span-2 flex flex-col items-center justify-center gap-4 lg:col-span-3 px-4 py-8 rounded-md">
      {React.cloneElement(icon, { size: 50, strokeWidth: 1.4 })}
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Description className="lg:!text-base">{description}</Description>
    </div>
  );
};

export default ServicesCard;
