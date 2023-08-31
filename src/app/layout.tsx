import Header from "@/components/layouts/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "@/components/layouts/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WD Photo Gallery App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        <div className=" flex">
          <div className=" w-1/5">
            <SideMenu />
          </div>
          <div className=" w-4/5 px-6 mt-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
