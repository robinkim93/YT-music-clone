import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const UserIcon = ({ size = "sm" }) => {
  return (
    <Avatar
      className={cn("h-[26px] w-[26px]", size === "lg" && "h-[56px] w-[56px]")}
    >
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserIcon;
