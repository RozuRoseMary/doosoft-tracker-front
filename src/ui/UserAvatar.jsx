import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

function UserAvatar({ alt, src }) {
  return (
    <Box>
      <Avatar alt={alt} src={src} sx={{ bgcolor: "#fff", color: "#425da6" }} />
    </Box>
  );
}

export default UserAvatar;
