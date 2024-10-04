import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Container, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import loginAnimation from "../Lottie-animation/loginAnimation.json"; // Ensure the animation is correct for this page
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8080/customer/resetpassword", {
        email,
        newPassword: password,  // Send new password
      });
      toast.success("Password reset successfully!");
      navigate("/login", { replace: true });
    } catch (err) {
      setError(err.response.data.error);  // Fix the error field
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Toaster />
      <Container maxWidth="xl">
        <div style={{ marginTop: "100px", marginBottom: "180px" }}>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Lottie animationData={loginAnimation} style={{ height: "500px" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ maxWidth: "500px" }}> {/* Set maxWidth to 600px */}
              <form onSubmit={handleSubmit}>
                <Typography variant="h5" align="center" gutterBottom className="dark:text-white">
                  Reset Password
                </Typography>
                <TextField
                  variant="outlined"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  fullWidth // Use fullWidth for consistent sizing
                />
                <Box sx={{ position: "relative", display: "flex", alignItems: "center", width: '100%' }}>
                  <TextField
                    variant="outlined"
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    fullWidth // Use fullWidth for consistent sizing
                  />
                  <IconButton
                    onClick={togglePasswordVisibility}
                    sx={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: '100%', // Make button height equal to input height
                      width: '40px',  // Adjust width as needed
                      padding: '0',   // Remove default padding
                      borderRadius: '0', // Remove border radius
                    }}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </Box>
                {error && (
                  <Typography color="error" align="center">
                    {error}
                  </Typography>
                )}
                <Button variant="contained" type="submit" fullWidth sx={{ mt: 1 }}>
                  Reset Password
                </Button>
                <Typography align="left" sx={{ mt: 2, mr: 2 }}>
                  <Link to="/login">Go to Login</Link>
                </Typography>
              </form>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
