import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Search } from "@mui/icons-material";

const Navbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      className="bg-white shadow-md"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#fff" }}
      
    >
      <Toolbar className="flex justify-between items-center px-4 sm:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            src="../simbrella.jpeg"
            alt="Logo"
            className="h-12 object-contain"
          />
          <IconButton
            onClick={onToggleSidebar}
            className="text-gray-800 sm:hidden"
          >
            <MenuIcon />
          </IconButton>
        </div>

         {/* Center Section */}
         <div className="hidden md:flex items-center justify-center">
  <div className="relative flex">
    <Search color="secondary" className="absolute left-3 top-1/2 -translate-y-1/2 " /> {/* Centering vertically */}
    <input
      placeholder="Search..."
      className="ml-3 px-6 h-11 py-1 w-full rounded-sm bg-slate-50"
    />
  </div>
</div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* User Avatar */}
          <IconButton onClick={handleMenuOpen}>
            <Avatar className="bg-gray-400">S</Avatar>
          </IconButton>

          {/* User Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            className="sm:hidden"
          >
            <MenuItem onClick={handleMenuClose}>
              <Typography>Solomon Ojigbo</Typography>
            </MenuItem>
          </Menu>

          {/* User Name (Visible on larger screens) */}
          <Typography
            className="hidden sm:block text-gray-600"
            variant="subtitle1"
          >
            Solomon Ojigbo
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
