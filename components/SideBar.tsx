import React from "react";

const SideBar = ({ children }) => {
  return (
    <div className="flex h-full">
      <nav>
        <div>logo</div>
        <div>navigation</div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default SideBar;
