"use client";
import SectionHeading from "@/app/components/SectionHeading";
import React, { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import EditPortfolio from "@/app/components/EditPortfolio";
import { Skeleton } from "@/app/components/ui/skeleton";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import {
  ClerkLoading,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import UserNotFound from "@/app/components/UserNotFound";

function EditPortfolioPage() {
  const [loading, setLoading] = useState(true);
  const { isLoaded, user } = useUser();

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container flex flex-col items-center justify-center gap-4">
        <Skeleton className="w-full h-[20vh] m-4" />
        <Skeleton className="w-full h-[60vh] m-2" />
      </div>
    );
  }

  if (!isLoaded) {
    return;
  }

  const router = useRouter();

  return (
    <section className="container">
      <SignedOut>
        <UserNotFound />
      </SignedOut>
      <SignedIn>
        {user && (
          <Navbar showProfile={1} username={user.username} className="my-4" />
        )}
        <div>
          <SectionHeading
            title="Edit your"
            badge="Your area"
            gradientText="Portfolio"
          />
          <p className="text-muted-foreground">
            <Button variant="link" className="p-0 pr-2">
              How to make your portfolio?
            </Button>
            Not Sure how to get started or are you new to coding, don't worry
            what you are about to do isn't coding, but we suggest you watch this
            2min video for better understanding.{" "}
          </p>
        </div>

        <div className="mb-8">{user && <EditPortfolio user={user} />}</div>
      </SignedIn>
    </section>
  );
}

export default EditPortfolioPage;
