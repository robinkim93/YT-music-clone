"use client";

import { getRandomElementFromArray } from "@/lib/utils";
import { Playlist } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";

interface PlayListCardProps {
  playlist: Playlist;
}

const PlayListCard = ({ playlist }: PlayListCardProps) => {
  const { id, owner, playlistName, songList } = playlist;

  const { push } = useRouter();

  const songListLength = songList.length;
  const imageSrc = getRandomElementFromArray(songList).imageSrc;

  const onClickThumbnail = () => {
    push(`/playlist?list=${id}`);
  };

  return (
    <article className="mt-1">
      <section
        className="relative h-[136px] cursor-pointer group"
        onClick={onClickThumbnail}
      >
        <Image src={imageSrc} fill alt="thumbnail" className="object-cover " />
        <div className="relative block group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
          <div className="absolute top-4 right-4">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div className="absolute bottom-4 right-4">
            <FiPlay size={20} />
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
