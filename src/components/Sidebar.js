import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { List, ListItemButton, ListItemIcon, ListItemText, Drawer, Toolbar, } from "@mui/material";
import { People, MonetizationOn, AccountBalance, } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import Link for navigation
const Sidebar = ({ isOpen, isMobile, onClose, }) => {
    const collapsedWidth = "60px";
    const expandedWidth = "240px";
    const menuItems = [
        { title: "User Overview", icon: _jsx(People, {}), link: "/" },
        { title: "Loan Management", icon: _jsx(AccountBalance, {}), link: "/loan-management" },
        { title: "Transaction History", icon: _jsx(MonetizationOn, {}), link: "/transaction-history" },
    ];
    return (_jsxs(Drawer, { variant: isMobile ? "temporary" : "persistent", open: isOpen || !isMobile, onClose: isMobile ? onClose : undefined, sx: {
            flexShrink: 0,
            "& .MuiDrawer-paper": {
                width: isOpen ? expandedWidth : collapsedWidth,
                transition: "width 0.3s ease",
            },
        }, children: [_jsx(Toolbar, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isOpen ? "start" : "center",
                    height: "64px",
                    marginLeft: isOpen ? -2 : 0,
                } }), _jsx(List, { children: menuItems.map((item, index) => (_jsxs(ListItemButton, { component: Link, to: item.link, sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: isOpen ? "flex-start" : "center",
                    }, children: [_jsx(ListItemIcon, { sx: { minWidth: 40 }, children: item.icon }), isOpen && (_jsx(ListItemText, { primary: item.title, sx: { textTransform: "capitalize" } }))] }, index))) })] }));
};
export default Sidebar;
