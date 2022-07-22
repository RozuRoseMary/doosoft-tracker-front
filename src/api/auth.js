import axios from "../config/axios";

export const getUserApi = async () => await axios.get("/user");

export const registerApi = async (input) =>
  await axios.post("/auth/login", input);

export const loginApi = async (input) => await axios.post("/auth/login", input);
