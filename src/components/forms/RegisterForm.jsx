import { Box } from "@mui/material";
import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ButtonUI from "../../ui/ButtonUI";
import Input from "../../ui/Input";

function RegisterForm() {
  const { register } = useAuth();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await register(userInput);

    if (res) {
      navigate("/tracker");
    }
  };

  return (
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
        onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
      />
      <Input
        label={"Password"}
        type={"password"}
        icon={<RiLockPasswordFill />}
        onChange={(e) =>
          setUserInput({ ...userInput, password: e.target.value })
        }
      />
      <Input
        label={"Confirm Password"}
        type={"password"}
        icon={<RiLockPasswordFill />}
        onChange={(e) =>
          setUserInput({ ...userInput, confirmPassword: e.target.value })
        }
      />
      <ButtonUI btnTitle={"register"} onClick={handleRegister} />
    </Box>
  );
}

export default RegisterForm;
