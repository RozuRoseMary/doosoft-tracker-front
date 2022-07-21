import { Box, Link } from "@mui/material";
import React from "react";
import RegisterForm from "../components/forms/RegisterForm";

function RegisterPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        minHeight: "100vh",
      }}
    >
      <RegisterForm />

      <Box sx={{ display: "flex", gap: "10px" }}>
        <Box sx={{ color: "gray" }}>Already have an account?</Box>
        <Link href="/login" underline="hover">
          <Box>Login now</Box>
        </Link>
      </Box>
    </Box>
  );
}

export default RegisterPage;
