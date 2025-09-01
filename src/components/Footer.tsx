
import { Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Bio", url: "/bio" },
  { label: "Media", url: "/speaking" },
  { label: "Books", url: "/books" },
  { label: "Articles", url: "/articles" },
  { label: "Films", url: "/films" },
  { label: "Contact", url: "/contact" },
];

const contactInfo = [
  { name: 'Email', icon: Mail, url: 'mailto:kimbrell.eai@gmail.com' }
];

export default function Footer() {
  return (
    <footer className="w-full bg-beige border-t-4 border-forest-900 text-forest-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 py-8">
        {/* Left: Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="font-serif font-bold text-xl tracking-tight">Andrew Kimbrell</span>
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} Andrew Kimbrell. All rights reserved.</span>
        </div>
        {/* Middle: Nav Links */}
        <nav className="flex flex-wrap gap-4 md:gap-6 items-center justify-center">
          {navLinks.map(link => (
            <NavLink
              to={link.url}
              end={link.url === "/"}
              className={({ isActive }) => 
                `relative text-base font-medium transition-all duration-300 hover:text-forest-800 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-forest-800 after:transition-all after:duration-300 ${
                  isActive ? 'text-forest-800 font-semibold after:w-full' : 'text-forest-900'
                }`
              }
              key={link.url}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        {/* Right: Contact */}
        <div className="flex flex-col gap-3 items-center md:items-end">
          <div className="flex gap-3 items-center text-sm">
            <Mail size={18} className="inline mr-1 text-forest-700" />
            <span>kimbrell.eai@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
