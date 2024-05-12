"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Container, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import loginAnimation from '../../Lottie-animation/loginAnimation.json'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); //state to store error message

  let navigate = useNavigate();

  // handle Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/customer/login", { email, password })
      console.log(response.data);
      toast.success("login sucess")
      // reset form and err msg on sucess
      setEmail("");
      setPassword("");
      setError("");
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('Home', { replace: true });
    } catch (err) {
      setError(err.response.data.message);//set error message received from backend
    }

  }
  return (
    <Container maxWidth="xl">
      <div style={{ marginTop: "100px", marginBottom: "180px" }}>
<Toaster/>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Lottie animationData={loginAnimation} style={{ height: '500px' }} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >

            <form onSubmit={handleSubmit}>
              <Typography variant="h5" align="center" gutterBottom>
                Login
              </Typography>
              <TextField
                label="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
              />
              {error && <Typography color="error" align="center">{error}</Typography>}
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
                  "&:hover": { backgroundColor: "#0069d9" },
                }}
              >
                Login
              </Button>
              <Typography align="center" sx={{ mt: 2, mr: 2 }}>
                Don't have an account? <a href="/signup">Sign up</a>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default LoginPage;