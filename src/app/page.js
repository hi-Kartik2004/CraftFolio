"use client";
import Portfolio from "./Portfolio";


export default function Home() {
  if (typeof window !== "undefined")
    sessionStorage.setItem("username", "hi-kartik2004");

  return (
    <>
      <Portfolio />
    </>
  );
}
