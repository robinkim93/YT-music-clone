import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "./components/Category";
import PlayListCard from "@/components/PlayListCard";
import { getRandomElementFromArray } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";

function page() {
  const playlist = getRandomElementFromArray(dummyPlaylistArray);

  return (
    <PagePadding>
      <div className="mt-9"></div>
      <Category />
      <div className="mt-12"></div>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
        <PlayListCard playlist={playlist} />
      </div>
    </PagePadding>
  );
}

export default page;
