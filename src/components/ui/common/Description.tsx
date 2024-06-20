import { cn } from "@/lib/utils";
import React from "react";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const Description = ({ children, className = "" }: DescriptionProps) => {
  return (
    <p className={cn("text-sm md:text-base lg:text-lg", className)}>
      {children}
    </p>
  );
};

export default Description;
