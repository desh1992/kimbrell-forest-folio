
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-beige bg-nature-texture flex flex-col overflow-x-clip">
      <NavBar />
      <main
        className="pt-20 md:pt-28 px-0 w-full flex-1"
        style={{
          minHeight: "70vh",
          animation: "fade-in-up 1s cubic-bezier(.29,.71,.43,.98) both"
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
