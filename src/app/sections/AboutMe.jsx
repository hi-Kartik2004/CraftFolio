"use client";
import React, { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

import SectionHeading from "../components/SectionHeading";
import { BiCode } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";

const code = ` const MockCode = { code: "import something\ndo something\nNext Line here" };
const [showCode, setShowCode] = useState(false);

function handleShowCode() {
  setShowCode(!showCode);
}
return (
  <section className="container mt-12 relative">
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
      title="About"
      gradientText="Me"
      description="lorem feifnien ienirg inerign ierg"
      badge="proud Geek_"
    />

    {showCode ? (
      <div className="my-4">
        <CodeSnippet text={code} />
      </div>
    ) : (
      <div className="mt-16 flex justify-center flex-col items-center">
        <div className="flex max-w-[550px] w-full relative justify-center">
          <img
            src="vercel.svg"
            alt="dp"
            className="w-[200px] overflow-hidden h-[200px] bg-red-500 rounded-md -rotate-12 absolute left-1"
          />
          <img
            src="vercel.svg"
            alt="dp"
            className="w-[220px] overflow-hidden h-[220px] bg-blue-500 rounded-md rotate-0 absolute m-auto left-0 right-0 z-10 -top-5"
          />
          <img
            src="vercel.svg"
            alt="dp"
            className="w-[200px] overflow-hidden h-[200px] bg-green-500 rounded-md rotate-12 absolute right-1"
          />
        </div>

        <div className="mt-[250px]">
          <div className="text-muted-foreground">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              debitis minus, necessitatibus nostrum hic, consequuntur
              exercitationem autem dolorem,{" "}
              <span className="text-primary">
                {" "}
                cum quisquam sed odit alias dolore{" "}
              </span>
            </p>
            <div className="my-4">
              <CodeSnippet text={MockCode.code} />
            </div>
            <p>
              <span className="text-primary">
                {" "}
                tempore ipsa debitis voluptate! cum quisquam sed odit alias
                dolore{" "}
              </span>{" "}
              suscipit a! Eligendi ducimus, sit tempora delectus sint vero,
              quasi dolorem minima, ex illo neque pariatur nostrum tempore
              sequi! Ullam ut quas vero. Illo iusto dignissimos eveniet, eum
              provident natus deleniti voluptate ipsum{" "}
              <span className="text-primary">
                {" "}
                vel quidem suscipit vitae?
              </span>
            </p>
          </div>
        </div>
      </div>
    )}
  </section>`;

function AboutMe() {
  const MockCode = { code: "import something\ndo something\nNext Line here" };
  const [showCode, setShowCode] = useState(false);

  function handleShowCode() {
    setShowCode(!showCode);
  }
  return (
    <section className="container mt-12 relative">
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
        title="About"
        gradientText="Me"
        description="lorem feifnien ienirg inerign ierg"
        badge="proud Geek_"
      />

      {showCode ? (
        <div className="my-4">
          <CodeSnippet text={code} />
        </div>
      ) : (
        <div className="mt-16 flex justify-center flex-col items-center">
          <div className="flex max-w-[550px] w-full relative justify-center">
            <img
              src="vercel.svg"
              alt="dp"
              className="w-[200px] overflow-hidden h-[200px] bg-red-500 rounded-md -rotate-12 absolute left-1"
            />
            <img
              src="vercel.svg"
              alt="dp"
              className="w-[220px] overflow-hidden h-[220px] bg-blue-500 rounded-md rotate-0 absolute m-auto left-0 right-0 z-10 -top-5"
            />
            <img
              src="vercel.svg"
              alt="dp"
              className="w-[200px] overflow-hidden h-[200px] bg-green-500 rounded-md rotate-12 absolute right-1"
            />
          </div>

          <div className="mt-[250px]">
            <div className="text-muted-foreground">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                debitis minus, necessitatibus nostrum hic, consequuntur
                exercitationem autem dolorem,{" "}
                <span className="text-primary">
                  {" "}
                  cum quisquam sed odit alias dolore{" "}
                </span>
              </p>
              <div className="my-4">
                <CodeSnippet text={MockCode.code} />
              </div>
              <p>
                <span className="text-primary">
                  {" "}
                  tempore ipsa debitis voluptate! cum quisquam sed odit alias
                  dolore{" "}
                </span>{" "}
                suscipit a! Eligendi ducimus, sit tempora delectus sint vero,
                quasi dolorem minima, ex illo neque pariatur nostrum tempore
                sequi! Ullam ut quas vero. Illo iusto dignissimos eveniet, eum
                provident natus deleniti voluptate ipsum{" "}
                <span className="text-primary">
                  {" "}
                  vel quidem suscipit vitae?
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutMe;
