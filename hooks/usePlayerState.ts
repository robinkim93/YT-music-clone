import { dummyAllSongList } from "@/lib/dummyData";
import { Song } from "@/types";
import { create } from "zustand";

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
  activeSong?: Song | null;
  prevPlayerQueue: Song[];
  nextPlayerQueue: Song[];
  addSongList: (songList: Song[]) => void;
  playNext: () => void;
  playPrev: () => void;
}

export const usePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: false,
  setIsVisiblePlayer: (isVisiblePlayer) => set({ isVisiblePlayer }),
  activeSong: null,
  prevPlayerQueue: [],
  nextPlayerQueue: [],
  addSongList: (songList: Song[]) =>
    set((prev) => {
      const prevSong = prev.activeSong;
      const cloneSongList = [...songList];
      const currentSong = cloneSongList.splice(0, 1)?.[0];

      return {
        activeSong: currentSong,
        prevPlayerQueue: prevSong
          ? [prevSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue,
        nextPlayerQueue: [...cloneSongList],
        isVisiblePlayer: true,
      };
    }),
  playNext: () =>
    set((prev) => {
      const currentSong = prev.activeSong;
      const nextSrc = prev.nextPlayerQueue.splice(0, 1)?.[0];

      return {
        activeSong: nextSrc,
        nextPlayerQueue: prev.nextPlayerQueue,
        prevPlayerQueue: currentSong
          ? [currentSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue,
      };
    }),
  playPrev: () =>
    set((prev) => {
      const currentSong = prev.activeSong;
      const preSrc = prev.prevPlayerQueue.splice(0, 1)?.[0];

      return {
        activeSong: preSrc,
        nextPlayerQueue: currentSong
          ? [currentSong, ...prev.nextPlayerQueue]
          : prev.nextPlayerQueue,
        prevPlayerQueue: prev.prevPlayerQueue,
      };
    }),
}));