"use client";

import { useUIState } from "@/hooks/useUiState";
import React, { useEffect } from "react";

interface HeaderBgChangerProps {
  imageSrc: string;
}

const HeaderBgChanger = ({ imageSrc }: HeaderBgChangerProps) => {
  const { setHeaderImgSrc } = useUIState();

  useEffect(() => {
    if (imageSrc) setHeaderImgSrc(imageSrc);
  }, [imageSrc]);

  return <></>;
};

export default HeaderBgChanger;
