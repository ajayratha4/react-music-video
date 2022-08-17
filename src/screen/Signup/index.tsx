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
import { UserType } from "types";
import { setUser } from "utils/localStorage";

const Signup = () => {
  const navigate = useNavigate();

  const { loading, refetch } = useAxios<UserType>(Apis.CreateUser, {
    skip: true,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
  });

  const handleOnChange =
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((previousFormData) => {
        return { ...previousFormData, [key]: event.target.value };
      });
    };

  const handleSubmit = () => {
    const { firstName, lastName, email, password, userName } = formData;

    refetch({
      body: { name: `${firstName} ${lastName}`, email, password, userName },
      onCompleted: (res: UserType) => {
        setUser(res.id);
        navigate("/");
      },
    });
  };

  if (loading) {
    return <h1>loading</h1>;
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
        Sign up
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
              autoFocus
              value={formData.firstName}
              onChange={handleOnChange("firstName")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              value={formData.lastName}
              onChange={handleOnChange("lastName")}
              label="Last Name"
            />
          </Grid>
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
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          disabled={loading}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Signup;
