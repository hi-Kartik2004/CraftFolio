import { FolderDot } from "lucide-react";
import Navbar from "./components/Navbar";
import { Separator } from "./components/ui/separator";
import AboutMe from "./sections/AboutMe";
import HeroSection from "./sections/HeroSection";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import FooterSection from "./sections/FooterSection";
import Foot from "./components/Foot";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutMe />
      {/* <AboutSection /> */}
      <Separator className="my-12" />
      <Projects />
      <Separator className="my-12" />
      <Skills />
      <Separator className="my-12" />
      <FooterSection />
      <Foot />
      {/* <div className="min-h-[100vh]"></div> */}
    </main>
  );
}
