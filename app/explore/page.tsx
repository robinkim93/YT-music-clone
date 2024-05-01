import React, { ReactNode } from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import {
  getAllPlaylist,
  getSongListTop10,
  dummyGenreList,
} from "@/lib/dummyData";
import GenreListCarousel from "@/components/GenreListCarousel";

async function page() {
  const playlistArr = await getAllPlaylist();
  const songListTop10 = await getSongListTop10();

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlayListCarousel title="새 앨범 및 싱글" playlistArray={playlistArr} />
      <div className="mt-20"></div>
      <SongListCarousel title="인기곡" songListTop10={songListTop10} />
      <div className="mt-20"></div>
      <GenreListCarousel title="분위기 및 장르" genreList={dummyGenreList} />
      <div className="mt-20"></div>
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </PagePadding>
  );
}

export default page;
