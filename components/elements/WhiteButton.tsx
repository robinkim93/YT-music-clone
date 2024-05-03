"use client";

import { cn } from "@/lib/utils";
import React, { MouseEventHandler, ReactNode } from "react";

interface WhiteButtonProps {
  icon?: ReactNode;
  label: string;
  className?: string;
  onClick?: MouseEventHandler;
}

const WhiteButton = ({
  icon,
  label,
  className = "",
  onClick = () => {},
  ...props
}: WhiteButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-row gap-2 items-center cursor-pointer bg-white text-black rounded-2xl p-4 min-w-[80px] h-[36px] text-[14px] hover:bg-neutral-200",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default WhiteButton;
