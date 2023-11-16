import Editor from "@/app/components/Editor";
import { Skeleton } from "@/app/components/ui/skeleton";
import {
  ClerkLoading,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

function AddBlog() {
  return (
    <div className="">
      <SignedIn>
        <Editor showProfile={1} />
      </SignedIn>

      <SignedOut>
        <ClerkLoading>
          <div className="flex justify-center items-center min-h-[80vh]">
            <Skeleton className="w-[280px] h-[280px] rounded-lg" />
          </div>
        </ClerkLoading>
        <div className="flex justify-center items-center min-h-[80vh]">
          <SignIn afterSignInUrl="/add-blog" />
        </div>
      </SignedOut>
    </div>
  );
}

export default AddBlog;
