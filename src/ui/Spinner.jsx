import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useMessage } from "../contexts/MessageContext";

function Spinner() {
  const { loading } = useMessage();

  return (
    <div>
      <Backdrop
        open={loading}
        sx={{
          color: "primary.main",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Spinner;
