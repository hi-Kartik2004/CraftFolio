"use client";
import React, { useState } from "react";
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

const code = `const [showCode, setShowCode] = useState(false);
showCode ? (
  <CodeSnippet text=""/>
) : (
  <footer className="container mb-10 relative">
    <BiCode className="absolute right-2 top-0 text-xl bg-muted rounded-sm" />
    <SectionHeading
      badge="Thanks from"
      title="Kartikeya "
      gradientText="Saini"
      description="I am available on almost every social media. You can message me, I will reply within 24 hours."
    />
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
          <SheetTitle>Message Kartikeya Saini</SheetTitle>
          <SheetDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            error perspiciatis repudiandae.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <ContactMeForm />
        </div>
      </SheetContent>
    </Sheet>
  </footer>`;

function FooterSection() {
  const [showCode, setShowCode] = useState(false);

  function handleShowCode() {
    setShowCode(!showCode);
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
        badge="Thanks from"
        title="Kartikeya "
        gradientText="Saini"
        description="I am available on almost every social media. You can message me, I will reply within 24 hours."
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
              <SheetTitle>Message Kartikeya Saini</SheetTitle>
              <SheetDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                error perspiciatis repudiandae.
              </SheetDescription>
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
