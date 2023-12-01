"use client";
import LandingPage from "./components/LandingPage";

export default function Home() {
  if (typeof window !== "undefined")
    sessionStorage.setItem("username", "default");

  return (
    <>
      <LandingPage signInInsteadOfResume={true} />
    </>
  );
}
