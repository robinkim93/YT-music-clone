"use client";

import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { IoCloseOutline } from "react-icons/io5";

interface LogoProps {
  isDrawerOpen?: boolean;
  onClickCloseButton?: MouseEventHandler;
}

const Logo = ({
  isDrawerOpen = false,
  onClickCloseButton = () => {},
}: LogoProps) => {
  const { push } = useRouter();

  const onClickLogo = () => {
    push("/");
  };

  const onClickIcon = () => {};

  return (
    <section className="flex items-center gap-3">
      {isDrawerOpen ? (
        <IconButton
          icon={<IoCloseOutline size={24} />}
          onClickIcon={onClickCloseButton}
        />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24} />}
          onClickIcon={onClickIcon}
        />
      )}
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image
          width={100}
          height={30}
          src={"/main-logo.svg"}
          alt="main-logo"
          priority
        />
      </div>
    </section>
  );
};

export default Logo;
