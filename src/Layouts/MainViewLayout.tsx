import React from "react";
import { Box, Paper } from "@mui/material";
import MusicPlayer from "common/MusicPlayer";
import { useSelector } from "react-redux";
import { SettingsSlice } from "redux/settings";
import { routesConfig } from "router";
import { useRoutes } from "react-router-dom";

const MainViewLayout = () => {
  const audioPlayer = useSelector(
    (state: SettingsSlice) => state.settings.audioPlayer
  );
  const routes = useRoutes(routesConfig);

  return (
    <Box
      style={{
        height: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box height={audioPlayer ? "calc(100% - 100px)" : "100%"}>{routes}</Box>
      {audioPlayer && (
        <Paper
          elevation={10}
          sx={{
            height: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MusicPlayer />
        </Paper>
      )}
    </Box>
  );
};

export default MainViewLayout;
