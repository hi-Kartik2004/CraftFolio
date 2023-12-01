import { Button } from "@/app/components/ui/button";
import { Skeleton } from "@/app/components/ui/skeleton";
import { ClerkLoading, SignIn, SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container flex justify-center items-center min-h-[89vh] flex-col">
      <ClerkLoading>
        <div className="flex justify-center items-center min-h-[80vh]">
          <Skeleton className="w-[280px] h-[280px] rounded-lg" />
        </div>
      </ClerkLoading>

      <SignIn afterSignInUrl="/my-portfolio" />
    </div>
  );
}
