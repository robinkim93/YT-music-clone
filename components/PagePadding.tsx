import React, { ReactNode } from "react";

const PagePadding = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto px-[20px] py-2 lg:px-[70px]">{children}</div>;
};

export default PagePadding;
