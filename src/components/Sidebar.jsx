import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import UserAvatar from "../ui/UserAvatar";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { IoToday, IoLogOut } from "react-icons/io5";

import { FaHistory } from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const sidebarData = [
    { title: "Tracker", to: "/auth/tracker", icon: <IoToday /> },
    {
      title: "Logout",
      to: "",
      icon: <IoLogOut />,
      onClick: () => {
        handleLogout();
      },
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "12rem",
        minHeight: "100vh",
        maxHeight: "100%",
        bgcolor: "#425da6",
        color: "#fff",
        top: "70px",
        display: { xs: "none", sm: "block", md: "block" },
        position: "fixed",
        flexGrow: 1,
      }}
    >
      <List>
        <ListItemButton onClick={() => navigate("/auth/profile/" + user.id)}>
          <ListItemIcon>
            <UserAvatar />
          </ListItemIcon>
          <ListItemText primary={"Profile"} />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        {sidebarData.map((el, idx) => (
          <ListItem key={idx} disablePadding>
            <Link href={el.to} sx={{ color: "white" }} underline="none">
              <ListItemButton onClick={el.onClick}>
                <ListItemIcon
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  {el.icon}
                </ListItemIcon>
                <ListItemText primary={el.title} sx={{}} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
