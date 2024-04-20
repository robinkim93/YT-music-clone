"use client";

import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";

const Logo = () => {
  const { push } = useRouter();

  const onClickLogo = () => {
    push("/");
  };
  const onClickIcon = () => {};

  return (
    <section className="flex items-center gap-3">
      <IconButton
        icon={<RxHamburgerMenu size={24} />}
        onClickIcon={onClickIcon}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={"/main-logo.svg"} alt="main-logo" />
      </div>
    </section>
  );
};

export default Logo;
