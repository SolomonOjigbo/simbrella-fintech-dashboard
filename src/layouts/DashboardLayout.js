import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { CssBaseline, Toolbar, useMediaQuery } from "@mui/material";
export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const isMobile = useMediaQuery("(max-width:768px)");
    return (_jsxs("section", { children: [_jsx(CssBaseline, {}), _jsxs("div", { className: "flex h-screen w-full", children: [_jsx(Navbar, { onToggleSidebar: () => setSidebarOpen((prev) => !prev) }), _jsx(Sidebar, { isOpen: isSidebarOpen, isMobile: isMobile, onClose: () => setSidebarOpen(false), 
                        // @ts-ignore
                        className: `transition-all duration-300 ${isSidebarOpen ? "w-60" : "w-16"}` }), _jsxs("main", { className: `flex-1 flex-col w-full py-4 px-2 transition-all duration-300 ${isMobile ? "ml-0" : isSidebarOpen ? "ml-60" : "ml-16"}`, children: [_jsx(Toolbar, {}), " ", children] })] })] }));
}
