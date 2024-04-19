"use client";

import React from "react";
import { ClipLoader } from "react-spinners";

function LoadingBar() {
  return (
    <div className="absolute top-1/2 left-1/2">
      <ClipLoader color="gray" />
    </div>
  );
}

export default LoadingBar;
