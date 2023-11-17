"use client";
import userNotFoundData from "@/app/utilpages/UserNotFoundApi";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiCode, BiSolidMessageAltDetail } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import CodeSnippet from "../components/CodeSnippet";
import ContactMeForm from "../components/ContactMeForm";
import CustomSizeSkeleton from "../components/CustomSizeSkeleton";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import data from "../data";

const code = `function FooterSection() {
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
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, amount: 0.8 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
      }}
      className="container mb-10 relative"
    >
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
            <div className="flex justify-between flex-wrap gap-4">
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
                  href={\`https://github.com/${data.githubId}\`}
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
    </motion.footer>
  );
}
`;

function FooterSection({ data }) {
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);

  data = data || userNotFoundData;

  useEffect(() => {
    setLoading(false);
  }, []);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  if (loading || !data) {
    return <CustomSizeSkeleton code={code} />;
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, amount: 0.8 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
      }}
      className="container mb-10 relative"
    >
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
            <div className="flex justify-between flex-wrap gap-4">
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
    </motion.footer>
  );
}

export default FooterSection;
