import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "./shared/Logo"
import React from "react";

const Header = () => {
  return (
  <AppBar 
    sx={{bgcolor: "transparent", position: "static", boxShadow: "none"}}
  >
    <Toolbar sx={{ display: "flex" }}></Toolbar>
        <Logo />
  </AppBar>
  );
};

export default Header;
