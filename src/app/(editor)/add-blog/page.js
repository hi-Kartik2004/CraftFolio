import Editor from "@/app/components/Editor";
import Navbar from "@/app/components/Navbar";
import UserNotFound from "@/app/components/UserNotFound";
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
        {user && (
          <Navbar showProfile={1} username={user.username} className="my-4" />
        )}
        <Editor showProfile={1} />
      </SignedIn>

      <SignedOut>
        <ClerkLoading>
          <div className="flex justify-center items-center min-h-[80vh]">
            <Skeleton className="w-[280px] h-[280px] rounded-lg" />
          </div>
        </ClerkLoading>
        <UserNotFound />
      </SignedOut>
    </div>
  );
}

export default AddBlog;
