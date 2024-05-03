"use client";

import { getRandomElementFromArray } from "@/lib/utils";
import { Playlist } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { MouseEvent } from "react";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { usePlayerState } from "@/hooks/usePlayerState";

interface PlayListCardProps {
  playlist: any;
}

const PlayListCard = ({ playlist }: PlayListCardProps) => {
  const { id, owner = "", playlistName = "", songList = [] } = playlist;

  const { addSongList } = usePlayerState();
  const { push } = useRouter();

  const songListLength = songList?.length;
  const imageSrc = getRandomElementFromArray(songList)?.imageSrc;

  const onClickThumbnail = () => {
    push(`/playlist?list=${id}`);
  };

  const onClickPlayButton = (e: MouseEvent) => {
    e.stopPropagation();
    addSongList(songList);
  };

  return (
    <article className="mt-1 ">
      <section
        className="relative h-[136px] cursor-pointer group"
        onClick={onClickThumbnail}
      >
        <Image
          src={imageSrc}
          fill
          alt="thumbnail"
          className="object-cover rounded-md"
        />
        <div className="relative hidden group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
          <div className="absolute top-4 right-4 z-10">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={onClickPlayButton}
            className="z-10 absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full pl-1 hover:bg-[rgba(0,0,0,0.9)]"
          >
            <FiPlay size={22} color="red" />
          </div>
        </div>
      </section>
      <section>
        <div className="mt-2">{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLength} `}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
