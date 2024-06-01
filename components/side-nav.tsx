"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MenuItemProps = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};
export default function SideNav({ menuItems }: { menuItems: MenuItemProps[] }) {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`${
            pathname === item.href ? "bg-slate-900 text-white" : ""
          } flex gap-2 p-3 rounded-md`}
        >
          {item.icon}
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
