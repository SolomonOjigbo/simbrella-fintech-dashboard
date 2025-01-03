import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Box, CssBaseline, Toolbar, useMediaQuery } from "@mui/material";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");

    return (
      <section>
        <CssBaseline />
          <Box sx={{ display: "flex", height: "100vh" }}>
            {/* Navbar */}
            <Navbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

            {/* Sidebar */}
            <Sidebar
              isOpen={isSidebarOpen && !isMobile}
              isMobile={isMobile}
              onClose={() => setSidebarOpen((prev) => !prev)}
            />

            {/* Main Content Area */}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 3,
                px:1,
                ml: isMobile ? "60px" : isSidebarOpen ? "240px" : "60px", // Adjust sidebar width
                transition: "margin-left 0.3s ease",
              }}
            >
              <Toolbar /> {/* Ensures Navbar spacing */}
              {children}
            </Box>
          </Box>
      </section>
    );
  }
  