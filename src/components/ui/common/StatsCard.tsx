import React from "react";
import Description from "./Description";

interface StatsCardProps {
  stat: string;
  description: string;
}

const StatsCard = ({ stat, description }: StatsCardProps) => {
  return (
    <div className="bg-gray-200 col-span-full md:col-span-2 flex flex-col justify-center gap-2 lg:col-span-3 px-4 py-8 rounded-md cursor-crosshair hover:scale-[1.02] transition-transform duration-200 ">
      <h2 className="text-3xl font-medium">{stat}</h2>
      <Description>{description}</Description>
    </div>
  );
};

export default StatsCard;
