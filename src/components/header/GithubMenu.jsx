import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { Link } from "@mui/material";

function GithubMenu({ anchorEl, open, handleClose }) {
  const dataGithub = [
    {
      href: "https://github.com/RozuRoseMary",
      title: "Github Profile",
    },
    {
      href: "https://github.com/RozuRoseMary/doosoft-tracker-front",
      icon: <FaReact />,
      title: "Code Front-End",
    },
    {
      href: "https://github.com/RozuRoseMary/doosoft-tracker-back",
      icon: <FaNodeJs />,
      title: "Code Back-End",
    },
  ];

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {dataGithub.map((el, idx) => (
          <Link href={el.href} target="_blank" underline="none" key={idx}>
            <MenuItem>
              <Avatar>{el.icon}</Avatar> {el.title}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

export default GithubMenu;
