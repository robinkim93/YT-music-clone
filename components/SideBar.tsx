import React from "react";
import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";

const SideBar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full">
      <nav className="w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SideBar;
