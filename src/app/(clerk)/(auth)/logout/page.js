"use client";
import React from "react";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  //   const { signOut } = useClerk();
  //   const router = useRouter();
  //   sessionStorage.removeItem("user");
  //   signOut(() => router.push("/"));

  return <button>Sign out</button>;
};

export default SignOutButton;
