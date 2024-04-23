import Header from "@/components/Header";
import React from "react";

function layout({ children }: any) {
  return (
    <div className="w-full h-full">
      <Header>{children}</Header>
    </div>
  );
}

export default layout;
