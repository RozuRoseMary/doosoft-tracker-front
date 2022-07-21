import { Box, Link } from "@mui/material";
import React from "react";
import LoginForm from ".././components/forms/LoginForm";

function LoginPage() {
  return (
    <Box className="login" sx={{ display: "flex" }}>
      <Box className="login-image"></Box>
      <Box
        className="opacity-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingY: "20px",
          gap: "20px",
        }}
      >
        <LoginForm />

        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box sx={{ color: "gray" }}>Don't have an account?</Box>
          <Link href="/register" underline="hover">
            <Box>Register now</Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
