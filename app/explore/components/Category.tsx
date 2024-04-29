import React, { ReactNode } from "react";
import { FiMusic, FiBarChart, FiSmile } from "react-icons/fi";

interface CategoryMenuProps {
  icon: ReactNode;
  label: string;
}

const CategoryMenu = ({ icon, label }: CategoryMenuProps) => {
  return (
    <div className="flex flex-row gap-4 items-center w-full py-4 px-[24px] bg-neutral-700 cursor-pointer rounded-sm text-[20px] hover:bg-neutral-800 transition">
      {icon}
      {label}
    </div>
  );
};

const Category = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row">
      <CategoryMenu icon={<FiMusic color="#AAAAAA" />} label="최신음악" />
      <CategoryMenu icon={<FiBarChart color="#AAAAAA" />} label="차트" />
      <CategoryMenu icon={<FiSmile color="#AAAAAA" />} label="분위기 및 장르" />
    </div>
  );
};

export default Category;
