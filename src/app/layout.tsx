import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import { Toast } from '@heroui/react';
import NavLinks from "./shared/NavLinks";
import Headlines from "./shared/Headlines";

const noto_sans_bengali = Noto_Sans_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "ibondev News",
  description: "A daily news web app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${noto_sans_bengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar>
          <NavLinks></NavLinks>
          <Headlines></Headlines>
        </Navbar>
        <Toast.Provider placement="top" className="mt-15"></Toast.Provider>
        {children}
      </body>
    </html>
  );
}
