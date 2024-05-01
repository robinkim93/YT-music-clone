import { generateRandomHex } from "@/lib/utils";
import React from "react";

interface GenreCardProps {
  genre: string;
}

const GenreCard = ({ genre }: GenreCardProps) => {
  const hex = generateRandomHex();
  return (
    <div className="flex flex-row h-[48px] w-full cursor-pointer bg-neutral-800 rounded-r-lg">
      <div
        className="h-full w-2 rounded-l-lg"
        style={{ backgroundColor: hex }}
      ></div>
      <div className="flex justify-center items-center px-4">{genre}</div>
    </div>
  );
};

export default GenreCard;
