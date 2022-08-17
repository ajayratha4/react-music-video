import { Grid, Paper } from "@mui/material";
import Copyright from "common/Copyright";
import React from "react";
import { Outlet } from "react-router-dom";

const LoginContainer = () => {
  return (
    <Grid container component="main" sx={{ height: 1 }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "grey.50",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Outlet />
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default LoginContainer;
