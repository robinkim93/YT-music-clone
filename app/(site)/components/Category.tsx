"use client";

import { useUIState } from "@/hooks/useUiState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";
import React from "react";

const Category = () => {
  const { homeCategory, setHeaderImgSrc, setHomeCategory } = useUIState();
  const onCategoryClick = (item: { label: string; src: string }) => {
    if (homeCategory === item.label) {
      setHeaderImgSrc("");
      setHomeCategory("");
    } else {
      setHeaderImgSrc(item.src);
      setHomeCategory(item.label);
    }
  };

  return (
    <ul className="flex flex-row gap-4 w-full overflow-x-auto">
      {homeCategoryList.map((item) => {
        return (
          <li
            onClick={() => onCategoryClick(item)}
            key={item.label}
            className={cn(
              "h-[30px] min-w-fit flex justify-center items-center bg-[rgba(144,144,144,0.3)] px-2 border border-transparent rounded-lg hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
              homeCategory === item.label &&
                "bg-white text-black hover:bg-white"
            )}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
