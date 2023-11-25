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
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useToast } from "./ui/use-toast";
import { Toaster } from "./ui/toaster";
import { Input } from "./ui/input";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

export const dynamic = "force-dynamic";

export default function Editor({
  showProfile,
  gradient,
  sectionTitle,
  buttonText,
  buttonType,
  blogId,
  blogCode,
  blogTitle,
  blogDescription,
}) {
  const { isLoaded, user } = useUser();
  const { toast } = useToast();
  const [title, setTitle] = useState(blogTitle || "");
  const [description, setDescription] = useState(blogDescription || "");
  const [loading, setLoading] = useState(true);

  async function addBlogToFirestore() {
    try {
      const collectionRef = collection(db, "blogs");
      const docSnap = await addDoc(collectionRef, {
        title: title || "No title provided",
        description: description || "No description provided",
        user: user.username,
        blog: sessionStorage.getItem("addBlog"),
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

  async function setBlogInFirestore() {
    const blogRef = doc(db, "blogs", blogId);
    await updateDoc(blogRef, {
      title: title || "No title provided",
      description: description || "No description provided",
      blog: sessionStorage.getItem("editBlog"),
      timestamp: Date.now(),
    });
    toast({
      title: "Blog Edited Successfully",
      description: `Your blog might take upto few minutes to go live, its id is ${blogId}`,
    });
  }

  useEffect(() => {
    !sessionStorage.getItem("addBlog") && sessionStorage.setItem("addBlog", "");
    blogCode && sessionStorage.setItem("editBlog", blogCode);
  }, []);

  let storedValue = "<!-- Write your blog below -->";
  if (typeof window !== "undefined") {
    storedValue = blogCode
      ? sessionStorage.getItem("editBlog")
      : sessionStorage.getItem("addBlog")
      ? sessionStorage.getItem("addBlog")
      : "";
  }

  const [value, setValue] = React.useState(
    gradient === "Edit"
      ? sessionStorage.getItem("editBlog")
      : storedValue || "<!-- Write your blog below -->"
  );

  useEffect(() => {
    gradient === "Edit"
      ? sessionStorage.setItem("editBlog", value)
      : sessionStorage.setItem("addBlog", value);
  }, [value]);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (!isLoaded) {
    return null;
  }

  if (loading) {
    return (
      <div className="container">
        <Skeleton className="w-full h-100px my-2" />
        <Skeleton className="w-full h-[80vh]" />
      </div>
    );
  }

  return (
    <div className="container my-6 min-h-full">
      <Toaster />
      <div className="flex flex-wrap gap-6 justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          <span className=" bg-gradient-to-br from-left-gradient to-right-gradient text-transparent bg-clip-text">
            {gradient || "Craft"}
          </span>{" "}
          {sectionTitle || "your blog"}
        </h1>
        <div className="flex gap-4 flex-wrap">
          <Button variant="outline">
            <Link href="/manage-blogs">Manage Blogs</Link>
          </Button>
          {value.length > 75 ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="flex gap-4 items-center">
                  <Button>{buttonText || "Publish Blog"} </Button>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    The blog once published will be public to everyone, and can
                    be accessed by anyone.
                    <div className="flex flex-col flex-wrap gap-4 mt-4">
                      <Input
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />

                      <Input
                        placeholder="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  {buttonType == "edit" ? (
                    <AlertDialogAction
                      onClick={setBlogInFirestore}
                      disabled={title.length < 10}
                    >
                      Publish Edited blog
                    </AlertDialogAction>
                  ) : (
                    <AlertDialogAction
                      onClick={addBlogToFirestore}
                      disabled={title.length < 10}
                    >
                      Continue
                    </AlertDialogAction>
                  )}
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <Button variant="secondary">Very little content</Button>
          )}
        </div>
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
