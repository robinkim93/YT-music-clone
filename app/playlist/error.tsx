"use client";

import React from "react";
import { CircleLoader } from "react-spinners";

const error = () => {
  return (
    <div className="my-20 flex flex-col justify-center items-center gap-5">
      <CircleLoader color="red" />
      <p>잠시 후 다시 시도해주세요.</p>
    </div>
  );
};

export default error;
