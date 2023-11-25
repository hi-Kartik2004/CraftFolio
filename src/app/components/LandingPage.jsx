import React from "react";
import data from "@/app/data";
import Navbar from "./Navbar";
import HeroSection from "../sections/HeroSection";
import AboutMe from "../sections/AboutMe";
import { Separator } from "./ui/separator";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import FooterSection from "../sections/FooterSection";
import Foot from "./Foot";
function LandingPage() {
  return (
    <div>
      <main className="">
        <Navbar data={data} showLinks={1} />
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
    </div>
  );
}

export default LandingPage;
