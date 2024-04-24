"use client";

import Image from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import UserIcon from "./UserIcon";
import PagePadding from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { cn } from "@/lib/utils";
import { useUIState } from "@/hooks/useUiState";

const HeaderDrawer = ({ children }: { children: ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer direction="left" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="p-[24px]">
          <Logo
            isDrawerOpen
            onClickCloseButton={() => setIsDrawerOpen(false)}
          />
        </div>
        <div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  const { headerImgSrc } = useUIState();

  useEffect(() => {
    const headerRefInstance = headerRef.current;

    const scrollHandler = () => {
      const scrollValue = headerRefInstance?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    };

    headerRefInstance?.addEventListener("scroll", scrollHandler);

    return () => {
      headerRefInstance?.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header className="relative w-full h-full overflow-y-auto" ref={headerRef}>
      {/* bg section */}
      <section className="absolute top-0 w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src={
              headerImgSrc ||
              "https://images.unsplash.com/photo-1713457708994-32f356465474?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            alt="background"
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 bg-black opacity-10 w-full h-[400px]"></div>
        <div className="absolute top-0 bg-gradient-to-t from-black w-full h-[400px]"></div>
      </section>
      {/* search section */}
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="flex flex-row justify-between items-center h-[64px]">
            <article className="hidden lg:flex flex-row bg-[rgba(0,0,0,0.5)] h-[42px] min-w-[480px] items-center px-[16px] gap-[16px] rounded-xl border border-neutral-500">
              <FiSearch size={30} />
              <input
                type="text"
                className="w-full h-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={24} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
