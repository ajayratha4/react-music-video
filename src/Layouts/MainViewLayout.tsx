import { Box } from "@mui/material";
import MusicPlayer from "common/MusicPlayer";
import React from "react";
import AppRouter from "router";

const MainViewLayout = () => {
  return (
    <Box height="100vh" width="100%" overflow="hidden">
      <Box height="90%">
        <AppRouter />
      </Box>
      <Box height="10%" width="100%" display="flex" alignItems="center">
        <MusicPlayer />
      </Box>
    </Box>
  );
};

export default MainViewLayout;
