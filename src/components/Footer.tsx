
import { Mail, Phone, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Bio", url: "/bio" },
  { label: "Speaking", url: "/speaking" },
  { label: "Books", url: "/books" },
  { label: "Articles", url: "/articles" },
  { label: "Contact", url: "/contact" },
];

const socialLinks = [
  { name: 'Email', icon: Mail, url: 'mailto:info@kimbrell.org' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' }
];

export default function Footer() {
  return (
    <footer className="w-full bg-beige border-t border-forest-900/10 mt-10 text-forest-900">
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
              className="text-base font-medium text-forest-900 hover:text-forest-800 transition"
              key={link.url}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        {/* Right: Contact and Socials */}
        <div className="flex flex-col gap-3 items-center md:items-end">
          <div className="flex gap-3 items-center text-sm">
            <Phone size={18} className="inline mr-1 text-forest-700" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex gap-3 items-center text-sm">
            <Mail size={18} className="inline mr-1 text-forest-700" />
            <span>info@kimbrell.org</span>
          </div>
          <div className="flex gap-2 mt-2">
            {socialLinks.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="hover:bg-forest-900/10 rounded-full p-1 transition"
              >
                <s.icon size={22} className="text-forest-800" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
