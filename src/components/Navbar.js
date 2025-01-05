import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, Typography, } from "@mui/material";
import { Menu as MenuIcon, Search } from "@mui/icons-material";
const Navbar = ({ onToggleSidebar }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (_jsx(AppBar, { position: "fixed", className: "bg-white shadow-md", sx: { zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#fff" }, children: _jsxs(Toolbar, { className: "flex justify-between items-center px-4 sm:px-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("img", { src: "../simbrella.jpeg", alt: "Logo", className: "h-12 object-contain" }), _jsx(IconButton, { onClick: onToggleSidebar, className: "text-gray-800 sm:hidden", children: _jsx(MenuIcon, {}) })] }), _jsx("div", { className: "hidden md:flex items-center justify-center", children: _jsxs("div", { className: "relative flex", children: [_jsx(Search, { color: "secondary", className: "absolute left-3 top-1/2 -translate-y-1/2 " }), " ", _jsx("input", { placeholder: "Search...", className: "ml-3 px-6 h-11 py-1 w-full rounded-sm bg-slate-50" })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(IconButton, { onClick: handleMenuOpen, children: _jsx(Avatar, { className: "bg-gray-400", children: "S" }) }), _jsx(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleMenuClose, className: "sm:hidden", children: _jsx(MenuItem, { onClick: handleMenuClose, children: _jsx(Typography, { children: "Solomon Ojigbo" }) }) }), _jsx(Typography, { className: "hidden sm:block text-gray-600", variant: "subtitle1", children: "Solomon Ojigbo" })] })] }) }));
};
export default Navbar;
