"use client";
import React from "react";
import CodeSnippet from "../components/CodeSnippet";
import { Badge } from "../components/ui/badge";

function AboutMe() {
  const Code = { code: "import something\ndo something\nNext Line here" };
  return (
    <section className="container mt-12">
      <div>
        <Badge className="my-2">Proud Geek_</Badge>
        <h1 className="font-bold text-2xl mb-2">About <span className="bg-gradient-to-b from-left-gradient to-right-gradient bg-clip-text text-transparent">Me :)</span></h1>
        <p className=" text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          reprehenderit. Aut, quae.
        </p>
      </div>

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
              <CodeSnippet text={Code.code} />
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
              <span className="text-primary"> vel quidem suscipit vitae?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
