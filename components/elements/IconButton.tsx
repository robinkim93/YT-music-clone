import React, { MouseEventHandler, ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClickIcon?: MouseEventHandler;
}

// onclickIcon이 전달되지 않으면 기본 값을 빈 함수로 할당하고 클릭해도 오류가 나지 않도록 구현
const IconButton = ({ icon, onClickIcon = () => {} }: IconButtonProps) => {
  return (
    <div
      className="p-2 hover:bg-neutral-800 rounded-full cursor-pointer"
      onClick={onClickIcon}
    >
      {icon}
    </div>
  );
};

export default IconButton;
