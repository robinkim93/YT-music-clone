import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import UserIcon from "@/components/UserIcon";
import { dummyPlaylistArray } from "@/lib/dummyData";

const Page = async () => {
  const playlistArr = [...dummyPlaylistArray];

  return (
    <PagePadding>
      <section className="min-h-[600px]">
        <div className="mt-9">
          <Category />
        </div>
        <div className="mt-12">
          <PlayListCarousel
            title="다시 듣기"
            subTitle="로빈"
            thumbnail={
              <div>
                <UserIcon size={"lg"} />
              </div>
            }
            playlistArray={playlistArr}
          />
        </div>
      </section>
    </PagePadding>
  );
};

export default Page;
