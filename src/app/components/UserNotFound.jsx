import { ClerkLoaded, ClerkLoading, SignInButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { FaSpinner } from "react-icons/fa";

function UserNotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-4 container">
      <div className="rounded-full h-[270px] w-[270px]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/599/037/original/cute-detective-panda-with-with-a-magnifying-glass-cartoon-illustration-animal-isolated-free-vector.jpg"
          alt="not found panda image"
          className="object-cover rounded-full"
        />
      </div>
      <h1 className="text-2xl text-center">
        <span className="text-red-500 text-3xl font-bold">
          Please Stop! <br />
        </span>{" "}
        Mr. Po detected that you aren't authorized to access this page!
      </h1>
      <Button>
        <ClerkLoading>
          {" "}
          <FaSpinner className="animate-spin" />{" "}
        </ClerkLoading>
        <ClerkLoaded>
          <div className="flex gap-2">
            <SignInButton /> &rarr;
          </div>
        </ClerkLoaded>
      </Button>
    </div>
  );
}

export default UserNotFound;
