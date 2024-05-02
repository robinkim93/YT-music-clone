import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
import { FiMusic, FiShuffle } from "react-icons/fi";

interface ChannelPageProps {
  params: {
    id: string;
  };
}

async function Page(props: ChannelPageProps) {
  const channel = await getChannelById(props.params.id);
  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  if (!channel) permanentRedirect("/");

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
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
            <WhiteButton icon={<FiShuffle size={16} />} label="셔플" />
            <WhiteButton icon={<FiMusic size={16} />} label="뮤직 스테이션" />
          </div>
        </section>
        <div className="hidden lg:flex flex-row gap-4 mt-4 text-[14px] items-center">
          <WhiteButton icon={<FiShuffle size={16} />} label="셔플" />
          <WhiteButton icon={<FiMusic size={16} />} label="뮤직 스테이션" />
          <DarkButton label="구독중 4.18만" className="justify-center" />
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, index) => (
              <SongCardRowExpand song={song} key={index} />
            ))}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">앨범</div>
        <PlayListCarousel playlistArray={channel.playlistArray} />
      </section>
      <section className="mt-[80px]"></section>
    </PagePadding>
  );
}

export default Page;
