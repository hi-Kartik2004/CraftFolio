import React from "react";
import { Skeleton } from "./ui/skeleton";
import CodeSnippet from "./CodeSnippet";

function CustomSizeSkeleton({ code }) {
  return (
    <Skeleton className="m-2 h-full">
      <div className="opacity-10 max-h-[600px] overflow-hidden">
        <CodeSnippet text={code} />
      </div>
    </Skeleton>
  );
}

export default CustomSizeSkeleton;
