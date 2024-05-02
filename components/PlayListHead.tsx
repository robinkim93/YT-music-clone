"use client";

import { getRandomElementFromArray } from "@/lib/utils";
import { Playlist } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "./elements/IconButton";
import WhiteButton from "./elements/WhiteButton";
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";
import DarkButton from "./elements/DarkButton";

interface PlayListHeadProps {
  playList: Playlist;
}

const PlayListHead = ({ playList }: PlayListHeadProps) => {
  const { id, owner, songList, playlistName } = playList;

  const randomImageSrc = getRandomElementFromArray(songList).imageSrc;

  return (
    <section>
      <div className="flex flex-row gap-[50px]">
        <div className="relative w-[160px] h-[160px] lg:w-[240px] lg:h-[240px]">
          <Image fill alt="img" src={randomImageSrc} />
        </div>
        <article className="flex flex-col gap-4 justify-center">
          <div className="text-bold text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범 • ${owner} • 2019`}</div>
            <div>{`${songList.length}곡 • 15분`}</div>
          </div>
          <ul className=" hidden lg:flex flex-row gap-4 mt-4">
            <WhiteButton
              icon={<FiPlay size={20} />}
              label="재생"
              className="w-[85px]"
            />
            <DarkButton
              icon={<FiFolderPlus size={20} />}
              label="보관함에 저장"
              className="w-[140px]"
            />
            <IconButton icon={<FiMoreVertical size={20} />} />
          </ul>
        </article>
      </div>
      <ul className="flex lg:hidden flex-row gap-4 mt-4">
        <WhiteButton
          icon={<FiPlay size={20} />}
          label="재생"
          className="w-[85px]"
        />
        <DarkButton
          icon={<FiFolderPlus size={20} />}
          label="보관함에 저장"
          className="w-[140px]"
        />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </ul>
    </section>
  );
};

export default PlayListHead;
