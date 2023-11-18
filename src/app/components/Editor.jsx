"use client";
import React, { useEffect, useState } from "react";
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
import { UserButton, useUser } from "@clerk/nextjs";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useToast } from "./ui/use-toast";
import { Toaster } from "./ui/toaster";
import { Input } from "./ui/input";

export default function Editor({ showProfile }) {
  const { isLoaded, user } = useUser();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function addBlogToFirestore() {
    try {
      const collectionRef = collection(db, "blogs");
      const docSnap = await addDoc(collectionRef, {
        title: title || "No title provided",
        description: description || "No description provided",
        user: user.username,
        blog: sessionStorage.getItem("editBlog"),
        timestamp: Date.now(),
      });
      console.log("Blog added with ID: ", docSnap.id);
      toast({
        title: "Blog Added Successfully",
        description: `Your blog might take upto few minutes to go live, its id is ${docSnap.id}`,
      });
    } catch (e) {
      console.log(e);
      toast({
        title: "Adding Blog failed",
        description: `Please refer exisiting issue on our github repo with the following error: ${e}, or raise one yourself.`,
      });
    }
  }

  const storedValue = sessionStorage.getItem("editBlog");
  const [value, setValue] = React.useState(
    storedValue || `<!-- Write your Blog here -->`
  );

  useEffect(() => {
    sessionStorage.setItem("editBlog", value);
  }, [value]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="container my-6 min-h-full">
      <Toaster />
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
                <div className="flex flex-col flex-wrap gap-4 mt-4">
                  <Input
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <Input
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={addBlogToFirestore}>
                Continue
              </AlertDialogAction>
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
