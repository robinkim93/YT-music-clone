import HeaderBgChanger from "@/components/HeaderBgChanger";
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
    <div>
      <HeaderBgChanger imageSrc={imageSrc} />
      playlist/[{props.searchParams.list}]
    </div>
  );
}

export default Page;
