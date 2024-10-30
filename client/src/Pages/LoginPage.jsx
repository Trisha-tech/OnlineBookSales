import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, Container, Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import loginAnimation from "../Lottie-animation/loginAnimation.json";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Preloader from "../Components/Preloader";
import { loginValidation } from "../validations/validation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { setUserLoggedIn } = useAuth();
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
        { email, password }
      );
      toast.success("Login successful");
      setEmail("");
      setPassword("");
      setError("");
      const { token } = response.data;
      localStorage.setItem("token", token);
      setUserLoggedIn(true);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

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
                className="login-form"
              >
                <Typography variant="h5" align="center" gutterBottom>
                  <h1 className="title">Book4U</h1>
                  <h2 className="subtitle">Login</h2>
                </Typography>
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
                {errors.email && <div className="error-text">{errors.email}</div>}
                <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                  />
                  <IconButton onClick={togglePasswordVisibility} className="visibility-icon">
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </Box>
                {errors.password && <div className="error-text">{errors.password}</div>}
                {error && <Typography color="error" align="center">{error}</Typography>}
                <button type="submit" className="submit-button">
                  Login
                </button>
                <div className="links-container">
                  <p className="link-text">
                    Don't have an account? <Link to="/signup" className="link">Sign up</Link>
                  </p>
                </div>
              </form>
            </Grid>
          </Grid>
        </div>
      </Container>
      <style jsx="true">{`
        .login-form {
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          transform: scale(1);
        }
        .login-form:hover {
          transform: scale(1.05);
        }
        .title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #060606;
        }
        .subtitle {
          font-size: 1.2rem;
          color: #333;
          margin-top: 5px;
        }
        .input-field {
          width: 100%;
          padding: 12px;
          margin: 15px 0;
          background: #f9f9f9;
          border: 1px solid #ccc;
          border-radius: 8px;
          outline: none;
          transition: border 0.2s ease;
        }
        .input-field:focus {
          border: 1px solid #333;
        }
        .visibility-icon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
        .error-text {
          color: #f44336;
          font-size: 0.9rem;
          margin-top: -10px;
        }
        .submit-button {
          width: 100%;
          padding: 12px;
          margin-top: 20px;
          background: #333;
          color: #fff;
          font-weight: bold;
          font-size: 1rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .submit-button:hover {
          background: #444;
        }
        .links-container {
          margin-top: 20px;
          text-align: left;
        }
        .link-text {
          font-size: 0.9rem;
          color: #606060;
        }
        .link {
          color: #333;
          text-decoration: underline;
        }
        .link:hover {
          color: #000;
        }
      `}</style>
    </>
  );
};

export default LoginPage;
