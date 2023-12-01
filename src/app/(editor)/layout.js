import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  currentUser,
} from "@clerk/nextjs";
import React from "react";
import Foot from "../components/Foot";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { BiArrowBack } from "react-icons/bi";
import AfterSignInMenu from "../components/AfterSignInMenu";

let metadata = "";

async function layout({ children }) {
  const user = (await currentUser()) || "No user";
  const username = user.username || "No username";
  metadata = {
    title: `${user.username || "User not found"}'s Portfolio`,
    description: "Created by Kartikeya Saini",
  };
  return (
    <ClerkProvider>
      <SignedIn>
        {/* <Navbar showProfile={1} username={username} className="my-4" /> */}
        <AfterSignInMenu username={username} />
      </SignedIn>

      <div>{children}</div>
    </ClerkProvider>
  );
}

export default layout;
export { metadata };
