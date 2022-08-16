import React from "react";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar, SettingsSlice } from "redux/settings";

type Props = {
  title?: string;
};

const Header = ({ title }: Props) => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: SettingsSlice) => state.settings.sidebar
  );
  const handleSidebar = () => {
    dispatch(setSidebar(!isSidebarOpen));
  };
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
