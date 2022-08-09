import React from "react";
import { ROUTES } from "./const";
import PublicRoute from "./PublicRoute";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {ROUTES?.map((routItem) => {
        return (
          <Box height="100%" width="100%" key={routItem.path}>
            <PublicRoute routItem={routItem} />
          </Box>
        );
      })}
    </BrowserRouter>
  );
};

export default AppRouter;
