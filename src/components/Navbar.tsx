/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { AppBar, Toolbar, IconButton, InputBase, Avatar, Typography } from "@mui/material";
import { AccountCircle, Menu, NotificationsOutlined, Search } from "@mui/icons-material";

const Navbar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => (
  <AppBar
    position="fixed"
    sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: "#fff",
    }}
  >
    <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
      {/* Left Section */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img src="../simbrella.jpeg" alt="Logo" style={{ height: 50 }} />
        <IconButton onClick={onToggleSidebar} style={{ color: "#333" }}>
          <Menu />
        </IconButton>
      </div>

      {/* Center Section */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
          <Search
            style={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#000",
            }}
          />
          <InputBase
            placeholder="Search..."
            sx={{
              pl: 5,
              pr: 2,
              py: 0.5,
              width: "100%",
              borderRadius: "4px",
              backgroundColor: "#F6F6F9",
              height: 40,
            }}
          />
        </div>
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <h4 style={{ color: "#212134", margin: 0 }}>Simbrella Fintech Dashboard</h4>
        <IconButton size="medium" sx={{ color: "#212134" }}>
          <NotificationsOutlined />
        </IconButton>
        <IconButton size="large" sx={{ color: "#212134" }}>
          <AccountCircle  sx={{width: 30, height:30}}/> 
        </IconButton>
        <Typography color="#666687">Solomon Ojigbo</Typography>
      </div>
    </Toolbar>
  </AppBar>
);

export default Navbar;
