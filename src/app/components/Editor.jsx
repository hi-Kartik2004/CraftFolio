"use client";
import React, { useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Editor({ showProfile }) {
  const storedValue = sessionStorage.getItem("editBlog");
  const [value, setValue] = React.useState(
    storedValue || `<!-- Write your Blog here -->`
  );

  useEffect(() => {
    sessionStorage.setItem("editBlog", value);
  }, [value]);

  return (
    <div className="container my-6 min-h-full">
      <div className="flex flex-wrap gap-6 justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          <span className=" bg-gradient-to-br from-left-gradient to-right-gradient text-transparent bg-clip-text">
            Craft
          </span>{" "}
          your blog!
        </h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex gap-4 items-center">
              <Button className="">Publish Blog</Button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                The blog once published will be public to everyone, and can be
                accessed by anyone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        className="min-h-[95vh]"
      />
    </div>
  );
}
