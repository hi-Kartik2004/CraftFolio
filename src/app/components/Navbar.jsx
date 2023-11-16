"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import data from "../data";
import CustomSizeSkeleton from "./CustomSizeSkeleton";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const NavData = {
  name: "Kartikeya Saini",
  subtitle: "B.Tech, ISE UVCE (Batch of 2025)",
  image: "https://avatars.githubusercontent.com/u/111000515?v=4",
  resumeLink:
    "https://hi-kartik2004.github.io/Portfolio/assets/pdf/Kartikeya_Resume_June_2023.pdf",
  githubId: "hi-kartik2004",
  linkedinId: "https://www.linkedin.com/in/kartikeya-saini-65504b240/",
};

async function fetchData() {
  let username = "default";

  if (typeof window !== "undefined") {
    username = sessionStorage.getItem("username") || "default";
  }

  try {
    const userData = await import(`@/app/users/${username}`);
    return userData.default || userData;
  } catch (error) {
    console.error("Error fetching data from users folder:", error);

    const defaultData = await import(`@/app/utilpages/UserNotFound`);
    return defaultData.default || defaultData;
  }
}

function Navbar() {
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  if (loading || !data) {
    return <CustomSizeSkeleton code=" " />;
  }

  const pathname = usePathname();
  const specificRoute = "/add-blog";

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
                  href={data.linkedinUrl}
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <BsLinkedin /> Linkedin
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={`mailto:${data.email}`}
                  className="flex gap-2 items-center"
                >
                  {" "}
                  <BiLogoGmail /> Mail Me
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
