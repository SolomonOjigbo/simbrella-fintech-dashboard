import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Toolbar,
} from "@mui/material";
import {
  People,
  MonetizationOn,
  AccountBalance,

} from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import Link for navigation


const Sidebar = ({
  isOpen,
  isMobile,
  onClose,
}: {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
}) => {
  const collapsedWidth = "60px";
  const expandedWidth = "240px";

  const menuItems = [
    
    { title: "User Overview", icon: <People />, link: "/" },
    { title: "Loan Management", icon: <AccountBalance />, link: "/loan-management" },
    { title: "Transaction History", icon: <MonetizationOn />, link: "/transaction-history" },
  ];

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={isOpen || !isMobile}
      onClose={onClose || isMobile}
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? expandedWidth : collapsedWidth,
          transition: "width 0.3s ease",
        },
      }}
    >
      {/* Sidebar Header */}
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "start" : "center",
          height: "64px",
          marginLeft: isOpen ? -2 : 0,
        }}
      />

      {/* Sidebar Menu Items */}
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={item.link} 
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isOpen ? "flex-start" : "center",
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            {isOpen && (
              <ListItemText
                primary={item.title}
                sx={{ textTransform: "capitalize" }}
              />
            )}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
