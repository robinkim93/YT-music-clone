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
import GenreCard from "./GenreCard";

interface GenreListCarouselProps {
  title: string;
  subTitle?: string;
  thumbnail?: ReactNode;
  genreList: string[];
}

const GenreColumn = ({ genrelist = [] }: { genrelist: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {genrelist.map((genre, index) => {
        return <GenreCard genre={genre} key={index} />;
      })}
    </div>
  );
};

const GenreListCarousel = ({
  title,
  subTitle,
  thumbnail,
  genreList,
}: GenreListCarouselProps): JSX.Element => {
  const chunkedGenreList = chunkArray(genreList, 4) as string[][];

  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-4">
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
          {chunkedGenreList?.map((genreList, index) => {
            return (
              <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
                <GenreColumn genrelist={genreList} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenreListCarousel;
