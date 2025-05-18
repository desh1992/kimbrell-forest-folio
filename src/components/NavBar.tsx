import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import React from "react";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Bio", url: "/bio" },
  { label: "Speaking", url: "/speaking" },
  { label: "Books", url: "/books" },
  { label: "Articles", url: "/articles" },
  { label: "Contact", url: "/contact" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-3 md:px-8 py-5 absolute z-20 top-0 left-0">
      <div className="font-serif font-bold text-2xl tracking-tight text-forest-900 drop-shadow">
        Andrew Kimbrell
      </div>
      <div className="flex gap-2 md:gap-4">
        {navLinks.map(link => (
          <NavLink
            to={link.url}
            key={link.url}
            end={link.url === "/"}
            className={cn(
              "nav-link hover:text-forest-800",
              location.pathname === link.url ? "active font-semibold" : ""
            )}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
