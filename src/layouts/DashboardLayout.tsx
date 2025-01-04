import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box, CssBaseline, Toolbar, useMediaQuery } from "@mui/material";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <section>
      <CssBaseline />
      <div className="flex h-screen">
        {/* Navbar */}
        <Navbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

        {/* Sidebar */}
        {!isMobile && (
          <Sidebar
            isOpen={isSidebarOpen}
            isMobile={isMobile}
            onClose={() => setSidebarOpen(false)}
            className={`transition-all duration-300 ${
              isSidebarOpen ? "w-60" : "w-16"
            }`}
          />
        )}

        {/* Main Content Area */}
        <main
          className={`flex-grow py-4 px-2 transition-all duration-300 ${
            isMobile ? "ml-0" : isSidebarOpen ? "ml-60" : "ml-16"
          }`}
        >
          <Toolbar /> {/* Ensures Navbar spacing */}
          {children}
        </main>
      </div>
    </section>
  );
}
