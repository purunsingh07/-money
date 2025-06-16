import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "&money",
  description: "Make your expense track better with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-s.png"></link>
      </head>
      <body
        className={`${inter.className}`}
      >
        <ClerkProvider>

       
        <ConvexClientProvider>

       
        <Header/>
        <main className="min-h-screen">{children}</main>
       </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
