import { SignIn, SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container flex justify-center items-center min-h-screen">
      <SignIn afterSignInUrl="/my-portfolio" />
    </div>
  );
}
