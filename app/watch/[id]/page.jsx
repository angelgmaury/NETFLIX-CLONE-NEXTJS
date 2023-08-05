import WatchMovie from "@/components/watchMovie/WatchMovie";
import React from "react";

function page({ params }) {
  const { id } = params;
  return <WatchMovie id={id} />;
}

export default page;
