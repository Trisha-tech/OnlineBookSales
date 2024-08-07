"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility"; // Import VisibilityIcon
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; // Import VisibilityOffIcon
import Lottie from "lottie-react";
import loginAnimation from '../Lottie-animation/loginAnimation.json'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import Preloader from "../Components/Preloader";


const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    const [error, setError] = useState(""); //state to store error message
    let navigate = useNavigate();
    // handle Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/customer/register", { name, email, password})

            console.log(response.data);
            toast.success("register sucess");
            navigate('/login')
            // reset form and err msg on success
            setName("");
            setEmail("");
            setPassword("");
            //setPhone("");
            //setAddress("");
            setError("");
        } catch (err) {
            // Check if err.response exists, otherwise set a default error message
            const errorMessage = err.response ? err.response.data.message : "An error occurred. Please try again later.";
            setError(errorMessage);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (

        <><Preloader/>
        <Container maxWidth="xl">
            <Toaster/>
            <div style={{ marginTop: "100px", marginBottom: "180px" }}>

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
                            <Typography variant="h5" align="center" gutterBottom className="dark:text-white">
                                Register
                            </Typography>
                            <input
                                placeholder="Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                margin="normal"
                                className="w-full mb-4 p-3 bg-transparent border border-black rounded-md dark:text-white"
                            />
                            <input 
                                placeholder="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                className="w-full mb-4 p-3 bg-transparent border border-black rounded-md dark:text-white"
                            />
                            <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                                <input 
                                    placeholder="Password"
                                    variant="outlined"
                                    value={password}
                                    type={showPassword ? "text" : "password"} // Set input type dynamically
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 bg-transparent border border-black rounded-md dark:text-white"
                                    margin="normal"
                                />
                                <IconButton
                                    onClick={togglePasswordVisibility}
                                    sx={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                                    >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </Box>
                            {/* <TextField
                                label="Phone"
                                fullWidth
                                variant="outlined"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Address"
                                fullWidth
                                variant="outlined"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                margin="normal"
                            /> */}
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
                                Register
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </Container>
        </>
    );
};

export default SignUpPage;