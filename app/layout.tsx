import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/side-nav";
import { app, menuItems } from "./data/app-data";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: app.name,
  description: "FernExcel Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(montserrat.className, "flex gap-4 h-screen")}>
        <div className="flex-[0.2] p-4 border-r-[1px] h-full">
          <SideNav menuItems={menuItems} />
        </div>
        <div className="flex-[0.8] p-4 h-full">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
