import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../providers/theme-provider";
import {Toaster} from "sonner"
import ReactQueryProvider from "@/providers/ReactQueryProvider";


const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DM Automation",
  description: "Automate your DMs and comments of your Instagram",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jakarta.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <ReactQueryProvider>{children}</ReactQueryProvider> 
            <Toaster/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}