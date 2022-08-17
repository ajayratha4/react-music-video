import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Button,
  TextField,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const handleOnChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((previousFormData) => {
        return { ...previousFormData, [key]: event.target.value };
      });
    };
  const handleSubmit = () => {
    const { password, email } = formData;
    console.log(password, email);
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Forgot Password
      </Typography>
      <Box sx={{ width: 1, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              value={formData.email}
              onChange={handleOnChange("email")}
              label="Email Address"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Password"
              value={formData.password}
              onChange={handleOnChange("password")}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Reset
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/login">Already have an account? Sign in</Link>
          </Grid>
          <Grid item>
            <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
