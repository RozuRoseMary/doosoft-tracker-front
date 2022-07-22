import { Avatar, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Input({
  type,
  icon,
  error,
  label,
  variant,
  name,
  value,
  onChange,
  color,
  placeholder,
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      {icon && (
        <Avatar sx={{ marginRight: "10px", bgcolor: "#a2b9f5" }}>{icon}</Avatar>
      )}
      <TextField
        type={type}
        error={error && true}
        helperText={error}
        id="input-with-sx"
        label={label}
        variant={variant || "standard"}
        name={name}
        value={value}
        onChange={onChange}
        color={color}
        placeholder={placeholder}
      />
    </Box>
  );
}

export default Input;
