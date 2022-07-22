import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";
import { useMessage } from "./MessageContext";
import axios from "../config/axios";
import { getUserApi, loginApi } from "../api/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const { setError, setLoading } = useMessage();

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const res = await getUserApi();
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
      setLoading(true);

      const res = await axios.post("/auth/register", input);
      setAccessToken(res.data.token);

      const resUser = await axios.get("/user");
      setUser(resUser.data.user);
      navigate("/tracker");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (input) => {
    try {
      setLoading(true);

      const res = await loginApi(input);
      setAccessToken(res.data.token);

      const resUser = await axios.get("/user");
      setUser(resUser.data.user);
      navigate("/auth/tracker");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      removeAccessToken();

      setUser(null);

      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
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
