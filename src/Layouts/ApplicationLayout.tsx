import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import Sidebar from "components/Sidebar";

type Props = {
  title: string;
  children: JSX.Element;
};

const ApplicationLayout = ({ title, children }: Props) => {
  const [isSidebarOpen, isSetsidebarOpen] = useState(false);
  const handleSidebar = () => {
    isSetsidebarOpen((previousValue) => !previousValue);
  };
  return (
    <Box height="100%">
      <Box height="60px">
        <Header
          title={title}
          handleSidebar={handleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </Box>

      <Box display="flex" height="calc(100% - 60px)">
        {isSidebarOpen && (
          <Box
            width="15%"
            height="100%"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Sidebar />
          </Box>
        )}
        <Box width={isSidebarOpen ? "85%" : "100%"} p={1}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicationLayout;
