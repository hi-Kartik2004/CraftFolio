import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import React from "react";

function layout({ children }) {
  return (
    <div className="bg-[url('/graph-paper.svg')] dark:bg-[url('/graph-paper-dark.svg')] bg-accent min-h-[100vh]">
      <div className="pt-10 pl-10">
        <Button variant="link" asChild>
          <Link href="/">&larr; Home</Link>
        </Button>
      </div>
      {children}
    </div>
  );
}

export default layout;
