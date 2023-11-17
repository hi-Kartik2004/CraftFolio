import Editor from "@/app/components/Editor";
import { Skeleton } from "@/app/components/ui/skeleton";
import { Toaster } from "@/app/components/ui/toaster";
import {
  ClerkLoading,
  SignIn,
  SignedIn,
  SignedOut
} from "@clerk/nextjs";

async function AddBlog() {
  

  return (
    <div className="">
      <Toaster />
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
