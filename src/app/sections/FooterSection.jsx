"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Form, FormControl } from "../components/ui/form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import ContactMeSlider from "../components/ContactMeForm";
import { BiCode, BiSolidMessageAltDetail } from "react-icons/bi";
import ContactMeForm from "../components/ContactMeForm";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import CodeSnippet from "../components/CodeSnippet";
import { IoIosArrowBack } from "react-icons/io";
import data from "../data";
import CustomSizeSkeleton from "../components/CustomSizeSkeleton";

const code = ` <footer className="container mb-10 relative">
{showCode ? (
  <IoIosArrowBack
    className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
    onClick={handleShowCode}
  />
) : (
  <BiCode
    className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
    onClick={handleShowCode}
  />
)}
<SectionHeading
  badge={data.FooterBadge}
  title={data.FirstName + " "}
  gradientText={data.LastName}
  description={data.FooterDescription}
/>
{showCode ? (
  <div className="my-4">
    <CodeSnippet text={code} />
  </div>
) : (
  <Sheet>
    <SheetTrigger
      className="mt-4 flex justify-between items-center w-full flex-wrap"
      asChild
    >
      <div className="flex justify-between">
        <Button>
          {" "}
          <p className="flex gap-2 items-center">
            <BiSolidMessageAltDetail /> <span>Contact Me</span>
          </p>
        </Button>
        <div className="flex gap-4 text-muted-foreground">
          <Link href="/">
            <BsLinkedin className="text-2xl hover:text-primary duration-500" />
          </Link>
          <Link href="/">
            <BsGithub className="text-2xl hover:text-primary duration-500" />
          </Link>
          <Link href="/">
            <BsWhatsapp className="text-2xl hover:text-primary duration-500" />
          </Link>
        </div>
      </div>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
          Message {data.FirstName + " " + data.LastName}
        </SheetTitle>
        <SheetDescription>{data.FooterSliderTitle}</SheetDescription>
      </SheetHeader>
      <div className="mt-4">
        <ContactMeForm />
      </div>
    </SheetContent>
  </Sheet>
)}
</footer>`;

function FooterSection() {
  const [showCode, setShowCode] = useState(false);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <CustomSizeSkeleton code={code} />;
  }

  return (
    <footer className="container mb-10 relative">
      {showCode ? (
        <IoIosArrowBack
          className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
          onClick={handleShowCode}
        />
      ) : (
        <BiCode
          className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
          onClick={handleShowCode}
        />
      )}
      <SectionHeading
        badge={data.FooterBadge}
        title={data.FirstName + " "}
        gradientText={data.LastName}
        description={data.FooterDescription}
      />
      {showCode ? (
        <div className="my-4">
          <CodeSnippet text={code} />
        </div>
      ) : (
        <Sheet>
          <SheetTrigger
            className="mt-4 flex justify-between items-center w-full flex-wrap"
            asChild
          >
            <div className="flex justify-between">
              <Button>
                {" "}
                <p className="flex gap-2 items-center">
                  <BiSolidMessageAltDetail /> <span>Contact Me</span>
                </p>
              </Button>
              <div className="flex gap-4 text-muted-foreground">
                <Link href={data.linkedinUrl} target="_blank">
                  <BsLinkedin className="text-2xl hover:text-primary duration-500" />
                </Link>
                <Link
                  href={`https://github.com/${data.githubId}`}
                  target="_blank"
                >
                  <BsGithub className="text-2xl hover:text-primary duration-500" />
                </Link>
                <Link href={data.WhatsAppLink} target="_blank">
                  <BsWhatsapp className="text-2xl hover:text-primary duration-500" />
                </Link>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                Message {data.FirstName + " " + data.LastName}
              </SheetTitle>
              <SheetDescription>{data.FooterSliderTitle}</SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <ContactMeForm />
            </div>
          </SheetContent>
        </Sheet>
      )}
    </footer>
  );
}

export default FooterSection;
