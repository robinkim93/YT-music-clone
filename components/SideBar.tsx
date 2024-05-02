"use client";

import React from "react";
import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";
import { usePlayerState } from "@/hooks/usePlayerState";
import { cn } from "@/lib/utils";

const SideBar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isVisiblePlayer } = usePlayerState();

  return (
    <div
      className={cn(
        "flex flex-row h-full",
        isVisiblePlayer && "h-[calc(100vh-72px)]"
      )}
    >
      <nav className="w-[240px] h-full border-r-[1px] border-neutral-600 hidden lg:block">
        {/* <div className="sticky top-0 left-0"> */}
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
        {/* </div> */}
      </nav>
      <div className="w-full lg:w-[calc(100%-240px)]">{children}</div>
    </div>
  );
};

export default SideBar;
