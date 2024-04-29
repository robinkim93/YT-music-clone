"use client";

import { TopSong } from "@/types";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import {
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
  FiMoreVertical,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";

interface SongCardProps {
  song: TopSong;
}

const SongCard = ({ song }: SongCardProps) => {
  return (
    <article className="flex flex-row gap-4 h-[48px] w-full items-center relative group">
      <div className="relative w-[48px] h-[48px]">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section className=" hidden absolute flex-row justify-center items-center top-0 w-[48px] h-[48px] group-hover:flex bg-black cursor-pointer">
          <FiPlayCircle />
        </section>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        {song.rank === song.prevRank ? (
          <FaCircle size={10} />
        ) : song.rank > song.prevRank ? (
          <AiOutlineCaretUp size={10} color="green" />
        ) : (
          <AiOutlineCaretDown size={10} color="red" />
        )}
      </div>
      <div>{song.rank + 1}</div>
      <div>{song.name}</div>
      <section className="absolute right-0 hidden group-hover:flex flex-row items-center justify-end bg-[rgba(0,0,0,0.7)] h-[48px] w-2/1">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;
