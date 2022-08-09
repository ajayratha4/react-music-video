import React from "react";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  title: string;
  isSidebarOpen: boolean;
  handleSidebar: () => void;
};

const Header = ({ title, isSidebarOpen, handleSidebar }: Props) => {
  return (
    <AppBar sx={{ height: 1 }} position="static">
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleSidebar} sx={{ p: 2 }} color="inherit">
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          {title}
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
