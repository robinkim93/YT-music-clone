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
