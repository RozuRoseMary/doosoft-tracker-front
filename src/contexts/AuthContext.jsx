import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";
import { useMessage } from "./MessageContext";
import axios from "../config/axios";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const { setError } = useMessage();

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  //   TODO: getUser
  //   TODO: register
  //   TODO: login
  //   TODO: logout

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const res = await axios.get("/user");
          setUser(res.data.user);
        }
      } catch (err) {
        removeAccessToken();
        navigate("/login");
        setError(err.response.data.message);
      }
    };
    fetchUser();
  }, []);

  const register = async (input) => {
    try {
      const res = await axios.post("/auth/register", input);
      setAccessToken(res.data.token);

      const resUser = await axios.get("/user");
      setUser(resUser.data.user);
      navigate("/tracker");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const login = async (input) => {
    try {
      const res = await axios.post("/auth/login", input);
      setAccessToken(res.data.token);

      const resUser = await axios.get("/user");
      setUser(resUser.data.user);
      navigate("/tracker");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const logout = async () => {
    try {
      removeAccessToken();
      setUser(null);
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};
