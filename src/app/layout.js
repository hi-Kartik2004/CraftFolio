import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import data from "./data";
import Navbar from "./components/Navbar";
import { ClerkProvider, SignedIn, currentUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import AfterSignInMenu from "./components/AfterSignInMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${data.FirstName} ${data.LastName}`,
  description: "Created by Kartikeya Saini",
};

export default async function RootLayout({ children }) {
  const user = (await currentUser()) || "No user";
  const username = user.username || "No username";
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedIn>
              <AfterSignInMenu username={username} />
            </SignedIn>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
