import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton, Link } from "@mui/material";
import { BsGithub } from "react-icons/bs";
import GithubMenu from "./GithubMenu";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link href={"/auth/tracker"} underline="none">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            TRACKER
          </IconButton>
        </Link>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* News */}
        </Typography>
        <Button
          color="inherit"
          startIcon={<BsGithub />}
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          github
        </Button>

        <GithubMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
