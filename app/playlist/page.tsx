import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListHead from "@/components/PlayListHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";

interface PlayListPageProps {
  searchParams: {
    list: string;
  };
}

async function Page(props: PlayListPageProps) {
  const playlist = await getPlaylistById(Number(props.searchParams.list));
  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  if (!playlist) permanentRedirect("/");

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-20"></div>
      <PlayListHead playList={playlist} />
      <div className="mt-20"></div>
      <section className="flex flex-col gap-2">
        {playlist.songList.map((song, index) => (
          <SongCardRowExpand song={song} key={index} />
        ))}
      </section>
    </PagePadding>
  );
}

export default Page;
