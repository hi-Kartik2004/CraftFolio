"use client";
import React from "react";
import Home from "../page";

function page({ params }) {
  if (!params.username) {
    sessionStorage.setItem("username", "default");
  }

  if (typeof window !== "undefined")
    sessionStorage.setItem("username", params.username);

  return (
    <>
      <Home />
    </>
  );
}

export default page;
