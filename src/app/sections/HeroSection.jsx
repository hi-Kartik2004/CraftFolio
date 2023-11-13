"use client";
import Link from "next/link";
import { BiCode, BiLogoGmail, BiSolidMessageAltDetail } from "react-icons/bi";
import { BsDownload, BsGithub } from "react-icons/bs";
import LeftLogos from "../components/LeftLogos";
import RightLogos from "../components/RightLogos";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import { Skeleton } from "../components/ui/skeleton";
import CustomSizeSkeleton from "../components/CustomSizeSkeleton";
import SingleLogos from "../components/SingleLogos";

const code = `
function HeroSection() {
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  if (loading) {
    return <CustomSizeSkeleton code={code} />;
  }
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ y: "-10px", opacity: 100 }}
        transition={{ duration: 0.5 }}
        className="container mt-12 relative"
      >
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
            <motion.div
              initial={{ opacity: 0, y: "10px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.5 }}
              className="headings flex justify-between mt-10 flex-col"
            >
              <h1 className="text-4xl md:text-5xl font-bold">
                {data.HeroTitle()}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: "10px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mt-4"
            >
              {data.HeroSubtitle()}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 flex gap-4 items-center flex-wrap xs:flex-nowrap"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <Button asChild variant="link" className="-ml-3">
                <Link
                  href={\`https://github.com/${data.githubId}\`}
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
                    src={\`https://ghchart.rshah.org/f89b29/${data.githubId}\`}
                    alt="Github Chart"
                    className="h-[120px] min-w-[700px] md:min-w-[1100px] md:h-[175px]"
                  />
                </div>
              </div>
            </motion.div>
            <div className="mt-12 md:hidden">
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

            <div className="mt-12 md:block hidden">
              <SingleLogos direction="left" className="mt-12" />

              <div className="mt-6">
                <SingleLogos direction="right" className="mt-12" />
              </div>

              <Separator orientation="horizontal" className="mt-6" />
            </div>
          </>
        )}
      </motion.section>
    </>
  );
}`;

function HeroSection() {
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  if (loading) {
    return <CustomSizeSkeleton code={code} />;
  }
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ y: "-10px", opacity: 100 }}
        transition={{ duration: 0.5 }}
        className="container mt-12 relative"
      >
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
            <motion.div
              initial={{ opacity: 0, y: "10px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.5 }}
              className="headings flex justify-between mt-10 flex-col"
            >
              <h1 className="text-4xl md:text-5xl font-bold">
                {data.HeroTitle()}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: "10px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mt-4"
            >
              {data.HeroSubtitle()}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 flex gap-4 items-center flex-wrap xs:flex-nowrap"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "10px" }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
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
                    className="h-[120px] min-w-[700px] md:min-w-[1100px] md:h-[175px]"
                  />
                </div>
              </div>
            </motion.div>
            <div className="mt-12 md:hidden">
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

            <div className="mt-12 md:block hidden">
              <SingleLogos direction="left" className="mt-12" />

              <div className="mt-6">
                <SingleLogos direction="right" className="mt-12" />
              </div>

              <Separator orientation="horizontal" className="mt-6" />
            </div>
          </>
        )}
      </motion.section>
    </>
  );
}

export default HeroSection;
