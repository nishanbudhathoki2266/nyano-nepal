import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  isHero?: boolean;
  isTertiary?: boolean;
}

const Heading = ({
  children,
  className = "",
  isHero = false,
  isTertiary = false,
}: HeadingProps) => {
  return (
    <h1
      className={cn(
        "font-semibold capitalize",
        isHero && "text-4xl md:text-5xl lg:text-6xl",
        isTertiary && "text-lg md:text-xl lg:text-2xl font-normal",
        !isHero && !isTertiary && "text-3xl md:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
