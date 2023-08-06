import { getServerSession } from "next-auth";
import UserBadge from "./UserBadge";
import Link from "next/link";
import { FaHome, FaUserAlt, FaDraftingCompass } from "react-icons/fa";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <FaHome />,
  },
  {
    name: "Drafts",
    href: "/drafts",
    icon: <FaUserAlt />,
  },
  {
    name: "My Profile",
    href: "/profile",
    icon: <FaDraftingCompass />,
  },
];

export default async function Navigation() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("No session found. This should never happen.");
  }

  return (
    <nav className="w-64 h-full flex flex-col border-r border-slate-100 p-4">
      <div className="mt-10 flex flex-col gap-y-4">
        {navItems.map((item) => {
          return (
            <Link
              key={item.name}
              className="text-slate-800 text-base font- hover:text-slate-700 hover:bg-slate-100 rounded-xl w-full p-2 flex flex-row gap-x-4"
              href={item.href}
            >
              <div className="my-auto text-lg">{item.icon}</div>
              <h2>{item.name}</h2>
            </Link>
          );
        })}
      </div>
      <div className="mt-auto">
        <UserBadge />
      </div>
    </nav>
  );
}
