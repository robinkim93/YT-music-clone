import { Playlist, TopSong } from "@/types";
import React, { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListCard from "./PlayListCard";
import { chunkArray } from "@/lib/utils";
import SongCard from "./SongCard";

interface SongListCarouselProps {
  title: string;
  subTitle?: string;
  thumbnail?: ReactNode;
  songListTop10: TopSong[];
}

const SongColumn = ({ songList = [] }: { songList: TopSong[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {songList.map((song, index) => {
        return <SongCard song={song} key={index} />;
      })}
    </div>
  );
};

const SongListCarousel = ({
  title,
  subTitle,
  thumbnail,
  songListTop10,
}: SongListCarouselProps): JSX.Element => {
  const chunkedSongListTop10 = chunkArray(songListTop10, 4) as TopSong[][];

  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {thumbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subTitle && <div className="text-neutral-300">{subTitle}</div>}
              </div>
              <div className="text-[36px] font-bold leading-[36px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>

        <CarouselContent>
          {chunkedSongListTop10?.map((songList, index) => {
            return (
              <CarouselItem key={index} className="lg:basis-1/2">
                <SongColumn songList={songList} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
