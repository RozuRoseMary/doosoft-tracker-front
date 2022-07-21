import React from "react";
import { Outlet } from "react-router-dom";
import Add from "../components/Add";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";

function TrackerPage() {
  return (
    <>
      <Sidebar />
      <Box>
        <Outlet />
      </Box>
      <Add />
    </>
  );
}

export default TrackerPage;
