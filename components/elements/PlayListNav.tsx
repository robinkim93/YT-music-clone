"use client";
import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

const PlayListNav = ({
  playlist,
}: {
  playlist: {
    id: number;
    owner: string;
    playlistName: string;
    songList: {
      name: string;
      channelId: number;
      channel: string;
      src: string;
      imageSrc: string;
    }[];
  };
  key: number;
}) => {
  const onClickPlayButton = () => {
    return;
  };

  return (
    <li
      key={playlist.id}
      className="flex flex-row items-center justify-between mx-3 px-3 h-[56px] group whitespace-nowrap hover:bg-neutral-700 rounded-lg"
    >
      <div className="min-w-0">
        <div className="text-[14px] text-ellipsis break-all overflow-hidden">
          {playlist.playlistName}
        </div>
        <div className="text-[12px] text-neutral-500 text-ellipsis break-all overflow-hidden">
          {playlist.owner}
        </div>
      </div>
      <div>
        <IoMdPlayCircle
          size={30}
          className="hidden group-hover:block cursor-pointer"
          onClick={onClickPlayButton}
        />
      </div>
    </li>
  );
};

export default PlayListNav;