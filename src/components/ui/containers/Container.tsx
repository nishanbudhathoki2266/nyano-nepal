import cn from "clsx";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg";
}

const Container = ({
  children,
  className = "",
  size = "lg",
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto px-2 md:px-4",
        size === "sm" ? "max-w-[115rem]" : "container",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
