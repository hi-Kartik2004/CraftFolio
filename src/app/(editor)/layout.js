import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
import Foot from "../components/Foot";
import Navbar from "../components/Navbar";

function layout({ children }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <Navbar showProfile={1} />
      </SignedIn>
      
      <div>{children}</div>
      {/* <Foot /> */}
    </ClerkProvider>
  );
}

export default layout;
