"use client";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import data from "../data";

const NavData = {
  name: "Kartikeya Saini",
  subtitle: "B.Tech, ISE UVCE (Batch of 2025)",
  image: "https://avatars.githubusercontent.com/u/111000515?v=4",
  resumeLink:
    "https://hi-kartik2004.github.io/Portfolio/assets/pdf/Kartikeya_Resume_June_2023.pdf",
  githubId: "hi-kartik2004",
  linkedinId: "https://www.linkedin.com/in/kartikeya-saini-65504b240/",
};

function Navbar() {
  return (
    <nav className="border-b-2">
      <div className="container flex gap-5 justify-between px-4 py-2 items-center hover: bg-none outline-none">
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex gap-4 items-center cursor-pointer">
                <img
                  src={data.image}
                  alt="logo"
                  className="h-12 w-12 rounded-full select-none"
                />
                <div className="flex flex-col gap-[0.15rem]">
                  <span className="text-md font-bold">{data.NavName}</span>
                  <p className="text-[0.7rem] text-muted-foreground">
                    {data.NavSubtitle}
                  </p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="ml-2 mt-1">
              <DropdownMenuItem>
                <Link
                  href={data.resumeLink}
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  {" "}
                  <FiDownload />
                  Resume
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`https://github.com/${NavData.githubId}`}
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <BsGithub /> Github
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={data.linkedinId}
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <BsLinkedin /> Linkedin
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
