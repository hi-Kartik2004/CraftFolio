"use client";
import React, { useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

import SectionHeading from "../components/SectionHeading";
import { BiCode } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import data from "../data";

const code = ` <section className="container mt-12 relative">
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
  title={data.AboutTitle}
  gradientText={data.AboutTitleGradient}
  description={data.AboutDescription}
  badge={data.AboutBadge}
/>

{showCode ? (
  <div className="my-4">
    <CodeSnippet text={code} />
  </div>
) : (
  <div className="mt-16 flex justify-center flex-col items-center">
    <div className="flex max-w-[550px] w-full relative justify-center">
      <img
        src={data.AboutImageLeft}
        alt="dp"
        className="w-[200px] overflow-hidden h-[200px] bg-red-500 rounded-md -rotate-12 absolute left-1"
      />
      <img
        src={data.AboutImageCenter}
        alt="dp"
        className="w-[220px] overflow-hidden h-[220px] bg-blue-500 rounded-md rotate-0 absolute m-auto left-0 right-0 z-10 -top-5"
      />
      <img
        src={data.AboutImageRight}
        alt="dp"
        className="w-[200px] overflow-hidden h-[200px] bg-green-500 rounded-md rotate-12 absolute right-1"
      />
    </div>

    <div className="mt-[250px]">
      <div className="text-muted-foreground">
        {data.AboutMainDescription()}
        <div className="my-4">
          <CodeSnippet text={data.AboutMockCode} />
        </div>
        <p>{data.AboutOtherDescription()}</p>
      </div>
    </div>
  </div>
)}
</section>`;

function AboutMe() {
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
        title={data.AboutTitle}
        gradientText={data.AboutTitleGradient}
        description={data.AboutDescription}
        badge={data.AboutBadge}
      />

      {showCode ? (
        <div className="my-4">
          <CodeSnippet text={code} />
        </div>
      ) : (
        <div className="mt-16 flex justify-center flex-col items-center">
          <div className="flex max-w-[550px] w-full relative justify-center">
            <img
              src={data.AboutImageLeft}
              alt="dp"
              className="w-[200px] overflow-hidden h-[200px] bg-red-500 rounded-md -rotate-12 absolute left-1"
            />
            <img
              src={data.AboutImageCenter}
              alt="dp"
              className="sm:w-[220px] overflow-hidden sm:h-[220px] w-[205px] h-[205px] bg-blue-500 rounded-md rotate-0 absolute m-auto left-0 right-0 z-10 -top-3"
            />
            <img
              src={data.AboutImageRight}
              alt="dp"
              className="w-[200px] overflow-hidden h-[200px] bg-green-500 rounded-md rotate-12 absolute right-1"
            />
          </div>

          <div className="mt-[250px]">
            <div className="text-muted-foreground">
              {data.AboutMainDescription()}
              <div className="my-4">
                <CodeSnippet text={data.AboutMockCode} />
              </div>
              <p>{data.AboutOtherDescription()}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutMe;
