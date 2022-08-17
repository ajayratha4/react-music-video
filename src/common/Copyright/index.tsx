import React from "react";
import { Link, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        mt: 5,
      }}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        react video
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
