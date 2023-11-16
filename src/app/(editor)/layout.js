import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import Foot from "../components/Foot";

function layout({ children }) {
  return (
    <ClerkProvider>
      <div>{children}</div>
      {/* <Foot /> */}
    </ClerkProvider>
  );
}

export default layout;
