import React from "react";

let metadata = "";
function layout({ children, params }) {
  metadata = {
    title: `${params.username || "User not found"}'s Portfolio`,
    description: "Created by Kartikeya Saini",
  };
  return <div>{children}</div>;
}

export default layout;
export { metadata };
