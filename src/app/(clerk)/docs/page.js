import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import React from "react";

function docs() {
  return (
    <div className="flex justify-center">
      <div className="relative w-full flex gap-2 max-w-[1500px]">
        <aside className="flex flex-col  gap-2 max-w-[200px] w-full p-4 h-[100vh] overflow-auto sticky left-0 top-0 border-r-2 border-muted ">
          <h2 className="text-lg underline underline-offset-8 mb-4">
            Json Fields
          </h2>
          <Button variant="link" className="p-0 m-0 justify-start">
            <Link href="/docs/navbar">Navbar Fields</Link>
          </Button>
        </aside>
        <main className="max-w-[1300px] w-full p-4 h-[200vh]">
          <h1 className="font-semibold text-5xl leading-normal">
            Ohh! This page is under construction!
          </h1>
          <p className="text-muted-foreground">
            {" "}
            This page is still under development. Please check back later for
            the documentation.
          </p>
        </main>
      </div>
    </div>
  );
}

export default docs;
