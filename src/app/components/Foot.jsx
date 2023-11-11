import React from "react";
import data from "../data";

function Foot() {
  return (
    <div className="bg-primary-foreground p-2 rounded-sm">
      <p className="text-sm text-muted-foreground">{data.FootTitle} </p>
    </div>
  );
}

export default Foot;
