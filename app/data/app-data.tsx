import { LayoutDashboard, CodeXml } from "lucide-react";

export const app = {
  name: "Selluxe System",
};

export const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Repository",
    href: "/repository",
    icon: <CodeXml />,
  },
];
