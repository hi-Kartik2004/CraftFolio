"use client";
import Navbar from "./components/Navbar";
import { Separator } from "./components/ui/separator";
import AboutMe from "./sections/AboutMe";
import HeroSection from "./sections/HeroSection";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import FooterSection from "./sections/FooterSection";
import Foot from "./components/Foot";
import { useEffect, useState } from "react";
import { Skeleton } from "./components/ui/skeleton";

export default function Portfolio({ data }) {
  const [received, setReceived] = useState(true);
  useEffect(() => {
    setReceived(false);
  }, [data]);

  if (!data) return null;

  return (
    <main className="">
      <Navbar data={data} />
      <HeroSection data={data} />
      <AboutMe data={data} />
      {/* <AboutSection /> */}
      <Separator className="my-12" />
      <Projects data={data} />
      <Separator className="my-12" />
      <Skills data={data} />
      <Separator className="my-12" />
      <FooterSection data={data} />
      <Foot data={data} />
      {/* <div className="min-h-[100vh]"></div> */}
    </main>
  );
}
