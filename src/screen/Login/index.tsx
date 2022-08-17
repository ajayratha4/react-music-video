import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useAxios from "apis/useAxios";
import { Apis } from "apis/const";
import { setUser } from "utils/localStorage";
import { UserType } from "types";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const { loading, refetch } = useAxios<UserType>(Apis.Login, { skip: true });

  const handleOnChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((previousFormData) => {
        return { ...previousFormData, [key]: event.target.value };
      });
    };

  const handleSubmit = () => {
    refetch({
      params: formData,
      onCompleted: (res) => {
        setUser(res.id);
        navigate("/");
      },
    });
  };

  if (loading) {
    <h1>loading</h1>;
  }

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
        Sign in
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              value={formData.userName}
              onChange={handleOnChange("userName")}
              label="User Name"
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
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="/forgot-password">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
