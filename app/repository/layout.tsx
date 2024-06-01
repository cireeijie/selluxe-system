import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SideNav from "@/components/side-nav";
import { app, menuItems } from "../data/app-data";
import ListAndSearch from "@/components/ui/list-and-search";
import { Button } from "@/components/ui/button";
import CreateFileForm from "@/components/ui/create-new-file";

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
    <div className="h-full flex flex-col gap-8">
      <div className="">
        <h2 className="text-2xl text-bold">Repository</h2>
        <p>
          Explore and manage your collection of saved code snippets and projects
        </p>
      </div>
      <div className="flex gap-4 flex-1">
        <div className="flex-[0.2] border-r-[1px] h-full pr-6">
          <CreateFileForm />
          <ListAndSearch />
        </div>
        <div className="flex-[0.8] h-full">{children}</div>
      </div>
    </div>
  );
}
