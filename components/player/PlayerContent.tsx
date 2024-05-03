import React, { useEffect } from "react";
import { Slider as PlayerSlider } from "@/components/ui/playerSlider";
import { useAudio } from "react-use";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import { RiPlayFill } from "react-icons/ri";
import { usePlayerState } from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";

const PlayerContent = () => {
  const { activeSong, playPrev, prevPlayerQueue, playNext, nextPlayerQueue } =
    usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src || "",
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const onClickPrevButton = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }

    if (prevPlayerQueue.length === 0) return;
    playPrev();
  };
  const onClickNextButton = () => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  };
  const onClickPauseButton = () => {
    controls.pause();
  };
  const onClickStartButton = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };

  useEffect(() => {
    const musicRef = ref.current;

    musicRef?.addEventListener("ended", playNext);

    return () => {
      musicRef?.removeEventListener("ended", playNext);
    };
  }, [ref, playNext]);

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={([value]) => controls.seek(value)}
          max={state.duration}
        />
      </div>
      {audio}
      <section className="flex flex-row h-full w-full items-center justify-between px-5 lg:px-6">
        <div className="flex flex-row items-center h-full gap-1 lg:gap-5">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickPrevButton}
          />
          {isLoading ? (
            <ClipLoader color="#FFF" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className="cursor-pointer"
              onClick={onClickPauseButton}
            />
          ) : (
            <RiPlayFill
              size={40}
              className="cursor-pointer"
              onClick={onClickStartButton}
            />
          )}
          <IoPlaySkipForwardSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickNextButton}
          />
        </div>
        <article>
          <div className="flex flex-row gap-4 items-center">
            <div className="relative w-[40px] h-[40px]">
              <Image
                fill
                className="object-cover"
                src={activeSong?.imageSrc || ""}
                alt="img"
              />
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.channel}</div>
              <div className="text-neutral-500 text-[14px]">
                {activeSong?.name}
              </div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-3">
          <div className="hidden lg:flex flex-row gap-3">
            <IoVolumeHighOutline size={24} className="cursor-pointer" />
            <IoShuffle size={24} className="cursor-pointer" />
            <RxLoop size={24} className="cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerContent;
