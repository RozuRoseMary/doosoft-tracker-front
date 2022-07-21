import { Box } from "@mui/material";
import React from "react";
import ListContainer from "../components/ListContainer";

function ListPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "150px 0 100px 0",
      }}
    >
      <ListContainer />
    </Box>
  );
}

export default ListPage;
