import { Box } from "@mui/material";
import React, { useState } from "react";
import Input from "../../ui/Input";
import ButtonUI from "../../ui/ButtonUI";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function LoginForm() {
  const { login } = useAuth();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(userInput);

    if (res) {
      navigate("/tracker");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Input
          label={"Email"}
          icon={<MdEmail />}
          onChange={(e) =>
            setUserInput({ ...userInput, email: e.target.value })
          }
        />
        <Input
          label={"Password"}
          type={"password"}
          icon={<RiLockPasswordFill />}
          onChange={(e) =>
            setUserInput({ ...userInput, password: e.target.value })
          }
        />
        <ButtonUI type="submit" btnTitle={"login"} onClick={handleLogin} />
      </Box>
    </form>
  );
}

export default LoginForm;
