import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "Bio", url: "/bio" },
  { label: "Speaking", url: "/speaking" },
  { label: "Books", url: "/books" },
  { label: "Articles", url: "/articles" },
  { label: "Films", url: "/films" },
  { label: "Contact", url: "/contact" },
];

export default function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShowMobile, setShouldShowMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Check if the navigation links fit in the viewport
  useEffect(() => {
    const checkNavOverflow = () => {
      if (navRef.current) {
        const navContainer = navRef.current.parentElement;
        if (navContainer) {
          const navWidth = navRef.current.scrollWidth;
          const containerWidth = navContainer.clientWidth - 100; // Account for logo space
          setShouldShowMobile(navWidth > containerWidth || window.innerWidth < 768);
        } else {
          // Default to mobile view if container can't be measured
          setShouldShowMobile(true);
        }
      } else {
        // Default to mobile view if ref not available
        setShouldShowMobile(true);
      }
    };

    checkNavOverflow();
    window.addEventListener('resize', checkNavOverflow);
    return () => window.removeEventListener('resize', checkNavOverflow);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-3 md:px-8 py-5 absolute z-20 top-0 left-0">
      <div className="font-serif font-bold text-2xl tracking-tight text-forest-900 drop-shadow">
        Andrew Kimbrell
      </div>
      
      {/* Desktop Navigation */}
      <div ref={navRef} className={cn("hidden md:flex gap-5 md:gap-6", shouldShowMobile ? "hidden" : "md:flex")}>
        {navLinks.map(link => (
          <NavLink
            to={link.url}
            key={link.url}
            end={link.url === "/"}
            className={({ isActive }) => cn(
              "nav-link relative px-1 py-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-forest-800 after:transition-all after:duration-300",
              isActive && link.url !== "/contact" ? "font-semibold text-forest-800 after:w-full" : "text-forest-900",
              isActive && link.url === "/contact" ? "font-semibold text-forest-800" : ""
            )}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        onClick={toggleMenu}
        className={cn(
          "relative z-30 focus:outline-none p-3 rounded border border-forest-900/20",
          shouldShowMobile ? "flex" : "hidden"
        )}
        aria-label="Toggle menu"
      >
        <div className={cn(
          "relative w-6 h-6 flex flex-col justify-center items-center",
          "text-forest-900"
        )}>
          {isOpen ? (
            // X icon when menu is open
            <>
              <span aria-hidden="true" className="absolute block h-1 w-6 bg-forest-900 transform transition duration-300 ease-in-out rotate-45"></span>
              <span aria-hidden="true" className="absolute block h-1 w-6 bg-forest-900 transform transition duration-300 ease-in-out -rotate-45"></span>
            </>
          ) : (
            // Hamburger icon when menu is closed
            <>
              <span aria-hidden="true" className="absolute block h-1 w-6 bg-forest-900 transform transition duration-300 ease-in-out" style={{ top: 'calc(50% - 6px)' }}></span>
              <span aria-hidden="true" className="absolute block h-1 w-6 bg-forest-900 transform transition duration-300 ease-in-out" style={{ top: 'calc(50% - 0px)' }}></span>
              <span aria-hidden="true" className="absolute block h-1 w-6 bg-forest-900 transform transition duration-300 ease-in-out" style={{ top: 'calc(50% + 6px)' }}></span>
            </>
          )}
        </div>
      </button>
      
      {/* Mobile Menu Overlay */}
      {isOpen && shouldShowMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20" 
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        ></div>
      )}
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed right-0 top-0 h-screen w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-30 pt-16",
          isOpen ? "translate-x-0" : "translate-x-full",
          shouldShowMobile ? "block" : "hidden"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button inside the menu */}
        <button 
          className="absolute top-4 right-4 p-3 rounded border border-forest-900/20 hover:bg-forest-100"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
          aria-label="Close menu"
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center text-forest-900">
            <span aria-hidden="true" className="absolute block h-1 w-6 bg-forest-900 transform transition duration-300 ease-in-out rotate-45"></span>
            <span aria-hidden="true" className="absolute block h-1 w-6 bg-forest-900 transform transition duration-300 ease-in-out -rotate-45"></span>
          </div>
        </button>
        
        <div className="flex flex-col space-y-4 p-5">
          {navLinks.map(link => (
            <NavLink
              to={link.url}
              key={`mobile-${link.url}`}
              end={link.url === "/"}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className={({ isActive }) => cn(
                "nav-link text-forest-900 py-3 px-4 relative block hover:after:w-3/4 after:absolute after:bottom-0 after:left-4 after:w-0 after:h-0.5 after:bg-forest-800 after:transition-all after:duration-300",
                isActive && link.url !== "/contact" ? "font-semibold text-forest-800 after:w-3/4" : "",
                isActive && link.url === "/contact" ? "font-semibold text-forest-800" : ""
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
