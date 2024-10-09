import React, { useState } from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility"; 
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; 
import Lottie from "lottie-react";
import loginAnimation from '../Lottie-animation/loginAnimation.json'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Preloader from "../Components/Preloader";
import GoogleLogin from "../Components/GoogleLogin";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(""); 
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post("http://localhost:8080/customer/register", { name, email, password });
            console.log(response.data);
            toast.success("Registration successful");
            navigate('/login');
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword(""); // Reset confirm password
            setError("");
        } catch (err) {
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
                        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col bg-white dark:bg-[#1e1e1e] p-8 rounded-xl shadow-2xl">
                                <Typography variant="h5" align="center" gutterBottom className="dark:text-white">
                                    <h1 className='text-2xl md:text-3xl text-[#060606] font-semibold mb-1 mt-1 dark:text-white'>Book4U</h1>
                                    <h2 className='text-lg md:text-xl mb-1'>Signup</h2>
                                </Typography>
                                <input
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none dark:text-white dark:border-white"
                                />
                                <input
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none dark:text-white dark:border-white"
                                />
                                <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                                    <input
                                        placeholder="Password"
                                        value={password}
                                        type={showPassword ? "text" : "password"}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none dark:text-white dark:border-white"
                                    />
                                    <IconButton onClick={togglePasswordVisibility} sx={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                                        {showPassword ? <VisibilityIcon className="text-black dark:text-white" /> : <VisibilityOffIcon className="text-black dark:text-white" />}
                                    </IconButton>
                                </Box>
                                <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                                    <input
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        type={showPassword ? "text" : "password"}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none dark:text-white dark:border-white"
                                    />
                                </Box>
                                {error && <Typography color="error" align="center">{error}</Typography>}
                                <button type="submit" className="w-full text-white my-2 mt-5 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center dark:bg-white dark:text-black">
                                    Register
                                </button>
                                <GoogleLogin />
                                <div className='w-full flex items-center justify-center mt-3 mb-3'>
                                    <p className='text-sm text-[#060606] dark:text-white'>
                                        Already have an account?{' '} 
                                        <Link to="/login" style={{ textDecoration: 'underline', color: '#060606' }}>Login</Link>
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
