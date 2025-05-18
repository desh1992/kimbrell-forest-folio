
import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Animation: fade in on mount
  return (
    <div className="relative min-h-screen bg-beige bg-nature-texture overflow-x-clip">
      <NavBar />
      <main className="pt-20 md:pt-28 px-0 w-full"
        style={{
          minHeight: "70vh",
          animation: "fade-in-up 1s cubic-bezier(.29,.71,.43,.98) both"
        }}
      >
        {children}
      </main>
    </div>
  );
}
