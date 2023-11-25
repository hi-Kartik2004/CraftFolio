"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiCross, BiLogoGmail } from "react-icons/bi";
import { BsFillCursorFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import CustomSizeSkeleton from "./CustomSizeSkeleton";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Skeleton } from "./ui/skeleton";
import PortfolioNotCreated from "@/app/utilpages/PortfolioNotCreated";
import userNotFoundData from "@/app/utilpages/UserNotFoundApi";
import { IoIosClose } from "react-icons/io";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { TbHandClick } from "react-icons/tb";

// const NavData = {
//   name: "Kartikeya Saini",
//   subtitle: "B.Tech, ISE UVCE (Batch of 2025)",
//   image: "https://avatars.githubusercontent.com/u/111000515?v=4",
//   resumeLink:
//     "https://hi-kartik2004.github.io/Portfolio/assets/pdf/Kartikeya_Resume_June_2023.pdf",
//   githubId: "hi-kartik2004",
//   linkedinId: "https://www.linkedin.com/in/kartikeya-saini-65504b240/",
// };

function Navbar({ showProfile, data, username, showLinks }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [display, setDisplay] = useState(true);
  data = data || userNotFoundData;

  useEffect(() => {
    data = data || userNotFoundData;
    setLoading(false);
  }, [showProfile]);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  if (loading) {
    return <CustomSizeSkeleton code=" " />;
  }

  return (
    <nav className="border-b-2">
      {showLinks && (
        <div
          className={`${
            display ? "" : "hidden"
          } container flex flex-col w-full justify-between p-2`}
        >
          <div className="flex justify-between items-center pb-2">
            <div className="left flex gap-4 flex-wrap">
              <Link href="/my-portfolio" className="text-sm">
                My Portfolio
              </Link>
              <Link href="/my-messages" className="text-sm">
                My Messages
              </Link>
              <Link href="/add-blog" className="text-sm">
                Add Blog
              </Link>
            </div>

            <IoIosClose
              size={25}
              onClick={() => {
                setDisplay(false);
              }}
            />
          </div>
          <Separator />
        </div>
      )}
      <div className="container flex gap-5 justify-between px-4 py-2 items-center hover: bg-none outline-none">
        <div className="relative">
          {showProfile ? (
            <>
              <ClerkLoading>
                <Skeleton className="rounded-full h-[50] w-[50]" />
              </ClerkLoading>

              <ClerkLoaded>
                <SignedIn>
                  <div className="flex gap-4 items-center flex-wrap">
                    <UserButton afterSignOutUrl="/" />
                    <Button variant="outline">
                      <Link
                        href={`/${username}`}
                        // onClick={() => {
                        //   router.reload();
                        // }}
                      >
                        /{username}
                      </Link>
                    </Button>
                  </div>
                </SignedIn>
              </ClerkLoaded>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-4 items-center cursor-pointer">
                  <img
                    src={data.image}
                    alt="logo"
                    className="h-12 w-12 rounded-full select-none"
                  />
                  <div className="flex flex-col gap-[0.15rem]">
                    <span className="text-md font-bold flex gap-2 items-center">
                      {data.NavName} <TbHandClick />{" "}
                    </span>
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
                    href={`https://github.com/${data.githubId}`}
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
          )}
        </div>

        <div className="flex gap-2 items-center">
          <Link
            href={`/${username || sessionStorage.getItem("username")}/blogs`}
          >
            Blogs
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
