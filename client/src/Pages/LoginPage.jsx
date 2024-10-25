import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import VisibilityIcon from "@mui/icons-material/Visibility"; // Import VisibilityIcon
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; // Import VisibilityOffIcon
import { Box, Container, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import loginAnimation from "../Lottie-animation/loginAnimation.json";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useToast } from "../Context/ToastContext";
import Preloader from "../Components/Preloader";
import GoogleLogin from "../Components/GoogleLogin";
import { loginValidation } from "../validations/validation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [error, setError] = useState("");
  const { setUserLoggedIn } = useAuth();
  const { showToast } = useToast();
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginValidation.validate(
        { email, password },
        { abortEarly: false }
      );
      setErrors({});
      // console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/customer/login",
        {
          email,
          password,
        }
      );
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
    <>
      <Preloader />
      <Container maxWidth="xl">
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
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
              <form
                noValidate
                onSubmit={handleSubmit}
                className="w-full max-w-[400px] flex flex-col bg-white dark:bg-[#1e1e1e] p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  className="dark:text-white"
                >
                  <h1 className="text-2xl md:text-3xl text-[#060606] font-semibold mb-1 mt-1 dark:text-white">
                    Book4U
                  </h1>
                  <h2 className="text-lg md:text-xl mb-1">Login</h2>
                </Typography>
                <input
                  placeholder="Email"
                  fullWidth
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  color="primary"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none dark:text-white dark:border-white"
                />
                {errors.email && (
                  <div className="text-red-600">{errors.email}</div>
                )}
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    placeholder="Password"
                    label="Password"
                    type={showPassword ? "text" : "password"} // Set input type dynamically
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none dark:text-white dark:border-white"
                  />
                  <IconButton
                    onClick={togglePasswordVisibility}
                    sx={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    {showPassword ? (
                      <VisibilityIcon className="text-black dark:text-white" /> // Text color changes based on theme
                    ) : (
                      <VisibilityOffIcon className="text-black dark:text-white" />
                    )}
                  </IconButton>
                </Box>
                {errors.password && (
                  <div className="text-red-600">{errors.password}</div>
                )}
                {error && (
                  <Typography color="error" align="center">
                    {error}
                  </Typography>
                )}
                <button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    mt: 2,
                    "&:hover": { backgroundColor: "#0069d9" },
                  }}
                  className="w-full text-white my-2 mt-5 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center dark:bg-white dark:text-black"
                >
                  Login
                </button>
                {/* Google Login Button */}
                <GoogleLogin />
                <div className="w-full flex flex-col items-start justify-start mt-3 mb-3">
                  {/* Sign up link */}
                  <p className="text-sm text-[#060606] dark:text-white">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                  </p>
                  {/* Add spacing between the two sections */}
                  <div className="my-2"></div>{" "}
                  {/* This adds vertical spacing */}
                  {/* Forgot password link */}
                  <p className="text-sm text-[#060606] dark:text-white">
                    Forgot Password?{" "}
                    <Link to="/reset-password">Reset here</Link>{" "}
                    {/* Update link if necessary */}
                  </p>
                </div>
              </form>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
