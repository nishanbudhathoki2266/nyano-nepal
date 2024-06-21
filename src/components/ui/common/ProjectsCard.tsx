import Image from "next/image";
import React from "react";
import Description from "./Description";

interface ProjectsCardProps {
  image: { src: string; alt: string };
  title: string;
  description: string;
}

const ProjectsCard = ({ image, title, description }: ProjectsCardProps) => {
  return (
    <div className="col-span-full md:col-span-2 lg:col-span-6">
      <figure className="relative aspect-square lg:aspect-video overflow-hidden rounded-md">
        <Image src={image.src} alt={image.alt} fill objectFit="cover" />
      </figure>
      <h2 className="mt-2 mb-1 text-xl rounded-sm font-medium">{title}</h2>
      <Description className="lg:!text-base">{description}</Description>
    </div>
  );
};

export default ProjectsCard;
