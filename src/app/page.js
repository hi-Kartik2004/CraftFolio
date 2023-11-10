import Navbar from "./components/Navbar";
import { Separator } from "./components/ui/separator";
import AboutMe from "./sections/AboutMe";
import HeroSection from "./sections/HeroSection";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutMe />
      {/* <AboutSection /> */}
      <Separator className="my-12" />
      <Projects />
      <div className="min-h-[100vh]"></div>
    </main>
  );
}
