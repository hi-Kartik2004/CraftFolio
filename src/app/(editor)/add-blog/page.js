import Editor from "@/app/components/Editor";
import Navbar from "@/app/components/Navbar";
import { Skeleton } from "@/app/components/ui/skeleton";
import { Toaster } from "@/app/components/ui/toaster";
import {
  ClerkLoading,
  SignIn,
  SignedIn,
  SignedOut,
  currentUser,
  useUser,
} from "@clerk/nextjs";

async function AddBlog() {
  const user = await currentUser();

  return (
    <div className="">
      <Toaster />
      <SignedIn>
        <Navbar showProfile={1} username={user.username} className="my-4" />
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
