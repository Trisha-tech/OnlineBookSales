
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import VisibilityIcon from "@mui/icons-material/Visibility"; // Import VisibilityIcon
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; // Import VisibilityOffIcon
import { Box, Container, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import loginAnimation from "../Lottie-animation/loginAnimation.json";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useToast } from "../Context/ToastContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [error, setError] = useState("");
  const { setUserLoggedIn } = useAuth();
  const { showToast } = useToast();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/customer/login", {
        email,
        password,
      });
      console.log(response.data);
      toast.success("login success");
      setEmail("");
      setPassword("");
      setError("");
      const { token } = response.data;
      localStorage.setItem("token", token);
      setUserLoggedIn(true);
      showToast("success", "", "Logged in successfully");
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xl">
      <div style={{ marginTop: "100px", marginBottom: "180px" }}>
        <Toaster />
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Lottie
                animationData={loginAnimation}
                style={{ height: "500px" }}
                className="fromLeft"
              />
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
            <form onSubmit={handleSubmit} className="fromRight">
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
              <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"} // Set input type dynamically
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                />
                <IconButton
                  onClick={togglePasswordVisibility}
                  sx={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </Box>
              {error && (
                <Typography color="error" align="center">
                  {error}
                </Typography>
              )}
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
