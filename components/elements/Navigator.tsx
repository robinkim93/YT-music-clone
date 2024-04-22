"use client";

import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navigator = () => {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "홈",
        href: "/",
        isActive: pathname === "/",
      },
      {
        icon: <FiCompass size={24} />,
        label: "둘러보기",
        href: "/explore",
        isActive: pathname === "/explore",
      },
      {
        icon: <FiMusic size={24} />,
        label: "보관함",
        href: "/library",
        isActive: pathname === "/library",
      },
    ];
  }, [pathname]);

  return (
    <section className="px-2">
      {routes.map((route) => {
        return (
          <Link key={route.label} href={route.href} className="flex flex-col">
            <div
              className={cn(
                "flex flex-row gap-4 items-center text-[16px] hover:bg-neutral-700 rounded-md p-3",
                route.isActive && "bg-neutral-800"
              )}
            >
              {route.icon}
              <p>{route.label}</p>
            </div>
          </Link>
        );
      })}
      <section className="px-3 mt-2">
        <div className="w-full h-[1px] bg-neutral-700 "></div>
      </section>
      <section className="px-3 mt-2">
        <div className="flex flex-row items-center bg-neutral-700 rounded-3xl p-2 justify-center gap-2 font-light cursor-pointer hover:bg-neutral-600">
          <FiPlus size={24} />
          <p>새 재생목록</p>
        </div>
      </section>
    </section>
  );
};

export default Navigator;
