"use client";
import React from "react";
import Home from "../page";
import Portfolio from "../Portfolio";

function page({ params }) {
  if (!params.username) {
    sessionStorage.setItem("username", "hi-kartik2004");
  }

  if (typeof window !== "undefined")
    sessionStorage.setItem("username", params.username);

  return (
    <>
      <Portfolio />
    </>
  );
}

export default page;
