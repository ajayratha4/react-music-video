import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { useSelector } from "react-redux";
import { SettingsSlice } from "redux/settings";

type Props = {
  children: JSX.Element;
};

const ApplicationLayout = ({ children }: Props) => {
  const isSidebarOpen = useSelector(
    (state: SettingsSlice) => state.settings.sidebar
  );

  return (
    <Box height="100%">
      <Box height="60px">
        <Header />
      </Box>

      <Box
        style={{
          height: "calc(100% - 60px)",
          display: "flex",
        }}
      >
        {isSidebarOpen && (
          <Box
            width="15%"
            height="100%"
            sx={{ borderRight: 1, borderColor: "divider", overflow: "auto" }}
          >
            <Sidebar />
          </Box>
        )}
        <Box
          sx={{ overflow: "auto" }}
          width={isSidebarOpen ? "85%" : "100%"}
          p={1}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicationLayout;
