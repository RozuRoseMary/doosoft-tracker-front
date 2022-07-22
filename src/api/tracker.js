import axios from "../config/axios";

export const getAllTrackerApi = async () => await axios.get("/tracker/getAll");

export const addTrackerApi = async (input) =>
  await axios.post("/tracker", input);

export const updateTrackerApi = async (id, input) =>
  await axios.patch("/tracker/" + id, input);

export const deleteIncomeApi = async (id) =>
  await axios.delete("tracker/deleteIncome/" + id);
export const deleteExpenseApi = async (id) =>
  await axios.delete("tracker/deleteExpense/" + id);
