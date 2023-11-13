import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import data from "./data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${data.FirstName} ${data.LastName} | Portfolio`,
  description: "Created by Kartikeya Saini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
