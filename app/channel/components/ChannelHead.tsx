"use client";

import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import { usePlayerState } from "@/hooks/usePlayerState";
import { shuffleArray } from "@/lib/utils";
import { Channel } from "@/types";
import React from "react";
import { FiMusic, FiShuffle } from "react-icons/fi";

interface ChannelHeadProps {
  channel: Channel;
}

const ChannelHead = ({ channel }: ChannelHeadProps) => {
  const { addSongList } = usePlayerState();
  const onClickShuffle = () => {
    addSongList(shuffleArray(channel.songList));
  };
  return (
    <section>
      <div className="text-[28px] font-bold">{channel.name}</div>
      <section className="lg:hidden mt-4">
        <div>
          <DarkButton
            label="구독중 4.18만"
            className="w-[230px] flex justify-center"
          />
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <WhiteButton
            icon={<FiShuffle size={16} />}
            label="셔플"
            onClick={onClickShuffle}
          />
          <WhiteButton
            icon={<FiMusic size={16} />}
            label="뮤직 스테이션"
            onClick={onClickShuffle}
          />
        </div>
      </section>
      <div className="hidden lg:flex flex-row gap-4 mt-4 text-[14px] items-center">
        <WhiteButton
          icon={<FiShuffle size={16} />}
          label="셔플"
          onClick={onClickShuffle}
        />
        <WhiteButton
          icon={<FiMusic size={16} />}
          label="뮤직 스테이션"
          onClick={onClickShuffle}
        />
        <DarkButton label="구독중 4.18만" className="justify-center" />
      </div>
    </section>
  );
};

export default ChannelHead;
