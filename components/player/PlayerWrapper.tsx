"use client";

import { usePlayerState } from "@/hooks/usePlayerState";
import React from "react";
import PlayerContent from "./PlayerContent";

const PlayerWrapper = () => {
  const { isVisiblePlayer } = usePlayerState();

  if (!isVisiblePlayer) return null;

  return (
    <div className="fixed bottom-0 w-full bg-neutral-900 h-[72px]">
      <PlayerContent />
    </div>
  );
};

export default PlayerWrapper;
