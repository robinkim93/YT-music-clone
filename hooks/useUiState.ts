import { StoreApi, UseBoundStore, create } from "zustand";

export const useUIState: UseBoundStore<
  StoreApi<{
    homeCategory: string;
    headerImgSrc: string;
    setHomeCategory: (category: string) => void;
    setHeaderImgSrc: (imgSrc: string) => void;
  }>
> = create((set) => ({
  homeCategory: "",
  headerImgSrc:
    "https://images.unsplash.com/photo-1713457708994-32f356465474?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  setHomeCategory: (category: string) => set({ homeCategory: category }),
  setHeaderImgSrc: (imgSrc: string) => set({ headerImgSrc: imgSrc }),
}));
