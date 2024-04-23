import Image from "next/image";
import React, { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header className="relative w-full h-full">
      <section className="absolute w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src={
              "https://images.unsplash.com/photo-1713457708994-32f356465474?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            alt="background"
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 bg-black opacity-40 w-full h-full"></div>
        <div className="absolute top-0 bg-gradient-to-t from-black w-full h-full"></div>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
