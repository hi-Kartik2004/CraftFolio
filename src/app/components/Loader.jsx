import React from "react";
import { Skeleton } from "./ui/skeleton";

function Loader() {
  return (
    <div className="container">
      <Skeleton className="w-full h-[100px] mt-4" />
      <Skeleton className="w-full h-[500px] mt-6" />
    </div>
  );
}

export default Loader;
