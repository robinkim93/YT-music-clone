import React from "react";

function Page(props: any) {
  return <div>playlist/[{props.searchParams.list}]</div>;
}

export default Page;
