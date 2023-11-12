"use client";
import Link from "next/link";
import { BiCode, BiLogoGmail, BiSolidMessageAltDetail } from "react-icons/bi";
import { BsDownload, BsGithub } from "react-icons/bs";
import LeftLogos from "../components/LeftLogos";
import RightLogos from "../components/RightLogos";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";
import data from "../data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import ContactMeForm from "../components/ContactMeForm";

const code = `
<section className="container mt-12 relative">
  \${showCode ? (
    <IoIosArrowBack
      className="absolute right-2 -top-6 text-xl bg-muted rounded-sm cursor-pointer"
      onClick={handleShowCode}
    />
  ) : (
    <BiCode
      className="absolute right-2 -top-6 text-xl bg-muted rounded-sm cursor-pointer"
      onClick={handleShowCode}
    />
  )}
  \${showCode ? (
    <div className="my-4">
      {\`<CodeSnippet text={\${JSON.stringify(code)}} />\`}
    </div>
  ) : (
    <>
      <div className="headings flex justify-between mt-10 flex-col items-center">
        <h1 className="text-3xl font-bold">\${data.HeroTitle()}</h1>
      </div>
      <p className="text-muted-foreground mt-4">
        \${data.HeroSubtitle()}
      </p>
      <div className="mt-6 flex gap-4">
        <Button
          asChild
          //   className="bg-gradient-to-r from-[#ffa585] to-[#ffeda0]"
        >
          <Link
            href={\`\${data.resumeLink}\`}
            target="_blank"
            className="flex items-center gap-2"
          >
            <BsDownload /> Download Resume
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href={\`mailto:\${data.email}\`}
            className="flex gap-2 items-center"
          >
            {" "}
            <BiLogoGmail /> Contact Me
          </Link>
        </Button>
      </div>

      <div className="mt-12">
        <Button asChild variant="link" className="-ml-3">
          <Link
            href={\`https://github.com/\${data.githubId}\`}
            className=" flex gap-2 items-center"
          >
            <BsGithub className="h-5 w-5" />
            <h2 className="text-lg">My Contributions</h2>
            <span className="text-xs">[\${data.githubId}]</span>
          </Link>
        </Button>
        <div className="overflow-x-auto overflow-y-auto flex flex-grow w-full mt-4">
          <div className="scrolling-container">
            <img
              src={\`https://ghchart.rshah.org/f89b29/\${data.githubId}\`}
              alt="Github Chart"
              className="h-[120px] min-w-[700px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <LeftLogos className="mt-6" />
        <div className="mt-6">
          <RightLogos className="mt-12" />
        </div>
        <Separator orientation="horizontal" className="mt-6" />
      </div>
    </>
  )}
</section>`;

function HeroSection() {
  const [showCode, setShowCode] = useState(false);

  function handleShowCode() {
    setShowCode(!showCode);
  }
  return (
    <>
      <section className="container mt-12 relative">
        {showCode ? (
          <IoIosArrowBack
            className="absolute right-2 -top-6 text-xl bg-muted rounded-sm cursor-pointer"
            onClick={handleShowCode}
          />
        ) : (
          <BiCode
            className="absolute right-2 -top-6 text-xl bg-muted rounded-sm cursor-pointer"
            onClick={handleShowCode}
          />
        )}
        {showCode ? (
          <div className="my-4">
            <CodeSnippet text={code} />
          </div>
        ) : (
          <>
            <div className="headings flex justify-between mt-10 flex-col">
              <h1 className="text-3xl font-bold">{data.HeroTitle()}</h1>
            </div>
            <p className="text-muted-foreground mt-4">{data.HeroSubtitle()}</p>
            <div className="mt-6 flex gap-4 items-center">
              <Button
                asChild
                //   className="bg-gradient-to-r from-[#ffa585] to-[#ffeda0]"
              >
                <Link
                  href={data.resumeLink}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <BsDownload /> Download Resume
                </Link>
              </Button>

              <Sheet>
                <SheetTrigger
                  className="flex justify-between items-center w-full flex-wrap"
                  asChild
                >
                  <div className="flex justify-between">
                    <Button variant="outline">
                      {" "}
                      <p className="flex gap-2 items-center">
                        <BiSolidMessageAltDetail /> <span>Contact Me</span>
                      </p>
                    </Button>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      Message {data.FirstName + " " + data.LastName}
                    </SheetTitle>
                    <SheetDescription>
                      {data.FooterSliderTitle}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4">
                    <ContactMeForm />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="mt-12">
              <Button asChild variant="link" className="-ml-3">
                <Link
                  href={`https://github.com/${data.githubId}`}
                  className=" flex gap-2 items-center"
                >
                  <BsGithub className="h-5 w-5" />
                  <h2 className="text-lg">My Contributions</h2>
                  <span className="text-xs">[{data.githubId}]</span>
                </Link>
              </Button>
              <div className="overflow-x-auto overflow-y-auto flex flex-grow w-full mt-4">
                <div className="scrolling-container">
                  <img
                    src={`https://ghchart.rshah.org/f89b29/${data.githubId}`}
                    alt="Github Chart"
                    className="h-[120px] min-w-[700px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12">
              {/* <div className="flex gap-2 items-center mb-6">
          <GiTechnoHeart />
          <h2 className="text-lg">Technologies Known</h2>
        </div> */}

              <LeftLogos className="mt-6" />
              <div className="mt-6">
                <RightLogos className="mt-12" />
              </div>

              <Separator orientation="horizontal" className="mt-6" />
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default HeroSection;
