import React from "react";
import { TextField, Button, Container, Typography, Box, Card } from "@mui/material";
import { useAppContext } from "../context/appContext";

const LoginPage = () => {
  const { handleLogin, error, email, password, setPassword, setEmail } = useAppContext();

  return (
    <Container maxWidth="xs">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card sx={{ 
          padding: 3, 
          width: "100%", 
          boxShadow: 3,
          background: "rgba(255, 255, 255, 0.8)", 
          backdropFilter: "blur(10px)", 
          borderRadius: "12px", 
          }}>
          <Typography variant="h5" align="center" gutterBottom>
            Welcome 
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error === "Email is required" || error === "Enter a valid email"}
            helperText={["Email is required", "Enter a valid email"].includes(error) ? error : ""}
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error === "Password is required"}
            helperText={error === "Password is required" ? error : ""}
            margin="normal"
          />
          {error === "Invalid credentials!" && (
            <Typography color="error" align="center" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
            Login
          </Button>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginPage;
