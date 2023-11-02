import HeroSection from "./sections/HeroSection";
import { ModeToggle } from "./components/ModeToggle";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div className="min-h-[100vh]"></div>
    </main>
  );
}
