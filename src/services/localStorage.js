import { ACCESS_TOKEN } from "../config/env";

const accToken = ACCESS_TOKEN;

export const getAccessToken = () => localStorage.getItem(accToken);

export const setAccessToken = (token) => localStorage.setItem(accToken, token);

export const removeAccessToken = () => localStorage.removeItem(accToken);
