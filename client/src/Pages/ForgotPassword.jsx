// ForgotPasswordPage.jsx
import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/password/forgot",
        { email }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="xl">
      <div style={{ marginTop: "100px", marginBottom: "180px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
        {message && (
          <Typography color="primary" align="center">
            {message}
          </Typography>
        )}
      </div>
    </Container>
  );
};

export default ForgotPasswordPage;
