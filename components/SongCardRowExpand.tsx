"use client";

import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import {
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
  FiMoreVertical,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { useRouter } from "next/navigation";
import { usePlayerState } from "@/hooks/usePlayerState";

interface SongCardRowExpandProps {
  song: Song;
}

const SongCardRowExpand = ({ song }: SongCardRowExpandProps) => {
  const { addSongList } = usePlayerState();

  const { channel, channelId, name, imageSrc } = song;
  const { push } = useRouter();

  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };

  const onClickPlay = () => {
    addSongList([song]);
  };

  return (
    <article className="flex flex-row gap-4 h-[48px] w-full items-center relative group">
      <div className="relative w-[48px] h-[48px]">
        <Image src={imageSrc} alt="img" fill className="object-cover" />
        <section
          className="hidden absolute flex-row justify-center items-center top-0 w-[48px] h-[48px] group-hover:flex bg-black cursor-pointer"
          onClick={onClickPlay}
        >
          <FiPlayCircle />
        </section>
      </div>
      <div className="flex flex-row gap-4 justify-between basis-1/3 ">
        <div className="w-[130px] truncate">{name}</div>
        <div
          className="text-neutral-500 hover:underline cursor-pointer"
          onClick={onClickChannel}
        >
          {channel}
        </div>
      </div>
      <section className="absolute right-0 hidden group-hover:flex flex-row items-center justify-end bg-[rgba(0,0,0,0.7)] h-[48px] w-[120px]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardRowExpand;
