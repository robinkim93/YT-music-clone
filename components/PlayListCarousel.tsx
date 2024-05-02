import { Playlist } from "@/types";
import React, { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListCard from "./PlayListCard";

interface PlayListCarouselProps {
  title?: string;
  subTitle?: string;
  thumbnail?: ReactNode;
  playlistArray?: Playlist[];
}

const PlayListCarousel = ({
  title,
  subTitle,
  thumbnail,
  playlistArray,
}: PlayListCarouselProps): JSX.Element => {
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
          {playlistArray?.map((playlist, index) => {
            return (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <PlayListCard playlist={playlist} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlayListCarousel;
