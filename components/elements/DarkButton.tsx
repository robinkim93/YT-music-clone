"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface DarkButtonProps {
  icon?: ReactNode;
  label: string;
  className?: string;
}

const DarkButton = ({
  icon,
  label,
  className = "",
  ...props
}: DarkButtonProps) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-2 items-center cursor-pointer bg-black text-white rounded-2xl p-4 min-w-[80px] h-[36px] text-[14px] border border-neutral-600 hover:bg-neutral-800",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default DarkButton;
