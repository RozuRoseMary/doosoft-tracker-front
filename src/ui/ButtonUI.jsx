import React from "react";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";

function ButtonUI({ type, btnTitle, onClick }) {
  return (
    <Button type={type} variant="contained" onClick={onClick} width="10rem">
      {btnTitle}
    </Button>
  );
}

export default ButtonUI;
