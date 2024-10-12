"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility"; // Import VisibilityIcon
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; // Import VisibilityOffIcon
import Lottie from "lottie-react";
import loginAnimation from '../Lottie-animation/loginAnimation.json';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Preloader from "../Components/Preloader";
import GoogleLogin from "../Components/GoogleLogin";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(""); // State to store error message
    let navigate = useNavigate();

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    // Handle Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset error message
        setError("");

        // Validate form inputs
        if (!name) {
            setError("Name is required.");
            return;
        }
        if (!isValidEmail(email)) {
            setError("Please enter a valid email address.");
            return; // Prevent form submission if the email is invalid
        }
        if (!password) {
            setError("Password is required.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return; // Prevent form submission if passwords don't match
        }

        try {
            const response = await axios.post("http://localhost:8080/customer/register", { name, email, password });
            console.log(response.data);
            toast.success("Registration successful");
            navigate('/login');
            // Reset form on success
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword(""); // Reset confirm password
            setError("");
        } catch (err) {
            // Check if err.response exists, otherwise set a default error message
            const errorMessage = err.response ? err.response.data.message : "An error occurred. Please try again later.";
            setError(errorMessage);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Preloader />
            <Container maxWidth="xl">
                <Toaster />
                <div style={{ marginTop: "50px", marginBottom: "50px" }}>
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
                            <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col bg-white dark:bg-[#1e1e1e] p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
                                <Typography variant="h5" align="center" gutterBottom className="dark:text-white">
                                    <h1 className='text-2xl md:text-3xl text-[#060606] font-semibold mb-1 mt-1 dark:text-white'>Book4U</h1>
                                    <h2 className='text-lg md:text-xl mb-1'>Signup</h2>
                                </Typography>
                                <TextField
                                    placeholder="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    margin="normal"
                                    className="w-full my-2 dark:text-white dark:border-white"
                                />
                                <TextField
                                    placeholder="Email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    margin="normal"
                                    className="w-full my-2 dark:text-white dark:border-white"
                                />
                                <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                                    <TextField
                                        placeholder="Password"
                                        variant="outlined"
                                        value={password}
                                        type={showPassword ? "text" : "password"} // Set input type dynamically
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full my-2 dark:text-white dark:border-white"
                                    />
                                    <IconButton
                                        onClick={togglePasswordVisibility}
                                        sx={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                                    >
                                        {showPassword ? (
                                            <VisibilityIcon className="text-black dark:text-white" />
                                        ) : (
                                            <VisibilityOffIcon className="text-black dark:text-white" />
                                        )}
                                    </IconButton>
                                </Box>
                                <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                                    <TextField
                                        placeholder="Confirm Password"
                                        variant="outlined"
                                        value={confirmPassword}
                                        type={showPassword ? "text" : "password"} // Set input type dynamically
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full my-2 dark:text-white dark:border-white"
                                    />
                                </Box>
                                {error && <Typography color="error" align="center">{error}</Typography>}
                                <Button
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                    sx={{
                                        mt: 2,
                                        "&:hover": { backgroundColor: "#0069d9" },
                                    }}
                                    className="w-full text-white my-2 mt-5 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center dark:bg-white dark:text-black"
                                >
                                    Register
                                </Button>
                                {/* Google Login Button */}
                                <GoogleLogin />
                                <div className='w-full flex items-center justify-center mt-3 mb-3'>
                                    <p className='text-sm text-[#060606] dark:text-white'>
                                        Already have an account?{' '} <Link to="/login">Login</Link>
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

export default SignUpPage;
